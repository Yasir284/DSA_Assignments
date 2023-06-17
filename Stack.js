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

export default Stack;
