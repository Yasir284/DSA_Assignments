{
  /* <aside>
💡 **Question 4**

Given a linked list, write a function to reverse every alternate k nodes (where k is an input to the function) in an efficient way. Give the complexity of your algorithm.

**Example:**

Inputs:   1->2->3->4->5->6->7->8->9->NULL and k = 3
Output:   3->2->1->4->5->6->9->8->7->NULL.

</aside> */
}

import LinkedList from "../LinkedList.js";

let linkedList = new LinkedList();
let k = 3;
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].forEach((e) => linkedList.add(e));

function reverseAlternateKNodes(head, k) {
  if (head == null || head.next == null || k <= 1) return head;

  let curr = head,
    prev = null,
    temp = null,
    count = 0;

  while (curr != null && count < k) {
    temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;

    count++;
  }

  if (head != null) head.next = curr;

  count = 0;
  while (curr != null && count < k - 1) {
    curr = curr.next;
    count++;
  }

  if (curr != null) {
    curr.next = reverseAlternateKNodes(curr.next, k);
  }

  return prev;
}

// Print List
function printList(list) {
  let curr = list;

  let str = "";

  while (curr) {
    str += curr.element + " ";
    curr = curr.next;
  }

  return str;
}

let newList = reverseAlternateKNodes(linkedList.head, k);
console.log(newList);
console.log(printList(newList));
