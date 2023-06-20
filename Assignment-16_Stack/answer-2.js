{
  /* <aside>
💡 **Question 2**

Given a stack of integers, sort it in ascending order using another temporary stack.

**Examples:**

Input : [34, 3, 31, 98, 92, 23]
Output : [3, 23, 31, 34, 92, 98]

Input : [3, 5, 1, 4, 2, 8]
Output : [1, 2, 3, 4, 5, 8]

</aside> */
}
let arr = [34, 3, 31, 98, 92, 23];

function sortArr(stack) {
  let tempStack = [];

  while (stack.length > 0) {
    let temp = stack.pop();

    while (tempStack.length > 0 && tempStack[tempStack.length - 1] < temp) {
      stack.push(tempStack.pop());
    }

    tempStack.push(temp);
  }

  while (tempStack.length > 0) {
    stack.push(tempStack.pop());
  }

  return stack;
}
console.log(sortArr(arr));
