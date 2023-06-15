{
  /* <aside>
💡 **Question 1**

Given two linked list of the same size, the task is to create a new linked list using those linked lists. The condition is that the greater node among both linked list will be added to the new linked list.

**Examples:**

Input: list1 = 5->2->3->8
list2 = 1->7->4->5
Output: New list = 5->7->4->8

Input:list1 = 2->8->9->3
list2 = 5->3->6->4
Output: New list = 5->8->9->4

</aside> */
}

import LinkedList from "../LinkedList.js";

let linkedList1 = new LinkedList();
let linkedList2 = new LinkedList();

[5, 2, 3, 8].forEach((e) => linkedList1.add(e));
[1, 7, 4, 5].forEach((e) => linkedList2.add(e));

function combineLists(head1, head2) {
  let curr1 = head1;
  let curr2 = head2;
  let newList = new LinkedList();

  while (curr1 && curr2) {
    if (curr1.element > curr2.element) {
      newList.add(curr1.element);
    } else {
      newList.add(curr2.element);
    }

    curr1 = curr1.next;
    curr2 = curr2.next;
  }

  return newList;
}

let newList = combineLists(linkedList1.head, linkedList2.head);
console.log(newList.printList());
