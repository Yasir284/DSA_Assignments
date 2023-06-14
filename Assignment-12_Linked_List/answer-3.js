{
  /* <aside>
💡 **Question 3**

Given a linked list consisting of **L** nodes and given a number **N**. The task is to find the **N**th node from the end of the linked list.

**Example 1:**

```
Input:
N = 2
LinkedList: 1->2->3->4->5->6->7->8->9
Output:8
Explanation:In the first example, there
are 9 nodes in linked list and we need
to find 2nd node from end. 2nd node
from end is 8.

```
if fast = 2  
slow = 1
to slow = 1 - N 
fast should be

**Example 2:**

Input:
N = 5
LinkedList: 10->5->100->5
Output:-1
Explanation:In the second example, there
are 4 nodes in the linked list and we
need to find 5th from the end. Since 'n'
is more than the number of nodes in the
linked list, the output is -1.

</aside> */
}

import LinkedList from "../LinkedList.js";

let linkedList = new LinkedList();

[1, 2, 3, 4, 5, 6, 7, 8, 9].forEach((e) => linkedList.add(e));

function findNthFromEnd(n, list) {
  if (n <= 0 || n > list.size) return -1;

  let fast = list.head;
  let slow = list.head;

  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  if (fast == null) return -1;

  while (fast !== null) {
    fast = fast.next;
    slow = slow.next;
  }

  return slow.element;
}

console.log(findNthFromEnd(2, linkedList));