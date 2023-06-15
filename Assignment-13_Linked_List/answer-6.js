{
  /* <aside>
💡 **Question 6**

Given two sorted linked lists consisting of **N** and **M** nodes respectively. The task is to merge both of the lists (in place) and return the head of the merged list.

**Examples:**

Input: a: 5->10->15, b: 2->3->20

Output: 2->3->5->10->15->20

Input: a: 1->1, b: 2->4

Output: 1->1->2->4

</aside> */
}
import LinkedList from "../LinkedList.js";

let l1 = new LinkedList();
let l2 = new LinkedList();

[5, 10, 15].forEach((e) => l1.add(e));
[2, 3, 20].forEach((e) => l2.add(e));

function mergeTwoList(l1, l2) {
  if (!l1 || !l2) return l1 || l2;

  if (l1.element < l2.element) {
    l1.next = mergeTwoList(l1.next, l2);
    return l1;
  }
  l2.next = mergeTwoList(l1, l2.next);
  return l2;
}

let mergedList = mergeTwoList(l1.head, l2.head);

function printList(list) {
  let curr = list;

  let str = "";

  while (curr) {
    str += curr.element + " ";
    curr = curr.next;
  }

  return str;
}

console.log(printList(mergedList));
