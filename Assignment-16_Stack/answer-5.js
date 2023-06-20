{
  /* <aside>
💡 **Question 5**

Given a number , write a program to reverse this number using stack.

**Examples:**

Input : 365
Output : 563

Input : 6899
Output : 9986

</aside> */
}

function reverseNum(num) {
  num = JSON.stringify(num);
  let stack = [];
  let result = "";

  for (let i = 0; i < num.length; i++) {
    stack.push(num[i]);
  }

  while (stack.length > 0) {
    result += stack.pop();
  }

  return JSON.parse(result);
}

console.log(reverseNum(365));
