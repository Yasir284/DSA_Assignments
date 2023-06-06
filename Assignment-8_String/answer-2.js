{
  /* <aside>
💡 **Question 2**

Given a string s containing only three types of characters: '(', ')' and '*', return true *if* s *is **valid***.

The following rules define a **valid** string:

- Any left parenthesis '(' must have a corresponding right parenthesis ')'.
- Any right parenthesis ')' must have a corresponding left parenthesis '('.
- Left parenthesis '(' must go before the corresponding right parenthesis ')'.
- '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string "".

**Example 1:**

**Input:** s = "()"

**Output:**

true

</aside> */
}

function validateStr(str) {
  let arr = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      arr.push("(");
    } else if (str[i] === ")") {
      if (
        arr.length > 0 &&
        (arr[arr.length - 1] === "(" || arr[arr.length - 1] === "*")
      ) {
        arr.pop();
      } else {
        return false;
      }
    }
  }

  while (arr.length > 0) {
    if (arr[arr.length - 1] === "*") {
      arr.pop();
    } else return false;
  }

  return true;
}
console.log(validateStr("()"));
