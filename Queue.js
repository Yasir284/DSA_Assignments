class Queue {
  constructor() {
    this.items = {};
    this.frontIndex = 0;
    this.backIndex = 0;
    this.size = 0;
  }

  enqueue(item) {
    this.items[this.backIndex] = item;
    this.backIndex++;
    this.size++;
    return item + " inserted";
  }

  dequeue() {
    const item = this.items[this.frontIndex];
    delete this.items[this.frontIndex];
    this.frontIndex++;
    this.size--;
    return item;
  }

  front() {
    return this.items[this.frontIndex];
  }

  size() {
    return this.size;
  }

  get printQueue() {
    return this.items;
  }
}

export default Queue;
