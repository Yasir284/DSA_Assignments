{
  /* <aside>
💡 **Question 4**

Given a string calculate length of the string using recursion.

**Examples:**

Input : str = "abcd"
Output :4

Input : str = "GEEKSFORGEEKS"
Output :13

</aside> */
}

let str = "abcd";

function lengthOfStr(str) {
  if (str === "") return 0;

  return 1 + lengthOfStr(str.slice(1));
}
console.log(lengthOfStr(str));
