// 💡 **Question 3**
// Given a 2D integer array matrix, return *the **transpose** of* matrix.

// The **transpose** of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.

// **Example 1:**

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]

// Output: [[1,4,7],[2,5,8],[3,6,9]]

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function transpose(matrix) {
  let row = matrix.length;
  let col = matrix[0].length;

  let ans = new Array(col).fill(0).map(() => new Array(row));

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      ans[j][i] = matrix[i][j];
    }
  }

  return ans;
}
console.log(transpose(matrix));