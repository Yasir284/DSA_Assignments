{
  /* <aside>
💡 **Question 2**

You are given an m x n integer matrix matrix with the following two properties:

- Each row is sorted in non-decreasing order.
- The first integer of each row is greater than the last integer of the previous row.

Given an integer target, return true *if* target *is in* matrix *or* false *otherwise*.

You must write a solution in O(log(m * n)) time complexity.

**Example 1:**

![Screenshot 2023-05-29 005303.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e4b0271f-15f0-4744-826b-18500ccfcb75/Screenshot_2023-05-29_005303.png)

**Input:** matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3

**Output:** true

</aside> */
}
let matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
  ],
  target = 3;

function binarySearch(matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    let left = 0;
    let right = matrix[i].length - 1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (matrix[i][mid] === target) return true;

      if (matrix[i][mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return false;
}
console.log(binarySearch(matrix, target));
