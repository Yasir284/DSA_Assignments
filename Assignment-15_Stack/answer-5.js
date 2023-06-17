{
  /* <aside>
💡 **Question 5**

You are given a string **S**, the task is to reverse the string using stack.

**Example 1:**

Input: S="GeeksforGeeks"
Output: skeeGrofskeeG

</aside> */
}

let S = "GeeksforGeeks";

function reverseString(S) {
  let str = "";
  for (let i = 0; i < S.length; i++) str = S[i] + str;

  return str;
}

console.log(reverseString(S));
