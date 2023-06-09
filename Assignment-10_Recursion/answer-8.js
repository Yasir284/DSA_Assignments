{
  /* <aside>
💡 **Question 8**

Given a string, count total number of consonants in it. A consonant is an English alphabet character that is not vowel (a, e, i, o and u). Examples of constants are b, c, d, f, and g.

**Examples :**

Input : abc de
Output : 3
There are three consonants b, c and d.

Input : geeksforgeeks portal
Output : 12

</aside> */
}

function countConsonants(str) {
  var count = 0;
  var vowels = ["a", "e", "i", "o", "u"];
  str = str.toLowerCase();
  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    if (char.match(/[a-z]/) && !vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

var str1 = "geeksforgeeks portal";
console.log(countConsonants(str1)); // Output: 12
