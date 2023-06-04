{
  /* <aside>
💡 **Question 4**

Given a binary array nums, return *the maximum length of a contiguous subarray with an equal number of* 0 *and* 1.

**Example 1:**

**Input:** nums = [0,1]

**Output:** 2

**Explanation:**

[0, 1] is the longest contiguous subarray with an equal number of 0 and 1.

</aside> */
}

let nums = [0, 1, 1, 0, 0];

function subarray(nums) {
  let maxLenght = 0;

  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      count--;
    } else {
      count++;
    }

    if (count == 0) maxLenght = Math.max(maxLenght, i + 1);
  }

  return maxLenght;
}
console.log(subarray(nums));
