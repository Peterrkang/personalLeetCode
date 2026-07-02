/*
 * Problem bank for the in-browser playground (playground.html).
 *
 * Each problem deep-links at playground.html#<id>, and the set mirrors the
 * question list in patterns.html. Edit problems here directly.
 *
 *   id          unique slug, also the URL hash
 *   fnName      the function your code must define
 *   unordered   true if result order doesn't matter (deep-sorted before compare)
 *   cases       { args: [...], expected } — args spread into fnName(...args)
 */
const PROBLEMS = [
  {
    "id": "container-with-most-water",
    "num": 11,
    "title": "Container With Most Water",
    "difficulty": "medium",
    "fnName": "maxArea",
    "complexity": {
      "time": "O(n)",
      "space": "O(1)"
    },
    "description": "<p>Each <code>height[i]</code> is a vertical line at x = i. Pick two lines that, with the x-axis, form a container holding the most water. The water level is capped by the shorter wall: <code>area = (j - i) · min(height[i], height[j])</code>. Return the maximum area.</p><h3 class=\"sec-label\">Visual</h3><svg viewBox='0 0 340 195' width='100%' style='max-width:340px;margin:4px 0 2px;background:#1e1e1e;border:1px solid #3c3c3c;border-radius:6px' xmlns='http://www.w3.org/2000/svg'><rect x='78' y='58' width='214' height='112' fill='rgba(14,99,156,0.35)'/><line x1='78' y1='58' x2='292' y2='58' stroke='#0e639c' stroke-dasharray='4 3'/><rect x='20' y='154' width='24' height='16' fill='#5b595c'/><rect x='54' y='42' width='24' height='128' fill='#4ec9b0'/><rect x='88' y='74' width='24' height='96' fill='#5b595c'/><rect x='122' y='138' width='24' height='32' fill='#5b595c'/><rect x='156' y='90' width='24' height='80' fill='#5b595c'/><rect x='190' y='106' width='24' height='64' fill='#5b595c'/><rect x='224' y='42' width='24' height='128' fill='#5b595c'/><rect x='258' y='122' width='24' height='48' fill='#5b595c'/><rect x='292' y='58' width='24' height='112' fill='#4ec9b0'/><g fill='#858585' font-family='monospace' font-size='10' text-anchor='middle'><text x='32' y='184'>1</text><text x='66' y='184'>8</text><text x='100' y='184'>6</text><text x='134' y='184'>2</text><text x='168' y='184'>5</text><text x='202' y='184'>4</text><text x='236' y='184'>8</text><text x='270' y='184'>3</text><text x='304' y='184'>7</text></g><text x='185' y='52' fill='#4ec9b0' font-family='monospace' font-size='11' text-anchor='middle'>area = 7 x 7 = 49</text></svg><h3 class=\"sec-label\">Examples</h3><pre class=\"examples\"><code>[1,8,6,2,5,4,8,3,7] -> 49   (lines at i=1 h=8 and i=8 h=7)\n[1,1]               -> 1\n[4,3,2,1,4]         -> 16   (the two height-4 walls)\n[1,2,1]             -> 2</code></pre><div class=\"approach\"><b>Approach</b><span class=\"approach-sep\"> · </span>Two pointers at both ends; always move the shorter wall inward. O(n) time, O(1) space.</div>",
    "starter": "function maxArea(height) {\n  // your code here\n}",
    "cases": [
      {
        "args": [
          [
            1,
            8,
            6,
            2,
            5,
            4,
            8,
            3,
            7
          ]
        ],
        "expected": 49
      },
      {
        "args": [
          [
            1,
            1
          ]
        ],
        "expected": 1
      },
      {
        "args": [
          [
            4,
            3,
            2,
            1,
            4
          ]
        ],
        "expected": 16
      },
      {
        "args": [
          [
            1,
            2,
            1
          ]
        ],
        "expected": 2
      },
      {
        "args": [
          [
            6,
            9,
            3,
            4,
            5,
            8
          ]
        ],
        "expected": 32
      },
      {
        "args": [
          [
            100,
            1,
            100
          ]
        ],
        "expected": 200
      },
      {
        "args": [
          []
        ],
        "expected": 0
      },
      {
        "args": [
          [
            5
          ]
        ],
        "expected": 0
      },
      {
        "args": [
          [
            0,
            0
          ]
        ],
        "expected": 0
      },
      {
        "args": [
          [
            5,
            5,
            5,
            5
          ]
        ],
        "expected": 15
      },
      {
        "args": [
          [
            1,
            2,
            4,
            3
          ]
        ],
        "expected": 4
      },
      {
        "args": [
          [
            2,
            3,
            4,
            5,
            18,
            17,
            6
          ]
        ],
        "expected": 17
      }
    ]
  },
  {
    "id": "3sum",
    "num": 15,
    "title": "3Sum",
    "difficulty": "medium",
    "fnName": "threeSum",
    "unordered": true,
    "complexity": {
      "time": "O(n^2)",
      "space": "O(1)"
    },
    "description": "<p>Return all unique triplets <code>[a,b,c]</code> from <code>nums</code> with <code>a + b + c = 0</code>. The result must contain no duplicate triplets (same three values in any order count once).</p><h3 class=\"sec-label\">Examples</h3><pre class=\"examples\"><code>[-1,0,1,2,-1,-4] -> [[-1,-1,2],[-1,0,1]]\n[0,1,1]          -> []\n[0,0,0]          -> [[0,0,0]]\n[-2,0,1,1,2]     -> [[-2,0,2],[-2,1,1]]</code></pre><div class=\"approach\"><b>Approach</b><span class=\"approach-sep\"> · </span>Sort, then fix i and two-pointer the rest; skip duplicate values for i/lo/hi. O(n²). Order of triplets doesn't matter.</div>",
    "starter": "function threeSum(nums) {\n  // your code here\n}",
    "cases": [
      {
        "args": [
          [
            -1,
            0,
            1,
            2,
            -1,
            -4
          ]
        ],
        "expected": [
          [
            -1,
            -1,
            2
          ],
          [
            -1,
            0,
            1
          ]
        ]
      },
      {
        "args": [
          [
            0,
            1,
            1
          ]
        ],
        "expected": []
      },
      {
        "args": [
          [
            0,
            0,
            0
          ]
        ],
        "expected": [
          [
            0,
            0,
            0
          ]
        ]
      },
      {
        "args": [
          [
            -2,
            0,
            0,
            2,
            2
          ]
        ],
        "expected": [
          [
            -2,
            0,
            2
          ]
        ]
      },
      {
        "args": [
          [
            -4,
            -1,
            -1,
            0,
            1,
            2
          ]
        ],
        "expected": [
          [
            -1,
            -1,
            2
          ],
          [
            -1,
            0,
            1
          ]
        ]
      },
      {
        "args": [
          []
        ],
        "expected": []
      },
      {
        "args": [
          [
            0
          ]
        ],
        "expected": []
      },
      {
        "args": [
          [
            0,
            0,
            0,
            0
          ]
        ],
        "expected": [
          [
            0,
            0,
            0
          ]
        ]
      },
      {
        "args": [
          [
            1,
            2,
            3
          ]
        ],
        "expected": []
      },
      {
        "args": [
          [
            -1,
            -1,
            -1
          ]
        ],
        "expected": []
      },
      {
        "args": [
          [
            -2,
            -2,
            4,
            0,
            2
          ]
        ],
        "expected": [
          [
            -2,
            -2,
            4
          ],
          [
            -2,
            0,
            2
          ]
        ]
      },
      {
        "args": [
          [
            -4,
            -2,
            -2,
            0,
            1,
            2,
            2,
            3,
            3,
            4,
            6
          ]
        ],
        "expected": [
          [
            -4,
            -2,
            6
          ],
          [
            -4,
            0,
            4
          ],
          [
            -4,
            1,
            3
          ],
          [
            -4,
            2,
            2
          ],
          [
            -2,
            -2,
            4
          ],
          [
            -2,
            0,
            2
          ]
        ]
      }
    ]
  },
  {
    "id": "valid-palindrome",
    "num": 125,
    "title": "Valid Palindrome",
    "difficulty": "easy",
    "fnName": "isPalindrome",
    "complexity": {
      "time": "O(n)",
      "space": "O(1)"
    },
    "description": "<p>After lowercasing and removing all non-alphanumeric characters, return true if the string reads the same forward and backward. An empty cleaned string counts as a palindrome.</p><h3 class=\"sec-label\">Examples</h3><pre class=\"examples\"><code>\"A man, a plan, a canal: Panama\" -> true\n\"race a car\"                     -> false\n\" \"                              -> true   (empty after cleaning)\n\"0P\"                             -> false  (digits are kept)</code></pre><div class=\"approach\"><b>Approach</b><span class=\"approach-sep\"> · </span>Two pointers from both ends; skip non-alphanumerics, compare lowercased. O(n) time, O(1) space.</div>",
    "starter": "function isPalindrome(s) {\n  // your code here\n}",
    "cases": [
      {
        "args": [
          "A man, a plan, a canal: Panama"
        ],
        "expected": true
      },
      {
        "args": [
          "race a car"
        ],
        "expected": false
      },
      {
        "args": [
          " "
        ],
        "expected": true
      },
      {
        "args": [
          "0P"
        ],
        "expected": false
      },
      {
        "args": [
          "12321"
        ],
        "expected": true
      },
      {
        "args": [
          ""
        ],
        "expected": true
      },
      {
        "args": [
          "a"
        ],
        "expected": true
      },
      {
        "args": [
          ".,"
        ],
        "expected": true
      },
      {
        "args": [
          "ab_a"
        ],
        "expected": true
      },
      {
        "args": [
          "abba"
        ],
        "expected": true
      },
      {
        "args": [
          "abca"
        ],
        "expected": false
      },
      {
        "args": [
          "Was it a car or a cat I saw?"
        ],
        "expected": true
      }
    ]
  },
  {
    "id": "two-sum-ii",
    "num": 167,
    "title": "Two Sum II (Sorted)",
    "difficulty": "medium",
    "fnName": "twoSumII",
    "complexity": {
      "time": "O(n)",
      "space": "O(1)"
    },
    "description": "<p><code>numbers</code> is sorted non-decreasing. Return the 1-indexed positions <code>[i, j]</code> (i &lt; j) of the two values that sum to <code>target</code>. Exactly one solution exists; use O(1) extra space.</p><h3 class=\"sec-label\">Examples</h3><pre class=\"examples\"><code>[2,7,11,15], target=9 -> [1,2]\n[2,3,4],     target=6 -> [1,3]\n[-1,0],      target=-1 -> [1,2]\n[1,2,3,4,4,9,56,90], target=8 -> [4,5]</code></pre><div class=\"approach\"><b>Approach</b><span class=\"approach-sep\"> · </span>Two pointers (lo, hi): sum too small -> lo++, too big -> hi--. O(n) time, O(1) space.</div>",
    "starter": "function twoSumII(numbers, target) {\n  // your code here\n}",
    "cases": [
      {
        "args": [
          [
            2,
            7,
            11,
            15
          ],
          9
        ],
        "expected": [
          1,
          2
        ]
      },
      {
        "args": [
          [
            2,
            3,
            4
          ],
          6
        ],
        "expected": [
          1,
          3
        ]
      },
      {
        "args": [
          [
            -1,
            0
          ],
          -1
        ],
        "expected": [
          1,
          2
        ]
      },
      {
        "args": [
          [
            1,
            3,
            3,
            4
          ],
          6
        ],
        "expected": [
          2,
          3
        ]
      },
      {
        "args": [
          [
            5,
            25,
            75
          ],
          100
        ],
        "expected": [
          2,
          3
        ]
      },
      {
        "args": [
          [
            1,
            2,
            3,
            4,
            4,
            9,
            56,
            90
          ],
          8
        ],
        "expected": [
          4,
          5
        ]
      },
      {
        "args": [
          [
            0,
            0,
            3,
            4
          ],
          0
        ],
        "expected": [
          1,
          2
        ]
      },
      {
        "args": [
          [
            -3,
            -1,
            2,
            5
          ],
          1
        ],
        "expected": [
          2,
          3
        ]
      },
      {
        "args": [
          [
            1,
            2
          ],
          3
        ],
        "expected": [
          1,
          2
        ]
      },
      {
        "args": [
          [
            -10,
            -5,
            0,
            5,
            10
          ],
          0
        ],
        "expected": [
          1,
          5
        ]
      }
    ]
  },
  {
    "id": "top-k-frequent",
    "num": 347,
    "title": "Top K Frequent Elements",
    "difficulty": "medium",
    "fnName": "topKFrequent",
    "unordered": true,
    "complexity": {
      "time": "O(n)",
      "space": "O(n)"
    },
    "description": "<p>Return the <code>k</code> most frequent elements of <code>nums</code>, in any order. The answer is unique, and you should beat O(n log n).</p><h3 class=\"sec-label\">Examples</h3><pre class=\"examples\"><code>[1,1,1,2,2,3], k=2 -> [1,2]\n[1], k=1           -> [1]\n[4,4,4,5,5,6], k=2 -> [4,5]\n[-1,-1,2,2,2,3], k=1 -> [2]</code></pre><div class=\"approach\"><b>Approach</b><span class=\"approach-sep\"> · </span>Count with a Map, then bucket-sort by frequency for O(n) (or a size-k min-heap for O(n log k). Result order doesn't matter.</div>",
    "starter": "function topKFrequent(nums, k) {\n  // your code here\n}",
    "cases": [
      {
        "args": [
          [
            1,
            1,
            1,
            2,
            2,
            3
          ],
          2
        ],
        "expected": [
          1,
          2
        ]
      },
      {
        "args": [
          [
            1
          ],
          1
        ],
        "expected": [
          1
        ]
      },
      {
        "args": [
          [
            4,
            4,
            5,
            5,
            6
          ],
          3
        ],
        "expected": [
          4,
          5,
          6
        ]
      },
      {
        "args": [
          [
            5,
            5,
            5,
            5,
            6,
            6,
            7
          ],
          2
        ],
        "expected": [
          5,
          6
        ]
      },
      {
        "args": [
          [
            1,
            2,
            3,
            4,
            5
          ],
          5
        ],
        "expected": [
          1,
          2,
          3,
          4,
          5
        ]
      },
      {
        "args": [
          [
            7,
            7,
            8,
            8,
            8,
            9
          ],
          2
        ],
        "expected": [
          8,
          7
        ]
      },
      {
        "args": [
          [
            -1,
            -1,
            -1,
            2,
            2,
            3
          ],
          1
        ],
        "expected": [
          -1
        ]
      },
      {
        "args": [
          [
            10
          ],
          1
        ],
        "expected": [
          10
        ]
      }
    ]
  },
  {
    "id": "linked-list-cycle",
    "num": 141,
    "title": "Linked List Cycle",
    "difficulty": "easy",
    "fnName": "hasCycle",
    "io": "linkedlist-cycle",
    "complexity": {
      "time": "O(n)",
      "space": "O(1)"
    },
    "description": "<p>Given the <code>head</code> of a linked list, return true if it has a cycle. (Cases are shown as <code>head</code> values plus <code>pos</code> — the index the tail's next links to, -1 = no cycle — but your function only receives the built <code>head</code>.)</p><h3 class=\"sec-label\">Visual</h3><svg viewBox='0 0 340 130' width='100%' style='max-width:340px;margin:4px 0 2px;background:#1e1e1e;border:1px solid #3c3c3c;border-radius:6px' xmlns='http://www.w3.org/2000/svg'><defs><marker id='ahc' markerWidth='8' markerHeight='8' refX='5' refY='3' orient='auto'><path d='M0 0 L6 3 L0 6 z' fill='#858585'/></marker></defs><line x1='58' y1='45' x2='100' y2='45' stroke='#858585' marker-end='url(#ahc)'/><line x1='138' y1='45' x2='180' y2='45' stroke='#858585' marker-end='url(#ahc)'/><line x1='218' y1='45' x2='260' y2='45' stroke='#858585' marker-end='url(#ahc)'/><path d='M280 61 C 280 112, 120 112, 120 63' fill='none' stroke='#0e639c' stroke-dasharray='4 3' marker-end='url(#ahc)'/><circle cx='40' cy='45' r='16' fill='#2d2d30' stroke='#5b595c'/><circle cx='120' cy='45' r='16' fill='#2d2d30' stroke='#4ec9b0' stroke-width='2'/><circle cx='200' cy='45' r='16' fill='#2d2d30' stroke='#5b595c'/><circle cx='280' cy='45' r='16' fill='#2d2d30' stroke='#5b595c'/><g fill='#fcfcfa' font-family='monospace' font-size='12' text-anchor='middle'><text x='40' y='49'>3</text><text x='120' y='49'>2</text><text x='200' y='49'>0</text><text x='280' y='49'>-4</text></g><text x='200' y='126' fill='#0e639c' font-family='monospace' font-size='11' text-anchor='middle'>tail (-4) links back to pos 1 -> cycle</text></svg><h3 class=\"sec-label\">Examples</h3><pre class=\"examples\"><code>head=[3,2,0,-4], pos=1 -> true\nhead=[1,2], pos=0      -> true\nhead=[1], pos=-1       -> false\nhead=[], pos=-1        -> false</code></pre><div class=\"approach\"><b>Approach</b><span class=\"approach-sep\"> · </span>Floyd's tortoise & hare: slow +1, fast +2; they meet iff there's a cycle. O(n) time, O(1) space.</div>",
    "starter": "function hasCycle(head) {\n  // your code here\n}",
    "cases": [
      {
        "args": [
          [
            3,
            2,
            0,
            -4
          ],
          1
        ],
        "expected": true
      },
      {
        "args": [
          [
            1,
            2
          ],
          0
        ],
        "expected": true
      },
      {
        "args": [
          [
            1
          ],
          -1
        ],
        "expected": false
      },
      {
        "args": [
          [],
          -1
        ],
        "expected": false
      },
      {
        "args": [
          [
            1,
            2,
            3,
            4
          ],
          -1
        ],
        "expected": false
      },
      {
        "args": [
          [],
          0
        ],
        "expected": false
      },
      {
        "args": [
          [
            1
          ],
          0
        ],
        "expected": true
      },
      {
        "args": [
          [
            1,
            2,
            3
          ],
          -1
        ],
        "expected": false
      },
      {
        "args": [
          [
            1,
            2,
            3,
            4,
            5
          ],
          4
        ],
        "expected": true
      },
      {
        "args": [
          [
            1,
            2,
            3,
            4,
            5
          ],
          0
        ],
        "expected": true
      }
    ]
  },
  {
    "id": "middle-of-linked-list",
    "num": 876,
    "title": "Middle of the Linked List",
    "difficulty": "easy",
    "fnName": "middleNode",
    "io": "linkedlist",
    "complexity": {
      "time": "O(n)",
      "space": "O(1)"
    },
    "description": "<p>Given the <code>head</code> of a singly linked list, return its middle node. For an even length, return the second of the two middle nodes. (Shown as the values from the returned node to the end.)</p><h3 class=\"sec-label\">Visual</h3><svg viewBox='0 0 350 120' width='100%' style='max-width:350px;margin:4px 0 2px;background:#1e1e1e;border:1px solid #3c3c3c;border-radius:6px' xmlns='http://www.w3.org/2000/svg'><defs><marker id='ahm' markerWidth='8' markerHeight='8' refX='5' refY='3' orient='auto'><path d='M0 0 L6 3 L0 6 z' fill='#858585'/></marker></defs><line x1='51' y1='62' x2='87' y2='62' stroke='#858585' marker-end='url(#ahm)'/><line x1='119' y1='62' x2='155' y2='62' stroke='#858585' marker-end='url(#ahm)'/><line x1='187' y1='62' x2='223' y2='62' stroke='#858585' marker-end='url(#ahm)'/><line x1='255' y1='62' x2='291' y2='62' stroke='#858585' marker-end='url(#ahm)'/><circle cx='35' cy='62' r='16' fill='#2d2d30' stroke='#5b595c'/><circle cx='103' cy='62' r='16' fill='#2d2d30' stroke='#5b595c'/><circle cx='171' cy='62' r='16' fill='#2d2d30' stroke='#4ec9b0' stroke-width='2'/><circle cx='239' cy='62' r='16' fill='#2d2d30' stroke='#5b595c'/><circle cx='307' cy='62' r='16' fill='#2d2d30' stroke='#5b595c'/><g fill='#fcfcfa' font-family='monospace' font-size='12' text-anchor='middle'><text x='35' y='66'>1</text><text x='103' y='66'>2</text><text x='171' y='66'>3</text><text x='239' y='66'>4</text><text x='307' y='66'>5</text></g><text x='171' y='22' fill='#4ec9b0' font-family='monospace' font-size='11' text-anchor='middle'>middle</text><line x1='171' y1='28' x2='171' y2='42' stroke='#4ec9b0'/><text x='250' y='104' fill='#858585' font-family='monospace' font-size='11' text-anchor='middle'>returns [3,4,5]</text></svg><h3 class=\"sec-label\">Examples</h3><pre class=\"examples\"><code>[1,2,3,4,5]   -> [3,4,5]\n[1,2,3,4,5,6] -> [4,5,6]   (second middle)\n[1]           -> [1]\n[1,2]         -> [2]</code></pre><div class=\"approach\"><b>Approach</b><span class=\"approach-sep\"> · </span>Fast/slow pointers: slow +1, fast +2; when fast falls off, slow is the (second) middle. O(n) time, O(1) space.</div>",
    "starter": "function middleNode(head) {\n  // your code here\n}",
    "cases": [
      {
        "args": [
          [
            1,
            2,
            3,
            4,
            5
          ]
        ],
        "expected": [
          3,
          4,
          5
        ]
      },
      {
        "args": [
          [
            1,
            2,
            3,
            4,
            5,
            6
          ]
        ],
        "expected": [
          4,
          5,
          6
        ]
      },
      {
        "args": [
          [
            1
          ]
        ],
        "expected": [
          1
        ]
      },
      {
        "args": [
          [
            1,
            2
          ]
        ],
        "expected": [
          2
        ]
      },
      {
        "args": [
          [
            1,
            2,
            3
          ]
        ],
        "expected": [
          2,
          3
        ]
      },
      {
        "args": [
          [
            1,
            2,
            3,
            4
          ]
        ],
        "expected": [
          3,
          4
        ]
      },
      {
        "args": [
          [
            1,
            2,
            3,
            4,
            5,
            6,
            7
          ]
        ],
        "expected": [
          4,
          5,
          6,
          7
        ]
      },
      {
        "args": [
          [
            10,
            20
          ]
        ],
        "expected": [
          20
        ]
      }
    ]
  },
  {
    "id": "happy-number",
    "num": 202,
    "title": "Happy Number",
    "difficulty": "easy",
    "fnName": "isHappy",
    "complexity": {
      "time": "O(log n)",
      "space": "O(1)"
    },
    "description": "<p>Repeatedly replace <code>n</code> with the sum of the squares of its digits. Return true if it eventually reaches 1, false if it loops forever.</p><h3 class=\"sec-label\">Examples</h3><pre class=\"examples\"><code>19 -> true   (82 -> 68 -> 100 -> 1)\n7  -> true\n2  -> false  (enters a cycle)\n1  -> true</code></pre><div class=\"approach\"><b>Approach</b><span class=\"approach-sep\"> · </span>Detect a cycle in the digit-square sequence with a seen-set or Floyd's two pointers. O(log n) per step, O(1) space.</div>",
    "starter": "function isHappy(n) {\n  // your code here\n}",
    "cases": [
      {
        "args": [
          19
        ],
        "expected": true
      },
      {
        "args": [
          2
        ],
        "expected": false
      },
      {
        "args": [
          1
        ],
        "expected": true
      },
      {
        "args": [
          7
        ],
        "expected": true
      },
      {
        "args": [
          4
        ],
        "expected": false
      },
      {
        "args": [
          10
        ],
        "expected": true
      },
      {
        "args": [
          23
        ],
        "expected": true
      },
      {
        "args": [
          100
        ],
        "expected": true
      },
      {
        "args": [
          2147483647
        ],
        "expected": false
      },
      {
        "args": [
          13
        ],
        "expected": true
      }
    ]
  },
  {
    "id": "longest-substring-without-repeating",
    "num": 3,
    "title": "Longest Substring Without Repeating Characters",
    "difficulty": "medium",
    "fnName": "lengthOfLongestSubstring",
    "complexity": {
      "time": "O(n)",
      "space": "O(k)"
    },
    "description": "<p>Return the length of the longest substring (contiguous) of <code>s</code> that contains no repeating characters.</p><h3 class=\"sec-label\">Examples</h3><pre class=\"examples\"><code>\"abcabcbb\" -> 3   (\"abc\")\n\"bbbbb\"    -> 1   (\"b\")\n\"pwwkew\"   -> 3   (\"wke\"; \"pwke\" is a subsequence)\n\"\"         -> 0</code></pre><div class=\"approach\"><b>Approach</b><span class=\"approach-sep\"> · </span>Sliding window with a last-seen index map; jump the left edge past any repeat. O(n) time, O(k) space.</div>",
    "starter": "function lengthOfLongestSubstring(s) {\n  // your code here\n}",
    "cases": [
      {
        "args": [
          "abcabcbb"
        ],
        "expected": 3
      },
      {
        "args": [
          "bbbbb"
        ],
        "expected": 1
      },
      {
        "args": [
          "pwwkew"
        ],
        "expected": 3
      },
      {
        "args": [
          ""
        ],
        "expected": 0
      },
      {
        "args": [
          "dvdf"
        ],
        "expected": 3
      },
      {
        "args": [
          " "
        ],
        "expected": 1
      },
      {
        "args": [
          "au"
        ],
        "expected": 2
      },
      {
        "args": [
          "abba"
        ],
        "expected": 2
      },
      {
        "args": [
          "tmmzuxt"
        ],
        "expected": 5
      },
      {
        "args": [
          "aab"
        ],
        "expected": 2
      },
      {
        "args": [
          "abcdefg"
        ],
        "expected": 7
      }
    ]
  },
  {
    "id": "minimum-window-substring",
    "num": 76,
    "title": "Minimum Window Substring",
    "difficulty": "hard",
    "fnName": "minWindow",
    "complexity": {
      "time": "O(n)",
      "space": "O(k)"
    },
    "description": "<p>Return the smallest substring of <code>s</code> that contains every character of <code>t</code> including multiplicity, or <code>\"\"</code> if none exists.</p><h3 class=\"sec-label\">Examples</h3><pre class=\"examples\"><code>\"ADOBECODEBANC\", t=\"ABC\" -> \"BANC\"\n\"a\", t=\"a\"               -> \"a\"\n\"a\", t=\"aa\"              -> \"\"   (only one a available)\n\"cabwefgewcwaefgcf\", t=\"cae\" -> \"cwae\"</code></pre><div class=\"approach\"><b>Approach</b><span class=\"approach-sep\"> · </span>Sliding window with a need-count map and a 'missing' counter; expand to satisfy, contract to minimize. O(|s|+|t|).</div>",
    "starter": "function minWindow(s, t) {\n  // your code here\n}",
    "cases": [
      {
        "args": [
          "ADOBECODEBANC",
          "ABC"
        ],
        "expected": "BANC"
      },
      {
        "args": [
          "a",
          "a"
        ],
        "expected": "a"
      },
      {
        "args": [
          "a",
          "aa"
        ],
        "expected": ""
      },
      {
        "args": [
          "ab",
          "b"
        ],
        "expected": "b"
      },
      {
        "args": [
          "a",
          "b"
        ],
        "expected": ""
      },
      {
        "args": [
          "aa",
          "aa"
        ],
        "expected": "aa"
      },
      {
        "args": [
          "abc",
          "cba"
        ],
        "expected": "abc"
      },
      {
        "args": [
          "cabwefgewcwaefgcf",
          "cae"
        ],
        "expected": "cwae"
      },
      {
        "args": [
          "bba",
          "ab"
        ],
        "expected": "ba"
      }
    ]
  },
  {
    "id": "max-consecutive-ones-iii",
    "num": 1004,
    "title": "Max Consecutive Ones III",
    "difficulty": "medium",
    "fnName": "longestOnes",
    "complexity": {
      "time": "O(n)",
      "space": "O(1)"
    },
    "description": "<p>Given a binary array and integer <code>k</code>, return the longest run of 1s achievable by flipping at most <code>k</code> zeros — i.e. the longest window holding at most k zeros.</p><h3 class=\"sec-label\">Examples</h3><pre class=\"examples\"><code>[1,1,1,0,0,0,1,1,1,1,0], k=2 -> 6\n[0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k=3 -> 10\n[0,0,0,0], k=0 -> 0\n[1,1,1,1], k=0 -> 4</code></pre><div class=\"approach\"><b>Approach</b><span class=\"approach-sep\"> · </span>Sliding window: grow right; while zeros inside exceed k, shrink from the left. Track max width. O(n), O(1).</div>",
    "starter": "function longestOnes(nums, k) {\n  // your code here\n}",
    "cases": [
      {
        "args": [
          [
            1,
            1,
            1,
            0,
            0,
            0,
            1,
            1,
            1,
            1,
            0
          ],
          2
        ],
        "expected": 6
      },
      {
        "args": [
          [
            0,
            0,
            1,
            1,
            0,
            0,
            1,
            1,
            1,
            0,
            1,
            1,
            0,
            0,
            0,
            1,
            1,
            1,
            1
          ],
          3
        ],
        "expected": 10
      },
      {
        "args": [
          [
            0,
            0,
            0
          ],
          0
        ],
        "expected": 0
      },
      {
        "args": [
          [
            1,
            1,
            1
          ],
          0
        ],
        "expected": 3
      },
      {
        "args": [
          [
            1,
            1,
            1,
            1
          ],
          0
        ],
        "expected": 4
      },
      {
        "args": [
          [
            0,
            0,
            0,
            0
          ],
          4
        ],
        "expected": 4
      },
      {
        "args": [
          [
            1,
            0,
            1,
            0,
            1
          ],
          1
        ],
        "expected": 3
      },
      {
        "args": [
          [
            0
          ],
          0
        ],
        "expected": 0
      },
      {
        "args": [
          [
            1,
            0,
            0,
            1,
            1,
            0,
            1
          ],
          2
        ],
        "expected": 5
      }
    ]
  },
  {
    "id": "subarray-sum-equals-k",
    "num": 560,
    "title": "Subarray Sum Equals K",
    "difficulty": "medium",
    "fnName": "subarraySum",
    "complexity": {
      "time": "O(n)",
      "space": "O(n)"
    },
    "description": "<p>Return the number of contiguous subarrays of <code>nums</code> whose elements sum to exactly <code>k</code>. The array may contain negatives, so a sliding window does not work.</p><h3 class=\"sec-label\">Examples</h3><pre class=\"examples\"><code>[1,1,1], k=2 -> 2\n[1,2,3], k=3 -> 2\n[1,-1,0], k=0 -> 3\n[3,4,7,2,-3,1,4,2], k=7 -> 4</code></pre><div class=\"approach\"><b>Approach</b><span class=\"approach-sep\"> · </span>Running prefix sum + a hash map of counts; add how many times (pre - k) was seen. Seed {0:1}. O(n) time, O(n) space.</div>",
    "starter": "function subarraySum(nums, k) {\n  // your code here\n}",
    "cases": [
      {
        "args": [
          [
            1,
            1,
            1
          ],
          2
        ],
        "expected": 2
      },
      {
        "args": [
          [
            1,
            2,
            3
          ],
          3
        ],
        "expected": 2
      },
      {
        "args": [
          [
            1
          ],
          0
        ],
        "expected": 0
      },
      {
        "args": [
          [
            -1,
            -1,
            1
          ],
          0
        ],
        "expected": 1
      },
      {
        "args": [
          [
            1
          ],
          1
        ],
        "expected": 1
      },
      {
        "args": [
          [
            0,
            0,
            0
          ],
          0
        ],
        "expected": 6
      },
      {
        "args": [
          [
            3,
            4,
            7,
            2,
            -3,
            1,
            4,
            2
          ],
          7
        ],
        "expected": 4
      },
      {
        "args": [
          [
            1,
            -1,
            0
          ],
          0
        ],
        "expected": 3
      },
      {
        "args": [
          [
            100
          ],
          50
        ],
        "expected": 0
      }
    ]
  },
  {
    "id": "range-sum-query",
    "num": 303,
    "title": "Range Sum Query - Immutable",
    "difficulty": "easy",
    "fnName": "NumArray",
    "io": "class",
    "complexity": {
      "time": "O(n + q)",
      "space": "O(n)"
    },
    "description": "<p>Given an integer array <code>nums</code>, implement <code>NumArray</code>: the constructor takes <code>nums</code>, and <code>sumRange(left, right)</code> returns the inclusive sum <code>nums[left] + ... + nums[right]</code>. <code>nums</code> never changes.</p><h3 class=\"sec-label\">Examples</h3><pre class=\"examples\"><code>NumArray([-2,0,3,-5,2,-1])\nsumRange(0, 2) -> 1\nsumRange(2, 5) -> -1\nsumRange(0, 5) -> -3</code></pre><div class=\"approach\"><b>Approach</b><span class=\"approach-sep\"> · </span>Precompute prefix sums in the constructor; each query is pre[right+1] - pre[left] in O(1). Build O(n), answer O(1)/query.</div>",
    "starter": "class NumArray {\n  constructor(nums) {\n    // your code here\n  }\n\n  sumRange(left, right) {\n    // your code here\n  }\n}",
    "cases": [
      {
        "calls": [
          [
            "NumArray",
            [
              -2,
              0,
              3,
              -5,
              2,
              -1
            ]
          ],
          [
            "sumRange",
            0,
            2
          ],
          [
            "sumRange",
            2,
            5
          ],
          [
            "sumRange",
            0,
            5
          ]
        ],
        "expected": [
          null,
          1,
          -1,
          -3
        ]
      },
      {
        "calls": [
          [
            "NumArray",
            [
              1,
              2,
              3,
              4
            ]
          ],
          [
            "sumRange",
            0,
            0
          ],
          [
            "sumRange",
            1,
            3
          ]
        ],
        "expected": [
          null,
          1,
          9
        ]
      },
      {
        "calls": [
          [
            "NumArray",
            [
              5
            ]
          ],
          [
            "sumRange",
            0,
            0
          ]
        ],
        "expected": [
          null,
          5
        ]
      },
      {
        "calls": [
          [
            "NumArray",
            [
              1,
              -1,
              1,
              -1
            ]
          ],
          [
            "sumRange",
            0,
            3
          ],
          [
            "sumRange",
            1,
            2
          ],
          [
            "sumRange",
            2,
            2
          ]
        ],
        "expected": [
          null,
          0,
          0,
          1
        ]
      },
      {
        "calls": [
          [
            "NumArray",
            [
              -5,
              -4,
              -3
            ]
          ],
          [
            "sumRange",
            0,
            2
          ]
        ],
        "expected": [
          null,
          -12
        ]
      }
    ]
  },
  {
    "id": "contiguous-array",
    "num": 525,
    "title": "Contiguous Array",
    "difficulty": "medium",
    "fnName": "findMaxLength",
    "complexity": {
      "time": "O(n)",
      "space": "O(n)"
    },
    "description": "<p>Given a binary array, return the length of the longest contiguous subarray with an equal number of 0s and 1s.</p><h3 class=\"sec-label\">Examples</h3><pre class=\"examples\"><code>[0,1]     -> 2\n[0,1,0]   -> 2\n[0,0,1,0,0,0,1,1] -> 6\n[1,1,1,1] -> 0</code></pre><div class=\"approach\"><b>Approach</b><span class=\"approach-sep\"> · </span>Treat 0 as -1; a balanced subarray has running sum 0. Map each prefix sum to its first index. Seed {0:-1}. O(n), O(n).</div>",
    "starter": "function findMaxLength(nums) {\n  // your code here\n}",
    "cases": [
      {
        "args": [
          [
            0,
            1
          ]
        ],
        "expected": 2
      },
      {
        "args": [
          [
            0,
            1,
            0
          ]
        ],
        "expected": 2
      },
      {
        "args": [
          [
            0,
            0,
            1,
            0,
            0,
            0,
            1,
            1
          ]
        ],
        "expected": 6
      },
      {
        "args": [
          [
            1,
            1,
            1
          ]
        ],
        "expected": 0
      },
      {
        "args": [
          [
            0,
            1,
            1,
            0,
            1,
            1,
            1,
            0
          ]
        ],
        "expected": 4
      },
      {
        "args": [
          [
            0
          ]
        ],
        "expected": 0
      },
      {
        "args": [
          [
            1
          ]
        ],
        "expected": 0
      },
      {
        "args": [
          [
            1,
            1,
            1,
            0,
            0,
            0
          ]
        ],
        "expected": 6
      },
      {
        "args": [
          [
            0,
            1,
            0,
            1
          ]
        ],
        "expected": 4
      }
    ]
  },
  {
    "id": "search-insert-position",
    "num": 35,
    "title": "Search Insert Position",
    "difficulty": "easy",
    "fnName": "searchInsert",
    "complexity": {
      "time": "O(log n)",
      "space": "O(1)"
    },
    "description": "<p>Given a sorted array of distinct ints and a <code>target</code>, return its index if present, else the index where it would be inserted to keep the array sorted. Must run in O(log n).</p><h3 class=\"sec-label\">Examples</h3><pre class=\"examples\"><code>[1,3,5,6], target=5 -> 2\n[1,3,5,6], target=2 -> 1\n[1,3,5,6], target=7 -> 4\n[1,3,5,6], target=0 -> 0</code></pre><div class=\"approach\"><b>Approach</b><span class=\"approach-sep\"> · </span>Binary search for the lower bound (first index with value ≥ target). O(log n) time, O(1) space.</div>",
    "starter": "function searchInsert(nums, target) {\n  // your code here\n}",
    "cases": [
      {
        "args": [
          [
            1,
            3,
            5,
            6
          ],
          5
        ],
        "expected": 2
      },
      {
        "args": [
          [
            1,
            3,
            5,
            6
          ],
          2
        ],
        "expected": 1
      },
      {
        "args": [
          [
            1,
            3,
            5,
            6
          ],
          7
        ],
        "expected": 4
      },
      {
        "args": [
          [
            1,
            3,
            5,
            6
          ],
          0
        ],
        "expected": 0
      },
      {
        "args": [
          [
            1
          ],
          0
        ],
        "expected": 0
      },
      {
        "args": [
          [
            1
          ],
          2
        ],
        "expected": 1
      },
      {
        "args": [
          [
            1,
            3,
            5,
            7,
            9
          ],
          6
        ],
        "expected": 3
      }
    ]
  },
  {
    "id": "koko-eating-bananas",
    "num": 875,
    "title": "Koko Eating Bananas",
    "difficulty": "medium",
    "fnName": "minEatingSpeed",
    "complexity": {
      "time": "O(n log m)",
      "space": "O(1)"
    },
    "description": "<p>Koko eats up to <code>k</code> bananas/hour from one pile each hour (leftovers under k still take the whole hour). Return the minimum integer <code>k</code> so she finishes all <code>piles</code> within <code>h</code> hours.</p><h3 class=\"sec-label\">Examples</h3><pre class=\"examples\"><code>[3,6,7,11], h=8  -> 4\n[30,11,23,4,20], h=5 -> 30\n[30,11,23,4,20], h=6 -> 23\n[312884470], h=968709470 -> 1</code></pre><div class=\"approach\"><b>Approach</b><span class=\"approach-sep\"> · </span>Binary search k in [1, max(piles)]; hours = sum(ceil(pile/k)). Keep the smallest k that fits h. O(n log maxPile).</div>",
    "starter": "function minEatingSpeed(piles, h) {\n  // your code here\n}",
    "cases": [
      {
        "args": [
          [
            3,
            6,
            7,
            11
          ],
          8
        ],
        "expected": 4
      },
      {
        "args": [
          [
            30,
            11,
            23,
            4,
            20
          ],
          5
        ],
        "expected": 30
      },
      {
        "args": [
          [
            30,
            11,
            23,
            4,
            20
          ],
          6
        ],
        "expected": 23
      },
      {
        "args": [
          [
            1
          ],
          1
        ],
        "expected": 1
      },
      {
        "args": [
          [
            1000000000
          ],
          2
        ],
        "expected": 500000000
      },
      {
        "args": [
          [
            3,
            6,
            7,
            11
          ],
          4
        ],
        "expected": 11
      },
      {
        "args": [
          [
            312884470
          ],
          312884469
        ],
        "expected": 2
      },
      {
        "args": [
          [
            1,
            1,
            1,
            999999999
          ],
          10
        ],
        "expected": 142857143
      }
    ]
  },
  {
    "id": "find-min-rotated-sorted-array",
    "num": 153,
    "title": "Find Minimum in Rotated Sorted Array",
    "difficulty": "medium",
    "fnName": "findMin",
    "complexity": {
      "time": "O(log n)",
      "space": "O(1)"
    },
    "description": "<p>A sorted array of distinct ints was rotated some number of times. Return its minimum element in O(log n).</p><h3 class=\"sec-label\">Visual</h3><svg viewBox='0 0 340 150' width='100%' style='max-width:340px;margin:4px 0 2px;background:#1e1e1e;border:1px solid #3c3c3c;border-radius:6px' xmlns='http://www.w3.org/2000/svg'><polyline points='30,68 75,55 120,42 165,29 210,120 255,107 300,94' fill='none' stroke='#5b595c' stroke-width='2'/><circle cx='30' cy='68' r='4' fill='#5b595c'/><circle cx='75' cy='55' r='4' fill='#5b595c'/><circle cx='120' cy='42' r='4' fill='#5b595c'/><circle cx='165' cy='29' r='4' fill='#5b595c'/><circle cx='210' cy='120' r='6' fill='#4ec9b0'/><circle cx='255' cy='107' r='4' fill='#5b595c'/><circle cx='300' cy='94' r='4' fill='#5b595c'/><g fill='#dcdcaa' font-family='monospace' font-size='10' text-anchor='middle'><text x='30' y='58'>4</text><text x='75' y='45'>5</text><text x='120' y='32'>6</text><text x='165' y='19'>7</text><text x='255' y='99'>1</text><text x='300' y='86'>2</text></g><text x='210' y='138' fill='#4ec9b0' font-family='monospace' font-size='11' text-anchor='middle'>min = 0 (the drop)</text></svg><h3 class=\"sec-label\">Examples</h3><pre class=\"examples\"><code>[3,4,5,1,2]     -> 1\n[4,5,6,7,0,1,2] -> 0\n[11,13,15,17]   -> 11   (rotated back to sorted)\n[2,1]           -> 1</code></pre><div class=\"approach\"><b>Approach</b><span class=\"approach-sep\"> · </span>Binary search vs the right end: if nums[mid] > nums[hi], min is right of mid; else at mid or left. O(log n).</div>",
    "starter": "function findMin(nums) {\n  // your code here\n}",
    "cases": [
      {
        "args": [
          [
            3,
            4,
            5,
            1,
            2
          ]
        ],
        "expected": 1
      },
      {
        "args": [
          [
            4,
            5,
            6,
            7,
            0,
            1,
            2
          ]
        ],
        "expected": 0
      },
      {
        "args": [
          [
            11,
            13,
            15,
            17
          ]
        ],
        "expected": 11
      },
      {
        "args": [
          [
            2,
            1
          ]
        ],
        "expected": 1
      },
      {
        "args": [
          [
            1
          ]
        ],
        "expected": 1
      },
      {
        "args": [
          [
            5,
            1,
            2,
            3,
            4
          ]
        ],
        "expected": 1
      },
      {
        "args": [
          [
            1,
            2,
            3,
            4,
            5
          ]
        ],
        "expected": 1
      }
    ]
  },
  {
    "id": "kth-largest-element",
    "num": 215,
    "title": "Kth Largest Element in an Array",
    "difficulty": "medium",
    "fnName": "findKthLargest",
    "complexity": {
      "time": "O(n) avg",
      "space": "O(1)"
    },
    "description": "<p>Return the <code>k</code>th largest element in <code>nums</code> (kth in sorted order, with duplicates counted — not the kth distinct value).</p><h3 class=\"sec-label\">Examples</h3><pre class=\"examples\"><code>[3,2,1,5,6,4], k=2 -> 5\n[3,2,3,1,2,4,5,5,6], k=4 -> 4\n[1], k=1 -> 1\n[7,6,5,4,3,2,1], k=7 -> 1</code></pre><div class=\"approach\"><b>Approach</b><span class=\"approach-sep\"> · </span>Quickselect around a random pivot: O(n) average, O(1) extra. Simpler: a size-k min-heap, O(n log k).</div>",
    "starter": "function findKthLargest(nums, k) {\n  // your code here\n}",
    "cases": [
      {
        "args": [
          [
            3,
            2,
            1,
            5,
            6,
            4
          ],
          2
        ],
        "expected": 5
      },
      {
        "args": [
          [
            3,
            2,
            3,
            1,
            2,
            4,
            5,
            5,
            6
          ],
          4
        ],
        "expected": 4
      },
      {
        "args": [
          [
            1
          ],
          1
        ],
        "expected": 1
      },
      {
        "args": [
          [
            7,
            6,
            5,
            4,
            3,
            2,
            1
          ],
          5
        ],
        "expected": 3
      },
      {
        "args": [
          [
            2,
            1
          ],
          2
        ],
        "expected": 1
      },
      {
        "args": [
          [
            -1,
            -1
          ],
          2
        ],
        "expected": -1
      },
      {
        "args": [
          [
            7,
            6,
            5,
            4,
            3,
            2,
            1
          ],
          7
        ],
        "expected": 1
      }
    ]
  },
  {
    "id": "median-of-two-sorted-arrays",
    "num": 4,
    "title": "Median of Two Sorted Arrays",
    "difficulty": "hard",
    "fnName": "findMedianSortedArrays",
    "complexity": {
      "time": "O(log(m+n))",
      "space": "O(1)"
    },
    "description": "<p>Return the median of the combined sorted order of <code>nums1</code> and <code>nums2</code>. Odd total -> the middle value; even total -> the average of the two middle values. Aim for O(log(m+n)).</p><h3 class=\"sec-label\">Examples</h3><pre class=\"examples\"><code>[1,3], [2]   -> 2\n[1,2], [3,4] -> 2.5\n[], [1]      -> 1\n[0,0], [0,0] -> 0</code></pre><div class=\"approach\"><b>Approach</b><span class=\"approach-sep\"> · </span>Binary search a partition of the shorter array so left halves ≤ right halves; read the median from the boundary values. O(log min(m,n)).</div>",
    "starter": "function findMedianSortedArrays(nums1, nums2) {\n  // your code here\n}",
    "cases": [
      {
        "args": [
          [
            1,
            3
          ],
          [
            2
          ]
        ],
        "expected": 2
      },
      {
        "args": [
          [
            1,
            2
          ],
          [
            3,
            4
          ]
        ],
        "expected": 2.5
      },
      {
        "args": [
          [],
          [
            1
          ]
        ],
        "expected": 1
      },
      {
        "args": [
          [
            0,
            0
          ],
          [
            0,
            0
          ]
        ],
        "expected": 0
      },
      {
        "args": [
          [
            1,
            2,
            3,
            4,
            5
          ],
          [
            6,
            7,
            8
          ]
        ],
        "expected": 4.5
      },
      {
        "args": [
          [
            2
          ],
          []
        ],
        "expected": 2
      },
      {
        "args": [
          [
            1,
            1,
            1
          ],
          [
            1,
            1
          ]
        ],
        "expected": 1
      },
      {
        "args": [
          [
            -5,
            3,
            6,
            12,
            15
          ],
          [
            -12,
            -10,
            -6,
            -3,
            4,
            10
          ]
        ],
        "expected": 3
      }
    ]
  },
  {
    "id": "merge-intervals",
    "num": 56,
    "title": "Merge Intervals",
    "difficulty": "medium",
    "fnName": "merge",
    "complexity": {
      "time": "O(n log n)",
      "space": "O(n)"
    },
    "description": "<p>Merge all overlapping intervals and return the non-overlapping intervals sorted by start. Intervals that merely touch (e.g. [1,4] and [4,5]) overlap.</p><h3 class=\"sec-label\">Visual</h3><svg viewBox='0 0 340 130' width='100%' style='max-width:340px;margin:4px 0 2px;background:#1e1e1e;border:1px solid #3c3c3c;border-radius:6px' xmlns='http://www.w3.org/2000/svg'><text x='12' y='37' fill='#858585' font-family='monospace' font-size='10'>in</text><text x='12' y='93' fill='#858585' font-family='monospace' font-size='10'>out</text><rect x='37' y='25' width='34' height='11' rx='2' fill='#5b595c'/><rect x='54' y='40' width='68' height='11' rx='2' fill='#5b595c'/><rect x='156' y='25' width='34' height='11' rx='2' fill='#5b595c'/><rect x='275' y='25' width='51' height='11' rx='2' fill='#5b595c'/><rect x='37' y='80' width='85' height='12' rx='2' fill='#4ec9b0'/><rect x='156' y='80' width='34' height='12' rx='2' fill='#4ec9b0'/><rect x='275' y='80' width='51' height='12' rx='2' fill='#4ec9b0'/><g fill='#858585' font-family='monospace' font-size='10' text-anchor='middle'><text x='37' y='110'>1</text><text x='122' y='110'>6</text><text x='156' y='110'>8</text><text x='190' y='110'>10</text><text x='275' y='110'>15</text><text x='326' y='110'>18</text></g><text x='170' y='124' fill='#4ec9b0' font-family='monospace' font-size='10' text-anchor='middle'>[1,3]+[2,6] merge into [1,6]</text></svg><h3 class=\"sec-label\">Examples</h3><pre class=\"examples\"><code>[[1,3],[2,6],[8,10],[15,18]] -> [[1,6],[8,10],[15,18]]\n[[1,4],[4,5]] -> [[1,5]]\n[[1,4],[0,4]] -> [[0,4]]\n[[1,4],[2,3]] -> [[1,4]]</code></pre><div class=\"approach\"><b>Approach</b><span class=\"approach-sep\"> · </span>Sort by start, then sweep: extend the last interval's end when the current starts within it, else push a new block. O(n log n).</div>",
    "starter": "function merge(intervals) {\n  // your code here\n}",
    "cases": [
      {
        "args": [
          [
            [
              1,
              3
            ],
            [
              2,
              6
            ],
            [
              8,
              10
            ],
            [
              15,
              18
            ]
          ]
        ],
        "expected": [
          [
            1,
            6
          ],
          [
            8,
            10
          ],
          [
            15,
            18
          ]
        ]
      },
      {
        "args": [
          [
            [
              1,
              4
            ],
            [
              4,
              5
            ]
          ]
        ],
        "expected": [
          [
            1,
            5
          ]
        ]
      },
      {
        "args": [
          [
            [
              1,
              4
            ]
          ]
        ],
        "expected": [
          [
            1,
            4
          ]
        ]
      },
      {
        "args": [
          [
            [
              1,
              4
            ],
            [
              2,
              3
            ]
          ]
        ],
        "expected": [
          [
            1,
            4
          ]
        ]
      },
      {
        "args": [
          [
            [
              1,
              4
            ],
            [
              0,
              4
            ]
          ]
        ],
        "expected": [
          [
            0,
            4
          ]
        ]
      },
      {
        "args": [
          [
            [
              1,
              4
            ],
            [
              5,
              6
            ]
          ]
        ],
        "expected": [
          [
            1,
            4
          ],
          [
            5,
            6
          ]
        ]
      },
      {
        "args": [
          [
            [
              2,
              3
            ],
            [
              4,
              5
            ],
            [
              6,
              7
            ],
            [
              8,
              9
            ],
            [
              1,
              10
            ]
          ]
        ],
        "expected": [
          [
            1,
            10
          ]
        ]
      }
    ]
  },
  {
    "id": "insert-interval",
    "num": 57,
    "title": "Insert Interval",
    "difficulty": "medium",
    "fnName": "insert",
    "complexity": {
      "time": "O(n)",
      "space": "O(n)"
    },
    "description": "<p>Given sorted, non-overlapping intervals and a <code>newInterval</code>, insert it (merging any overlaps) and return the result still sorted and non-overlapping.</p><h3 class=\"sec-label\">Visual</h3><svg viewBox='0 0 340 135' width='100%' style='max-width:340px;margin:4px 0 2px;background:#1e1e1e;border:1px solid #3c3c3c;border-radius:6px' xmlns='http://www.w3.org/2000/svg'><text x='10' y='37' fill='#858585' font-family='monospace' font-size='10'>in</text><text x='10' y='53' fill='#0e639c' font-family='monospace' font-size='10'>new</text><text x='10' y='98' fill='#858585' font-family='monospace' font-size='10'>out</text><rect x='57' y='26' width='64' height='11' rx='2' fill='#5b595c'/><rect x='217' y='26' width='96' height='11' rx='2' fill='#5b595c'/><rect x='89' y='44' width='96' height='11' rx='2' fill='none' stroke='#0e639c' stroke-dasharray='4 3'/><rect x='57' y='85' width='128' height='12' rx='2' fill='#4ec9b0'/><rect x='217' y='85' width='96' height='12' rx='2' fill='#4ec9b0'/><g fill='#858585' font-family='monospace' font-size='10' text-anchor='middle'><text x='57' y='115'>1</text><text x='185' y='115'>5</text><text x='217' y='115'>6</text><text x='313' y='115'>9</text></g><text x='150' y='128' fill='#4ec9b0' font-family='monospace' font-size='10' text-anchor='middle'>[2,5] absorbs [1,3] -> [1,5]</text></svg><h3 class=\"sec-label\">Examples</h3><pre class=\"examples\"><code>[[1,3],[6,9]], [2,5] -> [[1,5],[6,9]]\n[[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8] -> [[1,2],[3,10],[12,16]]\n[], [5,7] -> [[5,7]]\n[[1,5]], [6,8] -> [[1,5],[6,8]]</code></pre><div class=\"approach\"><b>Approach</b><span class=\"approach-sep\"> · </span>Single pass: copy intervals ending before it, absorb all overlapping ones (expand bounds), copy the rest. O(n), no sort.</div>",
    "starter": "function insert(intervals, newInterval) {\n  // your code here\n}",
    "cases": [
      {
        "args": [
          [
            [
              1,
              3
            ],
            [
              6,
              9
            ]
          ],
          [
            2,
            5
          ]
        ],
        "expected": [
          [
            1,
            5
          ],
          [
            6,
            9
          ]
        ]
      },
      {
        "args": [
          [
            [
              1,
              2
            ],
            [
              3,
              5
            ],
            [
              6,
              7
            ],
            [
              8,
              10
            ],
            [
              12,
              16
            ]
          ],
          [
            4,
            8
          ]
        ],
        "expected": [
          [
            1,
            2
          ],
          [
            3,
            10
          ],
          [
            12,
            16
          ]
        ]
      },
      {
        "args": [
          [],
          [
            5,
            7
          ]
        ],
        "expected": [
          [
            5,
            7
          ]
        ]
      },
      {
        "args": [
          [
            [
              1,
              5
            ]
          ],
          [
            2,
            3
          ]
        ],
        "expected": [
          [
            1,
            5
          ]
        ]
      },
      {
        "args": [
          [
            [
              1,
              5
            ]
          ],
          [
            6,
            8
          ]
        ],
        "expected": [
          [
            1,
            5
          ],
          [
            6,
            8
          ]
        ]
      },
      {
        "args": [
          [
            [
              1,
              5
            ]
          ],
          [
            0,
            0
          ]
        ],
        "expected": [
          [
            0,
            0
          ],
          [
            1,
            5
          ]
        ]
      },
      {
        "args": [
          [
            [
              3,
              5
            ],
            [
              7,
              9
            ]
          ],
          [
            1,
            2
          ]
        ],
        "expected": [
          [
            1,
            2
          ],
          [
            3,
            5
          ],
          [
            7,
            9
          ]
        ]
      }
    ]
  },
  {
    "id": "meeting-rooms-ii",
    "num": 253,
    "title": "Meeting Rooms II",
    "difficulty": "medium",
    "fnName": "minMeetingRooms",
    "complexity": {
      "time": "O(n log n)",
      "space": "O(n)"
    },
    "description": "<p>Given meeting intervals, return the minimum number of conference rooms needed so no two meetings sharing a room overlap. Intervals are half-open: a meeting starting when another ends does not conflict.</p><h3 class=\"sec-label\">Visual</h3><svg viewBox='0 0 340 125' width='100%' style='max-width:340px;margin:4px 0 2px;background:#1e1e1e;border:1px solid #3c3c3c;border-radius:6px' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='25' width='300' height='12' rx='2' fill='#0e639c'/><rect x='70' y='43' width='50' height='12' rx='2' fill='#dcdcaa'/><rect x='170' y='43' width='50' height='12' rx='2' fill='#dcdcaa'/><g fill='#fcfcfa' font-family='monospace' font-size='9' text-anchor='middle'><text x='170' y='34'>[0,30]</text><text x='95' y='52'>[5,10]</text><text x='195' y='52'>[15,20]</text></g><line x1='95' y1='20' x2='95' y2='62' stroke='#f48771' stroke-dasharray='3 3'/><g fill='#858585' font-family='monospace' font-size='10' text-anchor='middle'><text x='20' y='75'>0</text><text x='320' y='75'>30</text></g><text x='170' y='112' fill='#f48771' font-family='monospace' font-size='11' text-anchor='middle'>peak overlap = 2 -> 2 rooms</text></svg><h3 class=\"sec-label\">Examples</h3><pre class=\"examples\"><code>[[0,30],[5,10],[15,20]] -> 2\n[[7,10],[2,4]] -> 1\n[[1,5],[5,10]] -> 1   (touch, no conflict)\n[[1,5],[2,6],[3,7]] -> 3</code></pre><div class=\"approach\"><b>Approach</b><span class=\"approach-sep\"> · </span>Min-heap of end times (reuse the earliest-freeing room), or a sweep line of +1/-1 events tracking peak concurrency. O(n log n).</div>",
    "starter": "function minMeetingRooms(intervals) {\n  // your code here\n}",
    "cases": [
      {
        "args": [
          [
            [
              0,
              30
            ],
            [
              5,
              10
            ],
            [
              15,
              20
            ]
          ]
        ],
        "expected": 2
      },
      {
        "args": [
          [
            [
              7,
              10
            ],
            [
              2,
              4
            ]
          ]
        ],
        "expected": 1
      },
      {
        "args": [
          [
            [
              1,
              5
            ],
            [
              2,
              6
            ],
            [
              3,
              7
            ]
          ]
        ],
        "expected": 3
      },
      {
        "args": [
          []
        ],
        "expected": 0
      },
      {
        "args": [
          [
            [
              1,
              5
            ]
          ]
        ],
        "expected": 1
      },
      {
        "args": [
          [
            [
              1,
              5
            ],
            [
              5,
              10
            ]
          ]
        ],
        "expected": 1
      },
      {
        "args": [
          [
            [
              1,
              10
            ],
            [
              2,
              7
            ],
            [
              3,
              19
            ],
            [
              8,
              12
            ],
            [
              10,
              20
            ],
            [
              11,
              30
            ]
          ]
        ],
        "expected": 4
      }
    ]
  },
  {
    "id": "number-of-islands",
    "num": 200,
    "title": "Number of Islands",
    "difficulty": "medium",
    "fnName": "numIslands",
    "complexity": {
      "time": "O(m·n)",
      "space": "O(m·n)"
    },
    "description": "<p>Given a grid of \"1\" (land) and \"0\" (water), count the islands — maximal groups of land connected 4-directionally.</p><h3 class=\"sec-label\">Visual</h3><svg viewBox='0 0 175 170' width='100%' style='max-width:175px;margin:4px 0 2px;background:#1e1e1e;border:1px solid #3c3c3c;border-radius:6px' xmlns='http://www.w3.org/2000/svg'><g font-family='monospace' font-size='13' text-anchor='middle'><rect x='20' y='15' width='36' height='36' rx='3' fill='rgba(78,201,176,0.25)' stroke='#4ec9b0'/><rect x='60' y='15' width='36' height='36' rx='3' fill='rgba(78,201,176,0.25)' stroke='#4ec9b0'/><rect x='100' y='15' width='36' height='36' rx='3' fill='#2d2d30' stroke='#3c3c3c'/><rect x='20' y='55' width='36' height='36' rx='3' fill='rgba(78,201,176,0.25)' stroke='#4ec9b0'/><rect x='60' y='55' width='36' height='36' rx='3' fill='#2d2d30' stroke='#3c3c3c'/><rect x='100' y='55' width='36' height='36' rx='3' fill='#2d2d30' stroke='#3c3c3c'/><rect x='20' y='95' width='36' height='36' rx='3' fill='#2d2d30' stroke='#3c3c3c'/><rect x='60' y='95' width='36' height='36' rx='3' fill='#2d2d30' stroke='#3c3c3c'/><rect x='100' y='95' width='36' height='36' rx='3' fill='rgba(78,201,176,0.25)' stroke='#4ec9b0'/><g fill='#fcfcfa'><text x='38' y='38'>1</text><text x='78' y='38'>1</text><text x='38' y='78'>1</text><text x='118' y='118'>1</text></g><g fill='#5b595c'><text x='118' y='38'>0</text><text x='78' y='78'>0</text><text x='118' y='78'>0</text><text x='38' y='118'>0</text><text x='78' y='118'>0</text></g></g><text x='87' y='152' fill='#4ec9b0' font-family='monospace' font-size='11' text-anchor='middle'>2 islands</text></svg><h3 class=\"sec-label\">Examples</h3><pre class=\"examples\"><code>[[\"1\",\"1\",\"0\"],[\"1\",\"0\",\"0\"],[\"0\",\"0\",\"1\"]] -> 2\n[[\"1\",\"1\",\"0\",\"0\",\"0\"],[\"1\",\"1\",\"0\",\"0\",\"0\"],[\"0\",\"0\",\"1\",\"0\",\"0\"],[\"0\",\"0\",\"0\",\"1\",\"1\"]] -> 3\n[[\"1\",\"0\",\"1\"],[\"0\",\"0\",\"0\"],[\"1\",\"0\",\"1\"]] -> 4</code></pre><div class=\"approach\"><b>Approach</b><span class=\"approach-sep\"> · </span>Scan cells; on an unvisited '1', count it and flood-fill (DFS/BFS) its whole component, marking visited. O(m·n).</div>",
    "starter": "function numIslands(grid) {\n  // your code here\n}",
    "cases": [
      {
        "args": [
          [
            [
              "1",
              "1",
              "1",
              "1",
              "0"
            ],
            [
              "1",
              "1",
              "0",
              "1",
              "0"
            ],
            [
              "1",
              "1",
              "0",
              "0",
              "0"
            ],
            [
              "0",
              "0",
              "0",
              "0",
              "0"
            ]
          ]
        ],
        "expected": 1
      },
      {
        "args": [
          [
            [
              "1",
              "1",
              "0",
              "0",
              "0"
            ],
            [
              "1",
              "1",
              "0",
              "0",
              "0"
            ],
            [
              "0",
              "0",
              "1",
              "0",
              "0"
            ],
            [
              "0",
              "0",
              "0",
              "1",
              "1"
            ]
          ]
        ],
        "expected": 3
      },
      {
        "args": [
          [
            [
              "1"
            ]
          ]
        ],
        "expected": 1
      },
      {
        "args": [
          [
            [
              "0"
            ]
          ]
        ],
        "expected": 0
      },
      {
        "args": [
          [
            [
              "1",
              "0",
              "1",
              "0",
              "1"
            ]
          ]
        ],
        "expected": 3
      },
      {
        "args": [
          [
            [
              "1",
              "1",
              "1"
            ],
            [
              "0",
              "1",
              "0"
            ],
            [
              "1",
              "1",
              "1"
            ]
          ]
        ],
        "expected": 1
      },
      {
        "args": [
          [
            [
              "1",
              "0"
            ],
            [
              "0",
              "1"
            ]
          ]
        ],
        "expected": 2
      }
    ]
  },
  {
    "id": "clone-graph",
    "num": 133,
    "title": "Clone Graph",
    "difficulty": "medium",
    "fnName": "cloneGraph",
    "io": "graph",
    "complexity": {
      "time": "O(V+E)",
      "space": "O(V)"
    },
    "description": "<p>Given a reference to a <code>node</code> in a connected undirected graph, return a deep copy (clone) of it. Each node has a <code>val</code> (1-indexed) and a list of <code>neighbors</code>. The graph is shown as an adjacency list where <code>adjList[i]</code> holds the neighbors of node i+1; output is the clone serialized back to that form.</p><h3 class=\"sec-label\">Visual</h3><svg viewBox='0 0 220 180' width='100%' style='max-width:220px;margin:4px 0 2px;background:#1e1e1e;border:1px solid #3c3c3c;border-radius:6px' xmlns='http://www.w3.org/2000/svg'><line x1='45' y1='40' x2='175' y2='40' stroke='#5b595c'/><line x1='175' y1='40' x2='175' y2='140' stroke='#5b595c'/><line x1='175' y1='140' x2='45' y2='140' stroke='#5b595c'/><line x1='45' y1='140' x2='45' y2='40' stroke='#5b595c'/><circle cx='45' cy='40' r='18' fill='#2d2d30' stroke='#4ec9b0' stroke-width='2'/><circle cx='175' cy='40' r='18' fill='#2d2d30' stroke='#4ec9b0' stroke-width='2'/><circle cx='175' cy='140' r='18' fill='#2d2d30' stroke='#4ec9b0' stroke-width='2'/><circle cx='45' cy='140' r='18' fill='#2d2d30' stroke='#4ec9b0' stroke-width='2'/><g fill='#fcfcfa' font-family='monospace' font-size='13' text-anchor='middle'><text x='45' y='45'>1</text><text x='175' y='45'>2</text><text x='175' y='145'>3</text><text x='45' y='145'>4</text></g><text x='110' y='172' fill='#4ec9b0' font-family='monospace' font-size='10' text-anchor='middle'>1-2-3-4 cycle; deep-clone every node + edge</text></svg><h3 class=\"sec-label\">Examples</h3><pre class=\"examples\"><code>[[2,4],[1,3],[2,4],[1,3]] -> [[2,4],[1,3],[2,4],[1,3]]\n[[]] -> [[]]   (single node, no neighbors)\n[]   -> []     (empty graph)\n[[2],[1]] -> [[2],[1]]</code></pre><div class=\"approach\"><b>Approach</b><span class=\"approach-sep\"> · </span>DFS/BFS with a Map from original node -> clone; create on first visit, then wire neighbors via the map. O(V+E).</div>",
    "starter": "function cloneGraph(node) {\n  // your code here\n}",
    "cases": [
      {
        "args": [
          [
            [
              2,
              4
            ],
            [
              1,
              3
            ],
            [
              2,
              4
            ],
            [
              1,
              3
            ]
          ]
        ],
        "expected": [
          [
            2,
            4
          ],
          [
            1,
            3
          ],
          [
            2,
            4
          ],
          [
            1,
            3
          ]
        ]
      },
      {
        "args": [
          [
            []
          ]
        ],
        "expected": [
          []
        ]
      },
      {
        "args": [
          []
        ],
        "expected": []
      },
      {
        "args": [
          [
            [
              2
            ],
            [
              1
            ]
          ]
        ],
        "expected": [
          [
            2
          ],
          [
            1
          ]
        ]
      },
      {
        "args": [
          [
            [
              2,
              3
            ],
            [
              1,
              3
            ],
            [
              1,
              2
            ]
          ]
        ],
        "expected": [
          [
            2,
            3
          ],
          [
            1,
            3
          ],
          [
            1,
            2
          ]
        ]
      }
    ]
  },
  {
    "id": "path-sum",
    "num": 112,
    "title": "Path Sum",
    "difficulty": "easy",
    "fnName": "hasPathSum",
    "io": "tree",
    "complexity": {
      "time": "O(n)",
      "space": "O(h)"
    },
    "description": "<p>Given the <code>root</code> of a binary tree (shown in level order, null for missing nodes), return true if some root-to-leaf path sums to <code>targetSum</code>. A leaf has no children.</p><h3 class=\"sec-label\">Visual</h3><svg viewBox='0 0 320 210' width='100%' style='max-width:320px;margin:4px 0 2px;background:#1e1e1e;border:1px solid #3c3c3c;border-radius:6px' xmlns='http://www.w3.org/2000/svg'><line x1='160' y1='25' x2='95' y2='75' stroke='#4ec9b0' stroke-width='2'/><line x1='160' y1='25' x2='235' y2='75' stroke='#5b595c'/><line x1='95' y1='75' x2='55' y2='130' stroke='#4ec9b0' stroke-width='2'/><line x1='235' y1='75' x2='205' y2='130' stroke='#5b595c'/><line x1='235' y1='75' x2='275' y2='130' stroke='#5b595c'/><line x1='55' y1='130' x2='30' y2='185' stroke='#5b595c'/><line x1='55' y1='130' x2='80' y2='185' stroke='#4ec9b0' stroke-width='2'/><g><circle cx='160' cy='25' r='16' fill='#2d2d30' stroke='#4ec9b0' stroke-width='2'/><circle cx='95' cy='75' r='16' fill='#2d2d30' stroke='#4ec9b0' stroke-width='2'/><circle cx='235' cy='75' r='16' fill='#2d2d30' stroke='#5b595c'/><circle cx='55' cy='130' r='16' fill='#2d2d30' stroke='#4ec9b0' stroke-width='2'/><circle cx='205' cy='130' r='16' fill='#2d2d30' stroke='#5b595c'/><circle cx='275' cy='130' r='16' fill='#2d2d30' stroke='#5b595c'/><circle cx='30' cy='185' r='16' fill='#2d2d30' stroke='#5b595c'/><circle cx='80' cy='185' r='16' fill='#2d2d30' stroke='#4ec9b0' stroke-width='2'/></g><g fill='#fcfcfa' font-family='monospace' font-size='12' text-anchor='middle'><text x='160' y='29'>5</text><text x='95' y='79'>4</text><text x='235' y='79'>8</text><text x='55' y='134'>11</text><text x='205' y='134'>13</text><text x='275' y='134'>4</text><text x='30' y='189'>7</text><text x='80' y='189'>2</text></g><text x='200' y='195' fill='#4ec9b0' font-family='monospace' font-size='11' text-anchor='middle'>5+4+11+2 = 22</text></svg><h3 class=\"sec-label\">Examples</h3><pre class=\"examples\"><code>[5,4,8,11,null,13,4,7,2,null,null,null,1], 22 -> true   (5->4->11->2)\n[1,2,3], 5 -> false\n[], 0     -> false\n[1,2], 1  -> false   (root alone is not a leaf path)</code></pre><div class=\"approach\"><b>Approach</b><span class=\"approach-sep\"> · </span>DFS carrying the remaining target; at a leaf, succeed iff the remainder is 0. O(n) time, O(h) stack.</div>",
    "starter": "function hasPathSum(root, targetSum) {\n  // your code here\n}",
    "cases": [
      {
        "args": [
          [
            5,
            4,
            8,
            11,
            null,
            13,
            4,
            7,
            2,
            null,
            null,
            null,
            1
          ],
          22
        ],
        "expected": true
      },
      {
        "args": [
          [
            1,
            2,
            3
          ],
          5
        ],
        "expected": false
      },
      {
        "args": [
          [],
          0
        ],
        "expected": false
      },
      {
        "args": [
          [
            1,
            2
          ],
          3
        ],
        "expected": true
      },
      {
        "args": [
          [
            1,
            2
          ],
          1
        ],
        "expected": false
      },
      {
        "args": [
          [
            1
          ],
          1
        ],
        "expected": true
      },
      {
        "args": [
          [
            1
          ],
          0
        ],
        "expected": false
      },
      {
        "args": [
          [
            -2,
            null,
            -3
          ],
          -5
        ],
        "expected": true
      },
      {
        "args": [
          [
            1,
            2,
            3
          ],
          4
        ],
        "expected": true
      }
    ]
  },
  {
    "id": "subsets",
    "num": 78,
    "title": "Subsets",
    "difficulty": "medium",
    "fnName": "subsets",
    "unordered": true,
    "complexity": {
      "time": "O(n·2^n)",
      "space": "O(n)"
    },
    "description": "<p>Return all possible subsets (the power set) of <code>nums</code> (distinct integers). There are 2^n subsets; order doesn't matter.</p><h3 class=\"sec-label\">Examples</h3><pre class=\"examples\"><code>[1,2,3] -> [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]\n[0]     -> [[],[0]]\n[]      -> [[]]\n[9,8]   -> [[],[9],[8],[9,8]]</code></pre><div class=\"approach\"><b>Approach</b><span class=\"approach-sep\"> · </span>Backtracking: at each index include or skip the element, recording the path; or a bitmask over 0..2^n-1. O(n·2^n).</div>",
    "starter": "function subsets(nums) {\n  // your code here\n}",
    "cases": [
      {
        "args": [
          [
            1,
            2,
            3
          ]
        ],
        "expected": [
          [],
          [
            1
          ],
          [
            2
          ],
          [
            1,
            2
          ],
          [
            3
          ],
          [
            1,
            3
          ],
          [
            2,
            3
          ],
          [
            1,
            2,
            3
          ]
        ]
      },
      {
        "args": [
          [
            0
          ]
        ],
        "expected": [
          [],
          [
            0
          ]
        ]
      },
      {
        "args": [
          []
        ],
        "expected": [
          []
        ]
      },
      {
        "args": [
          [
            1,
            2
          ]
        ],
        "expected": [
          [],
          [
            1
          ],
          [
            2
          ],
          [
            1,
            2
          ]
        ]
      },
      {
        "args": [
          [
            9,
            0,
            3,
            5
          ]
        ],
        "expected": [
          [],
          [
            9
          ],
          [
            0
          ],
          [
            9,
            0
          ],
          [
            3
          ],
          [
            9,
            3
          ],
          [
            0,
            3
          ],
          [
            9,
            0,
            3
          ],
          [
            5
          ],
          [
            9,
            5
          ],
          [
            0,
            5
          ],
          [
            9,
            0,
            5
          ],
          [
            3,
            5
          ],
          [
            9,
            3,
            5
          ],
          [
            0,
            3,
            5
          ],
          [
            9,
            0,
            3,
            5
          ]
        ]
      }
    ]
  },
  {
    "id": "permutations",
    "num": 46,
    "title": "Permutations",
    "difficulty": "medium",
    "fnName": "permute",
    "unordered": true,
    "complexity": {
      "time": "O(n·n!)",
      "space": "O(n)"
    },
    "description": "<p>Return all permutations of <code>nums</code> (distinct integers). There are n! permutations; order doesn't matter.</p><h3 class=\"sec-label\">Examples</h3><pre class=\"examples\"><code>[1,2,3] -> [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]\n[0,1]   -> [[0,1],[1,0]]\n[1]     -> [[1]]</code></pre><div class=\"approach\"><b>Approach</b><span class=\"approach-sep\"> · </span>Backtracking: pick an unused element at each level (track used or swap in place), record a copy when length = n. O(n·n!).</div>",
    "starter": "function permute(nums) {\n  // your code here\n}",
    "cases": [
      {
        "args": [
          [
            1,
            2,
            3
          ]
        ],
        "expected": [
          [
            1,
            2,
            3
          ],
          [
            1,
            3,
            2
          ],
          [
            2,
            1,
            3
          ],
          [
            2,
            3,
            1
          ],
          [
            3,
            1,
            2
          ],
          [
            3,
            2,
            1
          ]
        ]
      },
      {
        "args": [
          [
            0,
            1
          ]
        ],
        "expected": [
          [
            0,
            1
          ],
          [
            1,
            0
          ]
        ]
      },
      {
        "args": [
          [
            1
          ]
        ],
        "expected": [
          [
            1
          ]
        ]
      },
      {
        "args": [
          [
            1,
            2,
            3,
            4
          ]
        ],
        "expected": [
          [
            1,
            2,
            3,
            4
          ],
          [
            1,
            2,
            4,
            3
          ],
          [
            1,
            3,
            2,
            4
          ],
          [
            1,
            3,
            4,
            2
          ],
          [
            1,
            4,
            2,
            3
          ],
          [
            1,
            4,
            3,
            2
          ],
          [
            2,
            1,
            3,
            4
          ],
          [
            2,
            1,
            4,
            3
          ],
          [
            2,
            3,
            1,
            4
          ],
          [
            2,
            3,
            4,
            1
          ],
          [
            2,
            4,
            1,
            3
          ],
          [
            2,
            4,
            3,
            1
          ],
          [
            3,
            1,
            2,
            4
          ],
          [
            3,
            1,
            4,
            2
          ],
          [
            3,
            2,
            1,
            4
          ],
          [
            3,
            2,
            4,
            1
          ],
          [
            3,
            4,
            1,
            2
          ],
          [
            3,
            4,
            2,
            1
          ],
          [
            4,
            1,
            2,
            3
          ],
          [
            4,
            1,
            3,
            2
          ],
          [
            4,
            2,
            1,
            3
          ],
          [
            4,
            2,
            3,
            1
          ],
          [
            4,
            3,
            1,
            2
          ],
          [
            4,
            3,
            2,
            1
          ]
        ]
      }
    ]
  },
  {
    "id": "n-queens",
    "num": 51,
    "title": "N-Queens",
    "difficulty": "hard",
    "fnName": "solveNQueens",
    "unordered": true,
    "complexity": {
      "time": "O(n!)",
      "space": "O(n^2)"
    },
    "description": "<p>Place <code>n</code> queens on an n×n board so no two attack each other (no shared row, column, or diagonal). Return all distinct boards ('Q' = queen, '.' = empty); order doesn't matter.</p><h3 class=\"sec-label\">Examples</h3><pre class=\"examples\"><code>n=4 -> [[\".Q..\",\"...Q\",\"Q...\",\"..Q.\"],[\"..Q.\",\"Q...\",\"...Q\",\".Q..\"]]\nn=1 -> [[\"Q\"]]\nn=2 -> []   (no valid placement)</code></pre><div class=\"approach\"><b>Approach</b><span class=\"approach-sep\"> · </span>Backtrack row by row, tracking used columns and both diagonals (row-col, row+col) in sets for O(1) checks. ~O(n!).</div>",
    "starter": "function solveNQueens(n) {\n  // your code here\n}",
    "cases": [
      {
        "args": [
          4
        ],
        "expected": [
          [
            ".Q..",
            "...Q",
            "Q...",
            "..Q."
          ],
          [
            "..Q.",
            "Q...",
            "...Q",
            ".Q.."
          ]
        ]
      },
      {
        "args": [
          1
        ],
        "expected": [
          [
            "Q"
          ]
        ]
      },
      {
        "args": [
          2
        ],
        "expected": []
      },
      {
        "args": [
          3
        ],
        "expected": []
      },
      {
        "args": [
          5
        ],
        "expected": [
          [
            "Q....",
            "..Q..",
            "....Q",
            ".Q...",
            "...Q."
          ],
          [
            "Q....",
            "...Q.",
            ".Q...",
            "....Q",
            "..Q.."
          ],
          [
            ".Q...",
            "...Q.",
            "Q....",
            "..Q..",
            "....Q"
          ],
          [
            ".Q...",
            "....Q",
            "..Q..",
            "Q....",
            "...Q."
          ],
          [
            "..Q..",
            "Q....",
            "...Q.",
            ".Q...",
            "....Q"
          ],
          [
            "..Q..",
            "....Q",
            ".Q...",
            "...Q.",
            "Q...."
          ],
          [
            "...Q.",
            "Q....",
            "..Q..",
            "....Q",
            ".Q..."
          ],
          [
            "...Q.",
            ".Q...",
            "....Q",
            "..Q..",
            "Q...."
          ],
          [
            "....Q",
            ".Q...",
            "...Q.",
            "Q....",
            "..Q.."
          ],
          [
            "....Q",
            "..Q..",
            "Q....",
            "...Q.",
            ".Q..."
          ]
        ]
      }
    ]
  },
  {
    "id": "combination-sum",
    "num": 39,
    "title": "Combination Sum",
    "difficulty": "medium",
    "fnName": "combinationSum",
    "unordered": true,
    "complexity": {
      "time": "O(n^(t/m))",
      "space": "O(t/m)"
    },
    "description": "<p>Return all unique combinations of <code>candidates</code> (distinct, reusable) that sum to <code>target</code>. Each element may be used unlimited times; order doesn't matter.</p><h3 class=\"sec-label\">Examples</h3><pre class=\"examples\"><code>[2,3,6,7], target=7 -> [[2,2,3],[7]]\n[2,3,5], target=8   -> [[2,2,2,2],[2,3,3],[3,5]]\n[2], target=1       -> []\n[3], target=9       -> [[3,3,3]]</code></pre><div class=\"approach\"><b>Approach</b><span class=\"approach-sep\"> · </span>Backtrack from a start index (recurse with the same index to allow reuse); prune when the sum exceeds target.</div>",
    "starter": "function combinationSum(candidates, target) {\n  // your code here\n}",
    "cases": [
      {
        "args": [
          [
            2,
            3,
            6,
            7
          ],
          7
        ],
        "expected": [
          [
            2,
            2,
            3
          ],
          [
            7
          ]
        ]
      },
      {
        "args": [
          [
            2,
            3,
            5
          ],
          8
        ],
        "expected": [
          [
            2,
            2,
            2,
            2
          ],
          [
            2,
            3,
            3
          ],
          [
            3,
            5
          ]
        ]
      },
      {
        "args": [
          [
            2
          ],
          1
        ],
        "expected": []
      },
      {
        "args": [
          [
            1
          ],
          2
        ],
        "expected": [
          [
            1,
            1
          ]
        ]
      },
      {
        "args": [
          [
            7,
            3,
            2
          ],
          18
        ],
        "expected": [
          [
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2
          ],
          [
            2,
            2,
            2,
            2,
            2,
            2,
            3,
            3
          ],
          [
            2,
            2,
            2,
            2,
            3,
            7
          ],
          [
            2,
            2,
            2,
            3,
            3,
            3,
            3
          ],
          [
            2,
            2,
            7,
            7
          ],
          [
            2,
            3,
            3,
            3,
            7
          ],
          [
            3,
            3,
            3,
            3,
            3,
            3
          ]
        ]
      },
      {
        "args": [
          [
            8
          ],
          8
        ],
        "expected": [
          [
            8
          ]
        ]
      }
    ]
  },
  {
    "id": "word-ladder",
    "num": 127,
    "title": "Word Ladder",
    "difficulty": "hard",
    "fnName": "ladderLength",
    "complexity": {
      "time": "O(n·L^2)",
      "space": "O(n·L)"
    },
    "description": "<p>Return the number of words in the shortest transformation from <code>beginWord</code> to <code>endWord</code>, changing one letter at a time, where every intermediate word is in <code>wordList</code>. Return 0 if impossible.</p><h3 class=\"sec-label\">Examples</h3><pre class=\"examples\"><code>hit -> cog, [\"hot\",\"dot\",\"dog\",\"lot\",\"log\",\"cog\"] -> 5\nhit -> cog, [\"hot\",\"dot\",\"dog\",\"lot\",\"log\"]       -> 0   (cog missing)\na -> c, [\"a\",\"b\",\"c\"] -> 2</code></pre><div class=\"approach\"><b>Approach</b><span class=\"approach-sep\"> · </span>BFS over the word graph; neighbors = single-letter changes present in a Set. First time endWord dequeues = answer.</div>",
    "starter": "function ladderLength(beginWord, endWord, wordList) {\n  // your code here\n}",
    "cases": [
      {
        "args": [
          "hit",
          "cog",
          [
            "hot",
            "dot",
            "dog",
            "lot",
            "log",
            "cog"
          ]
        ],
        "expected": 5
      },
      {
        "args": [
          "hit",
          "cog",
          [
            "hot",
            "dot",
            "dog",
            "lot",
            "log"
          ]
        ],
        "expected": 0
      },
      {
        "args": [
          "a",
          "c",
          [
            "a",
            "b",
            "c"
          ]
        ],
        "expected": 2
      },
      {
        "args": [
          "hot",
          "dog",
          [
            "hot",
            "dog",
            "dot"
          ]
        ],
        "expected": 3
      },
      {
        "args": [
          "hit",
          "hit",
          [
            "hit"
          ]
        ],
        "expected": 1
      },
      {
        "args": [
          "red",
          "tax",
          [
            "ted",
            "tex",
            "red",
            "tax",
            "tad",
            "den",
            "rex",
            "pee"
          ]
        ],
        "expected": 4
      }
    ]
  },
  {
    "id": "rotting-oranges",
    "num": 994,
    "title": "Rotting Oranges",
    "difficulty": "medium",
    "fnName": "orangesRotting",
    "complexity": {
      "time": "O(m·n)",
      "space": "O(m·n)"
    },
    "description": "<p>0 = empty, 1 = fresh, 2 = rotten. Each minute, rotten oranges rot their 4-adjacent fresh neighbors. Return the minutes until none are fresh, or -1 if some fresh orange can never rot.</p><h3 class=\"sec-label\">Visual</h3><svg viewBox='0 0 175 175' width='100%' style='max-width:175px;margin:4px 0 2px;background:#1e1e1e;border:1px solid #3c3c3c;border-radius:6px' xmlns='http://www.w3.org/2000/svg'><g font-family='monospace' font-size='13' text-anchor='middle'><rect x='20' y='15' width='36' height='36' rx='3' fill='rgba(244,135,113,0.3)' stroke='#f48771'/><rect x='60' y='15' width='36' height='36' rx='3' fill='rgba(78,201,176,0.25)' stroke='#4ec9b0'/><rect x='100' y='15' width='36' height='36' rx='3' fill='rgba(78,201,176,0.25)' stroke='#4ec9b0'/><rect x='20' y='55' width='36' height='36' rx='3' fill='rgba(78,201,176,0.25)' stroke='#4ec9b0'/><rect x='60' y='55' width='36' height='36' rx='3' fill='rgba(78,201,176,0.25)' stroke='#4ec9b0'/><rect x='100' y='55' width='36' height='36' rx='3' fill='#2d2d30' stroke='#3c3c3c'/><rect x='20' y='95' width='36' height='36' rx='3' fill='#2d2d30' stroke='#3c3c3c'/><rect x='60' y='95' width='36' height='36' rx='3' fill='rgba(78,201,176,0.25)' stroke='#4ec9b0'/><rect x='100' y='95' width='36' height='36' rx='3' fill='rgba(78,201,176,0.25)' stroke='#4ec9b0'/><g fill='#f48771'><text x='38' y='38'>2</text></g><g fill='#4ec9b0'><text x='78' y='38'>1</text><text x='118' y='38'>1</text><text x='38' y='78'>1</text><text x='78' y='78'>1</text><text x='78' y='118'>1</text><text x='118' y='118'>1</text></g><g fill='#5b595c'><text x='118' y='78'>0</text><text x='38' y='118'>0</text></g></g><text x='87' y='158' fill='#f48771' font-family='monospace' font-size='11' text-anchor='middle'>BFS spreads in 4 min</text></svg><h3 class=\"sec-label\">Examples</h3><pre class=\"examples\"><code>[[2,1,1],[1,1,0],[0,1,1]] -> 4\n[[2,1,1],[0,1,1],[1,0,1]] -> -1\n[[0,2]] -> 0   (no fresh oranges)\n[[1]]   -> -1</code></pre><div class=\"approach\"><b>Approach</b><span class=\"approach-sep\"> · </span>Multi-source BFS from all rotten cells at minute 0; spread level by level, counting down fresh oranges. O(m·n).</div>",
    "starter": "function orangesRotting(grid) {\n  // your code here\n}",
    "cases": [
      {
        "args": [
          [
            [
              2,
              1,
              1
            ],
            [
              1,
              1,
              0
            ],
            [
              0,
              1,
              1
            ]
          ]
        ],
        "expected": 4
      },
      {
        "args": [
          [
            [
              2,
              1,
              1
            ],
            [
              0,
              1,
              1
            ],
            [
              1,
              0,
              1
            ]
          ]
        ],
        "expected": -1
      },
      {
        "args": [
          [
            [
              0,
              2
            ]
          ]
        ],
        "expected": 0
      },
      {
        "args": [
          [
            [
              1
            ]
          ]
        ],
        "expected": -1
      },
      {
        "args": [
          [
            [
              0
            ]
          ]
        ],
        "expected": 0
      },
      {
        "args": [
          [
            [
              2
            ]
          ]
        ],
        "expected": 0
      },
      {
        "args": [
          [
            [
              2,
              1,
              1
            ],
            [
              1,
              1,
              1
            ],
            [
              0,
              1,
              2
            ]
          ]
        ],
        "expected": 2
      },
      {
        "args": [
          [
            [
              2,
              2
            ],
            [
              1,
              1
            ],
            [
              0,
              1
            ]
          ]
        ],
        "expected": 2
      }
    ]
  },
  {
    "id": "binary-tree-level-order",
    "num": 102,
    "title": "Binary Tree Level Order Traversal",
    "difficulty": "medium",
    "fnName": "levelOrder",
    "io": "tree",
    "complexity": {
      "time": "O(n)",
      "space": "O(n)"
    },
    "description": "<p>Given the <code>root</code> of a binary tree (shown in level order, null for missing nodes), return its values grouped by depth, top to bottom, left to right.</p><h3 class=\"sec-label\">Visual</h3><svg viewBox='0 0 270 185' width='100%' style='max-width:270px;margin:4px 0 2px;background:#1e1e1e;border:1px solid #3c3c3c;border-radius:6px' xmlns='http://www.w3.org/2000/svg'><line x1='135' y1='25' x2='70' y2='90' stroke='#5b595c'/><line x1='135' y1='25' x2='200' y2='90' stroke='#5b595c'/><line x1='200' y1='90' x2='160' y2='155' stroke='#5b595c'/><line x1='200' y1='90' x2='240' y2='155' stroke='#5b595c'/><circle cx='135' cy='25' r='16' fill='#2d2d30' stroke='#4ec9b0' stroke-width='2'/><circle cx='70' cy='90' r='16' fill='#2d2d30' stroke='#dcdcaa' stroke-width='2'/><circle cx='200' cy='90' r='16' fill='#2d2d30' stroke='#dcdcaa' stroke-width='2'/><circle cx='160' cy='155' r='16' fill='#2d2d30' stroke='#78dce8' stroke-width='2'/><circle cx='240' cy='155' r='16' fill='#2d2d30' stroke='#78dce8' stroke-width='2'/><g fill='#fcfcfa' font-family='monospace' font-size='12' text-anchor='middle'><text x='135' y='29'>3</text><text x='70' y='94'>9</text><text x='200' y='94'>20</text><text x='160' y='159'>15</text><text x='240' y='159'>7</text></g><g font-family='monospace' font-size='10' text-anchor='end'><text x='40' y='29' fill='#4ec9b0'>L0</text><text x='40' y='94' fill='#dcdcaa'>L1</text><text x='115' y='159' fill='#78dce8'>L2</text></g></svg><h3 class=\"sec-label\">Examples</h3><pre class=\"examples\"><code>[3,9,20,null,null,15,7] -> [[3],[9,20],[15,7]]\n[1]  -> [[1]]\n[]   -> []\n[1,2,3,4,null,null,5] -> [[1],[2,3],[4,5]]</code></pre><div class=\"approach\"><b>Approach</b><span class=\"approach-sep\"> · </span>BFS with a queue, processing one full level per iteration (snapshot the queue size). O(n) time, O(n) space.</div>",
    "starter": "function levelOrder(root) {\n  // your code here\n}",
    "cases": [
      {
        "args": [
          [
            3,
            9,
            20,
            null,
            null,
            15,
            7
          ]
        ],
        "expected": [
          [
            3
          ],
          [
            9,
            20
          ],
          [
            15,
            7
          ]
        ]
      },
      {
        "args": [
          [
            1
          ]
        ],
        "expected": [
          [
            1
          ]
        ]
      },
      {
        "args": [
          []
        ],
        "expected": []
      },
      {
        "args": [
          [
            1,
            2,
            3,
            4,
            5
          ]
        ],
        "expected": [
          [
            1
          ],
          [
            2,
            3
          ],
          [
            4,
            5
          ]
        ]
      },
      {
        "args": [
          [
            1,
            2,
            3,
            4,
            5,
            null,
            7
          ]
        ],
        "expected": [
          [
            1
          ],
          [
            2,
            3
          ],
          [
            4,
            5,
            7
          ]
        ]
      },
      {
        "args": [
          [
            1,
            null,
            2,
            null,
            3
          ]
        ],
        "expected": [
          [
            1
          ],
          [
            2
          ],
          [
            3
          ]
        ]
      }
    ]
  },
  {
    "id": "implement-trie",
    "num": 208,
    "title": "Implement Trie (Prefix Tree)",
    "difficulty": "medium",
    "fnName": "Trie",
    "io": "class",
    "complexity": {
      "time": "O(L) per op",
      "space": "O(total chars)"
    },
    "description": "<p>Implement a <b>Trie</b> (prefix tree) with three methods: <code>insert(word)</code> adds a word, <code>search(word)</code> returns true only if the exact word was inserted, and <code>startsWith(prefix)</code> returns true if any inserted word starts with <code>prefix</code>.</p><h3 class=\"sec-label\">Examples</h3><pre class=\"examples\"><code>insert(\"apple\")\nsearch(\"apple\")     -> true\nsearch(\"app\")       -> false\nstartsWith(\"app\")   -> true\ninsert(\"app\")\nsearch(\"app\")       -> true</code></pre><div class=\"approach\"><b>Approach</b><span class=\"approach-sep\"> · </span>Nodes with 26 child links + an isEnd flag. insert creates the path; search checks isEnd; startsWith checks the path. O(L)/op.</div>",
    "starter": "class Trie {\n  constructor() {\n    \n  }\n\n  insert(word) {\n    // your code here\n  }\n\n  search(word) {\n    // your code here\n  }\n\n  startsWith(prefix) {\n    // your code here\n  }\n}",
    "cases": [
      {
        "calls": [
          [
            "Trie"
          ],
          [
            "insert",
            "apple"
          ],
          [
            "search",
            "apple"
          ],
          [
            "search",
            "app"
          ],
          [
            "startsWith",
            "app"
          ],
          [
            "insert",
            "app"
          ],
          [
            "search",
            "app"
          ]
        ],
        "expected": [
          null,
          null,
          true,
          false,
          true,
          null,
          true
        ]
      },
      {
        "calls": [
          [
            "Trie"
          ],
          [
            "search",
            "x"
          ],
          [
            "startsWith",
            "x"
          ]
        ],
        "expected": [
          null,
          false,
          false
        ]
      },
      {
        "calls": [
          [
            "Trie"
          ],
          [
            "insert",
            "a"
          ],
          [
            "search",
            "a"
          ],
          [
            "startsWith",
            "a"
          ],
          [
            "search",
            "ab"
          ]
        ],
        "expected": [
          null,
          null,
          true,
          true,
          false
        ]
      },
      {
        "calls": [
          [
            "Trie"
          ],
          [
            "insert",
            "app"
          ],
          [
            "insert",
            "apple"
          ],
          [
            "search",
            "app"
          ],
          [
            "startsWith",
            "appl"
          ],
          [
            "search",
            "appl"
          ]
        ],
        "expected": [
          null,
          null,
          null,
          true,
          true,
          false
        ]
      }
    ]
  },
  {
    "id": "word-search-ii",
    "num": 212,
    "title": "Word Search II",
    "difficulty": "hard",
    "fnName": "findWords",
    "unordered": true,
    "complexity": {
      "time": "O(m·n·4^L)",
      "space": "O(total chars)"
    },
    "description": "<p>Given a board of letters and a list of <code>words</code>, return all words formable from 4-adjacent cells, using each cell at most once per word. Order doesn't matter.</p><h3 class=\"sec-label\">Examples</h3><pre class=\"examples\"><code>board, [\"oath\",\"pea\",\"eat\",\"rain\"] -> [\"oath\",\"eat\"]\nboard=[[\"a\",\"b\"],[\"c\",\"d\"]], [\"abcb\"] -> []   (would reuse a cell)\nboard=[[\"a\"]], [\"a\"] -> [\"a\"]</code></pre><div class=\"approach\"><b>Approach</b><span class=\"approach-sep\"> · </span>Build a trie of the words, then DFS each cell walking the trie in lockstep to prune dead prefixes; backtrack visited cells.</div>",
    "starter": "function findWords(board, words) {\n  // your code here\n}",
    "cases": [
      {
        "args": [
          [
            [
              "o",
              "a",
              "a",
              "n"
            ],
            [
              "e",
              "t",
              "a",
              "e"
            ],
            [
              "i",
              "h",
              "k",
              "r"
            ],
            [
              "i",
              "f",
              "l",
              "v"
            ]
          ],
          [
            "oath",
            "pea",
            "eat",
            "rain"
          ]
        ],
        "expected": [
          "oath",
          "eat"
        ]
      },
      {
        "args": [
          [
            [
              "a",
              "b"
            ]
          ],
          [
            "ab",
            "ba"
          ]
        ],
        "expected": [
          "ab",
          "ba"
        ]
      },
      {
        "args": [
          [
            [
              "a",
              "b"
            ]
          ],
          [
            "ba"
          ]
        ],
        "expected": [
          "ba"
        ]
      },
      {
        "args": [
          [
            [
              "a",
              "a"
            ]
          ],
          [
            "aaa"
          ]
        ],
        "expected": []
      },
      {
        "args": [
          [
            [
              "a",
              "b",
              "c",
              "e"
            ],
            [
              "s",
              "f",
              "c",
              "s"
            ],
            [
              "a",
              "d",
              "e",
              "e"
            ]
          ],
          [
            "abcced",
            "see",
            "abcb"
          ]
        ],
        "expected": [
          "abcced",
          "see"
        ]
      }
    ]
  },
  {
    "id": "add-and-search-words",
    "num": 211,
    "title": "Design Add and Search Words Data Structure",
    "difficulty": "medium",
    "fnName": "WordDictionary",
    "io": "class",
    "complexity": {
      "time": "O(L) / O(26^L)",
      "space": "O(total chars)"
    },
    "description": "<p>Design a data structure that supports adding words and searching with wildcards. <code>addWord(word)</code> stores a word; <code>search(word)</code> returns true if any stored word matches, where <code>.</code> matches any single letter.</p><h3 class=\"sec-label\">Examples</h3><pre class=\"examples\"><code>addWord(\"bad\"); addWord(\"dad\"); addWord(\"mad\")\nsearch(\"pad\") -> false\nsearch(\"bad\") -> true\nsearch(\".ad\") -> true\nsearch(\"b..\") -> true</code></pre><div class=\"approach\"><b>Approach</b><span class=\"approach-sep\"> · </span>Store words in a trie; search is a DFS where a letter follows one child and <code>.</code> branches into all children. O(L) typical, O(26^L) worst.</div>",
    "starter": "class WordDictionary {\n  constructor() {\n    \n  }\n\n  addWord(word) {\n    // your code here\n  }\n\n  search(word) {\n    // your code here\n  }\n}",
    "cases": [
      {
        "calls": [
          [
            "WordDictionary"
          ],
          [
            "addWord",
            "bad"
          ],
          [
            "addWord",
            "dad"
          ],
          [
            "addWord",
            "mad"
          ],
          [
            "search",
            "pad"
          ],
          [
            "search",
            "bad"
          ],
          [
            "search",
            ".ad"
          ],
          [
            "search",
            "b.."
          ]
        ],
        "expected": [
          null,
          null,
          null,
          null,
          false,
          true,
          true,
          true
        ]
      },
      {
        "calls": [
          [
            "WordDictionary"
          ],
          [
            "search",
            "a"
          ]
        ],
        "expected": [
          null,
          false
        ]
      },
      {
        "calls": [
          [
            "WordDictionary"
          ],
          [
            "addWord",
            "a"
          ],
          [
            "search",
            "."
          ],
          [
            "search",
            "a"
          ],
          [
            "search",
            "aa"
          ],
          [
            "addWord",
            "ab"
          ],
          [
            "search",
            "a."
          ],
          [
            "search",
            ".b"
          ]
        ],
        "expected": [
          null,
          null,
          true,
          true,
          false,
          null,
          true,
          true
        ]
      }
    ]
  },
  {
    "id": "number-of-provinces",
    "num": 547,
    "title": "Number of Provinces",
    "difficulty": "medium",
    "fnName": "findCircleNum",
    "complexity": {
      "time": "O(n^2)",
      "space": "O(n)"
    },
    "description": "<p><code>isConnected</code> is an n×n adjacency matrix of cities. Return the number of provinces — connected groups of cities (directly or indirectly).</p><h3 class=\"sec-label\">Examples</h3><pre class=\"examples\"><code>[[1,1,0],[1,1,0],[0,0,1]] -> 2\n[[1,0,0],[0,1,0],[0,0,1]] -> 3\n[[1,1,1],[1,1,1],[1,1,1]] -> 1</code></pre><div class=\"approach\"><b>Approach</b><span class=\"approach-sep\"> · </span>Count connected components via DFS/BFS over each unvisited city's row, or Union-Find. O(n²) time, O(n) space.</div>",
    "starter": "function findCircleNum(isConnected) {\n  // your code here\n}",
    "cases": [
      {
        "args": [
          [
            [
              1,
              1,
              0
            ],
            [
              1,
              1,
              0
            ],
            [
              0,
              0,
              1
            ]
          ]
        ],
        "expected": 2
      },
      {
        "args": [
          [
            [
              1,
              0,
              0
            ],
            [
              0,
              1,
              0
            ],
            [
              0,
              0,
              1
            ]
          ]
        ],
        "expected": 3
      },
      {
        "args": [
          [
            [
              1
            ]
          ]
        ],
        "expected": 1
      },
      {
        "args": [
          [
            [
              1,
              0
            ],
            [
              0,
              1
            ]
          ]
        ],
        "expected": 2
      },
      {
        "args": [
          [
            [
              1,
              1
            ],
            [
              1,
              1
            ]
          ]
        ],
        "expected": 1
      },
      {
        "args": [
          [
            [
              1,
              1,
              0,
              0
            ],
            [
              1,
              1,
              0,
              0
            ],
            [
              0,
              0,
              1,
              1
            ],
            [
              0,
              0,
              1,
              1
            ]
          ]
        ],
        "expected": 2
      }
    ]
  },
  {
    "id": "redundant-connection",
    "num": 684,
    "title": "Redundant Connection",
    "difficulty": "medium",
    "fnName": "findRedundantConnection",
    "complexity": {
      "time": "O(n·α(n))",
      "space": "O(n)"
    },
    "description": "<p>A tree had one extra edge added, creating exactly one cycle. Return the edge that can be removed; if several qualify, return the one appearing last in the input.</p><h3 class=\"sec-label\">Examples</h3><pre class=\"examples\"><code>[[1,2],[1,3],[2,3]] -> [2,3]\n[[1,2],[2,3],[3,4],[1,4],[1,5]] -> [1,4]\n[[1,2],[2,3],[1,3]] -> [1,3]</code></pre><div class=\"approach\"><b>Approach</b><span class=\"approach-sep\"> · </span>Union-Find: union each edge's endpoints; the first edge whose endpoints are already connected closes the cycle. O(n·α(n)).</div>",
    "starter": "function findRedundantConnection(edges) {\n  // your code here\n}",
    "cases": [
      {
        "args": [
          [
            [
              1,
              2
            ],
            [
              1,
              3
            ],
            [
              2,
              3
            ]
          ]
        ],
        "expected": [
          2,
          3
        ]
      },
      {
        "args": [
          [
            [
              1,
              2
            ],
            [
              2,
              3
            ],
            [
              3,
              4
            ],
            [
              1,
              4
            ],
            [
              1,
              5
            ]
          ]
        ],
        "expected": [
          1,
          4
        ]
      },
      {
        "args": [
          [
            [
              1,
              2
            ],
            [
              2,
              3
            ],
            [
              3,
              1
            ]
          ]
        ],
        "expected": [
          3,
          1
        ]
      }
    ]
  },
  {
    "id": "accounts-merge",
    "num": 721,
    "title": "Accounts Merge",
    "difficulty": "medium",
    "fnName": "accountsMerge",
    "unordered": true,
    "complexity": {
      "time": "O(n·L log n·L)",
      "space": "O(n·L)"
    },
    "description": "<p>Each account is <code>[name, ...emails]</code>. Merge accounts that share any email (transitively; the same name alone does not merge). Return each merged account as <code>[name, ...sortedEmails]</code>; account order doesn't matter.</p><h3 class=\"sec-label\">Examples</h3><pre class=\"examples\"><code>[[\"John\",\"a@m\",\"b@m\"],[\"John\",\"a@m\",\"c@m\"],[\"Mary\",\"m@m\"],[\"John\",\"d@m\"]]\n   -> [[\"John\",\"a@m\",\"b@m\",\"c@m\"],[\"Mary\",\"m@m\"],[\"John\",\"d@m\"]]\n(first two Johns share a@m; third John stays separate)</code></pre><div class=\"approach\"><b>Approach</b><span class=\"approach-sep\"> · </span>Union-Find over emails (or DFS an email graph): union emails within each account, group by root, sort, prepend the name.</div>",
    "starter": "function accountsMerge(accounts) {\n  // your code here\n}",
    "cases": [
      {
        "args": [
          [
            [
              "John",
              "johnsmith@mail.com",
              "john_newyork@mail.com"
            ],
            [
              "John",
              "johnsmith@mail.com",
              "john00@mail.com"
            ],
            [
              "Mary",
              "mary@mail.com"
            ],
            [
              "John",
              "johnnybravo@mail.com"
            ]
          ]
        ],
        "expected": [
          [
            "John",
            "john00@mail.com",
            "john_newyork@mail.com",
            "johnsmith@mail.com"
          ],
          [
            "John",
            "johnnybravo@mail.com"
          ],
          [
            "Mary",
            "mary@mail.com"
          ]
        ]
      },
      {
        "args": [
          [
            [
              "A",
              "a@x.com"
            ]
          ]
        ],
        "expected": [
          [
            "A",
            "a@x.com"
          ]
        ]
      },
      {
        "args": [
          [
            [
              "A",
              "a@x.com"
            ],
            [
              "B",
              "b@x.com"
            ]
          ]
        ],
        "expected": [
          [
            "A",
            "a@x.com"
          ],
          [
            "B",
            "b@x.com"
          ]
        ]
      },
      {
        "args": [
          [
            [
              "A",
              "a@x.com",
              "b@x.com"
            ],
            [
              "A",
              "b@x.com",
              "c@x.com"
            ],
            [
              "A",
              "x@x.com"
            ]
          ]
        ],
        "expected": [
          [
            "A",
            "a@x.com",
            "b@x.com",
            "c@x.com"
          ],
          [
            "A",
            "x@x.com"
          ]
        ]
      }
    ]
  },
  {
    "id": "find-median-data-stream",
    "num": 295,
    "title": "Find Median from Data Stream",
    "difficulty": "hard",
    "fnName": "MedianFinder",
    "io": "class",
    "complexity": {
      "time": "O(n log n)",
      "space": "O(n)"
    },
    "description": "<p>Design a data structure for a growing stream of integers. <code>addNum(num)</code> adds a number; <code>findMedian()</code> returns the median of all elements so far (the middle value, or the average of the two middles).</p><h3 class=\"sec-label\">Examples</h3><pre class=\"examples\"><code>addNum(1); addNum(2)\nfindMedian() -> 1.5\naddNum(3)\nfindMedian() -> 2</code></pre><div class=\"approach\"><b>Approach</b><span class=\"approach-sep\"> · </span>Two heaps: a max-heap (lower half) and min-heap (upper half) kept balanced; the median is the top(s). O(log n) per insert.</div>",
    "starter": "class MedianFinder {\n  constructor() {\n    \n  }\n\n  addNum(num) {\n    // your code here\n  }\n\n  findMedian() {\n    // your code here\n  }\n}",
    "cases": [
      {
        "calls": [
          [
            "MedianFinder"
          ],
          [
            "addNum",
            2
          ],
          [
            "findMedian"
          ],
          [
            "addNum",
            3
          ],
          [
            "findMedian"
          ],
          [
            "addNum",
            4
          ],
          [
            "findMedian"
          ]
        ],
        "expected": [
          null,
          null,
          2,
          null,
          2.5,
          null,
          3
        ]
      },
      {
        "calls": [
          [
            "MedianFinder"
          ],
          [
            "addNum",
            1
          ],
          [
            "findMedian"
          ],
          [
            "addNum",
            2
          ],
          [
            "findMedian"
          ]
        ],
        "expected": [
          null,
          null,
          1,
          null,
          1.5
        ]
      },
      {
        "calls": [
          [
            "MedianFinder"
          ],
          [
            "addNum",
            5
          ],
          [
            "findMedian"
          ]
        ],
        "expected": [
          null,
          null,
          5
        ]
      },
      {
        "calls": [
          [
            "MedianFinder"
          ],
          [
            "addNum",
            1
          ],
          [
            "findMedian"
          ],
          [
            "addNum",
            2
          ],
          [
            "findMedian"
          ],
          [
            "addNum",
            3
          ],
          [
            "findMedian"
          ],
          [
            "addNum",
            4
          ],
          [
            "findMedian"
          ]
        ],
        "expected": [
          null,
          null,
          1,
          null,
          1.5,
          null,
          2,
          null,
          2.5
        ]
      },
      {
        "calls": [
          [
            "MedianFinder"
          ],
          [
            "addNum",
            3
          ],
          [
            "findMedian"
          ],
          [
            "addNum",
            1
          ],
          [
            "findMedian"
          ],
          [
            "addNum",
            2
          ],
          [
            "findMedian"
          ]
        ],
        "expected": [
          null,
          null,
          3,
          null,
          2,
          null,
          2
        ]
      },
      {
        "calls": [
          [
            "MedianFinder"
          ],
          [
            "addNum",
            1
          ],
          [
            "findMedian"
          ],
          [
            "addNum",
            2
          ],
          [
            "findMedian"
          ],
          [
            "addNum",
            3
          ],
          [
            "findMedian"
          ],
          [
            "addNum",
            4
          ],
          [
            "findMedian"
          ],
          [
            "addNum",
            5
          ],
          [
            "findMedian"
          ]
        ],
        "expected": [
          null,
          null,
          1,
          null,
          1.5,
          null,
          2,
          null,
          2.5,
          null,
          3
        ]
      },
      {
        "calls": [
          [
            "MedianFinder"
          ],
          [
            "addNum",
            5
          ],
          [
            "findMedian"
          ],
          [
            "addNum",
            4
          ],
          [
            "findMedian"
          ],
          [
            "addNum",
            3
          ],
          [
            "findMedian"
          ],
          [
            "addNum",
            2
          ],
          [
            "findMedian"
          ],
          [
            "addNum",
            1
          ],
          [
            "findMedian"
          ]
        ],
        "expected": [
          null,
          null,
          5,
          null,
          4.5,
          null,
          4,
          null,
          3.5,
          null,
          3
        ]
      },
      {
        "calls": [
          [
            "MedianFinder"
          ],
          [
            "addNum",
            -1
          ],
          [
            "findMedian"
          ],
          [
            "addNum",
            -2
          ],
          [
            "findMedian"
          ],
          [
            "addNum",
            -3
          ],
          [
            "findMedian"
          ],
          [
            "addNum",
            -4
          ],
          [
            "findMedian"
          ]
        ],
        "expected": [
          null,
          null,
          -1,
          null,
          -1.5,
          null,
          -2,
          null,
          -2.5
        ]
      }
    ]
  },
  {
    "id": "network-delay-time",
    "num": 743,
    "title": "Network Delay Time",
    "difficulty": "medium",
    "fnName": "networkDelayTime",
    "complexity": {
      "time": "O(E log V)",
      "space": "O(V+E)"
    },
    "description": "<p><code>times[i] = [u, v, w]</code> is a directed edge with travel time w. A signal starts at node <code>k</code>. Return the time for all <code>n</code> nodes to receive it, or -1 if some node can't.</p><h3 class=\"sec-label\">Examples</h3><pre class=\"examples\"><code>times=[[2,1,1],[2,3,1],[3,4,1]], n=4, k=2 -> 2\ntimes=[[1,2,1]], n=2, k=1 -> 1\ntimes=[[1,2,1]], n=2, k=2 -> -1</code></pre><div class=\"approach\"><b>Approach</b><span class=\"approach-sep\"> · </span>Dijkstra from k; the answer is the max shortest-distance, or -1 if any node is unreachable. O(E log V).</div>",
    "starter": "function networkDelayTime(times, n, k) {\n  // your code here\n}",
    "cases": [
      {
        "args": [
          [
            [
              2,
              1,
              1
            ],
            [
              2,
              3,
              1
            ],
            [
              3,
              4,
              1
            ]
          ],
          4,
          2
        ],
        "expected": 2
      },
      {
        "args": [
          [
            [
              1,
              2,
              1
            ]
          ],
          2,
          1
        ],
        "expected": 1
      },
      {
        "args": [
          [
            [
              1,
              2,
              1
            ]
          ],
          2,
          2
        ],
        "expected": -1
      },
      {
        "args": [
          [
            [
              1,
              2,
              1
            ],
            [
              2,
              3,
              2
            ],
            [
              1,
              3,
              4
            ]
          ],
          3,
          1
        ],
        "expected": 3
      },
      {
        "args": [
          [
            [
              1,
              2,
              1
            ],
            [
              2,
              3,
              7
            ],
            [
              1,
              3,
              4
            ],
            [
              2,
              1,
              2
            ]
          ],
          3,
          1
        ],
        "expected": 4
      }
    ]
  },
  {
    "id": "path-with-minimum-effort",
    "num": 1631,
    "title": "Path With Minimum Effort",
    "difficulty": "medium",
    "fnName": "minimumEffortPath",
    "complexity": {
      "time": "O(m·n·log(m·n))",
      "space": "O(m·n)"
    },
    "description": "<p>Travel from the top-left to the bottom-right of a grid (4 directions). A path's effort is the maximum absolute height difference between consecutive cells on it. Return the minimum possible effort.</p><h3 class=\"sec-label\">Examples</h3><pre class=\"examples\"><code>[[1,2,2],[3,8,2],[5,3,5]] -> 2\n[[1,2,3],[3,8,4],[5,3,5]] -> 1\n[[1,2,1,1,1],[1,2,1,2,1],[1,2,1,2,1],[1,2,1,2,1],[1,1,1,2,1]] -> 0</code></pre><div class=\"approach\"><b>Approach</b><span class=\"approach-sep\"> · </span>Dijkstra where path cost is the max edge (minimize the maximum); or binary-search the effort + BFS, or Union-Find by weight.</div>",
    "starter": "function minimumEffortPath(heights) {\n  // your code here\n}",
    "cases": [
      {
        "args": [
          [
            [
              1,
              2,
              2
            ],
            [
              3,
              8,
              2
            ],
            [
              5,
              3,
              5
            ]
          ]
        ],
        "expected": 2
      },
      {
        "args": [
          [
            [
              1,
              2,
              3
            ],
            [
              3,
              8,
              4
            ],
            [
              5,
              3,
              5
            ]
          ]
        ],
        "expected": 1
      },
      {
        "args": [
          [
            [
              1,
              2,
              1,
              1,
              1
            ],
            [
              1,
              2,
              1,
              2,
              1
            ],
            [
              1,
              2,
              1,
              2,
              1
            ],
            [
              1,
              2,
              1,
              2,
              1
            ],
            [
              1,
              1,
              1,
              2,
              1
            ]
          ]
        ],
        "expected": 0
      },
      {
        "args": [
          [
            [
              1
            ]
          ]
        ],
        "expected": 0
      },
      {
        "args": [
          [
            [
              1,
              10,
              6,
              7,
              9,
              10,
              4,
              9
            ]
          ]
        ],
        "expected": 9
      },
      {
        "args": [
          [
            [
              8
            ],
            [
              3
            ],
            [
              2
            ],
            [
              5
            ],
            [
              2
            ],
            [
              10
            ],
            [
              7
            ],
            [
              1
            ],
            [
              8
            ],
            [
              9
            ]
          ]
        ],
        "expected": 8
      }
    ]
  },
  {
    "id": "cheapest-flights-k-stops",
    "num": 787,
    "title": "Cheapest Flights Within K Stops",
    "difficulty": "medium",
    "fnName": "findCheapestPrice",
    "complexity": {
      "time": "O(k·E)",
      "space": "O(V)"
    },
    "description": "<p><code>flights[i] = [from, to, price]</code>. Return the cheapest price from <code>src</code> to <code>dst</code> using at most <code>k</code> stops (k+1 flights), or -1 if no such route.</p><h3 class=\"sec-label\">Examples</h3><pre class=\"examples\"><code>n=4, [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]], src=0, dst=3, k=1 -> 700\nn=3, [[0,1,100],[1,2,100],[0,2,500]], src=0, dst=2, k=1 -> 200\nn=3, same flights, k=0 -> 500   (direct only)</code></pre><div class=\"approach\"><b>Approach</b><span class=\"approach-sep\"> · </span>Bellman-Ford limited to k+1 rounds, relaxing off the previous round's snapshot so no edge is used twice per round. O(k·E).</div>",
    "starter": "function findCheapestPrice(n, flights, src, dst, k) {\n  // your code here\n}",
    "cases": [
      {
        "args": [
          4,
          [
            [
              0,
              1,
              100
            ],
            [
              1,
              2,
              100
            ],
            [
              2,
              0,
              100
            ],
            [
              1,
              3,
              600
            ],
            [
              2,
              3,
              200
            ]
          ],
          0,
          3,
          1
        ],
        "expected": 700
      },
      {
        "args": [
          3,
          [
            [
              0,
              1,
              100
            ],
            [
              1,
              2,
              100
            ],
            [
              0,
              2,
              500
            ]
          ],
          0,
          2,
          1
        ],
        "expected": 200
      },
      {
        "args": [
          3,
          [
            [
              0,
              1,
              100
            ],
            [
              1,
              2,
              100
            ],
            [
              0,
              2,
              500
            ]
          ],
          0,
          2,
          0
        ],
        "expected": 500
      },
      {
        "args": [
          4,
          [
            [
              0,
              1,
              1
            ],
            [
              1,
              2,
              1
            ],
            [
              2,
              3,
              1
            ],
            [
              0,
              3,
              10
            ]
          ],
          0,
          3,
          1
        ],
        "expected": 10
      },
      {
        "args": [
          2,
          [],
          0,
          1,
          5
        ],
        "expected": -1
      }
    ]
  },
  {
    "id": "course-schedule",
    "num": 207,
    "title": "Course Schedule",
    "difficulty": "medium",
    "fnName": "canFinish",
    "complexity": {
      "time": "O(V+E)",
      "space": "O(V+E)"
    },
    "description": "<p><code>prerequisites[i] = [a, b]</code> means you must take b before a. Return true if you can finish all <code>numCourses</code> — i.e. the dependency graph has no cycle.</p><h3 class=\"sec-label\">Visual</h3><svg viewBox='0 0 340 95' width='100%' style='max-width:340px;margin:4px 0 2px;background:#1e1e1e;border:1px solid #3c3c3c;border-radius:6px' xmlns='http://www.w3.org/2000/svg'><defs><marker id='ahcs' markerWidth='8' markerHeight='8' refX='5' refY='3' orient='auto'><path d='M0 0 L6 3 L0 6 z' fill='#858585'/></marker></defs><line x1='53' y1='45' x2='110' y2='45' stroke='#858585' marker-end='url(#ahcs)'/><line x1='146' y1='45' x2='203' y2='45' stroke='#858585' marker-end='url(#ahcs)'/><line x1='239' y1='45' x2='296' y2='45' stroke='#858585' marker-end='url(#ahcs)'/><circle cx='35' cy='45' r='17' fill='#2d2d30' stroke='#4ec9b0' stroke-width='2'/><circle cx='128' cy='45' r='17' fill='#2d2d30' stroke='#4ec9b0' stroke-width='2'/><circle cx='221' cy='45' r='17' fill='#2d2d30' stroke='#4ec9b0' stroke-width='2'/><circle cx='314' cy='45' r='17' fill='#2d2d30' stroke='#4ec9b0' stroke-width='2'/><g fill='#fcfcfa' font-family='monospace' font-size='13' text-anchor='middle'><text x='35' y='50'>0</text><text x='128' y='50'>1</text><text x='221' y='50'>2</text><text x='314' y='50'>3</text></g><text x='175' y='88' fill='#4ec9b0' font-family='monospace' font-size='10' text-anchor='middle'>take prereq first; no cycle -> can finish</text></svg><h3 class=\"sec-label\">Examples</h3><pre class=\"examples\"><code>2, [[1,0]] -> true\n2, [[1,0],[0,1]] -> false   (cycle)\n4, [[1,0],[2,1],[3,2]] -> true\n3, [] -> true</code></pre><div class=\"approach\"><b>Approach</b><span class=\"approach-sep\"> · </span>Topological sort: Kahn's in-degree peeling (finish all -> no cycle), or DFS three-color cycle detection. O(V+E).</div>",
    "starter": "function canFinish(numCourses, prerequisites) {\n  // your code here\n}",
    "cases": [
      {
        "args": [
          2,
          [
            [
              1,
              0
            ]
          ]
        ],
        "expected": true
      },
      {
        "args": [
          2,
          [
            [
              1,
              0
            ],
            [
              0,
              1
            ]
          ]
        ],
        "expected": false
      },
      {
        "args": [
          4,
          [
            [
              1,
              0
            ],
            [
              2,
              0
            ],
            [
              3,
              1
            ],
            [
              3,
              2
            ]
          ]
        ],
        "expected": true
      },
      {
        "args": [
          1,
          []
        ],
        "expected": true
      },
      {
        "args": [
          3,
          [
            [
              0,
              1
            ],
            [
              1,
              2
            ],
            [
              2,
              0
            ]
          ]
        ],
        "expected": false
      }
    ]
  },
  {
    "id": "alien-dictionary",
    "num": 269,
    "title": "Alien Dictionary",
    "difficulty": "hard",
    "fnName": "alienOrder",
    "complexity": {
      "time": "O(total chars)",
      "space": "O(1)"
    },
    "description": "<p>Given words sorted lexicographically in an alien language, return a letter order consistent with them, or \"\" if invalid/contradictory. (Cases here have a unique order.)</p><h3 class=\"sec-label\">Examples</h3><pre class=\"examples\"><code>[\"wrt\",\"wrf\",\"er\",\"ett\",\"rftt\"] -> \"wertf\"\n[\"z\",\"x\"]   -> \"zx\"\n[\"z\",\"x\",\"z\"] -> \"\"   (contradictory)\n[\"abc\",\"ab\"]  -> \"\"   (prefix after longer word)</code></pre><div class=\"approach\"><b>Approach</b><span class=\"approach-sep\"> · </span>Build edges from the first differing char of each adjacent word pair, then topologically sort the letters. O(total chars).</div>",
    "starter": "function alienOrder(words) {\n  // your code here\n}",
    "cases": [
      {
        "args": [
          [
            "z",
            "x"
          ]
        ],
        "expected": "zx"
      },
      {
        "args": [
          [
            "z",
            "x",
            "z"
          ]
        ],
        "expected": ""
      },
      {
        "args": [
          [
            "a",
            "b",
            "c"
          ]
        ],
        "expected": "abc"
      },
      {
        "args": [
          [
            "ba",
            "bc",
            "ac"
          ]
        ],
        "expected": "bac"
      },
      {
        "args": [
          [
            "wrt",
            "wrf",
            "er",
            "ett",
            "rftt"
          ]
        ],
        "expected": "wertf"
      },
      {
        "args": [
          [
            "abc",
            "ab"
          ]
        ],
        "expected": ""
      }
    ]
  },
  {
    "id": "daily-temperatures",
    "num": 739,
    "title": "Daily Temperatures",
    "difficulty": "medium",
    "fnName": "dailyTemperatures",
    "complexity": {
      "time": "O(n)",
      "space": "O(n)"
    },
    "description": "<p>For each day, return how many days you must wait for a warmer temperature (0 if none ever comes).</p><h3 class=\"sec-label\">Visual</h3><svg viewBox='0 0 360 165' width='100%' style='max-width:360px;margin:4px 0 2px;background:#1e1e1e;border:1px solid #3c3c3c;border-radius:6px' xmlns='http://www.w3.org/2000/svg'><defs><marker id='ahd' markerWidth='8' markerHeight='8' refX='5' refY='3' orient='auto'><path d='M0 0 L6 3 L0 6 z' fill='#0e639c'/></marker></defs><rect x='15' y='42' width='30' height='78' fill='#5b595c'/><rect x='57' y='36' width='30' height='84' fill='#4ec9b0'/><rect x='99' y='30' width='30' height='90' fill='#4ec9b0'/><rect x='141' y='54' width='30' height='66' fill='#5b595c'/><rect x='183' y='66' width='30' height='54' fill='#5b595c'/><rect x='225' y='48' width='30' height='72' fill='#5b595c'/><rect x='267' y='24' width='30' height='96' fill='#4ec9b0'/><rect x='309' y='42' width='30' height='78' fill='#5b595c'/><path d='M114 26 C 160 4, 240 4, 282 20' fill='none' stroke='#0e639c' stroke-dasharray='4 3' marker-end='url(#ahd)'/><g fill='#fcfcfa' font-family='monospace' font-size='9' text-anchor='middle'><text x='30' y='38'>73</text><text x='72' y='32'>74</text><text x='114' y='26'>75</text><text x='156' y='50'>71</text><text x='198' y='62'>69</text><text x='240' y='44'>72</text><text x='282' y='20'>76</text><text x='324' y='38'>73</text></g><g fill='#858585' font-family='monospace' font-size='10' text-anchor='middle'><text x='30' y='136'>1</text><text x='72' y='136'>1</text><text x='114' y='136'>4</text><text x='156' y='136'>2</text><text x='198' y='136'>1</text><text x='240' y='136'>1</text><text x='282' y='136'>0</text><text x='324' y='136'>0</text></g><text x='180' y='156' fill='#0e639c' font-family='monospace' font-size='10' text-anchor='middle'>days until a warmer day (75 waits 4)</text></svg><h3 class=\"sec-label\">Examples</h3><pre class=\"examples\"><code>[73,74,75,71,69,72,76,73] -> [1,1,4,2,1,1,0,0]\n[30,40,50,60] -> [1,1,1,0]\n[30,60,90]    -> [1,1,0]\n[50,50,50]    -> [0,0,0]   (warmer is strict)</code></pre><div class=\"approach\"><b>Approach</b><span class=\"approach-sep\"> · </span>Monotonic decreasing stack of indices; pop and fill the gap when a warmer day arrives. O(n) time, O(n) space.</div>",
    "starter": "function dailyTemperatures(temperatures) {\n  // your code here\n}",
    "cases": [
      {
        "args": [
          [
            73,
            74,
            75,
            71,
            69,
            72,
            76,
            73
          ]
        ],
        "expected": [
          1,
          1,
          4,
          2,
          1,
          1,
          0,
          0
        ]
      },
      {
        "args": [
          [
            30,
            40,
            50,
            60
          ]
        ],
        "expected": [
          1,
          1,
          1,
          0
        ]
      },
      {
        "args": [
          [
            30,
            60,
            90
          ]
        ],
        "expected": [
          1,
          1,
          0
        ]
      },
      {
        "args": [
          [
            30
          ]
        ],
        "expected": [
          0
        ]
      },
      {
        "args": [
          [
            100,
            100,
            100
          ]
        ],
        "expected": [
          0,
          0,
          0
        ]
      },
      {
        "args": [
          [
            60,
            50,
            40,
            30
          ]
        ],
        "expected": [
          0,
          0,
          0,
          0
        ]
      }
    ]
  },
  {
    "id": "next-greater-element",
    "num": 496,
    "title": "Next Greater Element I",
    "difficulty": "easy",
    "fnName": "nextGreaterElement",
    "complexity": {
      "time": "O(n)",
      "space": "O(n)"
    },
    "description": "<p><code>nums1</code> is a subset of <code>nums2</code>. For each x in nums1, find the first element to its right in nums2 that is greater than x (-1 if none).</p><h3 class=\"sec-label\">Examples</h3><pre class=\"examples\"><code>[4,1,2], [1,3,4,2] -> [-1,3,-1]\n[2,4], [1,2,3,4]   -> [3,-1]\n[1], [1,2]         -> [2]</code></pre><div class=\"approach\"><b>Approach</b><span class=\"approach-sep\"> · </span>Monotonic decreasing stack over nums2 builds a value -> next-greater Map; then look up each nums1 value. O(n+m).</div>",
    "starter": "function nextGreaterElement(nums1, nums2) {\n  // your code here\n}",
    "cases": [
      {
        "args": [
          [
            4,
            1,
            2
          ],
          [
            1,
            3,
            4,
            2
          ]
        ],
        "expected": [
          -1,
          3,
          -1
        ]
      },
      {
        "args": [
          [
            2,
            4
          ],
          [
            1,
            2,
            3,
            4
          ]
        ],
        "expected": [
          3,
          -1
        ]
      },
      {
        "args": [
          [
            1
          ],
          [
            1
          ]
        ],
        "expected": [
          -1
        ]
      },
      {
        "args": [
          [
            1,
            3,
            5,
            2,
            4
          ],
          [
            6,
            5,
            4,
            3,
            2,
            1,
            7
          ]
        ],
        "expected": [
          7,
          7,
          7,
          7,
          7
        ]
      }
    ]
  },
  {
    "id": "largest-rectangle-histogram",
    "num": 84,
    "title": "Largest Rectangle in Histogram",
    "difficulty": "hard",
    "fnName": "largestRectangleArea",
    "complexity": {
      "time": "O(n)",
      "space": "O(n)"
    },
    "description": "<p>Bars of width 1 with the given heights. Return the area of the largest rectangle that fits in the histogram (its height is limited by the shortest bar it spans).</p><h3 class=\"sec-label\">Visual</h3><svg viewBox='0 0 280 160' width='100%' style='max-width:280px;margin:4px 0 2px;background:#1e1e1e;border:1px solid #3c3c3c;border-radius:6px' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='94' width='34' height='36' fill='#5b595c'/><rect x='60' y='112' width='34' height='18' fill='#5b595c'/><rect x='100' y='40' width='34' height='90' fill='#5b595c'/><rect x='140' y='22' width='34' height='108' fill='#5b595c'/><rect x='180' y='94' width='34' height='36' fill='#5b595c'/><rect x='220' y='76' width='34' height='54' fill='#5b595c'/><rect x='100' y='40' width='74' height='90' fill='rgba(78,201,176,0.25)' stroke='#4ec9b0'/><g fill='#858585' font-family='monospace' font-size='10' text-anchor='middle'><text x='37' y='145'>2</text><text x='77' y='145'>1</text><text x='117' y='145'>5</text><text x='157' y='145'>6</text><text x='197' y='145'>2</text><text x='237' y='145'>3</text></g><text x='137' y='15' fill='#4ec9b0' font-family='monospace' font-size='11' text-anchor='middle'>area = 5 x 2 = 10</text></svg><h3 class=\"sec-label\">Examples</h3><pre class=\"examples\"><code>[2,1,5,6,2,3] -> 10   (bars 5,6 span width 2 at height 5)\n[2,4]   -> 4\n[2,1,2] -> 3\n[6]     -> 6</code></pre><div class=\"approach\"><b>Approach</b><span class=\"approach-sep\"> · </span>Monotonic increasing stack of indices; pop on a shorter bar and compute its rectangle. A trailing 0 flushes the stack. O(n).</div>",
    "starter": "function largestRectangleArea(heights) {\n  // your code here\n}",
    "cases": [
      {
        "args": [
          [
            2,
            1,
            5,
            6,
            2,
            3
          ]
        ],
        "expected": 10
      },
      {
        "args": [
          [
            2,
            4
          ]
        ],
        "expected": 4
      },
      {
        "args": [
          [
            2
          ]
        ],
        "expected": 2
      },
      {
        "args": [
          [
            0,
            9
          ]
        ],
        "expected": 9
      },
      {
        "args": [
          [
            5,
            5,
            5,
            5
          ]
        ],
        "expected": 20
      },
      {
        "args": [
          [
            1,
            2,
            3,
            4,
            5
          ]
        ],
        "expected": 9
      }
    ]
  },
  {
    "id": "climbing-stairs",
    "num": 70,
    "title": "Climbing Stairs",
    "difficulty": "easy",
    "fnName": "climbStairs",
    "complexity": {
      "time": "O(n)",
      "space": "O(1)"
    },
    "description": "<p>Climb 1 or 2 steps at a time. Return the number of distinct ways to reach the top of <code>n</code> steps.</p><h3 class=\"sec-label\">Examples</h3><pre class=\"examples\"><code>2 -> 2   (1+1, 2)\n3 -> 3   (1+1+1, 1+2, 2+1)\n5 -> 8\n1 -> 1</code></pre><div class=\"approach\"><b>Approach</b><span class=\"approach-sep\"> · </span>ways(n) = ways(n-1) + ways(n-2) — Fibonacci. Two rolling variables: O(n) time, O(1) space.</div>",
    "starter": "function climbStairs(n) {\n  // your code here\n}",
    "cases": [
      {
        "args": [
          2
        ],
        "expected": 2
      },
      {
        "args": [
          3
        ],
        "expected": 3
      },
      {
        "args": [
          5
        ],
        "expected": 8
      },
      {
        "args": [
          1
        ],
        "expected": 1
      },
      {
        "args": [
          10
        ],
        "expected": 89
      },
      {
        "args": [
          20
        ],
        "expected": 10946
      },
      {
        "args": [
          45
        ],
        "expected": 1836311903
      }
    ]
  },
  {
    "id": "unique-paths",
    "num": 62,
    "title": "Unique Paths",
    "difficulty": "medium",
    "fnName": "uniquePaths",
    "complexity": {
      "time": "O(m·n)",
      "space": "O(n)"
    },
    "description": "<p>A robot at the top-left of an m×n grid moves only right or down. Return the number of unique paths to the bottom-right.</p><h3 class=\"sec-label\">Visual</h3><svg viewBox='0 0 340 175' width='100%' style='max-width:340px;margin:4px 0 2px;background:#1e1e1e;border:1px solid #3c3c3c;border-radius:6px' xmlns='http://www.w3.org/2000/svg'><g fill='#2d2d30' stroke='#3c3c3c'><rect x='15' y='18' width='36' height='36' rx='3'/><rect x='59' y='18' width='36' height='36' rx='3'/><rect x='103' y='18' width='36' height='36' rx='3'/><rect x='147' y='18' width='36' height='36' rx='3'/><rect x='191' y='18' width='36' height='36' rx='3'/><rect x='235' y='18' width='36' height='36' rx='3'/><rect x='279' y='18' width='36' height='36' rx='3'/><rect x='15' y='62' width='36' height='36' rx='3'/><rect x='59' y='62' width='36' height='36' rx='3'/><rect x='103' y='62' width='36' height='36' rx='3'/><rect x='147' y='62' width='36' height='36' rx='3'/><rect x='191' y='62' width='36' height='36' rx='3'/><rect x='235' y='62' width='36' height='36' rx='3'/><rect x='279' y='62' width='36' height='36' rx='3'/><rect x='15' y='106' width='36' height='36' rx='3'/><rect x='59' y='106' width='36' height='36' rx='3'/><rect x='103' y='106' width='36' height='36' rx='3'/><rect x='147' y='106' width='36' height='36' rx='3'/><rect x='191' y='106' width='36' height='36' rx='3'/><rect x='235' y='106' width='36' height='36' rx='3'/><rect x='279' y='106' width='36' height='36' rx='3'/></g><polyline points='33,36 297,36 297,124' fill='none' stroke='#4ec9b0' stroke-width='2'/><g fill='#4ec9b0' font-family='monospace' font-size='12' text-anchor='middle' font-weight='bold'><text x='33' y='41'>S</text><text x='297' y='129'>E</text></g><text x='165' y='164' fill='#858585' font-family='monospace' font-size='10' text-anchor='middle'>right/down only on 3x7 -> 28 paths</text></svg><h3 class=\"sec-label\">Examples</h3><pre class=\"examples\"><code>m=3, n=7 -> 28\nm=3, n=2 -> 3\nm=1, n=1 -> 1\nm=2, n=2 -> 2</code></pre><div class=\"approach\"><b>Approach</b><span class=\"approach-sep\"> · </span>DP paths[i][j] = paths[i-1][j] + paths[i][j-1] (first row/col = 1); roll one row for O(n) space. Or C(m+n-2, m-1).</div>",
    "starter": "function uniquePaths(m, n) {\n  // your code here\n}",
    "cases": [
      {
        "args": [
          3,
          7
        ],
        "expected": 28
      },
      {
        "args": [
          3,
          2
        ],
        "expected": 3
      },
      {
        "args": [
          1,
          1
        ],
        "expected": 1
      },
      {
        "args": [
          3,
          3
        ],
        "expected": 6
      },
      {
        "args": [
          1,
          10
        ],
        "expected": 1
      },
      {
        "args": [
          10,
          1
        ],
        "expected": 1
      },
      {
        "args": [
          10,
          10
        ],
        "expected": 48620
      }
    ]
  },
  {
    "id": "longest-common-subsequence",
    "num": 1143,
    "title": "Longest Common Subsequence",
    "difficulty": "medium",
    "fnName": "longestCommonSubsequence",
    "complexity": {
      "time": "O(m·n)",
      "space": "O(n)"
    },
    "description": "<p>Return the length of the longest subsequence common to <code>text1</code> and <code>text2</code> (characters in order, not necessarily contiguous), or 0 if none.</p><h3 class=\"sec-label\">Examples</h3><pre class=\"examples\"><code>\"abcde\", \"ace\" -> 3\n\"abc\", \"abc\"   -> 3\n\"abc\", \"def\"   -> 0\n\"bsbininm\", \"jmjkbkjkv\" -> 1</code></pre><div class=\"approach\"><b>Approach</b><span class=\"approach-sep\"> · </span>DP grid: match -> dp[i-1][j-1]+1, else max(dp[i-1][j], dp[i][j-1]). O(m·n) time; roll one row for O(n) space.</div>",
    "starter": "function longestCommonSubsequence(text1, text2) {\n  // your code here\n}",
    "cases": [
      {
        "args": [
          "abcde",
          "ace"
        ],
        "expected": 3
      },
      {
        "args": [
          "abc",
          "abc"
        ],
        "expected": 3
      },
      {
        "args": [
          "abc",
          "def"
        ],
        "expected": 0
      },
      {
        "args": [
          "bl",
          "yby"
        ],
        "expected": 1
      },
      {
        "args": [
          "a",
          "a"
        ],
        "expected": 1
      },
      {
        "args": [
          "bsbininm",
          "jmjkbkjkv"
        ],
        "expected": 1
      }
    ]
  },
  {
    "id": "coin-change",
    "num": 322,
    "title": "Coin Change",
    "difficulty": "medium",
    "fnName": "coinChange",
    "complexity": {
      "time": "O(amount·coins)",
      "space": "O(amount)"
    },
    "description": "<p>Given coin denominations (unlimited supply) and a target <code>amount</code>, return the fewest coins to make it, or -1 if impossible.</p><h3 class=\"sec-label\">Examples</h3><pre class=\"examples\"><code>[1,2,5], 11 -> 3   (5+5+1)\n[2], 3      -> -1\n[1], 0      -> 0\n[1,2,5], 7  -> 2   (5+2)</code></pre><div class=\"approach\"><b>Approach</b><span class=\"approach-sep\"> · </span>Unbounded-knapsack DP: dp[a] = min over coins of dp[a-c]+1, dp[0]=0. Greedy is wrong in general. O(amount·coins).</div>",
    "starter": "function coinChange(coins, amount) {\n  // your code here\n}",
    "cases": [
      {
        "args": [
          [
            1,
            2,
            5
          ],
          11
        ],
        "expected": 3
      },
      {
        "args": [
          [
            2
          ],
          3
        ],
        "expected": -1
      },
      {
        "args": [
          [
            1
          ],
          0
        ],
        "expected": 0
      },
      {
        "args": [
          [
            1,
            2,
            5
          ],
          100
        ],
        "expected": 20
      },
      {
        "args": [
          [
            2,
            5,
            10,
            1
          ],
          27
        ],
        "expected": 4
      },
      {
        "args": [
          [
            186,
            419,
            83,
            408
          ],
          6249
        ],
        "expected": 20
      }
    ]
  },
  {
    "id": "house-robber",
    "num": 198,
    "title": "House Robber",
    "difficulty": "medium",
    "fnName": "rob",
    "complexity": {
      "time": "O(n)",
      "space": "O(1)"
    },
    "description": "<p>You cannot rob two adjacent houses. Return the maximum total you can rob from <code>nums</code>.</p><h3 class=\"sec-label\">Examples</h3><pre class=\"examples\"><code>[1,2,3,1]   -> 4   (houses 0 and 2)\n[2,7,9,3,1] -> 12  (houses 0, 2, 4)\n[5]         -> 5\n[2,1,1,2]   -> 4</code></pre><div class=\"approach\"><b>Approach</b><span class=\"approach-sep\"> · </span>DP: best[i] = max(best[i-1], best[i-2] + nums[i]). Two rolling variables: O(n) time, O(1) space.</div>",
    "starter": "function rob(nums) {\n  // your code here\n}",
    "cases": [
      {
        "args": [
          [
            1,
            2,
            3,
            1
          ]
        ],
        "expected": 4
      },
      {
        "args": [
          [
            2,
            7,
            9,
            3,
            1
          ]
        ],
        "expected": 12
      },
      {
        "args": [
          [
            5
          ]
        ],
        "expected": 5
      },
      {
        "args": [
          [
            2,
            1,
            1,
            2
          ]
        ],
        "expected": 4
      },
      {
        "args": [
          [
            0
          ]
        ],
        "expected": 0
      },
      {
        "args": [
          [
            1,
            2
          ]
        ],
        "expected": 2
      },
      {
        "args": [
          [
            100,
            1,
            1,
            100
          ]
        ],
        "expected": 200
      }
    ]
  },
  {
    "id": "word-break",
    "num": 139,
    "title": "Word Break",
    "difficulty": "medium",
    "fnName": "wordBreak",
    "complexity": {
      "time": "O(n^2)",
      "space": "O(n)"
    },
    "description": "<p>Return true if <code>s</code> can be segmented into a sequence of one or more dictionary words (each word reusable).</p><h3 class=\"sec-label\">Examples</h3><pre class=\"examples\"><code>\"leetcode\", [\"leet\",\"code\"] -> true\n\"applepenapple\", [\"apple\",\"pen\"] -> true\n\"catsandog\", [\"cats\",\"dog\",\"sand\",\"and\",\"cat\"] -> false\n\"a\", [\"a\"] -> true</code></pre><div class=\"approach\"><b>Approach</b><span class=\"approach-sep\"> · </span>DP over prefixes: dp[i] true if some dp[j] is true and s[j..i) is in the dictionary Set. O(n²) time, O(n) space.</div>",
    "starter": "function wordBreak(s, wordDict) {\n  // your code here\n}",
    "cases": [
      {
        "args": [
          "leetcode",
          [
            "leet",
            "code"
          ]
        ],
        "expected": true
      },
      {
        "args": [
          "applepenapple",
          [
            "apple",
            "pen"
          ]
        ],
        "expected": true
      },
      {
        "args": [
          "catsandog",
          [
            "cats",
            "dog",
            "sand",
            "and",
            "cat"
          ]
        ],
        "expected": false
      },
      {
        "args": [
          "a",
          [
            "a"
          ]
        ],
        "expected": true
      },
      {
        "args": [
          "a",
          [
            "b"
          ]
        ],
        "expected": false
      },
      {
        "args": [
          "aaaaaaa",
          [
            "aaaa",
            "aaa"
          ]
        ],
        "expected": true
      }
    ]
  }
];
