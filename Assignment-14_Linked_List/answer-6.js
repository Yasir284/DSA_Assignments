{
  /* <aside>
💡 **Question 6**

Given a singly linked list of size **N**. The task is to **left-shift** the linked list by **k** nodes, where **k** is a given positive integer smaller than or equal to length of the linked list.

**Example 1:**

Input:
N = 5
value[] = {2, 4, 7, 8, 9}
k = 3
Output:8 9 2 4 7
Explanation:Rotate 1:4 -> 7 -> 8 -> 9 -> 2
Rotate 2: 7 -> 8 -> 9 -> 2 -> 4
Rotate 3: 8 -> 9 -> 2 -> 4 -> 7

Example 2:

Input:
N = 8
value[] = {1, 2, 3, 4, 5, 6, 7, 8}
k = 4
Output:5 6 7 8 1 2 3 4
</aside> */
}
import LinkedList from "../LinkedList.js";

let linkedList = new LinkedList();
let k = 4;
let N = 8;
[1, 2, 3, 4, 5, 6, 7, 8].forEach((e) => linkedList.add(e));

function rotateList(head, k, N) {
  k = k % N;
  if (k === 0) return head;

  let fast = head;
  let slow = head;

  for (let i = 0; i < k; i++) {
    fast = fast.next;
  }

  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }

  let newHead = slow.next;
  slow.next = null;
  fast.next = head;

  return newHead;
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

let list = rotateList(linkedList.head, k, N);
console.log(printList(list));
