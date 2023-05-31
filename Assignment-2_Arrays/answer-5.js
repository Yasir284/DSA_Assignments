// Question 5
// Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

// Example 1:
// Input: nums = [1,2,3]
// Output: 6

let nums = [1, 2, 3, 4, 5, 6, 7, 8];

function findMaxProduct(nums) {
  nums.sort((a, b) => a - b);
  //   console.log(nums);
  let n = nums.length;

  return nums[n - 1] * nums[n - 2] * nums[n - 3];
}
console.log(findMaxProduct(nums));
