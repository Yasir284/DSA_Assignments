// Question 8
// You are given an integer array nums and an integer k.

// In one operation, you can choose any index i where 0 <= i < nums.length and change nums[i] to nums[i] + x where x is an integer from the range [-k, k]. You can apply this operation at most once for each index i.

// The score of nums is the difference between the maximum and minimum elements in nums.

// Return the minimum score of nums after applying the mentioned operation at most once for each index in it.

// Example 1:
// Input: nums = [1], k = 0
// Output: 0

// Explanation: The score is max(nums) - min(nums) = 1 - 1 = 0.

let nums = [1, 5, 10, 3],
  k = 12;

function findMinScore(nums, k) {
  let minNum = nums[0];
  let maxNum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    maxNum = Math.max(maxNum, nums[i]);
    minNum = Math.min(minNum, nums[i]);
  }

  let minScore = maxNum - k - (minNum + k);

  //   If minScore is -ve return 0
  return Math.max(0, minScore);
}
console.log(findMinScore(nums, k));
