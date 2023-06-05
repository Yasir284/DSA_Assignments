{
  /* <aside>
💡 **Question 4**

Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

**Example 1:**

**Input:** s = "Let's take LeetCode contest"

**Output:** "s'teL ekat edoCteeL tsetnoc"

</aside> */
}

let s = "Let's take LeetCode contest";
function reverseWords(s) {
  s = s.split(" ");
  for (let i = 0; i < s.length; i++) {
    s[i] = s[i].split("");
    let word = s[i];
    let left = 0;
    let right = word.length - 1;

    while (left < right) {
      [word[left], word[right]] = [word[right], word[left]];
      left++;
      right--;
    }

    s[i] = s[i].join("");
  }
  return s.join(" ");
}
console.log(reverseWords(s));
