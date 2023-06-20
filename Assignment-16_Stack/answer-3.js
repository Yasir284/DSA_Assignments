{
  /* <aside>
💡 **Question 3**

Given a stack with **push()**, **pop()**, and **empty()** operations, The task is to delete the **middle** element ****of it without using any additional data structure.

Input  : Stack[] = [1, 2, 3, 4, 5]

Output : Stack[] = [1, 2, 4, 5]

Input  : Stack[] = [1, 2, 3, 4, 5, 6]

Output : Stack[] = [1, 2, 4, 5, 6]

</aside> */
}

import Stack from "../Stack.js";

let stack = new Stack();

[1, 2, 3, 4, 5].forEach((e) => stack.push(e));

function getLength(stack) {
  let tempStack = [];
  let count = 0;

  while (stack.items.length > 0) {
    tempStack.push(stack.items.pop());
    count++;
  }

  while (tempStack.length > 0) {
    stack.push(tempStack.pop());
  }

  return count;
}

function deleteMiddle(stack, middleIndex) {
  if (stack.isEmpty() || middleIndex === 1) {
    stack.items.pop();
    return;
  }

  let popped = stack.items.pop();

  deleteMiddle(stack, middleIndex - 1);

  stack.push(popped);
}

function deleteMiddleElement(stack) {
  let n = getLength(stack);

  deleteMiddle(stack, Math.floor((n - 1) / 2));

  return stack;
}

// deleteMiddleElement(stack);

console.log(deleteMiddleElement(stack));
