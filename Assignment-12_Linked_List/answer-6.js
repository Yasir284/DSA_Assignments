{
  /* <aside>
💡 **Question 6**

Given a linked list and two integers M and N. Traverse the linked list such that you retain M nodes then delete next N nodes, continue the same till end of the linked list.

Difficulty Level: Rookie

**Examples**:

Input:
M = 2, N = 2
Linked List: 1->2->3->4->5->6->7->8
Output:
Linked List: 1->2->5->6

Input:
M = 3, N = 2
Linked List: 1->2->3->4->5->6->7->8->9->10
Output:
Linked List: 1->2->3->6->7->8

Input:
M = 1, N = 1
Linked List: 1->2->3->4->5->6->7->8->9->10
Output:
Linked List: 1->3->5->7->9

</aside> */
}

import LinkedList from "../LinkedList.js";

let linkedList = new LinkedList();

[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach((e) => linkedList.add(e));

let m = 3,
  n = 2;

function modifyList(head, m, n) {
  let curr = head;
  let i = 0;
  let j = 0;

  while (curr) {
    i++;
    if (i == m) {
      i = 0;
      let temp = curr;
      while (j <= n) {
        temp = temp.next;
        j++;
      }
      curr.next = temp;
      j = 0;
    }

    curr = curr.next;
  }
}

modifyList(linkedList.head, m, n);
console.log(linkedList.printList());
