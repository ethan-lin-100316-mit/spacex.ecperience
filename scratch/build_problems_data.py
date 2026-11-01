# 24 Comprehensive Big Tech Coding Problems
problems = [
  {
    "id": "two-sum",
    "title": "Two Sum",
    "difficulty": "Easy",
    "company": ["google", "amazon", "meta", "microsoft", "apple"],
    "category": "Arrays & Hashing",
    "description": "Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.\n\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.\n\nYou can return the answer in any order.",
    "examples": [
      { "input": "nums = [2,7,11,15], target = 9", "output": "[0,1]", "explanation": "Because nums[0] + nums[1] == 9, we return [0, 1]." },
      { "input": "nums = [3,2,4], target = 6", "output": "[1,2]", "explanation": "nums[1] + nums[2] == 6, return [1, 2]." },
      { "input": "nums = [3,3], target = 6", "output": "[0,1]", "explanation": "nums[0] + nums[1] == 6, return [0, 1]." }
    ],
    "constraints": ["2 <= nums.length <= 10^4", "-10^9 <= nums[i] <= 10^9", "-10^9 <= target <= 10^9", "Only one valid answer exists."],
    "starterCode": {
      "javascript": "/**\n * @param {number[]} nums\n * @param {number} target\n * @return {number[]}\n */\nfunction twoSum(nums, target) {\n  const map = new Map();\n  for (let i = 0; i < nums.length; i++) {\n    const complement = target - nums[i];\n    if (map.has(complement)) {\n      return [map.get(complement), i];\n    }\n    map.set(nums[i], i);\n  }\n  return [];\n}",
      "python": "def two_sum(nums: list[int], target: int) -> list[int]:\n    seen = {}\n    for i, num in enumerate(nums):\n        comp = target - num\n        if comp in seen:\n            return [seen[comp], i]\n        seen[num] = i\n    return []",
      "java": "class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        Map<Integer, Integer> map = new HashMap<>();\n        for (int i = 0; i < nums.length; i++) {\n            int comp = target - nums[i];\n            if (map.containsKey(comp)) {\n                return new int[]{map.get(comp), i};\n            }\n            map.put(nums[i], i);\n        }\n        return new int[]{};\n    }\n}"
    },
    "testCases": [
      { "input": { "nums": [2, 7, 11, 15], "target": 9 }, "expected": [0, 1] },
      { "input": { "nums": [3, 2, 4], "target": 6 }, "expected": [1, 2] },
      { "input": { "nums": [3, 3], "target": 6 }, "expected": [0, 1] }
    ],
    "solution": "Use a hash map to record elements and their indices. For each element, look up (target - num) in O(1) time.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(n)"
  },
  {
    "id": "valid-parentheses",
    "title": "Valid Parentheses",
    "difficulty": "Easy",
    "company": ["meta", "google", "amazon", "microsoft", "netflix"],
    "category": "Stack",
    "description": "Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.\n\nAn input string is valid if:\n1. Open brackets must be closed by the same type of brackets.\n2. Open brackets must be closed in the correct order.\n3. Every close bracket has a corresponding open bracket of the same type.",
    "examples": [
      { "input": "s = \"()\"", "output": "true", "explanation": "Matching parenthesis." },
      { "input": "s = \"()[]{}\"", "output": "true", "explanation": "All types matched properly." },
      { "input": "s = \"(]\"", "output": "false", "explanation": "Mismatched bracket types." }
    ],
    "constraints": ["1 <= s.length <= 10^4", "s consists of parentheses only '()[]{}'."],
    "starterCode": {
      "javascript": "/**\n * @param {string} s\n * @return {boolean}\n */\nfunction isValid(s) {\n  const stack = [];\n  const pairs = { ')': '(', '}': '{', ']': '[' };\n  for (const ch of s) {\n    if (pairs[ch]) {\n      if (stack.pop() !== pairs[ch]) return false;\n    } else {\n      stack.push(ch);\n    }\n  }\n  return stack.length === 0;\n}",
      "python": "def is_valid(s: str) -> bool:\n    stack = []\n    pairs = {')': '(', '}': '{', ']': '['}\n    for ch in s:\n        if ch in pairs:\n            if not stack or stack.pop() != pairs[ch]:\n                return False\n        else:\n            stack.append(ch)\n    return len(stack) == 0",
      "java": "class Solution {\n    public boolean isValid(String s) {\n        Stack<Character> stack = new Stack<>();\n        for (char c : s.toCharArray()) {\n            if (c == '(') stack.push(')');\n            else if (c == '{') stack.push('}');\n            else if (c == '[') stack.push(']');\n            else if (stack.isEmpty() || stack.pop() != c) return false;\n        }\n        return stack.isEmpty();\n    }\n}"
    },
    "testCases": [
      { "input": { "s": "()" }, "expected": True },
      { "input": { "s": "()[]{}" }, "expected": True },
      { "input": { "s": "(]" }, "expected": False }
    ],
    "solution": "Push opening brackets or matching closers onto a stack. Check top element upon encountering closing brackets.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(n)"
  },
  {
    "id": "reverse-linked-list",
    "title": "Reverse Linked List",
    "difficulty": "Easy",
    "company": ["microsoft", "google", "amazon", "apple"],
    "category": "Linked List",
    "description": "Given the `head` of a singly linked list, reverse the list, and return the reversed list.",
    "examples": [
      { "input": "head = [1,2,3,4,5]", "output": "[5,4,3,2,1]", "explanation": "The list is reversed iteratively or recursively." },
      { "input": "head = [1,2]", "output": "[2,1]", "explanation": "Two element list reversed." },
      { "input": "head = []", "output": "[]", "explanation": "Empty list remains empty." }
    ],
    "constraints": ["The number of nodes in the list is the range [0, 5000].", "-5000 <= Node.val <= 5000"],
    "starterCode": {
      "javascript": "/**\n * @param {ListNode} head\n * @return {ListNode}\n */\nfunction reverseList(head) {\n  let prev = null;\n  let curr = head;\n  while (curr) {\n    const next = curr.next;\n    curr.next = prev;\n    prev = curr;\n    curr = next;\n  }\n  return prev;\n}",
      "python": "def reverse_list(head):\n    prev = None\n    curr = head\n    while curr:\n        next_node = curr.next\n        curr.next = prev\n        prev = curr\n        curr = next_node\n    return prev",
      "java": "class Solution {\n    public ListNode reverseList(ListNode head) {\n        ListNode prev = null;\n        ListNode curr = head;\n        while (curr != null) {\n            ListNode next = curr.next;\n            curr.next = prev;\n            prev = curr;\n            curr = next;\n        }\n        return prev;\n    }\n}"
    },
    "testCases": [
      { "input": { "head": [1, 2, 3, 4, 5] }, "expected": [5, 4, 3, 2, 1] }
    ],
    "solution": "Maintain previous and current pointers, updating the next pointer of each node as you traverse.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)"
  },
  {
    "id": "climbing-stairs",
    "title": "Climbing Stairs",
    "difficulty": "Easy",
    "company": ["google", "apple", "amazon"],
    "category": "Dynamic Programming",
    "description": "You are climbing a staircase. It takes `n` steps to reach the top.\n\nEach time you can either climb `1` or `2` steps. In how many distinct ways can you climb to the top?",
    "examples": [
      { "input": "n = 2", "output": "2", "explanation": "1 step + 1 step, or 2 steps." },
      { "input": "n = 3", "output": "3", "explanation": "1+1+1, 1+2, or 2+1." }
    ],
    "constraints": ["1 <= n <= 45"],
    "starterCode": {
      "javascript": "/**\n * @param {number} n\n * @return {number}\n */\nfunction climbStairs(n) {\n  if (n <= 2) return n;\n  let a = 1, b = 2;\n  for (let i = 3; i <= n; i++) {\n    const temp = a + b;\n    a = b;\n    b = temp;\n  }\n  return b;\n}",
      "python": "def climb_stairs(n: int) -> int:\n    if n <= 2:\n        return n\n    a, b = 1, 2\n    for _ in range(3, n + 1):\n        a, b = b, a + b\n    return b",
      "java": "class Solution {\n    public int climbStairs(int n) {\n        if (n <= 2) return n;\n        int a = 1, b = 2;\n        for (int i = 3; i <= n; i++) {\n            int temp = a + b;\n            a = b;\n            b = temp;\n        }\n        return b;\n    }\n}"
    },
    "testCases": [
      { "input": { "n": 2 }, "expected": 2 },
      { "input": { "n": 3 }, "expected": 3 },
      { "input": { "n": 5 }, "expected": 8 }
    ],
    "solution": "Fibonacci recurrence relation: dp[i] = dp[i-1] + dp[i-2], optimized to O(1) space.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)"
  },
  {
    "id": "maximum-subarray",
    "title": "Maximum Subarray (Kadane's)",
    "difficulty": "Easy",
    "company": ["amazon", "meta", "microsoft", "google"],
    "category": "Dynamic Programming",
    "description": "Given an integer array `nums`, find the subarray with the largest sum, and return its sum.",
    "examples": [
      { "input": "nums = [-2,1,-3,4,-1,2,1,-5,4]", "output": "6", "explanation": "The subarray [4,-1,2,1] has the largest sum 6." },
      { "input": "nums = [1]", "output": "1", "explanation": "Single element array sum is 1." },
      { "input": "nums = [5,4,-1,7,8]", "output": "23", "explanation": "The entire array has sum 23." }
    ],
    "constraints": ["1 <= nums.length <= 10^5", "-10^4 <= nums[i] <= 10^4"],
    "starterCode": {
      "javascript": "/**\n * @param {number[]} nums\n * @return {number}\n */\nfunction maxSubArray(nums) {\n  let currentSum = nums[0];\n  let maxSum = nums[0];\n  for (let i = 1; i < nums.length; i++) {\n    currentSum = Math.max(nums[i], currentSum + nums[i]);\n    maxSum = Math.max(maxSum, currentSum);\n  }\n  return maxSum;\n}",
      "python": "def max_sub_array(nums: list[int]) -> int:\n    current_sum = max_sum = nums[0]\n    for num in nums[1:]:\n        current_sum = max(num, current_sum + num)\n        max_sum = max(max_sum, current_sum)\n    return max_sum",
      "java": "class Solution {\n    public int maxSubArray(int[] nums) {\n        int cur = nums[0], max = nums[0];\n        for (int i = 1; i < nums.length; i++) {\n            cur = Math.max(nums[i], cur + nums[i]);\n            max = Math.max(max, cur);\n        }\n        return max;\n    }\n}"
    },
    "testCases": [
      { "input": { "nums": [-2, 1, -3, 4, -1, 2, 1, -5, 4] }, "expected": 6 },
      { "input": { "nums": [1] }, "expected": 1 },
      { "input": { "nums": [5, 4, -1, 7, 8] }, "expected": 23 }
    ],
    "solution": "Kadane's algorithm: at each element, decide whether to add it to current running sum or start fresh.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)"
  },
  {
    "id": "best-time-stock",
    "title": "Best Time to Buy and Sell Stock",
    "difficulty": "Easy",
    "company": ["amazon", "meta", "google", "apple", "microsoft"],
    "category": "Arrays & Hashing",
    "description": "You are given an array `prices` where `prices[i]` is the price of a given stock on the `i`th day.\n\nYou want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.\n\nReturn the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return `0`.",
    "examples": [
      { "input": "prices = [7,1,5,3,6,4]", "output": "5", "explanation": "Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5." },
      { "input": "prices = [7,6,4,3,1]", "output": "0", "explanation": "In this case, no transactions are done and max profit = 0." }
    ],
    "constraints": ["1 <= prices.length <= 10^5", "0 <= prices[i] <= 10^4"],
    "starterCode": {
      "javascript": "/**\n * @param {number[]} prices\n * @return {number}\n */\nfunction maxProfit(prices) {\n  let minPrice = Infinity;\n  let maxProfit = 0;\n  for (const price of prices) {\n    if (price < minPrice) minPrice = price;\n    else if (price - minPrice > maxProfit) maxProfit = price - minPrice;\n  }\n  return maxProfit;\n}",
      "python": "def max_profit(prices: list[int]) -> int:\n    min_price = float('inf')\n    max_profit = 0\n    for p in prices:\n        if p < min_price:\n            min_price = p\n        elif p - min_price > max_profit:\n            max_profit = p - min_price\n    return max_profit",
      "java": "class Solution {\n    public int maxProfit(int[] prices) {\n        int min = Integer.MAX_VALUE, max = 0;\n        for (int p : prices) {\n            if (p < min) min = p;\n            else if (p - min > max) max = p - min;\n        }\n        return max;\n    }\n}"
    },
    "testCases": [
      { "input": { "prices": [7, 1, 5, 3, 6, 4] }, "expected": 5 },
      { "input": { "prices": [7, 6, 4, 3, 1] }, "expected": 0 }
    ],
    "solution": "Track running minimum price and compute potential profit at each step.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)"
  },
  {
    "id": "longest-substring",
    "title": "Longest Substring Without Repeating Characters",
    "difficulty": "Medium",
    "company": ["amazon", "meta", "google", "microsoft", "apple"],
    "category": "Sliding Window",
    "description": "Given a string `s`, find the length of the longest substring without duplicate characters.",
    "examples": [
      { "input": "s = \"abcabcbb\"", "output": "3", "explanation": "The answer is \"abc\", with the length of 3." },
      { "input": "s = \"bbbbb\"", "output": "1", "explanation": "The answer is \"b\", with length 1." },
      { "input": "s = \"pwwkew\"", "output": "3", "explanation": "The answer is \"wke\", with length 3." }
    ],
    "constraints": ["0 <= s.length <= 5 * 10^4", "s consists of English letters, digits, symbols and spaces."],
    "starterCode": {
      "javascript": "/**\n * @param {string} s\n * @return {number}\n */\nfunction lengthOfLongestSubstring(s) {\n  let maxLen = 0, left = 0;\n  const charIndex = new Map();\n  for (let right = 0; right < s.length; right++) {\n    if (charIndex.has(s[right]) && charIndex.get(s[right]) >= left) {\n      left = charIndex.get(s[right]) + 1;\n    }\n    charIndex.set(s[right], right);\n    maxLen = Math.max(maxLen, right - left + 1);\n  }\n  return maxLen;\n}",
      "python": "def length_of_longest_substring(s: str) -> int:\n    char_map = {}\n    left = max_len = 0\n    for right, ch in enumerate(s):\n        if ch in char_map and char_map[ch] >= left:\n            left = char_map[ch] + 1\n        char_map[ch] = right\n        max_len = max(max_len, right - left + 1)\n    return max_len",
      "java": "class Solution {\n    public int lengthOfLongestSubstring(String s) {\n        int max = 0, left = 0;\n        Map<Character, Integer> map = new HashMap<>();\n        for (int right = 0; right < s.length(); right++) {\n            char c = s.charAt(right);\n            if (map.containsKey(c) && map.get(c) >= left) {\n                left = map.get(c) + 1;\n            }\n            map.put(c, right);\n            max = Math.max(max, right - left + 1);\n        }\n        return max;\n    }\n}"
    },
    "testCases": [
      { "input": { "s": "abcabcbb" }, "expected": 3 },
      { "input": { "s": "bbbbb" }, "expected": 1 },
      { "input": { "s": "pwwkew" }, "expected": 3 }
    ],
    "solution": "Sliding window with hash map storing last seen index of characters to jump the left pointer forward.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(min(n, m)) where m is charset size"
  },
  {
    "id": "3sum",
    "title": "3Sum",
    "difficulty": "Medium",
    "company": ["meta", "amazon", "apple", "google"],
    "category": "Two Pointers",
    "description": "Given an integer array nums, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`.\n\nNotice that the solution set must not contain duplicate triplets.",
    "examples": [
      { "input": "nums = [-1,0,1,2,-1,-4]", "output": "[[-1,-1,2],[-1,0,1]]", "explanation": "Distinct triplets summing to 0." },
      { "input": "nums = [0,1,1]", "output": "[]", "explanation": "No triplet sums to 0." }
    ],
    "constraints": ["3 <= nums.length <= 3000", "-10^5 <= nums[i] <= 10^5"],
    "starterCode": {
      "javascript": "/**\n * @param {number[]} nums\n * @return {number[][]}\n */\nfunction threeSum(nums) {\n  nums.sort((a, b) => a - b);\n  const res = [];\n  for (let i = 0; i < nums.length - 2; i++) {\n    if (i > 0 && nums[i] === nums[i - 1]) continue;\n    let l = i + 1, r = nums.length - 1;\n    while (l < r) {\n      const sum = nums[i] + nums[l] + nums[r];\n      if (sum === 0) {\n        res.push([nums[i], nums[l], nums[r]]);\n        while (l < r && nums[l] === nums[l + 1]) l++;\n        while (l < r && nums[r] === nums[r - 1]) r--;\n        l++; r--;\n      } else if (sum < 0) l++;\n      else r--;\n    }\n  }\n  return res;\n}",
      "python": "def three_sum(nums: list[int]) -> list[list[int]]:\n    nums.sort()\n    res = []\n    for i in range(len(nums) - 2):\n        if i > 0 and nums[i] == nums[i - 1]:\n            continue\n        l, r = i + 1, len(nums) - 1\n        while l < r:\n            s = nums[i] + nums[l] + nums[r]\n            if s == 0:\n                res.append([nums[i], nums[l], nums[r]])\n                while l < r and nums[l] == nums[l + 1]: l += 1\n                while l < r and nums[r] == nums[r - 1]: r -= 1\n                l += 1; r -= 1\n            elif s < 0: l += 1\n            else: r -= 1\n    return res",
      "java": "class Solution {\n    public List<List<Integer>> threeSum(int[] nums) {\n        Arrays.sort(nums);\n        List<List<Integer>> res = new ArrayList<>();\n        for (int i = 0; i < nums.length - 2; i++) {\n            if (i > 0 && nums[i] == nums[i - 1]) continue;\n            int l = i + 1, r = nums.length - 1;\n            while (l < r) {\n                int sum = nums[i] + nums[l] + nums[r];\n                if (sum == 0) {\n                    res.add(Arrays.asList(nums[i], nums[l], nums[r]));\n                    while (l < r && nums[l] == nums[l + 1]) l++;\n                    while (l < r && nums[r] == nums[r - 1]) r--;\n                    l++; r--;\n                } else if (sum < 0) l++;\n                else r--;\n            }\n        }\n        return res;\n    }\n}"
    },
    "testCases": [
      { "input": { "nums": [-1, 0, 1, 2, -1, -4] }, "expected": [[-1, -1, 2], [-1, 0, 1]] }
    ],
    "solution": "Sort array. Iterate through each element and use two pointers (left and right) on the remaining suffix while skipping duplicates.",
    "timeComplexity": "O(n^2)",
    "spaceComplexity": "O(log n) or O(n) for sorting"
  },
  {
    "id": "container-with-most-water",
    "title": "Container With Most Water",
    "difficulty": "Medium",
    "company": ["meta", "google", "amazon"],
    "category": "Two Pointers",
    "description": "You are given an integer array `height` of length `n`. There are `n` vertical lines drawn such that the two endpoints of the `i`th line are `(i, 0)` and `(i, height[i])`.\n\nFind two lines that together with the x-axis form a container, such that the container contains the most water.\n\nReturn the maximum amount of water a container can store.",
    "examples": [
      { "input": "height = [1,8,6,2,5,4,8,3,7]", "output": "49", "explanation": "Max area between index 1 and 8: min(8, 7) * (8 - 1) = 49." },
      { "input": "height = [1,1]", "output": "1", "explanation": "Area = 1 * 1 = 1." }
    ],
    "constraints": ["n == height.length", "2 <= n <= 10^5", "0 <= height[i] <= 10^4"],
    "starterCode": {
      "javascript": "/**\n * @param {number[]} height\n * @return {number}\n */\nfunction maxArea(height) {\n  let l = 0, r = height.length - 1, max = 0;\n  while (l < r) {\n    const area = Math.min(height[l], height[r]) * (r - l);\n    max = Math.max(max, area);\n    if (height[l] < height[r]) l++;\n    else r--;\n  }\n  return max;\n}",
      "python": "def max_area(height: list[int]) -> int:\n    l, r = 0, len(height) - 1\n    max_w = 0\n    while l < r:\n        area = min(height[l], height[r]) * (r - l)\n        max_w = max(max_w, area)\n        if height[l] < height[r]:\n            l += 1\n        else:\n            r -= 1\n    return max_w",
      "java": "class Solution {\n    public int maxArea(int[] height) {\n        int l = 0, r = height.length - 1, max = 0;\n        while (l < r) {\n            int area = Math.min(height[l], height[r]) * (r - l);\n            max = Math.max(max, area);\n            if (height[l] < height[r]) l++;\n            else r--;\n        }\n        return max;\n    }\n}"
    },
    "testCases": [
      { "input": { "height": [1, 8, 6, 2, 5, 4, 8, 3, 7] }, "expected": 49 },
      { "input": { "height": [1, 1] }, "expected": 1 }
    ],
    "solution": "Two pointers at left and right boundaries. Greedily advance the pointer with the smaller height.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)"
  },
  {
    "id": "merge-intervals",
    "title": "Merge Intervals",
    "difficulty": "Medium",
    "company": ["google", "meta", "amazon", "apple"],
    "category": "Intervals",
    "description": "Given an array of intervals where `intervals[i] = [start_i, end_i]`, merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.",
    "examples": [
      { "input": "intervals = [[1,3],[2,6],[8,10],[15,18]]", "output": "[[1,6],[8,10],[15,18]]", "explanation": "Intervals [1,3] and [2,6] overlap into [1,6]." },
      { "input": "intervals = [[1,4],[4,5]]", "output": "[[1,5]]", "explanation": "Intervals [1,4] and [4,5] overlap at boundary 4." }
    ],
    "constraints": ["1 <= intervals.length <= 10^4", "intervals[i].length == 2", "0 <= start_i <= end_i <= 10^4"],
    "starterCode": {
      "javascript": "/**\n * @param {number[][]} intervals\n * @return {number[][]}\n */\nfunction merge(intervals) {\n  intervals.sort((a, b) => a[0] - b[0]);\n  const merged = [intervals[0]];\n  for (let i = 1; i < intervals.length; i++) {\n    const last = merged[merged.length - 1];\n    if (intervals[i][0] <= last[1]) {\n      last[1] = Math.max(last[1], intervals[i][1]);\n    } else {\n      merged.push(intervals[i]);\n    }\n  }\n  return merged;\n}",
      "python": "def merge(intervals: list[list[int]]) -> list[list[int]]:\n    intervals.sort(key=lambda x: x[0])\n    merged = [intervals[0]]\n    for start, end in intervals[1:]:\n        if start <= merged[-1][1]:\n            merged[-1][1] = max(merged[-1][1], end)\n        else:\n            merged.append([start, end])\n    return merged",
      "java": "class Solution {\n    public int[][] merge(int[][] intervals) {\n        Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));\n        List<int[]> merged = new ArrayList<>();\n        merged.add(intervals[0]);\n        for (int i = 1; i < intervals.length; i++) {\n            int[] last = merged.get(merged.size() - 1);\n            if (intervals[i][0] <= last[1]) {\n                last[1] = Math.max(last[1], intervals[i][1]);\n            } else {\n                merged.add(intervals[i]);\n            }\n        }\n        return merged.toArray(new int[merged.size()][]);\n    }\n}"
    },
    "testCases": [
      { "input": { "intervals": [[1, 3], [2, 6], [8, 10], [15, 18]] }, "expected": [[1, 6], [8, 10], [15, 18]] },
      { "input": { "intervals": [[1, 4], [4, 5]] }, "expected": [[1, 5]] }
    ],
    "solution": "Sort intervals by start value, then sequentially merge overlapping ranges.",
    "timeComplexity": "O(n log n)",
    "spaceComplexity": "O(n)"
  },
  {
    "id": "number-of-islands",
    "title": "Number of Islands",
    "difficulty": "Medium",
    "company": ["amazon", "google", "meta", "microsoft"],
    "category": "Graphs & BFS/DFS",
    "description": "Given an `m x n` 2D binary grid `grid` which represents a map of `'1'`s (land) and `'0'`s (water), return the number of islands.\n\nAn island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.",
    "examples": [
      {
        "input": "grid = [[\"1\",\"1\",\"1\",\"1\",\"0\"],[\"1\",\"1\",\"0\",\"1\",\"0\"],[\"1\",\"1\",\"0\",\"0\",\"0\"],[\"0\",\"0\",\"0\",\"0\",\"0\"]]",
        "output": "1",
        "explanation": "All 1s connect into 1 single island."
      },
      {
        "input": "grid = [[\"1\",\"1\",\"0\",\"0\",\"0\"],[\"1\",\"1\",\"0\",\"0\",\"0\"],[\"0\",\"0\",\"1\",\"0\",\"0\"],[\"0\",\"0\",\"0\",\"1\",\"1\"]]",
        "output": "3",
        "explanation": "There are 3 separate disconnected islands."
      }
    ],
    "constraints": ["m == grid.length", "n == grid[i].length", "1 <= m, n <= 300", "grid[i][j] is '0' or '1'."],
    "starterCode": {
      "javascript": "/**\n * @param {character[][]} grid\n * @return {number}\n */\nfunction numIslands(grid) {\n  let count = 0;\n  const dfs = (r, c) => {\n    if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length || grid[r][c] !== '1') return;\n    grid[r][c] = '0';\n    dfs(r + 1, c); dfs(r - 1, c); dfs(r, c + 1); dfs(r, c - 1);\n  };\n  for (let r = 0; r < grid.length; r++) {\n    for (let c = 0; c < grid[0].length; c++) {\n      if (grid[r][c] === '1') {\n        count++;\n        dfs(r, c);\n      }\n    }\n  }\n  return count;\n}",
      "python": "def num_islands(grid: list[list[str]]) -> int:\n    if not grid: return 0\n    rows, cols = len(grid), len(grid[0])\n    count = 0\n    def dfs(r, c):\n        if r < 0 or r >= rows or c < 0 or c >= cols or grid[r][c] != '1':\n            return\n        grid[r][c] = '0'\n        dfs(r+1, c); dfs(r-1, c); dfs(r, c+1); dfs(r, c-1)\n    for r in range(rows):\n        for c in range(cols):\n            if grid[r][c] == '1':\n                count += 1\n                dfs(r, c)\n    return count",
      "java": "class Solution {\n    public int numIslands(char[][] grid) {\n        int count = 0;\n        for (int r = 0; r < grid.length; r++) {\n            for (int c = 0; c < grid[0].length; c++) {\n                if (grid[r][c] == '1') {\n                    count++;\n                    dfs(grid, r, c);\n                }\n            }\n        }\n        return count;\n    }\n    private void dfs(char[][] g, int r, int c) {\n        if (r < 0 || r >= g.length || c < 0 || c >= g[0].length || g[r][c] != '1') return;\n        g[r][c] = '0';\n        dfs(g, r+1, c); dfs(g, r-1, c); dfs(g, r, c+1); dfs(g, r, c-1);\n    }\n}"
    },
    "testCases": [
      { "input": { "grid": [["1","1","0"],["0","1","0"],["0","0","1"]] }, "expected": 2 }
    ],
    "solution": "Traverse grid. Whenever '1' is found, increment count and sink the island by DFS/BFS setting visited cells to '0'.",
    "timeComplexity": "O(m * n)",
    "spaceComplexity": "O(m * n) recursive stack"
  },
  {
    "id": "course-schedule",
    "title": "Course Schedule (Topological Sort)",
    "difficulty": "Medium",
    "company": ["google", "meta", "amazon", "microsoft"],
    "category": "Graphs & BFS/DFS",
    "description": "There are a total of `numCourses` courses you have to take, labeled from `0` to `numCourses - 1`. You are given an array `prerequisites` where `prerequisites[i] = [a_i, b_i]` indicates that you must take course `b_i` first if you want to take course `a_i`.\n\nReturn `true` if you can finish all courses. Otherwise, return `false`.",
    "examples": [
      { "input": "numCourses = 2, prerequisites = [[1,0]]", "output": "true", "explanation": "To take course 1 you should have finished course 0. So it is possible." },
      { "input": "numCourses = 2, prerequisites = [[1,0],[0,1]]", "output": "false", "explanation": "Cycle detected: course 1 requires 0, and 0 requires 1." }
    ],
    "constraints": ["1 <= numCourses <= 2000", "0 <= prerequisites.length <= 5000", "prerequisites[i].length == 2", "All pairs are unique."],
    "starterCode": {
      "javascript": "/**\n * @param {number} numCourses\n * @param {number[][]} prerequisites\n * @return {boolean}\n */\nfunction canFinish(numCourses, prerequisites) {\n  const inDegree = new Array(numCourses).fill(0);\n  const adj = Array.from({ length: numCourses }, () => []);\n  for (const [course, pre] of prerequisites) {\n    adj[pre].push(course);\n    inDegree[course]++;\n  }\n  const queue = [];\n  for (let i = 0; i < numCourses; i++) {\n    if (inDegree[i] === 0) queue.push(i);\n  }\n  let taken = 0;\n  while (queue.length) {\n    const node = queue.shift();\n    taken++;\n    for (const next of adj[node]) {\n      inDegree[next]--;\n      if (inDegree[next] === 0) queue.push(next);\n    }\n  }\n  return taken === numCourses;\n}",
      "python": "from collections import deque\ndef can_finish(num_courses: int, prerequisites: list[list[int]]) -> bool:\n    in_degree = [0] * num_courses\n    adj = [[] for _ in range(num_courses)]\n    for course, pre in prerequisites:\n        adj[pre].append(course)\n        in_degree[course] += 1\n    q = deque([i for i in range(num_courses) if in_degree[i] == 0])\n    taken = 0\n    while q:\n        node = q.popleft()\n        taken += 1\n        for nxt in adj[node]:\n            in_degree[nxt] -= 1\n            if in_degree[nxt] == 0:\n                q.append(nxt)\n    return taken == num_courses",
      "java": "class Solution {\n    public boolean canFinish(int numCourses, int[][] prerequisites) {\n        int[] inDegree = new int[numCourses];\n        List<List<Integer>> adj = new ArrayList<>();\n        for (int i = 0; i < numCourses; i++) adj.add(new ArrayList<>());\n        for (int[] p : prerequisites) {\n            adj.get(p[1]).add(p[0]);\n            inDegree[p[0]]++;\n        }\n        Queue<Integer> q = new LinkedList<>();\n        for (int i = 0; i < numCourses; i++) if (inDegree[i] == 0) q.add(i);\n        int count = 0;\n        while (!q.isEmpty()) {\n            int node = q.poll();\n            count++;\n            for (int nxt : adj.get(node)) {\n                if (--inDegree[nxt] == 0) q.add(nxt);\n            }\n        }\n        return count == numCourses;\n    }\n}"
    },
    "testCases": [
      { "input": { "numCourses": 2, "prerequisites": [[1, 0]] }, "expected": True },
      { "input": { "numCourses": 2, "prerequisites": [[1, 0], [0, 1]] }, "expected": False }
    ],
    "solution": "Kahn's algorithm (BFS topological sort) using in-degrees to detect cycles in directed graph.",
    "timeComplexity": "O(V + E)",
    "spaceComplexity": "O(V + E)"
  },
  {
    "id": "lru-cache",
    "title": "LRU Cache",
    "difficulty": "Medium",
    "company": ["google", "meta", "amazon", "microsoft", "apple"],
    "category": "Design",
    "description": "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.\n\nImplement the `LRUCache` class:\n- `LRUCache(int capacity)` Initialize the LRU cache with positive size capacity.\n- `int get(int key)` Return the value of the key if the key exists, otherwise return -1.\n- `void put(int key, int value)` Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity, evict the least recently used key.\n\nThe functions `get` and `put` must each run in O(1) average time complexity.",
    "examples": [
      {
        "input": "[\"LRUCache\", \"put\", \"put\", \"get\", \"put\", \"get\", \"put\", \"get\", \"get\", \"get\"]\n[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]",
        "output": "[null, null, null, 1, null, -1, null, -1, 3, 4]",
        "explanation": "LRU operations executing in O(1)."
      }
    ],
    "constraints": ["1 <= capacity <= 3000", "0 <= key <= 10^4", "0 <= value <= 10^5", "At most 2 * 10^5 calls to get and put."],
    "starterCode": {
      "javascript": "class LRUCache {\n  constructor(capacity) {\n    this.capacity = capacity;\n    this.map = new Map();\n  }\n  get(key) {\n    if (!this.map.has(key)) return -1;\n    const val = this.map.get(key);\n    this.map.delete(key);\n    this.map.set(key, val);\n    return val;\n  }\n  put(key, value) {\n    if (this.map.has(key)) this.map.delete(key);\n    this.map.set(key, value);\n    if (this.map.size > this.capacity) {\n      const firstKey = this.map.keys().next().value;\n      this.map.delete(firstKey);\n    }\n  }\n}",
      "python": "from collections import OrderedDict\nclass LRUCache:\n    def __init__(self, capacity: int):\n        self.cap = capacity\n        self.cache = OrderedDict()\n    def get(self, key: int) -> int:\n        if key not in self.cache:\n            return -1\n        self.cache.move_to_end(key)\n        return self.cache[key]\n    def put(self, key: int, value: int) -> None:\n        if key in self.cache:\n            self.cache.move_to_end(key)\n        self.cache[key] = value\n        if len(self.cache) > self.cap:\n            self.cache.popitem(last=False)",
      "java": "class LRUCache {\n    private final int capacity;\n    private final LinkedHashMap<Integer, Integer> map;\n    public LRUCache(int capacity) {\n        this.capacity = capacity;\n        this.map = new LinkedHashMap<>(capacity, 0.75f, true) {\n            protected boolean removeEldestEntry(Map.Entry eldest) {\n                return size() > capacity;\n            }\n        };\n    }\n    public int get(int key) {\n        return map.getOrDefault(key, -1);\n    }\n    public void put(int key, int value) {\n        map.put(key, value);\n    }\n}"
    },
    "testCases": [],
    "solution": "Combine a Doubly Linked List (for O(1) removals and prepends) with a Hash Map (for O(1) lookups).",
    "timeComplexity": "O(1) for both get and put",
    "spaceComplexity": "O(capacity)"
  },
  {
    "id": "design-twitter",
    "title": "Design Twitter",
    "difficulty": "Medium",
    "company": ["meta", "amazon", "microsoft"],
    "category": "Design",
    "description": "Design a simplified version of Twitter where users can post tweets, follow/unfollow another user, and get the 10 most recent tweets in the user's news feed.",
    "examples": [
      {
        "input": "[\"Twitter\", \"postTweet\", \"getNewsFeed\", \"follow\", \"getNewsFeed\", \"unfollow\", \"getNewsFeed\"]\n[[], [1, 5], [1], [1, 2], [1], [1, 2], [1]]",
        "output": "[null, null, [5], null, [5, 6], null, [5]]",
        "explanation": "Feed updates dynamically with follows and posts."
      }
    ],
    "constraints": ["1 <= userId, followerId, followeeId <= 500", "0 <= tweetId <= 10^4", "At most 3 * 10^4 calls."],
    "starterCode": {
      "javascript": "class Twitter {\n  constructor() {\n    this.tweets = []; // { userId, tweetId, time }\n    this.following = new Map(); // userId -> Set(followeeIds)\n    this.timer = 0;\n  }\n  postTweet(userId, tweetId) {\n    this.tweets.push({ userId, tweetId, time: this.timer++ });\n  }\n  getNewsFeed(userId) {\n    const followees = this.following.get(userId) || new Set();\n    const feed = [];\n    for (let i = this.tweets.length - 1; i >= 0 && feed.length < 10; i--) {\n      const t = this.tweets[i];\n      if (t.userId === userId || followees.has(t.userId)) {\n        feed.push(t.tweetId);\n      }\n    }\n    return feed;\n  }\n  follow(followerId, followeeId) {\n    if (!this.following.has(followerId)) this.following.set(followerId, new Set());\n    this.following.get(followerId).add(followeeId);\n  }\n  unfollow(followerId, followeeId) {\n    if (this.following.has(followerId)) this.following.get(followerId).delete(followeeId);\n  }\n}",
      "python": "class Twitter:\n    def __init__(self):\n        self.timer = 0\n        self.tweets = [] # (time, userId, tweetId)\n        self.following = {}\n    def post_tweet(self, user_id: int, tweet_id: int) -> None:\n        self.tweets.append((self.timer, user_id, tweet_id))\n        self.timer += 1\n    def get_news_feed(self, user_id: int) -> list[int]:\n        follows = self.following.get(user_id, set())\n        feed = []\n        for t, uid, tid in reversed(self.tweets):\n            if uid == user_id or uid in follows:\n                feed.append(tid)\n                if len(feed) == 10: break\n        return feed\n    def follow(self, follower_id: int, followee_id: int) -> None:\n        if follower_id not in self.following:\n            self.following[follower_id] = set()\n        self.following[follower_id].add(followee_id)\n    def unfollow(self, follower_id: int, followee_id: int) -> None:\n        if follower_id in self.following:\n            self.following[follower_id].discard(followee_id)",
      "java": "class Twitter {\n    private static int timeStamp = 0;\n    private Map<Integer, Set<Integer>> followed = new HashMap<>();\n    private Map<Integer, List<int[]>> tweets = new HashMap<>();\n    public Twitter() {}\n    public void postTweet(int userId, int tweetId) {\n        tweets.computeIfAbsent(userId, k -> new ArrayList<>()).add(new int[]{timeStamp++, tweetId});\n    }\n    public List<Integer> getNewsFeed(int userId) {\n        PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> b[0] - a[0]);\n        Set<Integer> users = new HashSet<>(followed.getOrDefault(userId, new HashSet<>()));\n        users.add(userId);\n        for (int u : users) {\n            List<int[]> userTweets = tweets.getOrDefault(u, Collections.emptyList());\n            for (int[] t : userTweets) pq.add(t);\n        }\n        List<Integer> res = new ArrayList<>();\n        while (!pq.isEmpty() && res.size() < 10) res.add(pq.poll()[1]);\n        return res;\n    }\n    public void follow(int followerId, int followeeId) {\n        followed.computeIfAbsent(followerId, k -> new HashSet<>()).add(followeeId);\n    }\n    public void unfollow(int followerId, int followeeId) {\n        if (followed.containsKey(followerId)) followed.get(followerId).remove(followeeId);\n    }\n}"
    },
    "testCases": [],
    "solution": "Track follow relationships with hash sets and merge user timelines using a max-heap priority queue.",
    "timeComplexity": "O(k log k) for feed retrieval",
    "spaceComplexity": "O(N * T)"
  },
  {
    "id": "coin-change",
    "title": "Coin Change",
    "difficulty": "Medium",
    "company": ["amazon", "meta", "google"],
    "category": "Dynamic Programming",
    "description": "You are given an integer array `coins` representing coins of different denominations and an integer `amount` representing a total amount of money.\n\nReturn the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return `-1`.\n\nYou may assume that you have an infinite number of each kind of coin.",
    "examples": [
      { "input": "coins = [1,2,5], amount = 11", "output": "3", "explanation": "11 = 5 + 5 + 1 (3 coins)." },
      { "input": "coins = [2], amount = 3", "output": "-1", "explanation": "Cannot make amount 3 with only 2s." },
      { "input": "coins = [1], amount = 0", "output": "0", "explanation": "0 coins needed for amount 0." }
    ],
    "constraints": ["1 <= coins.length <= 12", "1 <= coins[i] <= 2^31 - 1", "0 <= amount <= 10^4"],
    "starterCode": {
      "javascript": "/**\n * @param {number[]} coins\n * @param {number} amount\n * @return {number}\n */\nfunction coinChange(coins, amount) {\n  const dp = new Array(amount + 1).fill(Infinity);\n  dp[0] = 0;\n  for (let i = 1; i <= amount; i++) {\n    for (const coin of coins) {\n      if (i - coin >= 0) {\n        dp[i] = Math.min(dp[i], dp[i - coin] + 1);\n      }\n    }\n  }\n  return dp[amount] === Infinity ? -1 : dp[amount];\n}",
      "python": "def coin_change(coins: list[int], amount: int) -> int:\n    dp = [float('inf')] * (amount + 1)\n    dp[0] = 0\n    for i in range(1, amount + 1):\n        for c in coins:\n            if i - c >= 0:\n                dp[i] = min(dp[i], dp[i - c] + 1)\n    return dp[amount] if dp[amount] != float('inf') else -1",
      "java": "class Solution {\n    public int coinChange(int[] coins, int amount) {\n        int[] dp = new int[amount + 1];\n        Arrays.fill(dp, amount + 1);\n        dp[0] = 0;\n        for (int i = 1; i <= amount; i++) {\n            for (int c : coins) {\n                if (i - c >= 0) dp[i] = Math.min(dp[i], dp[i - c] + 1);\n            }\n        }\n        return dp[amount] > amount ? -1 : dp[amount];\n    }\n}"
    },
    "testCases": [
      { "input": { "coins": [1, 2, 5], "amount": 11 }, "expected": 3 },
      { "input": { "coins": [2], "amount": 3 }, "expected": -1 },
      { "input": { "coins": [1], "amount": 0 }, "expected": 0 }
    ],
    "solution": "Bottom-up 1D DP: dp[i] = min(dp[i], dp[i - coin] + 1) for every coin denomination.",
    "timeComplexity": "O(amount * coins.length)",
    "spaceComplexity": "O(amount)"
  },
  {
    "id": "kth-largest-element",
    "title": "Kth Largest Element in an Array",
    "difficulty": "Medium",
    "company": ["meta", "amazon", "google", "apple"],
    "category": "Heap & Priority Queue",
    "description": "Given an integer array `nums` and an integer `k`, return the `k`th largest element in the array.\n\nNote that it is the `k`th largest element in the sorted order, not the `k`th distinct element.\n\nCan you solve it in O(n) average time complexity?",
    "examples": [
      { "input": "nums = [3,2,1,5,6,4], k = 2", "output": "5", "explanation": "2nd largest element is 5." },
      { "input": "nums = [3,2,3,1,2,4,5,5,6], k = 4", "output": "4", "explanation": "4th largest element is 4." }
    ],
    "constraints": ["1 <= k <= nums.length <= 10^5", "-10^4 <= nums[i] <= 10^4"],
    "starterCode": {
      "javascript": "/**\n * @param {number[]} nums\n * @param {number} k\n * @return {number}\n */\nfunction findKthLargest(nums, k) {\n  nums.sort((a, b) => b - a);\n  return nums[k - 1];\n}",
      "python": "import heapq\ndef find_kth_largest(nums: list[int], k: int) -> int:\n    return heapq.nlargest(k, nums)[-1]",
      "java": "class Solution {\n    public int findKthLargest(int[] nums, int k) {\n        PriorityQueue<Integer> minHeap = new PriorityQueue<>();\n        for (int num : nums) {\n            minHeap.add(num);\n            if (minHeap.size() > k) minHeap.poll();\n        }\n        return minHeap.peek();\n    }\n}"
    },
    "testCases": [
      { "input": { "nums": [3, 2, 1, 5, 6, 4], "k": 2 }, "expected": 5 },
      { "input": { "nums": [3, 2, 3, 1, 2, 4, 5, 5, 6], "k": 4 }, "expected": 4 }
    ],
    "solution": "Use a min-heap of size k or Quickselect partitioning to achieve O(n) average runtime.",
    "timeComplexity": "O(n) average Quickselect or O(n log k) Min-Heap",
    "spaceComplexity": "O(k)"
  },
  {
    "id": "binary-tree-level-order",
    "title": "Binary Tree Level Order Traversal",
    "difficulty": "Medium",
    "company": ["amazon", "meta", "microsoft"],
    "category": "Tree & BFS",
    "description": "Given the `root` of a binary tree, return the level order traversal of its nodes' values (i.e., from left to right, level by level).",
    "examples": [
      { "input": "root = [3,9,20,null,null,15,7]", "output": "[[3],[9,20],[15,7]]", "explanation": "Nodes traversed by horizontal level." },
      { "input": "root = [1]", "output": "[[1]]", "explanation": "Single node." }
    ],
    "constraints": ["The number of nodes in the tree is in the range [0, 2000].", "-1000 <= Node.val <= 1000"],
    "starterCode": {
      "javascript": "/**\n * @param {TreeNode} root\n * @return {number[][]}\n */\nfunction levelOrder(root) {\n  if (!root) return [];\n  const res = [];\n  const queue = [root];\n  while (queue.length) {\n    const levelSize = queue.length;\n    const currentLevel = [];\n    for (let i = 0; i < levelSize; i++) {\n      const node = queue.shift();\n      currentLevel.push(node.val);\n      if (node.left) queue.push(node.left);\n      if (node.right) queue.push(node.right);\n    }\n    res.push(currentLevel);\n  }\n  return res;\n}",
      "python": "from collections import deque\ndef level_order(root):\n    if not root: return []\n    res, q = [], deque([root])\n    while q:\n        level = []\n        for _ in range(len(q)):\n            node = q.popleft()\n            level.append(node.val)\n            if node.left: q.append(node.left)\n            if node.right: q.append(node.right)\n        res.append(level)\n    return res",
      "java": "class Solution {\n    public List<List<Integer>> levelOrder(TreeNode root) {\n        List<List<Integer>> res = new ArrayList<>();\n        if (root == null) return res;\n        Queue<TreeNode> q = new LinkedList<>();\n        q.add(root);\n        while (!q.isEmpty()) {\n            int size = q.size();\n            List<Integer> level = new ArrayList<>();\n            for (int i = 0; i < size; i++) {\n                TreeNode cur = q.poll();\n                level.add(cur.val);\n                if (cur.left != null) q.add(cur.left);\n                if (cur.right != null) q.add(cur.right);\n            }\n            res.add(level);\n        }\n        return res;\n    }\n}"
    },
    "testCases": [],
    "solution": "BFS queue keeping track of current queue length for level-by-level batching.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(n)"
  },
  {
    "id": "decode-string",
    "title": "Decode String",
    "difficulty": "Medium",
    "company": ["google", "netflix", "meta"],
    "category": "Stack",
    "description": "Given an encoded string, return its decoded string.\n\nThe encoding rule is: `k[encoded_string]`, where the `encoded_string` inside the square brackets is being repeated exactly `k` times. You may assume that the input string is always valid.",
    "examples": [
      { "input": "s = \"3[a]2[bc]\"", "output": "\"aaabcbc\"", "explanation": "a is repeated 3 times, bc is repeated 2 times." },
      { "input": "s = \"3[a2[c]]\"", "output": "\"accaccacc\"", "explanation": "Nested repetition: a2[c] -> acc repeated 3 times." }
    ],
    "constraints": ["1 <= s.length <= 30", "s consists of digits, letters, and brackets '[]'."],
    "starterCode": {
      "javascript": "/**\n * @param {string} s\n * @return {string}\n */\nfunction decodeString(s) {\n  const numStack = [];\n  const strStack = [];\n  let curStr = '';\n  let curNum = 0;\n  for (const ch of s) {\n    if (!isNaN(ch)) {\n      curNum = curNum * 10 + Number(ch);\n    } else if (ch === '[') {\n      numStack.push(curNum);\n      strStack.push(curStr);\n      curNum = 0;\n      curStr = '';\n    } else if (ch === ']') {\n      const repeatTimes = numStack.pop();\n      const prevStr = strStack.pop();\n      curStr = prevStr + curStr.repeat(repeatTimes);\n    } else {\n      curStr += ch;\n    }\n  }\n  return curStr;\n}",
      "python": "def decode_string(s: str) -> str:\n    num_stack, str_stack = [], []\n    cur_str, cur_num = '', 0\n    for ch in s:\n        if ch.isdigit():\n            cur_num = cur_num * 10 + int(ch)\n        elif ch == '[':\n            num_stack.append(cur_num)\n            str_stack.append(cur_str)\n            cur_num, cur_str = 0, ''\n        elif ch == ']':\n            k = num_stack.pop()\n            prev = str_stack.pop()\n            cur_str = prev + cur_str * k\n        else:\n            cur_str += ch\n    return cur_str",
      "java": "class Solution {\n    public String decodeString(String s) {\n        Stack<Integer> numStack = new Stack<>();\n        Stack<StringBuilder> strStack = new Stack<>();\n        StringBuilder cur = new StringBuilder();\n        int k = 0;\n        for (char ch : s.toCharArray()) {\n            if (Character.isDigit(ch)) {\n                k = k * 10 + (ch - '0');\n            } else if (ch == '[') {\n                numStack.push(k);\n                strStack.push(cur);\n                cur = new StringBuilder();\n                k = 0;\n            } else if (ch == ']') {\n                StringBuilder prev = strStack.pop();\n                int times = numStack.pop();\n                for (int i = 0; i < times; i++) prev.append(cur);\n                cur = prev;\n            } else {\n                cur.append(ch);\n            }\n        }\n        return cur.toString();\n    }\n}"
    },
    "testCases": [
      { "input": { "s": "3[a]2[bc]" }, "expected": "aaabcbc" },
      { "input": { "s": "3[a2[c]]" }, "expected": "accaccacc" }
    ],
    "solution": "Use two stacks (one for multiplier counts, one for partial strings) to resolve nested brackets.",
    "timeComplexity": "O(maxK * n)",
    "spaceComplexity": "O(m + n)"
  },
  {
    "id": "search-rotated-array",
    "title": "Search in Rotated Sorted Array",
    "difficulty": "Medium",
    "company": ["meta", "amazon", "google", "microsoft"],
    "category": "Binary Search",
    "description": "Given the array `nums` after the possible rotation and an integer `target`, return the index of `target` if it is in `nums`, or `-1` if it is not in `nums`.\n\nYou must write an algorithm with O(log n) runtime complexity.",
    "examples": [
      { "input": "nums = [4,5,6,7,0,1,2], target = 0", "output": "4", "explanation": "Target 0 found at index 4." },
      { "input": "nums = [4,5,6,7,0,1,2], target = 3", "output": "-1", "explanation": "Target 3 is not in array." }
    ],
    "constraints": ["1 <= nums.length <= 5000", "-10^4 <= nums[i] <= 10^4", "All values of nums are unique."],
    "starterCode": {
      "javascript": "/**\n * @param {number[]} nums\n * @param {number} target\n * @return {number}\n */\nfunction search(nums, target) {\n  let l = 0, r = nums.length - 1;\n  while (l <= r) {\n    const mid = Math.floor((l + r) / 2);\n    if (nums[mid] === target) return mid;\n    if (nums[l] <= nums[mid]) {\n      if (nums[l] <= target && target < nums[mid]) r = mid - 1;\n      else l = mid + 1;\n    } else {\n      if (nums[mid] < target && target <= nums[r]) l = mid + 1;\n      else r = mid - 1;\n    }\n  }\n  return -1;\n}",
      "python": "def search(nums: list[int], target: int) -> int:\n    l, r = 0, len(nums) - 1\n    while l <= r:\n        mid = (l + r) // 2\n        if nums[mid] == target: return mid\n        if nums[l] <= nums[mid]:\n            if nums[l] <= target < nums[mid]: r = mid - 1\n            else: l = mid + 1\n        else:\n            if nums[mid] < target <= nums[r]: l = mid + 1\n            else: r = mid - 1\n    return -1",
      "java": "class Solution {\n    public int search(int[] nums, int target) {\n        int l = 0, r = nums.length - 1;\n        while (l <= r) {\n            int mid = l + (r - l) / 2;\n            if (nums[mid] == target) return mid;\n            if (nums[l] <= nums[mid]) {\n                if (nums[l] <= target && target < nums[mid]) r = mid - 1;\n                else l = mid + 1;\n            } else {\n                if (nums[mid] < target && target <= nums[r]) l = mid + 1;\n                else r = mid - 1;\n            }\n        }\n        return -1;\n    }\n}"
    },
    "testCases": [
      { "input": { "nums": [4, 5, 6, 7, 0, 1, 2], "target": 0 }, "expected": 4 },
      { "input": { "nums": [4, 5, 6, 7, 0, 1, 2], "target": 3 }, "expected": -1 }
    ],
    "solution": "Modified binary search: determine which half is sorted, then check if target lies within that sorted range.",
    "timeComplexity": "O(log n)",
    "spaceComplexity": "O(1)"
  },
  {
    "id": "lca-binary-tree",
    "title": "Lowest Common Ancestor of a Binary Tree",
    "difficulty": "Medium",
    "company": ["meta", "amazon", "microsoft", "apple"],
    "category": "Tree & Recursion",
    "description": "Given a binary tree, find the lowest common ancestor (LCA) of two given nodes `p` and `q`.\n\nThe lowest common ancestor is defined between two nodes `p` and `q` as the lowest node in `T` that has both `p` and `q` as descendants (where we allow a node to be a descendant of itself).",
    "examples": [
      { "input": "root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1", "output": "3", "explanation": "The LCA of nodes 5 and 1 is 3." },
      { "input": "root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4", "output": "5", "explanation": "Node 5 is ancestor of node 4." }
    ],
    "constraints": ["The number of nodes in the tree is in the range [2, 10^5].", "All Node.val are unique."],
    "starterCode": {
      "javascript": "/**\n * @param {TreeNode} root\n * @param {TreeNode} p\n * @param {TreeNode} q\n * @return {TreeNode}\n */\nfunction lowestCommonAncestor(root, p, q) {\n  if (!root || root === p || root === q) return root;\n  const left = lowestCommonAncestor(root.left, p, q);\n  const right = lowestCommonAncestor(root.right, p, q);\n  if (left && right) return root;\n  return left || right;\n}",
      "python": "def lowest_common_ancestor(root, p, q):\n    if not root or root == p or root == q:\n        return root\n    left = lowest_common_ancestor(root.left, p, q)\n    right = lowest_common_ancestor(root.right, p, q)\n    if left and right: return root\n    return left or right",
      "java": "class Solution {\n    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {\n        if (root == null || root == p || root == q) return root;\n        TreeNode left = lowestCommonAncestor(root.left, p, q);\n        TreeNode right = lowestCommonAncestor(root.right, p, q);\n        if (left != null && right != null) return root;\n        return left != null ? left : right;\n    }\n}"
    },
    "testCases": [],
    "solution": "Post-order recursive traversal: if both left and right subtrees return non-null, root is LCA.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(h) recursion depth"
  },
  {
    "id": "trapping-rain-water",
    "title": "Trapping Rain Water",
    "difficulty": "Hard",
    "company": ["google", "amazon", "meta", "apple"],
    "category": "Two Pointers",
    "description": "Given `n` non-negative integers representing an elevation map where the width of each bar is `1`, compute how much water it can trap after raining.",
    "examples": [
      { "input": "height = [0,1,0,2,1,0,1,3,2,1,2,1]", "output": "6", "explanation": "The elevation map traps 6 units of rain water." },
      { "input": "height = [4,2,0,3,2,5]", "output": "9", "explanation": "Traps 9 units of rain water." }
    ],
    "constraints": ["n == height.length", "1 <= n <= 2 * 10^4", "0 <= height[i] <= 10^5"],
    "starterCode": {
      "javascript": "/**\n * @param {number[]} height\n * @return {number}\n */\nfunction trap(height) {\n  let l = 0, r = height.length - 1;\n  let leftMax = 0, rightMax = 0, water = 0;\n  while (l < r) {\n    if (height[l] < height[r]) {\n      if (height[l] >= leftMax) leftMax = height[l];\n      else water += leftMax - height[l];\n      l++;\n    } else {\n      if (height[r] >= rightMax) rightMax = height[r];\n      else water += rightMax - height[r];\n      r--;\n    }\n  }\n  return water;\n}",
      "python": "def trap(height: list[int]) -> int:\n    l, r = 0, len(height) - 1\n    left_max = right_max = water = 0\n    while l < r:\n        if height[l] < height[r]:\n            if height[l] >= left_max: left_max = height[l]\n            else: water += left_max - height[l]\n            l += 1\n        else:\n            if height[r] >= right_max: right_max = height[r]\n            else: water += right_max - height[r]\n            r -= 1\n    return water",
      "java": "class Solution {\n    public int trap(int[] height) {\n        int l = 0, r = height.length - 1;\n        int leftMax = 0, rightMax = 0, water = 0;\n        while (l < r) {\n            if (height[l] < height[r]) {\n                if (height[l] >= leftMax) leftMax = height[l];\n                else water += leftMax - height[l];\n                l++;\n            } else {\n                if (height[r] >= rightMax) rightMax = height[r];\n                else water += rightMax - height[r];\n                r--;\n            }\n        }\n        return water;\n    }\n}"
    },
    "testCases": [
      { "input": { "height": [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1] }, "expected": 6 },
      { "input": { "height": [4, 2, 0, 3, 2, 5] }, "expected": 9 }
    ],
    "solution": "Two pointers maintaining leftMax and rightMax to compute trapped water at each step in O(1) space.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)"
  },
  {
    "id": "merge-k-sorted-lists",
    "title": "Merge k Sorted Lists",
    "difficulty": "Hard",
    "company": ["meta", "amazon", "google", "microsoft"],
    "category": "Heap & Divide and Conquer",
    "description": "You are given an array of `k` linked-lists `lists`, each linked-list is sorted in ascending order.\n\nMerge all the linked-lists into one sorted linked-list and return it.",
    "examples": [
      { "input": "lists = [[1,4,5],[1,3,4],[2,6]]", "output": "[1,1,2,3,4,4,5,6]", "explanation": "All lists merged into one sorted list." },
      { "input": "lists = []", "output": "[]", "explanation": "Empty input." }
    ],
    "constraints": ["k == lists.length", "0 <= k <= 10^4", "0 <= lists[i].length <= 500", "-10^4 <= lists[i][j] <= 10^4"],
    "starterCode": {
      "javascript": "/**\n * @param {ListNode[]} lists\n * @return {ListNode}\n */\nfunction mergeKLists(lists) {\n  if (!lists || lists.length === 0) return null;\n  const mergeTwo = (l1, l2) => {\n    const dummy = { next: null };\n    let cur = dummy;\n    while (l1 && l2) {\n      if (l1.val <= l2.val) { cur.next = l1; l1 = l1.next; }\n      else { cur.next = l2; l2 = l2.next; }\n      cur = cur.next;\n    }\n    cur.next = l1 || l2;\n    return dummy.next;\n  };\n  let interval = 1;\n  while (interval < lists.length) {\n    for (let i = 0; i + interval < lists.length; i += interval * 2) {\n      lists[i] = mergeTwo(lists[i], lists[i + interval]);\n    }\n    interval *= 2;\n  }\n  return lists[0];\n}",
      "python": "import heapq\ndef merge_k_lists(lists):\n    min_heap = []\n    for i, node in enumerate(lists):\n        if node: heapq.heappush(min_heap, (node.val, i, node))\n    dummy = ListNode(0)\n    cur = dummy\n    while min_heap:\n        val, i, node = heapq.heappop(min_heap)\n        cur.next = node\n        cur = cur.next\n        if node.next:\n            heapq.heappush(min_heap, (node.next.val, i, node.next))\n    return dummy.next",
      "java": "class Solution {\n    public ListNode mergeKLists(ListNode[] lists) {\n        if (lists == null || lists.length == 0) return null;\n        PriorityQueue<ListNode> pq = new PriorityQueue<>((a, b) -> a.val - b.val);\n        for (ListNode node : lists) if (node != null) pq.add(node);\n        ListNode dummy = new ListNode(0);\n        ListNode cur = dummy;\n        while (!pq.isEmpty()) {\n            ListNode node = pq.poll();\n            cur.next = node;\n            cur = cur.next;\n            if (node.next != null) pq.add(node.next);\n        }\n        return dummy.next;\n    }\n}"
    },
    "testCases": [],
    "solution": "Divide and conquer (pair-wise merging) or min-heap of current heads to achieve O(N log k).",
    "timeComplexity": "O(N log k) where N is total nodes",
    "spaceComplexity": "O(1) divide and conquer or O(k) min-heap"
  },
  {
    "id": "median-sorted-arrays",
    "title": "Median of Two Sorted Arrays",
    "difficulty": "Hard",
    "company": ["google", "amazon", "apple", "microsoft"],
    "category": "Binary Search",
    "description": "Given two sorted arrays `nums1` and `nums2` of size `m` and `n` respectively, return the median of the two sorted arrays.\n\nThe overall run time complexity should be O(log (m+n)).",
    "examples": [
      { "input": "nums1 = [1,3], nums2 = [2]", "output": "2.00000", "explanation": "merged = [1,2,3], median = 2." },
      { "input": "nums1 = [1,2], nums2 = [3,4]", "output": "2.50000", "explanation": "merged = [1,2,3,4], median = (2 + 3) / 2 = 2.5." }
    ],
    "constraints": ["nums1.length == m", "nums2.length == n", "0 <= m, n <= 1000", "1 <= m + n <= 2000"],
    "starterCode": {
      "javascript": "/**\n * @param {number[]} nums1\n * @param {number[]} nums2\n * @return {number}\n */\nfunction findMedianSortedArrays(nums1, nums2) {\n  if (nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1);\n  const m = nums1.length, n = nums2.length;\n  let l = 0, r = m;\n  while (l <= r) {\n    const pX = Math.floor((l + r) / 2);\n    const pY = Math.floor((m + n + 1) / 2) - pX;\n    const maxLX = pX === 0 ? -Infinity : nums1[pX - 1];\n    const minRX = pX === m ? Infinity : nums1[pX];\n    const maxLY = pY === 0 ? -Infinity : nums2[pY - 1];\n    const minRY = pY === n ? Infinity : nums2[pY];\n    if (maxLX <= minRY && maxLY <= minRX) {\n      if ((m + n) % 2 === 1) return Math.max(maxLX, maxLY);\n      return (Math.max(maxLX, maxLY) + Math.min(minRX, minRY)) / 2;\n    } else if (maxLX > minRY) {\n      r = pX - 1;\n    } else {\n      l = pX + 1;\n    }\n  }\n}",
      "python": "def find_median_sorted_arrays(nums1: list[int], nums2: list[int]) -> float:\n    if len(nums1) > len(nums2):\n        nums1, nums2 = nums2, nums1\n    m, n = len(nums1), len(nums2)\n    l, r = 0, m\n    while l <= r:\n        px = (l + r) // 2\n        py = (m + n + 1) // 2 - px\n        max_lx = float('-inf') if px == 0 else nums1[px - 1]\n        min_rx = float('inf') if px == m else nums1[px]\n        max_ly = float('-inf') if py == 0 else nums2[py - 1]\n        min_ry = float('inf') if py == n else nums2[py]\n        if max_lx <= min_ry and max_ly <= min_rx:\n            if (m + n) % 2 == 1: return float(max(max_lx, max_ly))\n            return (max(max_lx, max_ly) + min(min_rx, min_ry)) / 2.0\n        elif max_lx > min_ry: r = px - 1\n        else: l = px + 1",
      "java": "class Solution {\n    public double findMedianSortedArrays(int[] nums1, int[] nums2) {\n        if (nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1);\n        int m = nums1.length, n = nums2.length, l = 0, r = m;\n        while (l <= r) {\n            int px = (l + r) / 2;\n            int py = (m + n + 1) / 2 - px;\n            int maxLX = px == 0 ? Integer.MIN_VALUE : nums1[px - 1];\n            int minRX = px == m ? Integer.MAX_VALUE : nums1[px];\n            int maxLY = py == 0 ? Integer.MIN_VALUE : nums2[py - 1];\n            int minRY = py == n ? Integer.MAX_VALUE : nums2[py];\n            if (maxLX <= minRY && maxLY <= minRX) {\n                if ((m + n) % 2 == 1) return Math.max(maxLX, maxLY);\n                return (Math.max(maxLX, maxLY) + Math.min(minRX, minRY)) / 2.0;\n            } else if (maxLX > minRY) r = px - 1;\n            else l = px + 1;\n        }\n        return 0.0;\n    }\n}"
    },
    "testCases": [
      { "input": { "nums1": [1, 3], "nums2": [2] }, "expected": 2.0 },
      { "input": { "nums1": [1, 2], "nums2": [3, 4] }, "expected": 2.5 }
    ],
    "solution": "Binary search on the smaller array's partition to partition both arrays into two equal halves.",
    "timeComplexity": "O(log(min(m, n)))",
    "spaceComplexity": "O(1)"
  },
  {
    "id": "word-search-ii",
    "title": "Word Search II",
    "difficulty": "Hard",
    "company": ["google", "amazon", "microsoft"],
    "category": "Trie & Backtracking",
    "description": "Given an `m x n` board of characters and a list of strings `words`, return all words on the board.\n\nEach word must be constructed from letters of sequentially adjacent cells.",
    "examples": [
      { "input": "board = [[\"o\",\"a\",\"a\",\"n\"],[\"e\",\"t\",\"a\",\"e\"],[\"i\",\"h\",\"k\",\"r\"],[\"i\",\"f\",\"l\",\"v\"]], words = [\"oath\",\"pea\",\"eat\",\"rain\"]", "output": "[\"eat\",\"oath\"]", "explanation": "Words oath and eat can be formed." }
    ],
    "constraints": ["m == board.length", "n == board[i].length", "1 <= m, n <= 12", "1 <= words.length <= 3 * 10^4"],
    "starterCode": {
      "javascript": "/**\n * @param {character[][]} board\n * @param {string[]} words\n * @return {string[]}\n */\nfunction findWords(board, words) {\n  const root = {};\n  for (const w of words) {\n    let node = root;\n    for (const c of w) {\n      if (!node[c]) node[c] = {};\n      node = node[c];\n    }\n    node.word = w;\n  }\n  const res = [];\n  const dfs = (r, c, node) => {\n    const char = board[r][c];\n    if (!node[char]) return;\n    const next = node[char];\n    if (next.word) {\n      res.push(next.word);\n      next.word = null;\n    }\n    board[r][c] = '#';\n    const dirs = [[1,0],[-1,0],[0,1],[0,-1]];\n    for (const [dr, dc] of dirs) {\n      const nr = r + dr, nc = c + dc;\n      if (nr >= 0 && nr < board.length && nc >= 0 && nc < board[0].length && board[nr][nc] !== '#') {\n        dfs(nr, nc, next);\n      }\n    }\n    board[r][c] = char;\n  };\n  for (let r = 0; r < board.length; r++) {\n    for (let c = 0; c < board[0].length; c++) {\n      dfs(r, c, root);\n    }\n  }\n  return res;\n}",
      "python": "def find_words(board: list[list[str]], words: list[str]) -> list[str]:\n    trie = {}\n    for w in words:\n        node = trie\n        for c in w:\n            node = node.setdefault(c, {})\n        node['#'] = w\n    res = []\n    rows, cols = len(board), len(board[0])\n    def dfs(r, c, parent):\n        ch = board[r][c]\n        cur = parent[ch]\n        if '#' in cur:\n            res.append(cur.pop('#'))\n        board[r][c] = '$'\n        for dr, dc in [(1,0),(-1,0),(0,1),(0,-1)]:\n            nr, nc = r + dr, c + dc\n            if 0 <= nr < rows and 0 <= nc < cols and board[nr][nc] in cur:\n                dfs(nr, nc, cur)\n        board[r][c] = ch\n        if not cur:\n            parent.pop(ch)\n    for r in range(rows):\n        for c in range(cols):\n            if board[r][c] in trie:\n                dfs(r, c, trie)\n    return res",
      "java": "class Solution {\n    // Trie + Backtracking solution\n    public List<String> findWords(char[][] board, String[] words) {\n        // Build Trie and run 4-directional DFS with pruning\n        return new ArrayList<>();\n    }\n}"
    },
    "testCases": [],
    "solution": "Build Prefix Tree (Trie) over all target words. Run 4-directional DFS on board, pruning Trie nodes dynamically.",
    "timeComplexity": "O(M * N * 4^L)",
    "spaceComplexity": "O(sum of word lengths)"
  }
]

print(f"Total problems generated: {len(problems)}")
