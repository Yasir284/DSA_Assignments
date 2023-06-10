{
  /* <aside>
💡 **Question 7**

Given an array of integers `nums` sorted in non-decreasing order, find the starting and ending position of a given `target` value.

If `target` is not found in the array, return `[-1, -1]`.

You must write an algorithm with `O(log n)` runtime complexity.

**Example 1:**
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]

**Example 2:**
Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]

**Example 3:**
Input: nums = [], target = 0
Output: [-1,-1]

</aside> */
}

let nums = [5, 7, 7, 8, 8, 10],
  target = 8;
// nums = [5, 7, 7, 8, 8, 10];
// target = 6;

function targetInterval(nums, target) {
  let start = -1;
  let end = -1;

  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] >= target) {
      start = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  if (nums[start] !== target) {
    return [-1, -1];
  }

  left = 0;
  right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] <= target) {
      end = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return [start, end];
}

console.log(targetInterval(nums, target));
