{
  /* <aside>
💡 **Question 6**

Given string **S** representing a postfix expression, the task is to evaluate the expression and find the final value. Operators will only include the basic arithmetic operators like ***, /, + and -**.

**Example 1:**

```
Input: S = "231*+9-"
Output: -4
Explanation:
After solving the given expression,
we have -4 as result.

```

**Example 2:**

Input: S = "123+*8-"
Output: -3
Explanation:
After solving the given postfix
expression, we have -3 as result.

</aside> */
}

function evaluateStr(S) {
  let stack = [];

  for (let i = 0; i < S.length; i++) {
    if (!isNaN(S[i])) {
      stack.push(parseInt(S[i]));
    } else {
      let operand2 = stack.pop();
      let operand1 = stack.pop();
      let result;

      switch (S[i]) {
        case "*":
          result = operand1 * operand2;
          break;
        case "-":
          result = operand1 - operand2;
          break;
        case "+":
          result = operand1 + operand2;
          break;
        case "/":
          result = operand1 / operand2;
          break;
      }

      stack.push(result);
    }
  }

  return stack.pop();
}

console.log(evaluateStr("123+*8-"));
