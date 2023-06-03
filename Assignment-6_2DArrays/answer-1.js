{
  /* <aside>
💡 **Question 1**

A permutation perm of n + 1 integers of all the integers in the range [0, n] can be represented as a string s of length n where:

- s[i] == 'I' if perm[i] < perm[i + 1], and
- s[i] == 'D' if perm[i] > perm[i + 1].

Given a string s, reconstruct the permutation perm and return it. If there are multiple valid permutations perm, return **any of them**.

**Example 1:**

**Input:** s = "IDID"

**Output:**

[0,4,1,3,2]

</aside> */
}

function findPerm(s) {
  let n = s.length;

  let arr = new Array(n + 1).fill(0).map((e, i) => (e = i));
  console.log(arr);

  let i = 0;

  while (i < n) {
    if (
      (s[i] === "I" && !(arr[i] < arr[i + 1])) ||
      (s[i] === "D" && !(arr[i] > arr[i + 1]))
    ) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }

    i++;
  }

  return arr;
}
console.log(findPerm("IDID"));
