{
  /* <aside>
💡 **Question 8**

Given a singly linked list, find if the linked list is [circular](https://www.geeksforgeeks.org/circular-linked-list/amp/) or not.

> A linked list is called circular if it is not NULL-terminated and all nodes are connected in the form of a cycle. Below is an example of a circular linked list.
> 

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d30bbf79-b1eb-4ba4-b23e-6d3f27ccdfe5/Untitled.png)

</aside> */
}

import LinkedList from "../LinkedList.js";

let linkedList = new LinkedList();

[1, 2, 3, 4, 5].forEach((e) => linkedList.add(e));

linkedList.createCircularList(2);

function isCircular(head) {
  if (head == null || head.next == null) return;

  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    if (slow == fast) return true;

    slow = slow.next;
    fast = fast.next.next;
  }

  return false;
}

console.log(isCircular(linkedList.head));
