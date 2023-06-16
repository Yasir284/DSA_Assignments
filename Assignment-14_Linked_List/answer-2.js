{
  /* <aside>
💡 **Question 2**

A number **N** is represented in Linked List such that each digit corresponds to a node in linked list. You need to add 1 to it.

**Example 1:**

```
Input:
LinkedList: 4->5->6
Output:457

```

**Example 2:**

Input:
LinkedList: 1->2->3
Output:124

</aside> */
}
import LinkedList from "../LinkedList.js";

let linkedList = new LinkedList();

[9, 9].forEach((e) => linkedList.add(e));

function addByOne(head) {
  head = reverseList(head);
  let curr = head;
  let carry = 1;

  while (curr) {
    let sum = curr.element + carry;

    if (sum < 10) {
      curr.element = sum;
      carry = 0;
      break;
    } else {
      curr.element = 0;
      carry = 1;
      if (curr.next === null) break;
      curr = curr.next;
    }
  }

  if (carry === 1) {
    let newNode = {
      element: 1,
      next: null,
    };
    curr.next = newNode;
  }
  // console.log("curr=", curr, "head=", head);
  head = reverseList(head);
  console.log("curr=", curr, "head=", head);

  return head;
}

// Function to reverse linked list
function reverseList(head) {
  if (head == null || head.next == null) return head;

  let curr = head,
    prev = null;

  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}

let link = addByOne(linkedList.head);

// Print list
function printList(list) {
  let curr = list;
  let str = "";

  while (curr) {
    str += curr.element + " ";
    curr = curr.next;
  }

  return str;
}

console.log(printList(link));
