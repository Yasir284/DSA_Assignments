{
  /* <aside>
💡 **Question 3**

Given two strings word1 and word2, return *the minimum number of **steps** required to make* word1 *and* word2 *the same*.

In one **step**, you can delete exactly one character in either string.

**Example 1:**

**Input:** word1 = "sea", word2 = "eat"

**Output:** 2

**Explanation:** You need one step to make "sea" to "ea" and another step to make "eat" to "ea".

</aside> */
}
let word1 = "sea",
  word2 = "eat";

// Longest common subsequence approach
function minStepToDelete(word1, word2) {
  let m = word1.length;
  let n = word2.length;
  let arr = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++) {
    arr[i][0] = i;
  }

  for (let j = 0; j <= n; j++) {
    arr[0][j] = j;
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        arr[i][j] = arr[i - 1][j - 1];
      } else {
        arr[i][j] = Math.min(arr[i - 1][j], arr[i][j - 1]) + 1;
      }
    }
  }
  console.table(arr);
  return arr[m][n];
}
console.log(minStepToDelete(word1, word2));
