# Personal LeetCode

A local, dependency-free LeetCode-style **playground** that runs entirely in the
browser — no `npm install`, no build step, no server. Just open the page.

## Run it

Open [study-plan/playground.html](study-plan/playground.html) in your browser.

The playground bundles ~50 problems with a description, starter code, and test
cases each. Everything lives in [study-plan/problems.js](study-plan/problems.js).

- Pick a problem from the sidebar (filter by number/title, difficulty, or solved status).
- Write your solution in the editor and press **▶ Run** (or **Ctrl+Enter**) to test it
  against the problem's cases. **Reset** restores the current page to its starter code.
- Code, notes, and progress auto-save to your browser's `localStorage`.

## Adding a new problem

Add an entry to the `PROBLEMS` array in [study-plan/problems.js](study-plan/problems.js):

```js
{
  id: "two-sum",          // unique slug, also the URL hash (#two-sum)
  num: 1,
  title: "Two Sum",
  difficulty: "easy",     // easy | medium | hard
  fnName: "twoSum",       // the function your solution must define
  complexity: { time: "O(n)", space: "O(n)" },
  description: "<p>…</p>", // HTML; add a <h3 class=\"sec-label\">Visual</h3> + inline SVG for a diagram
  starter: "function twoSum(nums, target) {\n  // your code here\n}",
  unordered: false,       // true if result order doesn't matter (deep-sorted before compare)
  cases: [
    { args: [[2, 7, 11, 15], 9], expected: [0, 1] },
  ],
}
```

`args` is spread into `fnName(...args)`; `expected` is compared with deep equality.

### Problems that use real LeetCode signatures (`io`)

For linked-list / tree / graph / design problems, add an `io` field so your
solution takes the same arguments as on LeetCode. The runner builds the real
structure from the JSON case data and serializes the result back for comparison.
`ListNode`, `TreeNode`, and `Node` (graph, with `val`/`neighbors`) are in scope.

| `io` value          | starter signature                       | `args[0]` shape                          | output |
| ------------------- | --------------------------------------- | ---------------------------------------- | ------ |
| `"linkedlist"`      | `fn(head)`                              | `[values]`                               | returned `ListNode` → array |
| `"linkedlist-cycle"`| `fn(head)`                              | `[values, pos]` (`pos` = cycle index, -1 none) | returned as-is |
| `"tree"`            | `fn(root, …)`                          | `[levelOrderArray, …]` (`null` = missing) | returned as-is |
| `"graph"`           | `fn(node)`                             | `[adjList]` (1-indexed neighbors)        | returned `Node` → adjacency list |
| `"class"`           | `class Foo { … }` (`fnName` = class)    | uses `calls` instead of `args` (below)   | array of method results |

Design problems set `io: "class"`, make `fnName` the class name, and replace each
case's `args`/`expected` with a `calls`/`expected` pair. Each call is
`[method, ...args]`; the constructor call uses the class name; results are
collected per call (`null` for the constructor and void methods):

```js
{
  id: "min-stack", num: 155, title: "Min Stack", difficulty: "medium",
  fnName: "MinStack", io: "class",
  starter: "class MinStack {\n  constructor() {\n    \n  }\n  push(val) {}\n}",
  cases: [
    { calls: [["MinStack"], ["push", 1], ["getMin"]], expected: [null, null, 1] },
  ],
}
```

## Extra-solution pages

Each problem keeps a strip of **solution tabs** above the editor, so you can hold
several approaches side by side (e.g. brute-force vs. optimal):

- **+** adds a new page (seeded with the starter), **double-click** a tab to rename it,
  and **✕** deletes one (the last page can't be removed).
- Every page is its own auto-saved buffer; **▶ Run** tests the active page against the
  problem's cases. A problem is marked solved (✓) if *any* of its pages passes — and the
  passing tab gets its own ✓.

## Explain with Claude

Inside the playground you can chat with Claude about your code:

1. Click **✦ Explain** in the toolbar, or press **Shift+Ctrl+E** (**Shift+Cmd+E** on Mac).
   Optionally **select some lines** first to point the conversation at them.
2. A side panel opens with your solution stashed as context and **waits** — type your
   question and press **Enter** to send. Nothing is sent automatically on open.
3. The reply streams in, and you can keep asking follow-ups in the same thread. Each
   problem keeps its own conversation, auto-saved to `localStorage`. Press **Esc** to close.

The first time, you'll be asked for an [Anthropic API key](https://console.anthropic.com/).
It's stored only in your browser's `localStorage` and sent directly to `api.anthropic.com`
(set/clear it anytime with the 🔑 button).

> Note: the key lives in the browser, so only use this on your own machine — don't deploy
> this page publicly with a key saved.

## The rest of the study plan

The playground is one page of a larger interview-prep site under
[study-plan/](study-plan/) — open [study-plan/index.html](study-plan/index.html) for the
overview, patterns, templates, cheatsheet, and spaced-repetition
[flashcards](study-plan/flashcards.html) covering both algorithms and system design.

There's also a full 12-week **system design course** under
[system-design/](system-design/) — open [system-design/index.html](system-design/index.html)
for the syllabus and one topic page per week; each week has a matching
flashcard deck (SD1–SD12).
