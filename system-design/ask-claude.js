/* Ask Claude — floating chat widget for the SD notes pages.
   Calls the Anthropic Messages API directly from the browser (streaming).
   API key is stored in localStorage under "askClaudeApiKey" and never leaves
   this machine except in requests to api.anthropic.com. */
(function () {
  "use strict";

  var API_URL = "https://api.anthropic.com/v1/messages";
  var MODEL = "claude-opus-4-8";
  var KEY_STORAGE = "askClaudeApiKey";
  var MAX_CONTEXT_CHARS = 60000;

  var history = []; // {role, content} turns for this page session
  var busy = false;

  /* ---------- page context ---------- */

  function pageContext() {
    var wrap = document.querySelector(".wrap") || document.body;
    var clone = wrap.cloneNode(true);
    var widget = clone.querySelector("#ac-root");
    if (widget) widget.remove();
    var text = clone.innerText.replace(/\n{3,}/g, "\n\n").trim();
    if (text.length > MAX_CONTEXT_CHARS) text = text.slice(0, MAX_CONTEXT_CHARS) + "\n[...truncated]";
    return text;
  }

  function systemPrompt() {
    return (
      "You are a study assistant embedded in a personal system-design notes site. " +
      "The user is studying for system design interviews. Answer questions clearly and concisely, " +
      "grounding answers in the notes on the current page when relevant, and expanding beyond them " +
      "when the notes don't cover something. Use plain text with markdown (headings sparingly, " +
      "code fences for code, **bold** for key terms).\n\n" +
      "Current page: \"" + document.title + "\"\n\nPage notes:\n<notes>\n" + pageContext() + "\n</notes>"
    );
  }

  /* ---------- minimal markdown rendering ---------- */

  function escapeHtml(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function renderMarkdown(md) {
    var out = [];
    var parts = md.split(/```/);
    for (var i = 0; i < parts.length; i++) {
      if (i % 2 === 1) {
        // code fence — first line may be a language tag
        var code = parts[i].replace(/^[a-zA-Z0-9+-]*\n/, "");
        out.push("<pre><code>" + escapeHtml(code) + "</code></pre>");
      } else {
        var html = escapeHtml(parts[i])
          .replace(/^### (.*)$/gm, "<strong class=\"ac-h\">$1</strong>")
          .replace(/^## (.*)$/gm, "<strong class=\"ac-h\">$1</strong>")
          .replace(/^# (.*)$/gm, "<strong class=\"ac-h\">$1</strong>")
          .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
          .replace(/`([^`]+)`/g, "<code>$1</code>")
          .replace(/^(\s*)[-*] (.*)$/gm, "$1• $2")
          .replace(/\n/g, "<br>");
        out.push(html);
      }
    }
    return out.join("");
  }

  /* ---------- API ---------- */

  function getKey() { return localStorage.getItem(KEY_STORAGE) || ""; }

  function streamMessage(messages, onDelta, onDone, onError) {
    fetch(API_URL, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": getKey(),
        "anthropic-version": "2023-06-01",
        "anthropic-dangerous-direct-browser-access": "true"
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 64000,
        stream: true,
        thinking: { type: "adaptive" },
        system: systemPrompt(),
        messages: messages
      })
    }).then(function (resp) {
      if (!resp.ok) {
        return resp.json().then(function (err) {
          var msg = (err && err.error && err.error.message) || ("HTTP " + resp.status);
          onError(resp.status, msg);
        }, function () { onError(resp.status, "HTTP " + resp.status); });
      }
      var reader = resp.body.getReader();
      var decoder = new TextDecoder();
      var buf = "";
      function pump() {
        return reader.read().then(function (r) {
          if (r.done) { onDone(); return; }
          buf += decoder.decode(r.value, { stream: true });
          var lines = buf.split("\n");
          buf = lines.pop();
          for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
            if (line.indexOf("data:") !== 0) continue;
            var payload = line.slice(5).trim();
            if (!payload) continue;
            var ev;
            try { ev = JSON.parse(payload); } catch (e) { continue; }
            if (ev.type === "content_block_delta" && ev.delta && ev.delta.type === "text_delta") {
              onDelta(ev.delta.text);
            } else if (ev.type === "error") {
              onError(0, (ev.error && ev.error.message) || "stream error");
              return;
            }
          }
          return pump();
        });
      }
      return pump();
    }).catch(function (e) {
      onError(0, e.message || String(e));
    });
  }

  /* ---------- UI ---------- */

  var css =
    "#ac-fab{position:fixed;right:20px;bottom:20px;z-index:100;font:inherit;font-size:14px;font-weight:600;" +
    "padding:10px 16px;border-radius:999px;border:1px solid var(--border,#2c3744);background:var(--accent,#5cc8ff);" +
    "color:var(--bg,#0f1419);cursor:pointer;box-shadow:0 6px 20px rgba(0,0,0,.35)}" +
    "#ac-fab:hover{filter:brightness(1.1)}" +
    "#ac-panel{position:fixed;right:20px;bottom:20px;z-index:101;width:min(440px,calc(100vw - 32px));" +
    "height:min(600px,calc(100vh - 80px));display:none;flex-direction:column;background:var(--panel,#1a212b);" +
    "border:1px solid var(--border,#2c3744);border-radius:12px;box-shadow:0 16px 48px rgba(0,0,0,.5);overflow:hidden}" +
    "#ac-panel.open{display:flex}" +
    "#ac-head{display:flex;align-items:center;gap:8px;padding:10px 14px;border-bottom:1px solid var(--border,#2c3744);background:var(--panel-2,#222b38)}" +
    "#ac-head b{flex:1;color:#fff;font-size:14px}" +
    ".ac-icon{background:none;border:none;color:var(--muted,#8a97a6);cursor:pointer;font-size:13px;padding:4px 6px;border-radius:5px}" +
    ".ac-icon:hover{color:var(--text,#d7dde5);background:var(--panel,#1a212b)}" +
    "#ac-msgs{flex:1;overflow-y:auto;padding:14px;font-size:14px;line-height:1.55}" +
    ".ac-msg{margin:0 0 12px;max-width:100%}" +
    ".ac-msg.user{background:var(--panel-2,#222b38);border:1px solid var(--border,#2c3744);border-radius:10px;padding:8px 12px;color:#fff;white-space:pre-wrap}" +
    ".ac-msg.assistant{color:var(--text,#d7dde5)}" +
    ".ac-msg.assistant pre{background:#0b0f14;border:1px solid var(--border,#2c3744);border-radius:8px;padding:10px;overflow-x:auto;font-size:12.5px}" +
    ".ac-msg.assistant code{font-family:'SF Mono',Consolas,Monaco,monospace;font-size:12.5px}" +
    ".ac-msg .ac-h{display:block;color:var(--accent,#5cc8ff);margin-top:6px}" +
    ".ac-msg.err{color:#ff8a8a;font-size:13px}" +
    ".ac-hint{color:var(--muted,#8a97a6);font-size:13px}" +
    "#ac-form{display:flex;gap:8px;padding:10px;border-top:1px solid var(--border,#2c3744)}" +
    "#ac-input{flex:1;resize:none;font:inherit;font-size:14px;color:var(--text,#d7dde5);background:var(--panel-2,#222b38);" +
    "border:1px solid var(--border,#2c3744);border-radius:8px;padding:8px 10px;max-height:120px}" +
    "#ac-input:focus{outline:none;border-color:var(--accent,#5cc8ff)}" +
    "#ac-send{font:inherit;font-size:14px;font-weight:600;padding:0 16px;border-radius:8px;border:none;" +
    "background:var(--accent,#5cc8ff);color:var(--bg,#0f1419);cursor:pointer}" +
    "#ac-send:disabled{opacity:.5;cursor:default}" +
    "#ac-keyform{padding:16px;display:none;flex-direction:column;gap:10px;font-size:13.5px;color:var(--text,#d7dde5)}" +
    "#ac-keyform.open{display:flex}" +
    "#ac-keyform input{font:inherit;font-size:13px;color:var(--text,#d7dde5);background:var(--panel-2,#222b38);" +
    "border:1px solid var(--border,#2c3744);border-radius:8px;padding:8px 10px}" +
    "#ac-keyform a{color:var(--accent,#5cc8ff)}" +
    ".ac-dots::after{content:'';animation:ac-dots 1.2s steps(4) infinite}" +
    "@keyframes ac-dots{0%{content:''}25%{content:'.'}50%{content:'..'}75%{content:'...'}}";

  function el(tag, attrs, html) {
    var e = document.createElement(tag);
    if (attrs) for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (html != null) e.innerHTML = html;
    return e;
  }

  function build() {
    var style = el("style");
    style.textContent = css;
    document.head.appendChild(style);

    var root = el("div", { id: "ac-root" });
    var fab = el("button", { id: "ac-fab", type: "button" }, "&#10022; Ask Claude");

    var panel = el("div", { id: "ac-panel" });
    var head = el("div", { id: "ac-head" });
    head.appendChild(el("b", null, "Ask Claude"));
    var btnClear = el("button", { "class": "ac-icon", type: "button", title: "Clear conversation" }, "clear");
    var btnKey = el("button", { "class": "ac-icon", type: "button", title: "Set API key" }, "key");
    var btnClose = el("button", { "class": "ac-icon", type: "button", title: "Close" }, "&#10005;");
    head.appendChild(btnClear); head.appendChild(btnKey); head.appendChild(btnClose);

    var msgs = el("div", { id: "ac-msgs" });

    var keyform = el("div", { id: "ac-keyform" },
      "<div>Enter your Anthropic API key (from <a href='https://platform.claude.com/' target='_blank' rel='noopener'>platform.claude.com</a>). " +
      "It's stored only in this browser's localStorage.</div>");
    var keyInput = el("input", { type: "password", placeholder: "sk-ant-..." });
    var keySave = el("button", { id: "ac-send", type: "button" }, "Save key");
    keyform.appendChild(keyInput); keyform.appendChild(keySave);

    var form = el("form", { id: "ac-form" });
    var input = el("textarea", { id: "ac-input", rows: "2", placeholder: "Ask about this page…" });
    var send = el("button", { id: "ac-send", type: "submit" }, "Send");
    form.appendChild(input); form.appendChild(send);

    panel.appendChild(head); panel.appendChild(msgs); panel.appendChild(keyform); panel.appendChild(form);
    root.appendChild(fab); root.appendChild(panel);
    document.body.appendChild(root);

    function showKeyForm(show) {
      keyform.classList.toggle("open", show);
      msgs.style.display = show ? "none" : "";
      form.style.display = show ? "none" : "";
      if (show) { keyInput.value = ""; keyInput.focus(); }
    }

    function greet() {
      if (!msgs.childNodes.length) {
        msgs.appendChild(el("div", { "class": "ac-msg ac-hint" },
          "Ask anything about the notes on this page — or system design in general."));
      }
    }

    fab.addEventListener("click", function () {
      panel.classList.add("open");
      fab.style.display = "none";
      if (!getKey()) showKeyForm(true);
      else { greet(); input.focus(); }
    });
    btnClose.addEventListener("click", function () {
      panel.classList.remove("open");
      fab.style.display = "";
    });
    btnClear.addEventListener("click", function () {
      history = [];
      msgs.innerHTML = "";
      greet();
    });
    btnKey.addEventListener("click", function () { showKeyForm(true); });
    keySave.addEventListener("click", function () {
      var v = keyInput.value.trim();
      if (!v) return;
      localStorage.setItem(KEY_STORAGE, v);
      showKeyForm(false);
      greet();
      input.focus();
    });
    keyInput.addEventListener("keydown", function (e) {
      if (e.key === "Enter") { e.preventDefault(); keySave.click(); }
    });

    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        form.dispatchEvent(new Event("submit", { cancelable: true }));
      }
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (busy) return;
      var q = input.value.trim();
      if (!q) return;
      if (!getKey()) { showKeyForm(true); return; }
      input.value = "";
      busy = true;
      send.disabled = true;

      msgs.appendChild(el("div", { "class": "ac-msg user" }, escapeHtml(q)));
      history.push({ role: "user", content: q });

      var bubble = el("div", { "class": "ac-msg assistant" }, "<span class='ac-hint ac-dots'>thinking</span>");
      msgs.appendChild(bubble);
      msgs.scrollTop = msgs.scrollHeight;

      var acc = "";
      var stick = true;
      msgs.addEventListener("scroll", function () {
        stick = msgs.scrollTop + msgs.clientHeight >= msgs.scrollHeight - 40;
      });

      streamMessage(history, function (delta) {
        acc += delta;
        bubble.innerHTML = renderMarkdown(acc);
        if (stick) msgs.scrollTop = msgs.scrollHeight;
      }, function () {
        if (acc) history.push({ role: "assistant", content: acc });
        else bubble.innerHTML = "<span class='ac-hint'>(no response)</span>";
        busy = false;
        send.disabled = false;
        input.focus();
      }, function (status, message) {
        history.pop(); // drop the failed user turn so retry is clean
        bubble.className = "ac-msg err";
        bubble.textContent = "Error: " + message;
        if (status === 401 || status === 403) {
          bubble.textContent += " — check your API key.";
          var fix = el("button", { "class": "ac-icon", type: "button" }, "update key");
          fix.addEventListener("click", function () { showKeyForm(true); });
          bubble.appendChild(document.createTextNode(" "));
          bubble.appendChild(fix);
        }
        busy = false;
        send.disabled = false;
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", build);
  } else {
    build();
  }
})();
