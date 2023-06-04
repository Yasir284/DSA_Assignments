{
  /* <aside>
💡 **Question 8**

Given two [sparse matrices](https://en.wikipedia.org/wiki/Sparse_matrix) mat1 of size m x k and mat2 of size k x n, return the result of mat1 x mat2. You may assume that multiplication is always possible.

**Example 1:**

![Screenshot 2023-05-29 005557.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/df57e793-12bf-4104-a17b-4e6a88dc7955/Screenshot_2023-05-29_005557.png)

**Input:** mat1 = [[1,0,0],[-1,0,3]], mat2 = [[7,0,0],[0,0,0],[0,0,1]]

**Output:**

[[7,0,0],[-7,0,3]]

</aside> */
}

let mat1 = [
    [1, 0, 0],
    [-1, 0, 3],
  ],
  mat2 = [
    [7, 0, 0],
    [0, 0, 0],
    [0, 0, 1],
  ];

function multiplyMatrices(mat1, mat2) {
  const m = mat1.length;
  const k = mat1[0].length;
  const n = mat2[0].length;

  const result = Array.from({ length: m }, () => Array(n).fill(0));

  for (let i = 0; i < m; i++) {
    for (let p = 0; p < k; p++) {
      if (mat1[i][p] !== 0) {
        for (let j = 0; j < n; j++) {
          result[i][j] += mat1[i][p] * mat2[p][j];
          // console.table(result);
        }
      }
    }
  }

  return result;
}
console.log(multiplyMatrices(mat1, mat2));
