{
  /* <aside>
💡 **Question 8**

Given the `head` of a linked list, we repeatedly delete consecutive sequences of nodes that sum to `0` until there are no such sequences.

After doing so, return the head of the final linked list.  You may return any such answer.

(Note that in the examples below, all sequences are serializations of `ListNode` objects.)

**Example 1:**

```
Input: head = [1,2,-3,3,1]
Output: [3,1]
Note: The answer [1,2,1] would also be accepted.

```

**Example 2:**

```
Input: head = [1,2,3,-3,4]
Output: [1,2,4]

```

**Example 3:**

```
Input: head = [1,2,3,-3,-2]
Output: [1]
```

</aside> */
}
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function removeZeroSumSublists(head) {
  const dummy = new ListNode(0);
  dummy.next = head;

  let current = dummy;
  let stack = [];
  let sum = 0;

  while (current) {
    sum += current.val;

    if (sum === 0) {
      // Remove nodes from stack
      while (stack.length > 0) {
        sum -= stack.pop();
        current = current.next;
      }
      // Update previous node's next pointer
      current.next = current.next ? current.next.next : null;
    } else {
      stack.push(current.val);
      current = current.next;
    }
  }

  return dummy.next;
}
