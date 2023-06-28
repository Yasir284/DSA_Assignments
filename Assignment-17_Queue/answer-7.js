{
  /* <aside>
💡 **Question 7**

Design a queue that supports `push` and `pop` operations in the front, middle, and back.

Implement the `FrontMiddleBack` class:

- `FrontMiddleBack()` Initializes the queue.
- `void pushFront(int val)` Adds `val` to the **front** of the queue.
- `void pushMiddle(int val)` Adds `val` to the **middle** of the queue.
- `void pushBack(int val)` Adds `val` to the **back** of the queue.
- `int popFront()` Removes the **front** element of the queue and returns it. If the queue is empty, return `1`.
- `int popMiddle()` Removes the **middle** element of the queue and returns it. If the queue is empty, return `1`.
- `int popBack()` Removes the **back** element of the queue and returns it. If the queue is empty, return `1`.

**Notice** that when there are **two** middle position choices, the operation is performed on the **frontmost** middle position choice. For example:

- Pushing `6` into the middle of `[1, 2, 3, 4, 5]` results in `[1, 2, 6, 3, 4, 5]`.
- Popping the middle from `[1, 2, 3, 4, 5, 6]` returns `3` and results in `[1, 2, 4, 5, 6]`.

**Example 1:**

Input:
["FrontMiddleBackQueue", "pushFront", "pushBack", "pushMiddle", "pushMiddle", "popFront", "popMiddle", "popMiddle", "popBack", "popFront"]
[[], [1], [2], [3], [4], [], [], [], [], []]
Output:
[null, null, null, null, null, 1, 3, 4, 2, -1]

Explanation:
FrontMiddleBackQueue q = new FrontMiddleBackQueue();
q.pushFront(1);   // [1]
q.pushBack(2);    // [1,2]
q.pushMiddle(3);  // [1,3, 2]
q.pushMiddle(4);  // [1,4, 3, 2]
q.popFront();     // return 1 -> [4, 3, 2]
q.popMiddle();    // return 3 -> [4, 2]
q.popMiddle();    // return 4 -> [2]
q.popBack();      // return 2 -> []
q.popFront();     // return -1 -> [] (The queue is empty)

</aside> */
}

class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class FrontMiddleBackQueue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  pushBack(val) {
    let node = new Node(val);

    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }

    this.size++;
  }

  pushFront(val) {
    let node = new Node(val);

    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }

    this.size++;
  }

  pushMiddle(val) {
    let node = new Node(val);

    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      let middle = Math.floor(this.size / 2);
      let curr = this.head;
      for (let i = 0; i < middle - 1; i++) {
        curr = curr.next;
      }
      node.next = curr.next;
      node.prev = curr;
      curr.next.prev = node;
      curr.next = node;
      this.size++;
    }
  }

  popFront() {
    if (this.isEmpty()) return -1;
    let val = this.head.val;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    this.size--;
    return val;
  }

  popBack() {
    if (this.isEmpty()) return -1;
    let val = this.tail.val;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }

    this.size--;
    return val;
  }

  popMiddle() {
    let val;
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else if (this.size === 2) {
      val = this.head.val;
      this.head = this.head.next;
    } else {
      let middle = Math.floor(this.size / 2);
      let curr = this.head;
      for (let i = 0; i < middle - 1; i++) {
        curr = curr.next;
      }
      val = curr.val;
      curr.next = curr.next.next;
      curr.next.prev = curr;
    }
    this.size--;
    return val;
  }

  isEmpty() {
    return this.size === 0;
  }

  get printQueue() {
    let curr = this.head;

    let arr = [];

    while (curr) {
      arr.push(curr.val);
      curr = curr.next;
    }

    return arr;
  }
}

let q = new FrontMiddleBackQueue();

q.pushFront(1); // [1]
console.log(q.printQueue);

q.pushBack(2); // [1,2]
console.log(q.printQueue);

q.pushMiddle(3); // [1,3, 2]
console.log(q.printQueue);

q.pushMiddle(4); // [1,4, 3, 2]
console.log(q.printQueue);

q.popFront(); // return 1 -> [4, 3, 2]
console.log(q.printQueue);

q.popMiddle(); // return 3 -> [4, 2]
console.log(q.printQueue);

q.popMiddle(); // return 4 -> [2]
console.log(q.printQueue);

q.popBack(); // return 2 -> []
console.log(q.printQueue);

q.popFront(); // return -1 -> [] (The queue is empty)
console.log(q.printQueue);
