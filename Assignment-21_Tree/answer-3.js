{
  /* <aside>
💡 Question-3:

Write a program to convert a binary tree to a doubly linked list.

Input:

        10

       /   \

     5     20

           /   \

        30     35

Output:

5 10 30 20 35

</aside> */
}

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let node1 = new TreeNode(10);
let node2 = new TreeNode(5);
let node3 = new TreeNode(20);
let node4 = new TreeNode(30);
let node5 = new TreeNode(35);

node1.left = node2;
node1.right = node3;
node3.left = node4;
node3.right = node5;

// Create a doubly linked list
class ListNode {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  add(val) {
    let node = new ListNode(val);

    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }

    return node;
  }

  printList() {
    let str = "";
    let curr = this.head;
    while (curr) {
      str += curr.val + "->";
      curr = curr.next;
    }
    str += "null";
    return str;
  }
}

let list = new LinkedList();
function binaryToLinkedList(root) {
  if (root === null) return;

  binaryToLinkedList(root.left);
  list.add(root.val);
  binaryToLinkedList(root.right);
}

binaryToLinkedList(node1);
console.log(list.printList());
