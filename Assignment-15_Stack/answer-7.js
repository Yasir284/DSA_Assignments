{
  /* <aside>
💡 **Question 7**

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the `MinStack` class:

- `MinStack()` initializes the stack object.
- `void push(int val)` pushes the element `val` onto the stack.
- `void pop()` removes the element on the top of the stack.
- `int top()` gets the top element of the stack.
- `int getMin()` retrieves the minimum element in the stack.

You must implement a solution with `O(1)` time complexity for each function.

**Example 1:**

Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output
[null,null,null,null,-3,null,0,-2]

Explanation
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2

</aside> */
}

class Stack {
  constructor() {
    this.items = [];
    this.min = [];
  }

  push(item) {
    this.items.push(item);

    if (this.min.length === 0 || item <= this.min[this.min.length - 1]) {
      this.min.push(item);
    }
  }

  pop() {
    if (this.items.length == 0) return "Underflow";

    let val = this.items.pop();

    if (val === this.min[this.min.length - 1]) this.min.pop();

    return val;
  }

  top() {
    return this.items[this.items.length - 1];
  }

  getMin() {
    return this.min[this.min.length - 1];
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
const minStack = new Stack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin());
minStack.pop();
console.log(minStack.top());
console.log(minStack.getMin());
