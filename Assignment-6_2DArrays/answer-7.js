{
  /* <aside>
💡 **Question 7**

Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.

**Example 1:**

![Screenshot 2023-05-29 005522.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/00c8517f-7682-4e0b-bdd9-ce0e087f3f94/Screenshot_2023-05-29_005522.png)

**Input:** n = 3

**Output:** [[1,2,3],[8,9,4],[7,6,5]]

</aside> */
}
function spiralMatrix(n) {
  let M = Array.from({ length: n }, () => new Array(n));
  let left = 0;
  let right = n - 1;
  let up = 0;
  let down = n - 1;
  let i = 1;

  while (left <= right && up <= down) {
    for (let col = left; col <= right; col++) {
      M[up][col] = i;
      i++;
    }
    up++;
    for (let row = up; row <= down; row++) {
      M[row][right] = i;
      i++;
    }
    right--;

    for (let col = right; col >= left; col--) {
      M[down][col] = i;
      i++;
    }
    down--;

    for (let row = down; row >= up; row--) {
      M[row][left] = i;
      i++;
    }
    left++;
  }

  return M;
}
console.table(spiralMatrix(3));
