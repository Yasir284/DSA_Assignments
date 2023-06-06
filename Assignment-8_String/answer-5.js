{
  /* <aside>
💡 **Question 5**

Given an array of characters chars, compress it using the following algorithm:

Begin with an empty string s. For each group of **consecutive repeating characters** in chars:

- If the group's length is 1, append the character to s.
- Otherwise, append the character followed by the group's length.

The compressed string s **should not be returned separately**, but instead, be stored **in the input character array chars**. Note that group lengths that are 10 or longer will be split into multiple characters in chars.

After you are done **modifying the input array,** return *the new length of the array*.

You must write an algorithm that uses only constant extra space.

**Example 1:**

**Input:** chars = ["a","a","b","b","c","c","c"]

**Output:** Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]

**Explanation:**

The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".

</aside> */
}
let chars = ["a", "a", "b", "b", "c", "c", "c"];

function compressArray(chars) {
  let s = "";
  let count = 0;
  for (let i = 0; i < chars.length; i++) {
    count++;
    if (chars[i] !== chars[i + 1]) {
      if (count > 1) {
        s += chars[i] + count;
      } else {
        s += chars[i];
      }
      count = 0;
    }
  }

  let compressedArr = s.split("");
  for (let i = 0; i < compressedArr.length; i++) {
    chars[i] = compressedArr[i];
  }
  return compressedArr.length;
}
console.log(compressArray(chars));
console.log(chars);
