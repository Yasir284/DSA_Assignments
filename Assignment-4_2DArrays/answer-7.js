{
  /* 
💡 **Question 7**
You are given an m x n matrix M initialized with all 0's and an array of operations ops, where ops[i] = [ai, bi] means M[x][y] should be incremented by one for all 0 <= x < ai and 0 <= y < bi.

Count and return *the number of maximum integers in the matrix after performing all the operations*

**Example 1:**

![q4.jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4d0890d0-7bc7-4f59-be8e-352d9f3c1c52/q4.jpg)

**Input:** m = 3, n = 3, ops = [[2,2],[3,3]]

**Output:** 4

**Explanation:** The maximum integer in M is 2, and there are four of it in M. So return 4.

 */
}

let m = 3,
  n = 3,
  ops = [
    [2, 2],
    [3, 3],
  ];
// Initialize m x n with 0's
const M = new Array(3).fill(0).map(() => new Array(3).fill(0));

function incrementBy(m, n) {
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      M[i][j] += 1;
    }
  }
}

// perform operations op's

for (let i = 0; i < ops.length; i++) {
  incrementBy(ops[i][1], ops[i][0]);
}

console.table(M);

const counts = {};

for (let i = 0; i < m; i++) {
  for (let j = 0; j < n; j++) {
    if (counts[M[i][j]]) counts[M[i][j]]++;
    else counts[M[i][j]] = 1;
  }
}
console.log(counts[Object.keys(counts)[Object.keys(counts).length - 1]]);
