{
  /* <aside>
💡 **Question 7**

You are given the `head` of a linked list with `n` nodes.

For each node in the list, find the value of the **next greater node**. That is, for each node, find the value of the first node that is next to it and has a **strictly larger** value than it.

Return an integer array `answer` where `answer[i]` is the value of the next greater node of the `ith` node (**1-indexed**). If the `ith` node does not have a next greater node, set `answer[i] = 0`.

**Example 1:**
Input: head = [2,1,5]
Output: [5,5,0]

Example 2:
Input: head = [2,7,4,3,5]
Output: [7,0,5,5,0]
</aside> */
}

import LinkedList from "../LinkedList.js";

let linkedList = new LinkedList();

[2, 1, 5].forEach((e) => linkedList.add(e));

function arrOfNextLargestNode(head) {
  let result = [];
  let stack = [];
  let curr = head;
  let i = 0;

  while (curr) {
    while (stack.length > 0 && curr.element > stack[stack.length - 1].element) {
      let largerNodeIndex = stack.pop().index;

      result[largerNodeIndex] = curr.element;
    }

    stack.push({ element: curr.element, index: i });
    result[i] = 0;

    curr = curr.next;
    i++;
  }

  return result;
}

console.log(arrOfNextLargestNode(linkedList.head));
