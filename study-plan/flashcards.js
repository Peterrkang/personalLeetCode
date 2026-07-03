/*
 * Flashcards for Block 4 review (flashcards.html).
 *
 * Self-contained, dependency-free. Cards live in CARDS below; progress is a
 * per-card Leitner box (1..5) persisted to localStorage under "fc:box:<id>".
 *
 *   id     stable unique slug — the localStorage key, so don't rename casually
 *   deck   category, used for the filter chips
 *   q      front (question) — may contain inline HTML (e.g. <code>)
 *   a      back (answer)    — may contain inline HTML
 *
 * Mirrors the facts in patterns.html, templates.html and
 * cheatsheet.html — keep them in sync if you edit one.
 */
const CARDS = [
  // ---- Complexity ----
  { id: "cx-hashmap", deck: "Complexity", q: "Average time to look up / insert / delete in a hash map?", a: "<b>O(1)</b> average, O(n) worst case (pathological collisions). The bread-and-butter trade: spend O(n) space to turn an O(n) scan into O(1) lookups." },
  { id: "cx-binary-search", deck: "Complexity", q: "Time complexity of binary search, and the precondition?", a: "<b>O(log n)</b>. Precondition: the array must be <b>sorted</b> (or the search space monotonic)." },
  { id: "cx-sort", deck: "Complexity", q: "Time complexity of a comparison sort like <code>Array.prototype.sort</code>?", a: "<b>O(n log n)</b>. Lower bound for comparison sorts. Remember JS sort is lexicographic by default — pass a comparator." },
  { id: "cx-heap-ops", deck: "Complexity", q: "Push and pop on a binary heap — what complexity? And peek?", a: "push / pop: <b>O(log n)</b> (sift up/down). peek (min or max): <b>O(1)</b>." },
  { id: "cx-recursion-space", deck: "Complexity", q: "What hidden space cost does recursion add?", a: "The <b>call stack</b> — O(depth) space. For a balanced tree that's O(log n); for a skewed tree / linked list recursion it's O(n) and can stack-overflow." },

  // ---- Patterns ----
  { id: "pt-two-pointers", deck: "Patterns", q: "When do you reach for the <b>two pointers</b> pattern?", a: "A <b>sorted</b> array/string where you converge from both ends (pair sums, container with most water, palindrome check), or a fast/slow pair on a linked list." },
  { id: "pt-sliding-window", deck: "Patterns", q: "Signal that a problem is a <b>sliding window</b>?", a: "\"Longest / shortest / max / min <b>contiguous</b> subarray or substring satisfying a constraint.\" Grow the window on the right, shrink from the left when the constraint breaks. Usually O(n)." },
  { id: "pt-bfs-shortest", deck: "Patterns", q: "Which traversal gives the shortest path in an <b>unweighted</b> graph?", a: "<b>BFS</b> — level-by-level with a queue. The first time you reach a node is via a shortest path. (Weighted non-negative → Dijkstra.)" },
  { id: "pt-backtracking", deck: "Patterns", q: "What three things does a <b>backtracking</b> recursion need?", a: "1) a <b>choice</b> to make, 2) a <b>constraint</b> to prune invalid choices, 3) a <b>goal</b>/base case. Choose → recurse → <b>un-choose</b> (undo) to explore the next branch." },
  { id: "pt-topo-sort", deck: "Patterns", q: "What does a <b>topological sort</b> require, and what does a cycle mean?", a: "A <b>DAG</b> (directed acyclic graph). Use Kahn's algorithm (BFS on in-degree) or DFS post-order. If you can't order all nodes, there's a <b>cycle</b> → e.g. Course Schedule is impossible." },
  { id: "pt-dp-signals", deck: "Patterns", q: "Two signals that a problem is <b>dynamic programming</b>?", a: "<b>Overlapping subproblems</b> (same sub-inputs recomputed) and <b>optimal substructure</b> (answer built from answers to smaller inputs). Often phrased \"number of ways\" or \"min/max cost\"." },
  { id: "pt-monotonic-stack", deck: "Patterns", q: "What is a <b>monotonic stack</b> good for?", a: "\"Next/previous greater or smaller element\" problems (Daily Temperatures, Next Greater Element, Largest Rectangle in Histogram). Maintain a stack that stays increasing or decreasing." },
  { id: "pt-union-find", deck: "Patterns", q: "When is <b>union-find</b> (DSU) the right tool?", a: "Dynamic <b>connectivity</b> / grouping: are two nodes connected, count connected components, detect a cycle in an undirected graph (Redundant Connection, Accounts Merge, Number of Provinces)." },
  { id: "pt-heap-topk", deck: "Patterns", q: "Pattern for \"top K\" / \"Kth largest\" efficiently?", a: "A <b>heap</b> of size K — O(n log k). For Kth <b>largest</b>, keep a <b>min-heap</b> of size k; the root is the answer. (Or quickselect for O(n) average.)" },
  { id: "pt-tp-vs-sw", deck: "Patterns", q: "<b>Two pointers</b> vs <b>sliding window</b> — how do you tell them apart?", a: "Ask what the answer is. <b>Two pointers</b>: the answer is a <b>pair/tuple of elements</b> in a <b>sorted</b> array; pointers move <b>toward each other</b> from both ends (pair sum, container with most water, palindrome). <b>Sliding window</b>: the answer is a <b>contiguous subarray/substring</b> — \"longest/shortest/max satisfying…\"; both pointers move the <b>same direction</b>, growing right and shrinking left." },
  { id: "pt-sw-vs-prefix", deck: "Patterns", q: "<b>Sliding window</b> vs <b>prefix sum</b> — the deciding question?", a: "\"If I extend the window by one element, does the constraint <b>always move one direction</b>?\" <b>Yes</b> (all-positive sum only grows, distinct count never drops, \"at most K…\") → <b>sliding window</b>. <b>No</b> — <b>negatives</b> allowed, or the target is an <b>exact</b> <code>== K</code> (not <code>≤ K</code>) → shrinking gives no signal, so use <b>prefix sum + hash map</b>." },
  { id: "pt-prefix-sum", deck: "Patterns", q: "When is <b>prefix sum</b> the right tool, and what pairs with it?", a: "\"How many subarrays sum to <b>exactly K</b>\", \"equal # of 0s and 1s\", or many repeated <b>range-sum queries</b> — especially with <b>negative</b> numbers where a window fails. <code>sum(i,j)=prefix[j]−prefix[i]</code> needs no monotonicity. Pair with a <b>hash map</b> of seen prefixes to find an earlier prefix equal to <code>current−K</code> in O(1)." },
  { id: "pt-array-litmus", deck: "Patterns", q: "Same input (an array + a target) — quick rule to pick two pointers vs sliding window vs prefix sum?", a: "By what's asked: <b>which elements</b> (a pair) + sorted → <b>two pointers</b>; <b>best contiguous range</b> under a monotonic constraint → <b>sliding window</b>; <b>count/sum ranges exactly</b>, or negatives present → <b>prefix sum</b>. E.g. \"two numbers add to K, sorted\" = TP; \"longest subarray sum ≤ K, all positive\" = SW; \"count subarrays sum == K, negatives\" = prefix sum." },

  // ---- Signal words (problem phrasing → pattern) ----
  { id: "sig-pair-sorted", deck: "Signal words", q: "\"Find a <b>pair / triplet</b> that sums to X\" in a <b>sorted</b> array", a: "<b>Two Pointers</b> — converge from both ends; the comparison tells you which side to discard." },
  { id: "sig-contiguous-best", deck: "Signal words", q: "\"<b>Longest / shortest / max</b> contiguous subarray or substring satisfying…\" (monotonic constraint)", a: "<b>Sliding Window</b> — grow right, shrink left; O(n)." },
  { id: "sig-exact-k", deck: "Signal words", q: "\"How many subarrays sum to <b>exactly K</b>\", \"equal # of 0s and 1s\", or negatives allowed", a: "<b>Prefix Sum</b> (+ hash map of seen prefixes). Works where a window can't, because it needs no monotonicity." },
  { id: "sig-linkedlist-cycle", deck: "Signal words", q: "\"<b>Cycle</b> in a linked list\", \"<b>middle</b> of the list\", or O(1) space on a list", a: "<b>Fast &amp; Slow Pointers</b> (Floyd's) — advance one by 1 and one by 2." },
  { id: "sig-sorted-monotonic", deck: "Signal words", q: "\"<b>Sorted</b>\" + find a value, or \"<b>minimum X that works</b>\" (a monotonic yes/no predicate)", a: "<b>Binary Search</b> — halve the search space each step; O(log n)." },
  { id: "sig-topk", deck: "Signal words", q: "\"<b>Kth</b> largest / smallest\", \"<b>top K</b>\", \"K closest\", or streaming median", a: "<b>Heap</b> of size K (or <b>Quickselect</b> for O(n) average)." },
  { id: "sig-next-greater", deck: "Signal words", q: "\"<b>Next greater</b> / previous smaller element\", spans, or histogram areas", a: "<b>Monotonic Stack</b> — one pass keeping the stack increasing or decreasing." },
  { id: "sig-intervals", deck: "Signal words", q: "Overlapping ranges — \"<b>merge</b> / insert intervals\", meeting rooms", a: "<b>Merge Intervals</b> — sort by start, then sweep once merging overlaps." },
  { id: "sig-enumerate-all", deck: "Signal words", q: "\"<b>All</b> subsets / permutations / combinations\", \"generate every valid…\"", a: "<b>Backtracking</b> — choose → recurse → un-choose, pruning invalid branches." },
  { id: "sig-region-path", deck: "Signal words", q: "Explore a whole <b>region or path</b> — islands, connected areas, tree paths", a: "<b>DFS</b> — recurse/stack + a visited set; O(V + E)." },
  { id: "sig-shortest-unweighted", deck: "Signal words", q: "\"<b>Shortest path</b>\" / \"minimum steps\" in an <b>unweighted</b> graph or grid", a: "<b>BFS</b> — level by level with a queue; first arrival is shortest." },
  { id: "sig-shortest-weighted", deck: "Signal words", q: "\"<b>Shortest path</b>\" with <b>non-negative edge weights</b>", a: "<b>Dijkstra</b> — greedy min-heap expansion; O(E log V)." },
  { id: "sig-dependencies", deck: "Signal words", q: "\"<b>Prerequisites</b>\", \"build order\", dependencies in a <b>DAG</b>", a: "<b>Topological Sort</b> (Kahn's / in-degree BFS). Leftover nodes ⇒ a cycle." },
  { id: "sig-connectivity", deck: "Signal words", q: "\"<b>Are these connected?</b>\", grouping / merging accounts, undirected cycle detection", a: "<b>Union-Find</b> (DSU) — path compression + union by rank." },
  { id: "sig-prefix-lookup", deck: "Signal words", q: "\"<b>Starts with</b>\", prefix search, or autocomplete over a dictionary", a: "<b>Trie</b> — char-by-char prefix tree; O(L) per lookup." },
  { id: "sig-count-ways", deck: "Signal words", q: "\"<b>Max / min / count the ways</b>\", choices with overlapping subproblems", a: "<b>DP</b> — memoization (top-down) or tabulation (bottom-up)." },

  // ---- JS / TS ----
  { id: "js-sort-default", deck: "JS / TS", q: "What does <code>[10, 2, 1].sort()</code> return, and why?", a: "<code>[1, 10, 2]</code> — default sort is <b>lexicographic</b> (compares stringified values). Always pass a comparator: <code>arr.sort((a, b) =&gt; a - b)</code>." },
  { id: "js-no-heap", deck: "JS / TS", q: "Does JavaScript have a built-in heap / priority queue?", a: "<b>No.</b> You must implement one (or use a sorted structure). This is the #1 JS interview gap — know a binary-heap implementation cold." },
  { id: "js-int-div", deck: "JS / TS", q: "How do you do integer division in JS, and the gotcha with negatives?", a: "<code>Math.floor(a / b)</code>. Gotcha: <code>Math.floor</code> rounds toward <b>-∞</b>, so for negatives use <code>Math.trunc</code> to truncate toward zero." },
  { id: "js-map-vs-obj", deck: "JS / TS", q: "Why prefer <code>Map</code> over a plain object for frequency counts?", a: "<code>Map</code> allows <b>any key type</b>, preserves <b>insertion order</b>, has a clean <code>.size</code> / <code>.get</code> / <code>.set</code> API, and no prototype-key surprises." },
  { id: "js-slice-splice", deck: "JS / TS", q: "<code>slice</code> vs <code>splice</code> — which mutates?", a: "<code>slice(i, j)</code> returns a <b>copy</b> of [i, j) and leaves the original alone. <code>splice(i, n)</code> <b>cuts items out and mutates</b>. Mnemonic: <b>spl</b>ice <b>sp</b>oils the original." },
  { id: "js-char-code", deck: "JS / TS", q: "Convert a char to its code and back?", a: "<code>'a'.charCodeAt(0)</code> → 97; <code>String.fromCharCode(97)</code> → <code>'a'</code>. Index into the alphabet with <code>c.charCodeAt(0) - 97</code>." },
  { id: "js-init-minmax", deck: "JS / TS", q: "What should you initialize min / max accumulators to?", a: "<code>Infinity</code> for a running <b>min</b>, <code>-Infinity</code> for a running <b>max</b> — so the first real value always replaces the seed." },
  { id: "js-2d-copy", deck: "JS / TS", q: "How do you shallow-copy a 2D grid?", a: "<code>grid.map(row =&gt; [...row])</code>. A plain <code>[...grid]</code> copies the outer array but shares the inner row references." },

  // ---- System Design ----
  { id: "sd-latency-throughput", deck: "System Design", q: "Latency vs throughput — define both.", a: "<b>Latency</b> = time for one operation (how fast). <b>Throughput</b> = operations per unit time (how many). You can improve one at the expense of the other (e.g. batching raises throughput, hurts latency)." },
  { id: "sd-cap", deck: "System Design", q: "State the CAP theorem.", a: "Under a network <b>partition (P)</b>, a distributed system can guarantee either <b>consistency (C)</b> or <b>availability (A)</b>, not both. No partition → you can have both." },
  { id: "sd-sql-nosql", deck: "System Design", q: "When do you reach for NoSQL over a relational DB?", a: "Massive scale / horizontal sharding, flexible or evolving schema, simple access patterns (key lookups), high write throughput. Relational wins for complex queries, joins, and strong ACID transactions." },
  { id: "sd-acid", deck: "System Design", q: "What does <b>ACID</b> stand for?", a: "<b>A</b>tomicity, <b>C</b>onsistency, <b>I</b>solation, <b>D</b>urability — the guarantees of a reliable transactional database." },
  { id: "sd-cache-strategies", deck: "System Design", q: "Name the common caching read strategy and a write strategy.", a: "Read: <b>cache-aside</b> (lazy load on miss). Writes: <b>write-through</b> (write cache + DB together) or <b>write-back</b> (write cache, flush to DB later — faster but riskier)." },
  { id: "sd-consistent-hashing", deck: "System Design", q: "What problem does <b>consistent hashing</b> solve?", a: "Distributing keys across nodes so that <b>adding/removing a node</b> only remaps a small fraction of keys (~1/N) instead of nearly all of them — minimizes reshuffling when the cluster scales." },
  { id: "sd-load-balancer", deck: "System Design", q: "What does a load balancer do, and name two algorithms.", a: "Distributes incoming requests across backend servers (and removes unhealthy ones). Algorithms: <b>round-robin</b>, <b>least-connections</b>, hash/IP-based, weighted." },
  { id: "sd-message-queue", deck: "System Design", q: "Why put a <b>message queue</b> between services?", a: "Decoupling + <b>async</b> processing: smooths traffic spikes (buffer), lets the producer not wait on the consumer, enables retries and fan-out (pub/sub). Trades immediacy for resilience and scalability." },
];

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
