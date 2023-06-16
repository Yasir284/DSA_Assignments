{
  /* <aside>
💡 **Question 3**

Given a Linked List of size N, where every node represents a sub-linked-list and contains two pointers:(i) a **next** pointer to the next node,(ii) a **bottom** pointer to a linked list where this node is head.Each of the sub-linked-list is in sorted order.Flatten the Link List such that all the nodes appear in a single level while maintaining the sorted order. **Note:** The flattened list will be printed using the bottom pointer instead of next pointer.

**Example 1:**

Input:
5 -> 10 -> 19 -> 28
|     |     |     |
7     20    22   35
|           |     |
8          50    40
|                 |
30               45
Output: 5-> 7-> 8- > 10 -> 19-> 20->
22-> 28-> 30-> 35-> 40-> 45-> 50.
Explanation:
The resultant linked lists has every
node in a single level.(Note:| represents the bottom pointer.)

Example 2:

Input:
5 -> 10 -> 19 -> 28
|          |
7          22
|          |
8          50
|
30
Output: 5->7->8->10->19->22->28->30->50
Explanation:
The resultant linked lists has every
node in a single level.

(Note:| represents the bottom pointer.)

</aside> */
}

function flattenList(head) {
  if (head == null || head.next == null) return head;

  let result = head;
  let curr = head.next;

  while (curr !== null) {
    result = mergeLists(result, curr);
    curr = curr.next;
  }

  return result;
}

// Functioin to merge two lists
function mergeLists(l1, l2) {
  if (l1 === null) return l2;
  if (l2 === null) return l1;

  // console.log("l1==>", l1, "l2==>", l2);

  let result = null;

  if (l1.data <= l2.data) {
    result = l1;
    result.bottom = mergeLists(l1.bottom, l2);
  } else {
    result = l2;
    result.bottom = mergeLists(l1, l2.bottom);
  }

  console.log("result==>", result);
  return result;
}

// Helper function to print the flattened list
function printList(head) {
  let curr = head;
  let str = "";
  while (curr) {
    str += curr.data + "->";
    curr = curr.bottom;
  }
  str += "null";

  return str;
}

// Create the linked list
// 5 -> 10 -> 19 -> 28
// |          |
// 7          22
// |          |
// 8          50
// |
// 30

let list = {
  data: 5,
  next: {
    data: 10,
    next: {
      data: 19,
      next: {
        data: 28,
        next: null,
        bottom: null,
      },
      bottom: {
        data: 22,
        next: null,
        bottom: {
          data: 50,
          next: null,
          bottom: null,
        },
      },
    },
    bottom: null,
  },
  bottom: {
    data: 7,
    next: null,
    bottom: {
      data: 8,
      next: null,
      bottom: {
        data: 30,
        next: null,
        bottom: null,
      },
    },
  },
};

let flattenedList = flattenList(list);

console.log(printList(flattenedList));
