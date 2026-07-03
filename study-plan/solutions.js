/*
 * Reference solutions for the playground problems (playground.html).
 *
 * Keyed by the same `id` used in problems.js. Each value is the full source of
 * an optimal (or near-optimal) solution that defines the problem's `fnName`,
 * so it can be dropped straight into the editor and Run to pass every case.
 *
 * Every solution is commented line by line to double as a study aid — the
 * "See Solution" button renders these verbatim.
 *
 * NOTE: values are template-literal strings, so comments must never contain a
 * backtick or the ${ sequence, or the file won't parse.
 */
const SOLUTIONS = {
  "container-with-most-water": `function maxArea(height) {
  let lo = 0, hi = height.length - 1, best = 0; // two walls at the far ends; best area so far
  while (lo < hi) {                             // shrink the window until the pointers meet
    const area = (hi - lo) * Math.min(height[lo], height[hi]); // width * shorter wall = water held
    if (area > best) best = area;               // keep the largest area seen
    if (height[lo] < height[hi]) lo++;          // shorter wall caps the area, so move it inward
    else hi--;                                  // otherwise move the right wall inward
  }
  return best;                                  // best container found
}`,

  "3sum": `function threeSum(nums) {
  nums.sort((a, b) => a - b);                   // sort so we can use two pointers + skip duplicates
  const res = [];
  for (let i = 0; i < nums.length - 2; i++) {   // fix the first number of the triple
    if (i > 0 && nums[i] === nums[i - 1]) continue; // skip a duplicate first number
    let lo = i + 1, hi = nums.length - 1;       // two pointers scan the remainder
    while (lo < hi) {
      const sum = nums[i] + nums[lo] + nums[hi];
      if (sum < 0) lo++;                         // too small: raise the low value
      else if (sum > 0) hi--;                    // too big: lower the high value
      else {
        res.push([nums[i], nums[lo], nums[hi]]); // found a triple summing to zero
        while (lo < hi && nums[lo] === nums[lo + 1]) lo++; // skip duplicate lows
        while (lo < hi && nums[hi] === nums[hi - 1]) hi--; // skip duplicate highs
        lo++; hi--;                              // move past the pair just used
      }
    }
  }
  return res;
}`,

  "valid-palindrome": `function isPalindrome(s) {
  let lo = 0, hi = s.length - 1;                 // compare from both ends inward
  const ok = (c) => /[a-z0-9]/i.test(c);         // only letters and digits count
  while (lo < hi) {
    while (lo < hi && !ok(s[lo])) lo++;          // skip non-alphanumerics on the left
    while (lo < hi && !ok(s[hi])) hi--;          // skip non-alphanumerics on the right
    if (s[lo].toLowerCase() !== s[hi].toLowerCase()) return false; // mismatch -> not a palindrome
    lo++; hi--;                                  // characters matched, step inward
  }
  return true;                                   // every pair matched
}`,

  "two-sum-ii": `function twoSumII(numbers, target) {
  let lo = 0, hi = numbers.length - 1;           // input is sorted, so squeeze from both ends
  while (lo < hi) {
    const sum = numbers[lo] + numbers[hi];
    if (sum === target) return [lo + 1, hi + 1]; // answer is 1-indexed
    if (sum < target) lo++;                       // need a bigger sum
    else hi--;                                    // need a smaller sum
  }
  return [];                                      // problem guarantees this is unreachable
}`,

  "top-k-frequent": `function topKFrequent(nums, k) {
  const freq = new Map();                         // value -> how many times it appears
  for (const n of nums) freq.set(n, (freq.get(n) || 0) + 1);
  // Bucket sort by frequency: bucket index == count, so no comparisons needed.
  const buckets = Array.from({ length: nums.length + 1 }, () => []);
  for (const [n, c] of freq) buckets[c].push(n); // place each value in its count bucket
  const res = [];
  for (let c = buckets.length - 1; c >= 0 && res.length < k; c--) { // walk from highest count down
    for (const n of buckets[c]) {
      res.push(n);
      if (res.length === k) break;                // collected the k most frequent
    }
  }
  return res;
}`,

  "linked-list-cycle": `function hasCycle(head) {
  let slow = head, fast = head;                   // Floyd's tortoise and hare
  while (fast && fast.next) {                      // fast reaches the end -> no cycle
    slow = slow.next;                              // slow moves one step
    fast = fast.next.next;                          // fast moves two steps
    if (slow === fast) return true;                // they meet -> a cycle exists
  }
  return false;
}`,

  "middle-of-linked-list": `function middleNode(head) {
  let slow = head, fast = head;                   // slow at 1x, fast at 2x speed
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;                          // when fast hits the end...
  }
  return slow;                                     // ...slow sits at the middle
}`,

  "happy-number": `function isHappy(n) {
  const seen = new Set();                          // remember numbers to detect a loop
  const next = (x) => {                            // sum of squares of the digits
    let sum = 0;
    while (x > 0) { const d = x % 10; sum += d * d; x = Math.floor(x / 10); }
    return sum;
  };
  while (n !== 1 && !seen.has(n)) {                // stop at 1 (happy) or a repeat (loop)
    seen.add(n);
    n = next(n);
  }
  return n === 1;                                   // reached 1 -> happy
}`,

  "longest-substring-without-repeating": `function lengthOfLongestSubstring(s) {
  const last = new Map();                          // char -> last index it was seen at
  let lo = 0, best = 0;                            // lo is the window's left edge
  for (let hi = 0; hi < s.length; hi++) {          // hi expands the window to the right
    const c = s[hi];
    if (last.has(c) && last.get(c) >= lo) lo = last.get(c) + 1; // jump past the earlier copy
    last.set(c, hi);                               // record this char's newest position
    best = Math.max(best, hi - lo + 1);            // track the longest valid window
  }
  return best;
}`,

  "minimum-window-substring": `function minWindow(s, t) {
  if (!t.length) return "";
  const need = new Map();                          // remaining count of each char still needed
  for (const c of t) need.set(c, (need.get(c) || 0) + 1);
  let missing = t.length, lo = 0, start = 0, len = Infinity; // missing = chars still to cover
  for (let hi = 0; hi < s.length; hi++) {          // grow the window on the right
    const c = s[hi];
    if (need.has(c)) {
      if (need.get(c) > 0) missing--;              // this char covers a still-needed slot
      need.set(c, need.get(c) - 1);                // negative means we have a surplus
    }
    while (missing === 0) {                         // window covers all of t -> try to shrink it
      if (hi - lo + 1 < len) { len = hi - lo + 1; start = lo; } // record the smallest window
      const d = s[lo];
      if (need.has(d)) {
        need.set(d, need.get(d) + 1);              // giving this char back
        if (need.get(d) > 0) missing++;            // dropped below required -> window incomplete
      }
      lo++;                                         // advance the left edge
    }
  }
  return len === Infinity ? "" : s.slice(start, start + len); // "" if t was never covered
}`,

  "max-consecutive-ones-iii": `function longestOnes(nums, k) {
  let lo = 0, zeros = 0, best = 0;                 // zeros = number of 0s currently in the window
  for (let hi = 0; hi < nums.length; hi++) {
    if (nums[hi] === 0) zeros++;                   // count a new zero
    while (zeros > k) {                             // too many zeros to flip -> shrink from left
      if (nums[lo] === 0) zeros--;
      lo++;
    }
    best = Math.max(best, hi - lo + 1);            // longest window with at most k zeros
  }
  return best;
}`,

  "subarray-sum-equals-k": `function subarraySum(nums, k) {
  const seen = new Map([[0, 1]]);                  // prefix-sum -> how many times it occurred (0 once, empty prefix)
  let sum = 0, count = 0;
  for (const n of nums) {
    sum += n;                                       // running prefix sum
    count += seen.get(sum - k) || 0;               // any earlier prefix that leaves a gap of k
    seen.set(sum, (seen.get(sum) || 0) + 1);       // record this prefix sum
  }
  return count;
}`,

  "range-sum-query": `class NumArray {
  constructor(nums) {
    this.prefix = [0];                              // prefix[i] = sum of the first i elements
    for (const n of nums) this.prefix.push(this.prefix[this.prefix.length - 1] + n);
  }

  sumRange(left, right) {
    return this.prefix[right + 1] - this.prefix[left]; // range sum in O(1) via prefix difference
  }
}`,

  "contiguous-array": `function findMaxLength(nums) {
  // Treat 0 as -1; when the running sum repeats, the span between has equal 0s and 1s.
  const first = new Map([[0, -1]]);                 // sum -> earliest index (sum 0 before the array)
  let sum = 0, best = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i] === 1 ? 1 : -1;                  // +1 for a one, -1 for a zero
    if (first.has(sum)) best = Math.max(best, i - first.get(sum)); // seen before -> balanced subarray
    else first.set(sum, i);                          // otherwise record its first occurrence
  }
  return best;
}`,

  "search-insert-position": `function searchInsert(nums, target) {
  let lo = 0, hi = nums.length;                     // hi is exclusive: answer can be past the end
  while (lo < hi) {
    const mid = (lo + hi) >> 1;                       // midpoint (>>1 is integer divide by 2)
    if (nums[mid] < target) lo = mid + 1;            // target is to the right
    else hi = mid;                                    // target is at mid or to the left
  }
  return lo;                                          // first index where nums[i] >= target
}`,

  "koko-eating-bananas": `function minEatingSpeed(piles, h) {
  const hours = (speed) => piles.reduce((sum, p) => sum + Math.ceil(p / speed), 0); // hours at a given speed
  let lo = 1, hi = Math.max(...piles);              // slowest = 1/hr, fastest ever useful = biggest pile
  while (lo < hi) {                                   // binary-search the smallest workable speed
    const mid = (lo + hi) >> 1;
    if (hours(mid) <= h) hi = mid;                    // fits in time -> try slower
    else lo = mid + 1;                                // too slow -> speed up
  }
  return lo;
}`,

  "find-min-rotated-sorted-array": `function findMin(nums) {
  let lo = 0, hi = nums.length - 1;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (nums[mid] > nums[hi]) lo = mid + 1;         // min is in the unsorted right half
    else hi = mid;                                    // min is at mid or in the left half
  }
  return nums[lo];                                    // pointers converge on the minimum
}`,

  "kth-largest-element": `function findKthLargest(nums, k) {
  // Quickselect: the kth largest is the (n-k)th smallest by index once partitioned.
  const target = nums.length - k;
  let lo = 0, hi = nums.length - 1;
  while (lo < hi) {
    const pivot = nums[lo + ((hi - lo) >> 1)];      // pick a middle-ish pivot value
    let i = lo, j = hi;
    while (i <= j) {                                  // Hoare-style partition around the pivot
      while (nums[i] < pivot) i++;                    // find a left item that belongs right
      while (nums[j] > pivot) j--;                    // find a right item that belongs left
      if (i <= j) { [nums[i], nums[j]] = [nums[j], nums[i]]; i++; j--; } // swap them
    }
    if (target <= j) hi = j;                          // target sits in the left partition
    else if (target >= i) lo = i;                      // target sits in the right partition
    else return nums[target];                          // target landed on the pivot boundary
  }
  return nums[lo];
}`,

  "median-of-two-sorted-arrays": `function findMedianSortedArrays(nums1, nums2) {
  if (nums1.length > nums2.length) [nums1, nums2] = [nums2, nums1]; // binary-search the shorter array
  const m = nums1.length, n = nums2.length, half = (m + n + 1) >> 1; // size of the combined left half
  let lo = 0, hi = m;
  while (lo <= hi) {
    const i = (lo + hi) >> 1, j = half - i;          // i,j split each array; i+j == half
    const l1 = i > 0 ? nums1[i - 1] : -Infinity;     // largest on the left of the cut in nums1
    const r1 = i < m ? nums1[i] : Infinity;          // smallest on the right of the cut in nums1
    const l2 = j > 0 ? nums2[j - 1] : -Infinity;     // same two boundaries for nums2
    const r2 = j < n ? nums2[j] : Infinity;
    if (l1 <= r2 && l2 <= r1) {                       // a valid cut: every left <= every right
      if ((m + n) % 2) return Math.max(l1, l2);      // odd total -> median is the largest left value
      return (Math.max(l1, l2) + Math.min(r1, r2)) / 2; // even -> average the two middle values
    } else if (l1 > r2) hi = i - 1;                    // nums1 gave too much -> cut it earlier
    else lo = i + 1;                                   // nums1 gave too little -> cut it later
  }
  return 0;
}`,

  "merge-intervals": `function merge(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);            // sort by start so overlaps are adjacent
  const res = [];
  for (const [s, e] of intervals) {
    const last = res[res.length - 1];
    if (last && s <= last[1]) last[1] = Math.max(last[1], e); // overlaps previous -> extend its end
    else res.push([s, e]);                            // no overlap -> start a new interval
  }
  return res;
}`,

  "insert-interval": `function insert(intervals, newInterval) {
  const res = [];
  let [s, e] = newInterval, i = 0;                  // s,e is the interval being inserted/merged
  const n = intervals.length;
  while (i < n && intervals[i][1] < s) res.push(intervals[i++]); // intervals entirely before it
  while (i < n && intervals[i][0] <= e) {           // every interval that overlaps the new one
    s = Math.min(s, intervals[i][0]);               // absorb it by widening s and e
    e = Math.max(e, intervals[i][1]);
    i++;
  }
  res.push([s, e]);                                  // add the merged interval
  while (i < n) res.push(intervals[i++]);            // intervals entirely after it
  return res;
}`,

  "meeting-rooms-ii": `function minMeetingRooms(intervals) {
  const starts = intervals.map((x) => x[0]).sort((a, b) => a - b); // all start times, sorted
  const ends = intervals.map((x) => x[1]).sort((a, b) => a - b);   // all end times, sorted
  let rooms = 0, best = 0, s = 0, e = 0;
  while (s < starts.length) {
    if (starts[s] < ends[e]) { rooms++; s++; best = Math.max(best, rooms); } // a meeting starts before one ends -> need a room
    else { rooms--; e++; }                          // a meeting ended -> free a room
  }
  return best;                                        // peak concurrent meetings = rooms needed
}`,

  "number-of-islands": `function numIslands(grid) {
  if (!grid.length) return 0;
  const rows = grid.length, cols = grid[0].length;
  let count = 0;
  const sink = (r, c) => {                            // flood-fill one island into water
    if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] !== "1") return; // off-grid or water
    grid[r][c] = "0";                                // mark this land as visited
    sink(r + 1, c); sink(r - 1, c); sink(r, c + 1); sink(r, c - 1); // spread to 4 neighbors
  };
  for (let r = 0; r < rows; r++)
    for (let c = 0; c < cols; c++)
      if (grid[r][c] === "1") { count++; sink(r, c); } // each unvisited land cell = a new island
  return count;
}`,

  "clone-graph": `function cloneGraph(node) {
  if (!node) return null;
  const clones = new Map();                          // original node -> its copy
  const dfs = (n) => {
    if (clones.has(n)) return clones.get(n);         // already copied -> reuse (handles cycles)
    const copy = new Node(n.val);
    clones.set(n, copy);                             // register before recursing to avoid loops
    for (const nb of n.neighbors) copy.neighbors.push(dfs(nb)); // deep-copy each neighbor
    return copy;
  };
  return dfs(node);
}`,

  "path-sum": `function hasPathSum(root, targetSum) {
  if (!root) return false;                           // empty branch can't complete a path
  if (!root.left && !root.right) return targetSum === root.val; // leaf: does it hit the target exactly?
  const rest = targetSum - root.val;                 // subtract this node, ask the children
  return hasPathSum(root.left, rest) || hasPathSum(root.right, rest);
}`,

  "subsets": `function subsets(nums) {
  const res = [];
  const path = [];                                   // the subset being built
  const backtrack = (start) => {
    res.push(path.slice());                          // every node in the recursion is a valid subset
    for (let i = start; i < nums.length; i++) {      // start avoids reusing earlier elements
      path.push(nums[i]);                            // choose nums[i]
      backtrack(i + 1);                              // build subsets that include it
      path.pop();                                    // undo the choice
    }
  };
  backtrack(0);
  return res;
}`,

  "permutations": `function permute(nums) {
  const res = [];
  const path = [];
  const used = new Array(nums.length).fill(false);   // which indices are already in path
  const backtrack = () => {
    if (path.length === nums.length) { res.push(path.slice()); return; } // full-length -> a permutation
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;                          // skip elements already placed
      used[i] = true; path.push(nums[i]);            // choose nums[i]
      backtrack();
      path.pop(); used[i] = false;                    // undo the choice
    }
  };
  backtrack();
  return res;
}`,

  "n-queens": `function solveNQueens(n) {
  const res = [];
  const cols = new Set(), diag = new Set(), anti = new Set(); // attacked columns and diagonals
  const board = Array.from({ length: n }, () => ".".repeat(n)); // start with an empty board
  const place = (r, c, ch) => {                       // set board[r][c] to ch (strings are immutable)
    board[r] = board[r].slice(0, c) + ch + board[r].slice(c + 1);
  };
  const backtrack = (r) => {
    if (r === n) { res.push(board.slice()); return; } // placed a queen in every row -> a solution
    for (let c = 0; c < n; c++) {
      if (cols.has(c) || diag.has(r - c) || anti.has(r + c)) continue; // square is attacked
      cols.add(c); diag.add(r - c); anti.add(r + c); place(r, c, "Q"); // place a queen
      backtrack(r + 1);
      cols.delete(c); diag.delete(r - c); anti.delete(r + c); place(r, c, "."); // remove it
    }
  };
  backtrack(0);
  return res;
}`,

  "combination-sum": `function combinationSum(candidates, target) {
  const res = [];
  const path = [];
  const backtrack = (start, remain) => {              // remain = target minus what we've chosen
    if (remain === 0) { res.push(path.slice()); return; } // exactly hit the target
    if (remain < 0) return;                           // overshot -> dead end
    for (let i = start; i < candidates.length; i++) {
      path.push(candidates[i]);
      backtrack(i, remain - candidates[i]);           // i (not i+1) allows reusing the same number
      path.pop();
    }
  };
  backtrack(0, target);
  return res;
}`,

  "word-ladder": `function ladderLength(beginWord, endWord, wordList) {
  const words = new Set(wordList);                    // O(1) membership checks
  if (!words.has(endWord)) return 0;                  // target unreachable
  let queue = [beginWord];                            // BFS frontier (current level)
  let steps = 1;                                      // sequence length includes beginWord
  words.delete(beginWord);
  while (queue.length) {
    const next = [];                                  // next BFS level
    for (const word of queue) {
      if (word === endWord) return steps;             // reached the target
      for (let i = 0; i < word.length; i++) {         // try changing each position
        for (let c = 97; c <= 122; c++) {             // to each letter a..z
          const cand = word.slice(0, i) + String.fromCharCode(c) + word.slice(i + 1);
          if (words.has(cand)) { words.delete(cand); next.push(cand); } // valid unvisited neighbor
        }
      }
    }
    queue = next;
    steps++;                                          // advanced one transformation
  }
  return 0;                                            // exhausted the graph without reaching endWord
}`,

  "rotting-oranges": `function orangesRotting(grid) {
  const rows = grid.length, cols = grid[0].length;
  let queue = [], fresh = 0;                          // queue = currently rotten; fresh count remaining
  for (let r = 0; r < rows; r++)
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 2) queue.push([r, c]);       // multi-source BFS starts from all rotten oranges
      else if (grid[r][c] === 1) fresh++;
    }
  const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  let minutes = 0;
  while (queue.length && fresh > 0) {                 // spread one minute per BFS level
    const next = [];
    for (const [r, c] of queue) {
      for (const [dr, dc] of dirs) {
        const nr = r + dr, nc = c + dc;
        if (nr >= 0 && nc >= 0 && nr < rows && nc < cols && grid[nr][nc] === 1) {
          grid[nr][nc] = 2; fresh--; next.push([nr, nc]); // rot a fresh neighbor
        }
      }
    }
    queue = next;
    minutes++;
  }
  return fresh === 0 ? minutes : -1;                  // -1 if some fruit can never rot
}`,

  "binary-tree-level-order": `function levelOrder(root) {
  if (!root) return [];
  const res = [];
  let queue = [root];                                 // BFS, one array per level
  while (queue.length) {
    const level = [], next = [];
    for (const node of queue) {
      level.push(node.val);                           // collect this level's values
      if (node.left) next.push(node.left);            // queue up the next level
      if (node.right) next.push(node.right);
    }
    res.push(level);
    queue = next;
  }
  return res;
}`,

  "implement-trie": `class Trie {
  constructor() {
    this.root = {};                                   // each node is a plain object of child chars
  }

  insert(word) {
    let node = this.root;
    for (const c of word) node = node[c] || (node[c] = {}); // walk/create a node per character
    node.end = true;                                  // mark the last node as a complete word
  }

  _find(str) {                                        // return the node at the end of str, or null
    let node = this.root;
    for (const c of str) {
      if (!node[c]) return null;                      // path breaks -> not present
      node = node[c];
    }
    return node;
  }

  search(word) {
    const node = this._find(word);
    return !!node && node.end === true;               // present AND a full word (not just a prefix)
  }

  startsWith(prefix) {
    return this._find(prefix) !== null;               // any word starts with this prefix?
  }
}`,

  "word-search-ii": `function findWords(board, words) {
  const root = {};                                    // build a trie of all target words
  for (const word of words) {
    let node = root;
    for (const c of word) node = node[c] || (node[c] = {});
    node.word = word;                                 // store the full word at its end node
  }
  const rows = board.length, cols = board[0].length;
  const res = [];
  const dfs = (r, c, node) => {                        // walk the board and the trie together
    if (r < 0 || c < 0 || r >= rows || c >= cols) return; // off the board
    const ch = board[r][c];
    const next = node[ch];
    if (ch === "#" || !next) return;                  // visited cell, or no trie branch here
    if (next.word) { res.push(next.word); next.word = null; } // found a word; null it out to avoid dupes
    board[r][c] = "#";                                // mark visited during this path
    dfs(r + 1, c, next); dfs(r - 1, c, next);         // explore 4 neighbors deeper in the trie
    dfs(r, c + 1, next); dfs(r, c - 1, next);
    board[r][c] = ch;                                 // restore the cell (backtrack)
  };
  for (let r = 0; r < rows; r++)
    for (let c = 0; c < cols; c++)
      dfs(r, c, root);                                // try starting a word from every cell
  return res;
}`,

  "add-and-search-words": `class WordDictionary {
  constructor() {
    this.root = {};                                   // trie root
  }

  addWord(word) {
    let node = this.root;
    for (const c of word) node = node[c] || (node[c] = {}); // insert char by char
    node.end = true;                                  // mark end of a word
  }

  search(word) {
    const dfs = (node, i) => {                          // supports '.' as a wildcard
      if (i === word.length) return node.end === true; // consumed the whole pattern at a word end
      const c = word[i];
      if (c === ".") {                                  // wildcard: try every child
        for (const key of Object.keys(node)) {
          if (key !== "end" && dfs(node[key], i + 1)) return true;
        }
        return false;
      }
      return node[c] ? dfs(node[c], i + 1) : false;   // exact char: follow that branch if it exists
    };
    return dfs(this.root, 0);
  }
}`,

  "number-of-provinces": `function findCircleNum(isConnected) {
  const n = isConnected.length;
  const parent = Array.from({ length: n }, (_, i) => i); // union-find: each city its own group
  const find = (x) => {                                // root of x's group, with path compression
    while (parent[x] !== x) { parent[x] = parent[parent[x]]; x = parent[x]; }
    return x;
  };
  let count = n;                                       // start with n separate provinces
  for (let i = 0; i < n; i++)
    for (let j = i + 1; j < n; j++)
      if (isConnected[i][j]) {                         // i and j are directly connected
        const a = find(i), b = find(j);
        if (a !== b) { parent[a] = b; count--; }       // merge two groups -> one fewer province
      }
  return count;
}`,

  "redundant-connection": `function findRedundantConnection(edges) {
  const parent = [];                                   // union-find over the vertices
  const find = (x) => {
    if (parent[x] === undefined) parent[x] = x;        // lazily initialize a vertex as its own root
    while (parent[x] !== x) { parent[x] = parent[parent[x]]; x = parent[x]; }
    return x;
  };
  for (const [u, v] of edges) {
    const a = find(u), b = find(v);
    if (a === b) return [u, v];                        // both ends already connected -> this edge is the cycle
    parent[a] = b;                                     // otherwise union them
  }
  return [];
}`,

  "accounts-merge": `function accountsMerge(accounts) {
  const parent = new Map();                            // email -> parent email (union-find)
  const owner = new Map();                             // email -> account holder's name
  const find = (x) => {
    while (parent.get(x) !== x) { parent.set(x, parent.get(parent.get(x))); x = parent.get(x); }
    return x;
  };
  const union = (a, b) => { parent.set(find(a), find(b)); };

  for (const [name, ...emails] of accounts) {
    for (const email of emails) {
      if (!parent.has(email)) parent.set(email, email); // first time seeing this email
      owner.set(email, name);
      union(email, emails[0]);                         // all emails in one account belong together
    }
  }
  const groups = new Map();                            // root email -> list of emails in that group
  for (const email of parent.keys()) {
    const root = find(email);
    if (!groups.has(root)) groups.set(root, []);
    groups.get(root).push(email);
  }
  const res = [];
  for (const [root, emails] of groups) {
    emails.sort();                                     // problem wants emails sorted
    res.push([owner.get(root), ...emails]);            // name followed by its emails
  }
  return res;
}`,

  "find-median-data-stream": `class MedianFinder {
  constructor() {
    this.lo = new MaxHeap(); // lower half; its max is the middle-left value
    this.hi = new MinHeap(); // upper half; its min is the middle-right value
  }

  addNum(num) {
    this.lo.push(num);                                 // tentatively add to the low half
    this.hi.push(this.lo.pop());                       // move its largest into the high half (keeps halves ordered)
    if (this.hi.size() > this.lo.size()) this.lo.push(this.hi.pop()); // rebalance so lo >= hi in size
  }

  findMedian() {
    if (this.lo.size() > this.hi.size()) return this.lo.peek(); // odd count -> the extra element
    return (this.lo.peek() + this.hi.peek()) / 2;      // even count -> average of the two middles
  }
}

class Heap {                                            // minimal binary heap; cmp decides ordering
  constructor(cmp) { this.a = []; this.cmp = cmp; }
  size() { return this.a.length; }
  peek() { return this.a[0]; }
  push(v) {
    this.a.push(v);                                     // add at the end, then bubble up
    let i = this.a.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;                            // parent index
      if (this.cmp(this.a[i], this.a[p]) < 0) { [this.a[i], this.a[p]] = [this.a[p], this.a[i]]; i = p; }
      else break;
    }
  }
  pop() {
    const top = this.a[0], last = this.a.pop();         // save root, remove last element
    if (this.a.length) {
      this.a[0] = last;                                 // move last to root, then sift down
      let i = 0;
      for (;;) {
        const l = 2 * i + 1, r = 2 * i + 2;             // child indices
        let s = i;
        if (l < this.a.length && this.cmp(this.a[l], this.a[s]) < 0) s = l;
        if (r < this.a.length && this.cmp(this.a[r], this.a[s]) < 0) s = r;
        if (s === i) break;                             // heap property restored
        [this.a[i], this.a[s]] = [this.a[s], this.a[i]]; i = s;
      }
    }
    return top;
  }
}
class MinHeap extends Heap { constructor() { super((a, b) => a - b); } } // smallest on top
class MaxHeap extends Heap { constructor() { super((a, b) => b - a); } } // largest on top`,

  "network-delay-time": `function networkDelayTime(times, n, k) {
  const adj = Array.from({ length: n + 1 }, () => []); // adjacency list: node -> [neighbor, weight]
  for (const [u, v, w] of times) adj[u].push([v, w]);
  const dist = new Array(n + 1).fill(Infinity);        // shortest known time to each node
  dist[k] = 0;
  const heap = [[0, k]];                               // Dijkstra frontier: [distance, node]
  while (heap.length) {
    heap.sort((a, b) => b[0] - a[0]);                  // keep nearest node at the end (small n)
    const [d, u] = heap.pop();                          // pop the closest unfinalized node
    if (d > dist[u]) continue;                          // stale entry -> skip
    for (const [v, w] of adj[u]) {
      if (d + w < dist[v]) { dist[v] = d + w; heap.push([dist[v], v]); } // relax the edge
    }
  }
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    if (dist[i] === Infinity) return -1;               // some node never received the signal
    ans = Math.max(ans, dist[i]);                       // answer = time for the farthest node
  }
  return ans;
}`,

  "path-with-minimum-effort": `function minimumEffortPath(heights) {
  const rows = heights.length, cols = heights[0].length;
  const effort = Array.from({ length: rows }, () => new Array(cols).fill(Infinity)); // best effort to reach each cell
  effort[0][0] = 0;
  const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  const heap = [[0, 0, 0]];                            // Dijkstra frontier: [effort, row, col]
  while (heap.length) {
    heap.sort((a, b) => b[0] - a[0]);                  // smallest effort at the end
    const [e, r, c] = heap.pop();
    if (r === rows - 1 && c === cols - 1) return e;    // reached the goal with minimum effort
    if (e > effort[r][c]) continue;                    // stale entry
    for (const [dr, dc] of dirs) {
      const nr = r + dr, nc = c + dc;
      if (nr < 0 || nc < 0 || nr >= rows || nc >= cols) continue;
      const ne = Math.max(e, Math.abs(heights[nr][nc] - heights[r][c])); // path effort = max single step
      if (ne < effort[nr][nc]) { effort[nr][nc] = ne; heap.push([ne, nr, nc]); }
    }
  }
  return 0;
}`,

  "cheapest-flights-k-stops": `function findCheapestPrice(n, flights, src, dst, k) {
  // Bellman-Ford limited to k+1 edges (k stops == k+1 flights).
  let dist = new Array(n).fill(Infinity);              // cheapest cost to each city so far
  dist[src] = 0;
  for (let i = 0; i <= k; i++) {                       // relax edges k+1 times
    const next = dist.slice();                         // snapshot so each round uses only prior costs
    for (const [u, v, w] of flights) {
      if (dist[u] !== Infinity && dist[u] + w < next[v]) next[v] = dist[u] + w; // relax u -> v
    }
    dist = next;
  }
  return dist[dst] === Infinity ? -1 : dist[dst];      // -1 if dst unreachable within k stops
}`,

  "course-schedule": `function canFinish(numCourses, prerequisites) {
  const adj = Array.from({ length: numCourses }, () => []); // prereq -> courses that depend on it
  const indeg = new Array(numCourses).fill(0);         // number of prerequisites per course
  for (const [course, pre] of prerequisites) { adj[pre].push(course); indeg[course]++; }
  const queue = [];
  for (let i = 0; i < numCourses; i++) if (indeg[i] === 0) queue.push(i); // courses with no prereqs
  let done = 0;                                        // count of courses we can schedule
  while (queue.length) {                               // Kahn's topological sort
    const u = queue.shift();
    done++;
    for (const v of adj[u]) if (--indeg[v] === 0) queue.push(v); // freeing a prereq may unlock a course
  }
  return done === numCourses;                          // scheduled everything -> no cycle
}`,

  "alien-dictionary": `function alienOrder(words) {
  const adj = new Map();                               // char -> set of chars that come after it
  const indeg = new Map();                             // char -> number of predecessors
  for (const w of words) for (const c of w) { adj.set(c, adj.get(c) || new Set()); indeg.set(c, indeg.get(c) || 0); }
  for (let i = 0; i < words.length - 1; i++) {         // compare each adjacent pair of words
    const a = words[i], b = words[i + 1];
    const min = Math.min(a.length, b.length);
    let j = 0;
    for (; j < min; j++) {
      if (a[j] !== b[j]) {                              // first differing char gives an ordering rule
        if (!adj.get(a[j]).has(b[j])) { adj.get(a[j]).add(b[j]); indeg.set(b[j], indeg.get(b[j]) + 1); }
        break;
      }
    }
    if (j === min && a.length > b.length) return ""; // "abc" before "ab" is an invalid dictionary
  }
  const queue = [];
  for (const [c, d] of indeg) if (d === 0) queue.push(c); // chars with no predecessor
  let res = "";
  while (queue.length) {                               // topological sort of the letters
    const c = queue.shift();
    res += c;
    for (const nb of adj.get(c)) {
      indeg.set(nb, indeg.get(nb) - 1);                // remove c as a predecessor
      if (indeg.get(nb) === 0) queue.push(nb);         // nb now has all predecessors placed
    }
  }
  return res.length === indeg.size ? res : "";        // leftover chars -> a cycle -> no valid order
}`,

  "daily-temperatures": `function dailyTemperatures(temperatures) {
  const res = new Array(temperatures.length).fill(0);  // default 0 = no warmer day ahead
  const stack = [];                                    // indices of days awaiting a warmer day, temps decreasing
  for (let i = 0; i < temperatures.length; i++) {
    while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
      const j = stack.pop();                            // today is warmer than day j
      res[j] = i - j;                                   // days waited for day j
    }
    stack.push(i);                                      // today waits for its own warmer day
  }
  return res;
}`,

  "next-greater-element": `function nextGreaterElement(nums1, nums2) {
  const nextGreater = new Map();                        // value -> its next greater element in nums2
  const stack = [];                                     // values still waiting for a greater one
  for (const n of nums2) {
    while (stack.length && n > stack[stack.length - 1]) nextGreater.set(stack.pop(), n); // n resolves them
    stack.push(n);
  }
  return nums1.map((n) => nextGreater.has(n) ? nextGreater.get(n) : -1); // look up each query, -1 if none
}`,

  "largest-rectangle-histogram": `function largestRectangleArea(heights) {
  const stack = [];                                     // indices with increasing bar heights
  let best = 0;
  for (let i = 0; i <= heights.length; i++) {           // extra final step (height 0) flushes the stack
    const h = i === heights.length ? 0 : heights[i];
    while (stack.length && heights[stack[stack.length - 1]] >= h) { // current bar ends taller bars
      const height = heights[stack.pop()];              // the bar that can't extend further
      const width = stack.length ? i - stack[stack.length - 1] - 1 : i; // span it can cover
      best = Math.max(best, height * width);
    }
    stack.push(i);
  }
  return best;
}`,

  "climbing-stairs": `function climbStairs(n) {
  let a = 1, b = 1;                                     // ways to reach the previous two steps (Fibonacci)
  for (let i = 0; i < n; i++) { const c = a + b; a = b; b = c; } // ways(i) = ways(i-1) + ways(i-2)
  return a;
}`,

  "unique-paths": `function uniquePaths(m, n) {
  const row = new Array(n).fill(1);                    // top row: exactly one path to each cell
  for (let r = 1; r < m; r++)
    for (let c = 1; c < n; c++)
      row[c] += row[c - 1];                            // paths here = from above (row[c]) + from left (row[c-1])
  return row[n - 1];
}`,

  "longest-common-subsequence": `function longestCommonSubsequence(text1, text2) {
  const m = text1.length, n = text2.length;
  let prev = new Array(n + 1).fill(0);                 // LCS row for the previous character of text1
  for (let i = 1; i <= m; i++) {
    const cur = new Array(n + 1).fill(0);              // LCS row for text1[i-1]
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] === text2[j - 1]) cur[j] = prev[j - 1] + 1; // chars match -> extend diagonal
      else cur[j] = Math.max(prev[j], cur[j - 1]);     // else best of dropping one char from either string
    }
    prev = cur;                                         // roll the row forward
  }
  return prev[n];
}`,

  "coin-change": `function coinChange(coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity);     // dp[a] = fewest coins to make amount a
  dp[0] = 0;                                            // zero coins make amount 0
  for (let a = 1; a <= amount; a++)
    for (const coin of coins)
      if (coin <= a) dp[a] = Math.min(dp[a], dp[a - coin] + 1); // use this coin, add one to the subproblem
  return dp[amount] === Infinity ? -1 : dp[amount];    // Infinity means amount is unreachable
}`,

  "house-robber": `function rob(nums) {
  let prev = 0, cur = 0;                               // prev = best up to i-2, cur = best up to i-1
  for (const n of nums) {
    const take = prev + n;                             // rob this house (skip the adjacent one)
    prev = cur;
    cur = Math.max(cur, take);                          // best of skipping vs robbing this house
  }
  return cur;
}`,

  "word-break": `function wordBreak(s, wordDict) {
  const words = new Set(wordDict);                     // O(1) word lookups
  const dp = new Array(s.length + 1).fill(false);      // dp[i] = can s[0..i) be segmented?
  dp[0] = true;                                         // empty prefix is trivially segmentable
  for (let i = 1; i <= s.length; i++)
    for (let j = 0; j < i; j++)
      if (dp[j] && words.has(s.slice(j, i))) { dp[i] = true; break; } // prefix ok AND s[j..i) is a word
  return dp[s.length];
}`,
};
