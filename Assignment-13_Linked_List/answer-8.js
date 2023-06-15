{
  /* <aside>
💡 **Question 8**

Given a doubly linked list and a position. The task is to delete a node from given position in a doubly linked list.

**Example 1:**

```
Input:
LinkedList = 1 <--> 3 <--> 4
x = 3
Output:1 3
Explanation:After deleting the node at
position 3 (position starts from 1),
the linked list will be now as 1->3.

```

**Example 2:**

Input:
LinkedList = 1 <--> 5 <--> 2 <--> 9
x = 1
Output:5 2 9

</aside> */
}

function deleteNodeFromPosition(head, position) {
  if (head === null) {
    return null;
  }

  if (position === 1) {
    head = head.next;
    if (head !== null) {
      head.prev = null;
    }
    return head;
  }

  let current = head;
  let count = 1;

  while (current !== null && count < position) {
    current = current.next;
    count++;
  }

  if (current === null) {
    return head;
  }

  current.prev.next = current.next;

  if (current.next !== null) {
    current.next.prev = current.prev;
  }

  return head;
}

// Create the doubly linked list
let list = {
  data: 1,
  prev: null,
  next: {
    data: 5,
    prev: null,
    next: {
      data: 2,
      prev: null,
      next: {
        data: 9,
        prev: null,
        next: null,
      },
    },
  },
};

// Position to delete
let position = 1;

console.log("Before:");
printLinkedList(list);
list = deleteNodeFromPosition(list, position);
console.log("After:");
printLinkedList(list);

// Helper function to print the doubly linked list
function printLinkedList(head) {
  let current = head;
  while (current !== null) {
    process.stdout.write(current.data + " ");
    current = current.next;
  }
  console.log();
}
