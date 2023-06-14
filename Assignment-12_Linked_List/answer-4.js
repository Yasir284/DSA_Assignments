{
  /* <aside>
💡 **Question 4**

Given a singly linked list of characters, write a function that returns true if the given list is a palindrome, else false.

!https://media.geeksforgeeks.org/wp-content/uploads/20220816144425/LLdrawio.png

**Examples:**

> Input: R->A->D->A->R->NULL
> 
> 
> **Output:** Yes
> 
> **Input:** C->O->D->E->NULL
> 
> **Output:** No
> 
</aside> */
}

import LinkedList from "../LinkedList.js";

let linkedList = new LinkedList();

["R", "A", "D", "A", "R"].forEach((e) => linkedList.add(e));

function isPalindrome(head) {
  let slow = head,
    fast = head,
    temp,
    prev;

  // Find mid
  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  //    Reverse other half of linkedlist
  prev = slow;
  slow = slow.next;
  prev.next = null;

  while (slow) {
    temp = slow.next;
    slow.next = prev;
    prev = slow;
    slow = temp;
  }

  // Transverse linkedlist
  fast = head;
  slow = prev;
  while (slow) {
    if (fast.element != slow.element) return false;
    slow = slow.next;
    fast = fast.next;
  }

  return true;
}

console.log(isPalindrome(linkedList.head));
