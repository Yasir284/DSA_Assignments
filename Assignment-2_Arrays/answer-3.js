// Question 3
// We define a harmonious array as an array where the difference between its maximum value
// and its minimum value is exactly 1.

// Given an integer array nums, return the length of its longest harmonious subsequence
// among all its possible subsequences.

// A subsequence of an array is a sequence that can be derived from the array by deleting some or no elements without changing the order of the remaining elements.

// Example 1:
// Input: nums = [1,3,2,2,5,2,3,7]
// Output: 5

// Explanation: The longest harmonious subsequence is [3,2,2,2,3].

let nums = [1, 3, 2, 2, 5, 2, 3, 7];

function findLength(nums) {
  let map = new Map();
  let maxLength = 0;

  nums.forEach((e) => {
    map.set(e, (map.get(e) || 0) + 1);
  });

  for (const [num, count] of map) {
    if (map.has(num + 1)) {
      maxLength = Math.max(maxLength, count + map.get(num + 1));
    }
  }

  return maxLength;
}
console.log(findLength(nums));
