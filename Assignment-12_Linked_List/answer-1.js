{
  /* <aside>
💡 **Question 1**

Given a singly linked list, delete **middle** of the linked list. For example, if given linked list is 1->2->**3**->4->5 then linked list should be modified to 1->2->4->5.If there are **even** nodes, then there would be **two middle** nodes, we need to delete the second middle element. For example, if given linked list is 1->2->3->4->5->6 then it should be modified to 1->2->3->5->6.If the input linked list is NULL or has 1 node, then it should return NULL

**Example 1:**

```
Input:
LinkedList: 1->2->3->4->5
Output:1 2 4 5

```

**Example 2:**
Input:
LinkedList: 2->4->6->7->5->1
Output:2 4 6 5 1

</aside> */
}
import LinkedList from "../LinkedList.js";

let linkedList = new LinkedList();

[2, 4, 6, 7, 5, 1].forEach((e) => linkedList.add(e));

function removeMid(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  slow.element = slow.next.element;
  slow.next = slow.next.next;

  let str = "";
  while (head) {
    str += head.element + " ";
    head = head.next;
  }

  return str;
}

console.log(removeMid(linkedList.head));
