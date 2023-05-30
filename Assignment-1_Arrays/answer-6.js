{
  /* 💡 **Q6.** Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

**Example 1:**
Input: nums = [1,2,3,1]

Output: true */
}

let nums = [1, 2, 3];

function checkDuplicate(nums) {
  let set = new Set();
  let i = 0;

  while (i < nums.length) {
    if (set.has(nums[i])) {
      return;
    } else {
      set.add(nums[i]);
    }
    i++;
  }
  return false;
}
console.log(checkDuplicate(nums));
