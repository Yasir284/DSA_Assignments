{
  /* <aside>
💡 **Question 5**

Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

**Example 1:**

**Input:** s = "abcdefg", k = 2

**Output:**

"bacdfeg"

</aside> */
}
let s = "abcdefg",
  k = 2;

function reverseK(s, k) {
  let result = "";

  for (let i = 0; i < s.length; i += 2 * k) {
    result += s
      .slice(i, i + k)
      .split("")
      .reverse()
      .join("");

    result += s.slice(i + k, i + 2 * k);
  }

  return result;
}
console.log(reverseK(s, k));
