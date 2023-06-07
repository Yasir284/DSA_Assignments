{
  /* <aside>
💡 **Question 5**

Given an array of integers **arr**, the task is to find maximum element of that array using recursion.

**Example 1:**

Input: arr = {1, 4, 3, -5, -4, 8, 6};
Output: 8

**Example 2:**

Input: arr = {1, 4, 45, 6, 10, -8};
Output: 45

</aside> */
}

let arr = [1, 4, 45, 6, 10, -8];

function findMaxVal(arr, index = 0) {
  if (index === arr.length - 1) return arr[index];

  return Math.max(arr[index], findMaxVal(arr, index + 1));
}
console.log(findMaxVal(arr));
