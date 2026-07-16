/*
 * Flashcard engine (Leitner boxes 1..5, localStorage persistence).
 *
 * Expects CARDS — an array of { id, deck, q, a } (flashcards.js) — to be
 * defined before this script loads, plus the flashcards page markup:
 * #fc-card, #fc-question, #fc-answer, etc.
 */
(function () {
  "use strict";

  const BOX_PREFIX = "fc:box:";
  const MAX_BOX = 5;

  // ---- persistence ----
  const getBox = (id) => {
    const v = parseInt(localStorage.getItem(BOX_PREFIX + id), 10);
    return Number.isFinite(v) && v >= 1 && v <= MAX_BOX ? v : 1;
  };
  const setBox = (id, box) =>
    localStorage.setItem(BOX_PREFIX + id, String(Math.min(MAX_BOX, Math.max(1, box))));

  // ---- state ----
  const DECKS = ["All", ...Array.from(new Set(CARDS.map((c) => c.deck)))];
  let activeDeck = "All";
  let order = [];      // indices into the active deck's card list
  let view = [];       // the filtered card list
  let pos = 0;
  let flipped = false;

  // ---- elements ----
  const el = (id) => document.getElementById(id);
  const cardEl = el("fc-card");
  const qEl = el("fc-question");
  const aEl = el("fc-answer");
  const counterEl = el("fc-counter");
  const boxFrontEl = el("fc-box-front");
  const kickerFrontEl = el("fc-kicker-front");
  const progressEl = el("fc-progress");
  const summaryEl = el("fc-summary");
  const decksEl = el("fc-decks");

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function buildDeckChips() {
    decksEl.innerHTML = "";
    DECKS.forEach((name) => {
      const n = name === "All" ? CARDS.length : CARDS.filter((c) => c.deck === name).length;
      const btn = document.createElement("button");
      btn.innerHTML = `${name} <span class="count">${n}</span>`;
      if (name === activeDeck) btn.classList.add("active");
      btn.addEventListener("click", () => selectDeck(name));
      decksEl.appendChild(btn);
    });
  }

  function selectDeck(name) {
    activeDeck = name;
    view = name === "All" ? CARDS.slice() : CARDS.filter((c) => c.deck === name);
    order = view.map((_, i) => i);
    // Surface least-mastered cards first, then shuffle within equal boxes.
    shuffle(order);
    order.sort((a, b) => getBox(view[a].id) - getBox(view[b].id));
    pos = 0;
    flipped = false;
    buildDeckChips();
    render();
  }

  function currentCard() {
    if (!view.length) return null;
    return view[order[pos]];
  }

  function render() {
    const card = currentCard();
    cardEl.classList.toggle("flipped", flipped);

    if (!card) {
      qEl.textContent = "No cards in this deck.";
      aEl.textContent = "";
      counterEl.textContent = "0 / 0";
      boxFrontEl.textContent = "";
      updateSummary();
      return;
    }

    kickerFrontEl.textContent = card.deck;
    qEl.innerHTML = card.q;
    aEl.innerHTML = card.a;
    const box = getBox(card.id);
    boxFrontEl.innerHTML = box >= MAX_BOX ? "🏆 <b>Mastered</b>" : `Box <b>${box}</b> / ${MAX_BOX}`;
    counterEl.textContent = `${pos + 1} / ${view.length}`;
    updateSummary();
  }

  function updateSummary() {
    const total = view.length;
    const mastered = view.filter((c) => getBox(c.id) >= MAX_BOX).length;
    const pct = total ? Math.round((mastered / total) * 100) : 0;
    progressEl.style.width = pct + "%";
    summaryEl.innerHTML = total
      ? `<b>${mastered}</b> / ${total} mastered in <b>${activeDeck}</b> &nbsp;·&nbsp; ${pct}%`
      : "No cards.";
  }

  function flip() {
    if (!currentCard()) return;
    flipped = !flipped;
    cardEl.classList.toggle("flipped", flipped);
  }

  function go(delta) {
    if (!view.length) return;
    pos = (pos + delta + view.length) % view.length;
    flipped = false;
    render();
  }

  // Rate the current card, then advance.
  function rate(correct) {
    const card = currentCard();
    if (!card) return;
    setBox(card.id, correct ? getBox(card.id) + 1 : 1);
    // small delay so the user sees the box update on the front face
    flipped = false;
    cardEl.classList.remove("flipped");
    if (view.length > 1) {
      go(1);
    } else {
      render();
    }
  }

  // ---- wiring ----
  cardEl.addEventListener("click", flip);
  el("fc-prev").addEventListener("click", () => go(-1));
  el("fc-next").addEventListener("click", () => go(1));
  el("fc-again").addEventListener("click", () => rate(false));
  el("fc-good").addEventListener("click", () => rate(true));
  el("fc-shuffle").addEventListener("click", () => { shuffle(order); pos = 0; flipped = false; render(); });
  el("fc-reset").addEventListener("click", () => {
    if (!confirm("Clear all flashcard progress? This resets every card to box 1.")) return;
    CARDS.forEach((c) => localStorage.removeItem(BOX_PREFIX + c.id));
    selectDeck(activeDeck);
  });

  document.addEventListener("keydown", (e) => {
    if (e.target.matches("input, textarea")) return;
    switch (e.key) {
      case " ": e.preventDefault(); flip(); break;
      case "ArrowRight": go(1); break;
      case "ArrowLeft": go(-1); break;
      case "1": rate(false); break;
      case "2": rate(true); break;
      case "s": case "S": shuffle(order); pos = 0; flipped = false; render(); break;
    }
  });

  // ---- init ----
  selectDeck("All");
})();
