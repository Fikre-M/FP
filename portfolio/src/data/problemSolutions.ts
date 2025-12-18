import { ProblemSolution } from '../types';

export const problemSolutions: ProblemSolution[] = [
  {
    id: 1,
    title: 'Two Sum Problem',
    problem: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.',
    solution: 'Use a hash map to store the complement of each number. For each number, check if its complement exists in the map. This reduces time complexity from O(n²) to O(n).',
    code: `function twoSum(nums, target) {
  const map = new Map();
  
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    
    map.set(nums[i], i);
  }
  
  return [];
}

// Example usage:
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]`,
    language: 'javascript',
    complexity: 'Easy',
    tags: ['Array', 'Hash Table', 'Two Pointers']
  },
  {
    id: 2,
    title: 'Reverse Linked List',
    problem: 'Given the head of a singly linked list, reverse the list and return the reversed list.',
    solution: 'Use three pointers (prev, current, next) to iteratively reverse the direction of each node\'s pointer. Time complexity: O(n), Space complexity: O(1).',
    code: `function reverseList(head) {
  let prev = null;
  let current = head;
  
  while (current !== null) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  
  return prev;
}

// Recursive solution:
function reverseListRecursive(head) {
  if (head === null || head.next === null) {
    return head;
  }
  
  const newHead = reverseListRecursive(head.next);
  head.next.next = head;
  head.next = null;
  
  return newHead;
}`,
    language: 'javascript',
    complexity: 'Easy',
    tags: ['Linked List', 'Recursion', 'Iteration']
  },
  {
    id: 3,
    title: 'Valid Parentheses',
    problem: 'Given a string containing just the characters "(", ")", "{", "}", "[" and "]", determine if the input string is valid.',
    solution: 'Use a stack to track opening brackets. When encountering a closing bracket, check if it matches the most recent opening bracket. The string is valid if the stack is empty at the end.',
    code: `function isValid(s) {
  const stack = [];
  const pairs = {
    ')': '(',
    '}': '{',
    ']': '['
  };
  
  for (let char of s) {
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else {
      if (stack.length === 0 || stack.pop() !== pairs[char]) {
        return false;
      }
    }
  }
  
  return stack.length === 0;
}

// Example usage:
console.log(isValid("()[]{}"));  // true
console.log(isValid("([)]"));    // false`,
    language: 'javascript',
    complexity: 'Easy',
    tags: ['Stack', 'String', 'Validation']
  },
  {
    id: 4,
    title: 'Binary Search',
    problem: 'Given a sorted array of integers and a target value, return the index of the target if found, otherwise return -1.',
    solution: 'Use binary search algorithm to efficiently find the target. Divide the search space in half with each iteration. Time complexity: O(log n).',
    code: `function binarySearch(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  return -1;
}

// Recursive approach:
function binarySearchRecursive(nums, target, left = 0, right = nums.length - 1) {
  if (left > right) return -1;
  
  const mid = Math.floor((left + right) / 2);
  
  if (nums[mid] === target) return mid;
  if (nums[mid] < target) return binarySearchRecursive(nums, target, mid + 1, right);
  return binarySearchRecursive(nums, target, left, mid - 1);
}`,
    language: 'javascript',
    complexity: 'Easy',
    tags: ['Binary Search', 'Array', 'Divide and Conquer']
  },
  {
    id: 5,
    title: 'Longest Substring Without Repeating Characters',
    problem: 'Given a string s, find the length of the longest substring without repeating characters.',
    solution: 'Use sliding window technique with a hash set. Expand the window by moving right pointer and shrink it when duplicates are found. Track the maximum length.',
    code: `function lengthOfLongestSubstring(s) {
  const charSet = new Set();
  let left = 0;
  let maxLength = 0;
  
  for (let right = 0; right < s.length; right++) {
    while (charSet.has(s[right])) {
      charSet.delete(s[left]);
      left++;
    }
    
    charSet.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }
  
  return maxLength;
}

// Example usage:
console.log(lengthOfLongestSubstring("abcabcbb")); // 3 ("abc")
console.log(lengthOfLongestSubstring("bbbbb"));    // 1 ("b")
console.log(lengthOfLongestSubstring("pwwkew"));   // 3 ("wke")`,
    language: 'javascript',
    complexity: 'Medium',
    tags: ['Sliding Window', 'Hash Set', 'String']
  },
  {
    id: 6,
    title: 'Merge Intervals',
    problem: 'Given an array of intervals where intervals[i] = [start, end], merge all overlapping intervals.',
    solution: 'Sort intervals by start time, then iterate through and merge overlapping intervals. Compare current interval\'s start with previous interval\'s end.',
    code: `function merge(intervals) {
  if (intervals.length <= 1) return intervals;
  
  // Sort by start time
  intervals.sort((a, b) => a[0] - b[0]);
  
  const result = [intervals[0]];
  
  for (let i = 1; i < intervals.length; i++) {
    const current = intervals[i];
    const lastMerged = result[result.length - 1];
    
    if (current[0] <= lastMerged[1]) {
      // Overlapping intervals, merge them
      lastMerged[1] = Math.max(lastMerged[1], current[1]);
    } else {
      // Non-overlapping interval
      result.push(current);
    }
  }
  
  return result;
}

// Example:
console.log(merge([[1,3],[2,6],[8,10],[15,18]])); 
// Output: [[1,6],[8,10],[15,18]]`,
    language: 'javascript',
    complexity: 'Medium',
    tags: ['Array', 'Sorting', 'Intervals']
  }
];