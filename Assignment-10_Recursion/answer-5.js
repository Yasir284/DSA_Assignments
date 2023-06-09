{
  /* <aside>
💡 **Question 5**

We are given a string S, we need to find count of all contiguous substrings starting and ending with same character.

**Examples :**
Input  : S = "abcab"
Output : 7
There are 15 substrings of "abcab"
a, ab, abc, abca, abcab, b, bc, bca
bcab, c, ca, cab, a, ab, b
Out of the above substrings, there
are 7 substrings : a, abca, b, bcab,
c, a and b.

Input  : S = "aba"
Output : 4
The substrings are a, b, a and aba
</aside> */
}

function subStringsCount(S, index) {
  if (index === S.length) {
    return 0;
  }

  let count = subStringsCount(S, index + 1);
  console.log(count);
  if (index < S.length - 1 && S[index] === S[index + 1]) {
    count += 1;
    count += subStringsCount(S, index + 1);
  }

  return count;
}
console.log(subStringsCount("abcab", 0));
