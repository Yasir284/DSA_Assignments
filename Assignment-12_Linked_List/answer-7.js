{
  /* <aside>
💡 **Question 7**

Given two linked lists, insert nodes of second list into first list at alternate positions of first list.
For example, if first list is 5->7->17->13->11 and second is 12->10->2->4->6, the first list should become 5->12->7->10->17->2->13->4->11->6 and second list should become empty. The nodes of second list should only be inserted when there are positions available. For example, if the first list is 1->2->3 and second list is 4->5->6->7->8, then first list should become 1->4->2->5->3->6 and second list to 7->8.

Use of extra space is not allowed (Not allowed to create additional nodes), i.e., insertion must be done in-place. Expected time complexity is O(n) where n is number of nodes in first list.

</aside> */
}

import LinkedList from "../LinkedList.js";

let linkList1 = new LinkedList();
let linkList2 = new LinkedList();

[1, 2, 3].forEach((e) => linkList1.add(e));
[4, 5, 6, 7, 8].forEach((e) => linkList2.add(e));

function mergeTwoList(head1, head2) {
  let p1 = head1;
  let p2 = head2;

  while (p1 && p2) {
    if (p2 === null) return;

    let next1 = p1.next;
    let next2 = p2.next;

    p1.next = p2;
    p2.next = next1;

    p1 = next1;
    p2 = next2;
  }
}

mergeTwoList(linkList1.head, linkList2.head);
console.log(linkList1.printList());
