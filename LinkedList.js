class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(element) {
    let node = new Node(element);

    let current;

    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.size++;
  }

  createCircularList(x) {
    if (x === 0) return;
    let curr = this.head;
    let i = 0;
    let node;
    while (curr.next) {
      i++;
      if (i === x) node = curr;
      curr = curr.next;
    }
    curr.next = node;
  }

  printList() {
    let curr = this.head;
    let str = "";

    while (curr) {
      str += curr.element + " ";
      curr = curr.next;
    }

    return str;
  }

  isEmpty() {
    return this.head == null;
  }
}

export default LinkedList;
