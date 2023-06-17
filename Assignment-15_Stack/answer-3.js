{
  /* <aside>
💡 **Question 3**

Implement a Stack using two queues **q1** and **q2**.

**Example 1:**

```
Input:
push(2)
push(3)
pop()
push(4)
pop()
Output:3 4
Explanation:
push(2) the stack will be {2}
push(3) the stack will be {2 3}
pop()   poped element will be 3 the
        stack will be {2}
push(4) the stack will be {2 4}
pop()   poped element will be 4

```

**Example 2:**

Input:
push(2)
pop()
pop()
push(3)
Output:2 -1

</aside> */
}

class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    if (this.items.length == 0) return "Underflow";

    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length <= 0;
  }

  printStack(items = this.items) {
    var str = "";

    for (let i = 0; i < items.length; i++) {
      str += items[i] + " ";
    }

    return str;
  }
}

let stack = new Stack();

stack.push(2);
console.log("Stack:", stack.printStack());
stack.push(3);
console.log("Stack:", stack.printStack());
console.log(stack.pop());
console.log("Stack:", stack.printStack());
stack.push(4);
console.log("Stack:", stack.printStack());
console.log(stack.pop());
console.log("Stack:", stack.printStack());
