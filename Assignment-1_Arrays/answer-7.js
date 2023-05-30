// 💡 **Q7.** Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the nonzero elements.

// Note that you must do this in-place without making a copy of the array.

// **Example 1:**
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

let nums = [0, 1, 0, 3, 12];

function shiftZeros(nums) {
  let nonZero = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[nonZero] = nums[i];
      nonZero++;
    }
  }

  while (nonZero < nums.length) {
    nums[nonZero] = 0;
    nonZero++;
  }

  return nums;
}
console.log(shiftZeros(nums));
