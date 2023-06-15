{
  /* <aside>
💡 **Question 7**

Given a **Doubly Linked List**, the task is to reverse the given Doubly Linked List.

**Example:**

Original Linked list 10 8 4 2
Reversed Linked list 2 4 8 10

</aside> */
}

import LinkedList from "../LinkedList.js";

let linkedList = new LinkedList();

[10, 8, 4, 2].forEach((e) => linkedList.add(e));

function reverseList(node) {
  if (node == null || node.next == null) return node;

  let curr = node;
  let temp = null;
  let prev = null;

  while (curr) {
    temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  return prev;
}

let list = reverseList(linkedList.head);

function printList(list) {
  let curr = list;
  let str = "";

  while (curr) {
    str += curr.element + " ";
    curr = curr.next;
  }
  return str;
}

console.log(printList(list));
