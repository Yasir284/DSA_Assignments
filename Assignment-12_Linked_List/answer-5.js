{
  /* <aside>
💡 **Question 5**

Given a linked list of **N** nodes such that it may contain a loop.

A loop here means that the last node of the link list is connected to the node at position X(1-based index). If the link list does not have any loop, X=0.

Remove the loop from the linked list, if it is present, i.e. unlink the last node which is forming the loop.

**Example 1:**
Input:
N = 3
value[] = {1,3,4}
X = 2
Output:1
Explanation:The link list looks like
1 -> 3 -> 4
     ^    |
     |____|
A loop is present. If you remove it
successfully, the answer will be 1.

**Example 2:**

```
Input:
N = 4
value[] = {1,8,3,4}
X = 0
Output:1
Explanation:The Linked list does not
contains any loop.
```

**Example 3:**
Input:
N = 4
value[] = {1,2,3,4}
X = 1
Output:1
Explanation:The link list looks like
1 -> 2 -> 3 -> 4
^              |
|______________|
A loop is present.
If you remove it successfully,
the answer will be 1.
</aside> */
}

import LinkedList from "../LinkedList.js";

let linkedList = new LinkedList();

[1, 2, 3, 4].forEach((e) => linkedList.add(e));

linkedList.createCircularList(1);

function removeCircularLink(head) {
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (fast === slow) break;
  }

  if (fast == null || fast.next == null) return;

  fast = head;

  while (slow) {
    if (slow.next === fast.next.next) break;
    slow = slow.next;
    fast = fast.next.next;
  }

  slow.next = null;
}

removeCircularLink(linkedList.head);

console.log(linkedList.printList());
