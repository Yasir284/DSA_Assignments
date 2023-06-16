{
  /* <aside>
💡 **Question 5**

Given the `head` of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return *the reordered list*.

The **first** node is considered **odd**, and the **second** node is **even**, and so on.

Note that the relative order inside both the even and odd groups should remain as it was in the input.

You must solve the problem in `O(1)` extra space complexity and `O(n)` time complexity.

**Example 1:**

!https://assets.leetcode.com/uploads/2021/03/10/oddeven-linked-list.jpg

```
Input: head = [1,2,3,4,5]
Output: [1,3,5,2,4]

```

**Example 2:**

Input: head = [2,1,3,5,6,4,7]
Output: [2,3,6,7,1,5,4]

</aside> */
}
import LinkedList from "../LinkedList.js";

let linkedList = new LinkedList();

[2, 1, 3, 5, 6, 4, 7].forEach((e) => linkedList.add(e));

function filterOddNode(head) {
  if (head == null || head.next == null) return head;

  let oddHead = head;
  let evenHead = head.next;
  let oddTail = oddHead;
  let evenTail = evenHead;

  let curr = evenHead.next;
  let index = 3;

  while (curr) {
    if (index % 2 == 1) {
      oddTail.next = curr;
      oddTail = oddTail.next;
    } else {
      evenTail.next = curr;
      evenTail = evenTail.next;
    }

    curr = curr.next;
    index++;
  }

  evenTail.next = null;
  oddTail.next = evenHead;

  return oddHead;
}

// Function to print list
function printList(list) {
  let curr = list;
  let str = "";

  while (curr) {
    str += curr.element + "->";
    curr = curr.next;
  }

  str += "null";

  return str;
}

let list = filterOddNode(linkedList.head);
console.log(printList(list));
