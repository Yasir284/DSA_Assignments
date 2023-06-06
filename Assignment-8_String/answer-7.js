{
  /* <aside>
💡 **Question 7**

Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

The test cases are generated so that the length of the output will never exceed 105.

**Example 1:**

**Input:** s = "3[a]2[bc]"

**Output:** "aaabcbc"

</aside> */
}
const s = "3[a]2[bc]";

function decodeStringHelper(s, index) {
  let result = "";

  while (index < s.length) {
    const char = s[index];

    if (char >= "0" && char <= "9") {
      let endIndex = index;
      while (s[endIndex] >= "0" && s[endIndex] <= "9") {
        endIndex++;
      }

      const k = parseInt(s.substring(index, endIndex));
      index = endIndex + 1;

      const decodedStr = decodeStringHelper(s, index);

      for (let i = 0; i < k; i++) {
        result += decodedStr;
      }

      index++;
    } else if (char === "]") {
      break;
    } else {
      result += char;
      index++;
    }
  }

  return result;
}

function decodeString(s) {
  return decodeStringHelper(s, 0);
}
console.log(decodeString(s));
