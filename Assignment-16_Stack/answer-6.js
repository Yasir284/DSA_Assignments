{
  /* <aside>
💡 **Question 6**

Given an integer k and a **[queue](https://www.geeksforgeeks.org/queue-data-structure/)** of integers, The task is to reverse the order of the first **k** elements of the queue, leaving the other elements in the same relative order.

Only following standard operations are allowed on queue.

- **enqueue(x) :** Add an item x to rear of queue
- **dequeue() :** Remove an item from front of queue
- **size() :** Returns number of elements in queue.
- **front() :** Finds front item.
</aside> */
}
import Queue from "../Queue.js";

let queue = new Queue();
let k = 3;

[1, 2, 3, 4, 5, 6].forEach((e) => queue.enqueue(e));

function reverseKElements(queue, k) {
  let stack = [];

  for (let i = 0; i < k; i++) {
    stack.push(queue.items[i]);
  }

  for (let i = 0; i < k; i++) {
    queue.items[i] = stack.pop();
  }

  return queue;
}

console.log(reverseKElements(queue, k));
