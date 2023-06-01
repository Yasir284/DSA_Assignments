// Question 6
// Given a non-empty array of integers nums, every element appears twice except
// for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only
// constant extra space.

// Example 1:
// Input: nums = [2,2,1]
// Output: 1

let nums = [2, 2, 1];

function findUnique(nums) {
  let uniqueNum = undefined;
  for (let i = 0; i < nums.length; i++) {
    nums[i] === uniqueNum ? (uniqueNum = undefined) : (uniqueNum = nums[i]);
  }
  return uniqueNum;
}
console.log(findUnique(nums));
