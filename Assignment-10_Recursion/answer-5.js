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

function subStringsCount(str) {
  var count = 0;

  // Recursive helper function
  function countHelper(start, end) {
    if (start > end) {
      return;
    }

    if (str[start] === str[end]) {
      count++;
    }

    countHelper(start, end - 1);
  }

  // Call the helper function for all possible substrings
  for (var i = 0; i < str.length; i++) {
    countHelper(i, str.length - 1);
  }

  return count;
}

var S1 = "abcab";
console.log(subStringsCount(S1, 0, S1.length - 1));
