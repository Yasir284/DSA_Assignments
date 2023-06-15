{
  /* <aside>
💡 **Question 5**

Given a linked list and a key to be deleted. Delete last occurrence of key from linked. The list may have duplicates.

**Examples**:

Input:   1->2->3->5->2->10, key = 2
Output:  1->2->3->5->10

</aside> */
}

import LinkedList from "../LinkedList.js";

let linkedList = new LinkedList();

[1, 2, 3, 5, 2, 10].forEach((e) => linkedList.add(e));

let k = 2;

function deleteLastOccurence(node, k) {
  let curr = node;
  let last = null;
  let prev = null;

  while (curr) {
    if (curr.element === k) last = curr;

    curr = curr.next;
  }

  if (last === null) return node;

  curr = node;

  while (curr !== last) {
    prev = curr;
    curr = curr.next;
  }

  if (prev === null) node = node.next;
  else prev.next = last.next;
}

deleteLastOccurence(linkedList.head, k);
console.log(linkedList.printList());
