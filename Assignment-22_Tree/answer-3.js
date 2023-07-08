{
  /* 
💡 Question-3:

Given a binary tree, print all its root-to-leaf paths without using recursion. For example, consider the following Binary Tree.

Input:

        6
     /    \
    3      5
  /   \     \
 2     5     4
     /   \
    7     4

Output:
There are 4 leaves, hence 4 root to leaf paths -
  6->3->2
  6->3->5->7
  6->3->5->4
  6->5>4
 */
}

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let node1 = new Node(6);
let node2 = new Node(3);
let node3 = new Node(5);
let node4 = new Node(2);
let node5 = new Node(5);
let node6 = new Node(4);
let node7 = new Node(7);
let node8 = new Node(4);

node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node3.right = node6;
node5.left = node7;
node5.right = node8;

function printFromTopToBottom(curr, parent) {
  let stk = [];
  let str = "";
  while (curr != null) {
    stk.push(curr);
    curr = parent.get(curr);
  }

  while (stk.length > 0) {
    curr = stk.pop();
    str += curr.val + " -> ";
  }
  console.log(str + "null");
  str = "";
}

function printFromRootToLeaf(root) {
  let stk = [];
  stk.push(root);

  let parent = new Map();
  parent.set(root, null);

  while (stk.length > 0) {
    let curr = stk.pop();

    if (curr.left == null && curr.right == null)
      printFromTopToBottom(curr, parent);

    if (curr.right != null) {
      parent.set(curr.right, curr);
      stk.push(curr.right);
    }
    if (curr.left != null) {
      parent.set(curr.left, curr);
      stk.push(curr.left);
    }
  }
}

printFromRootToLeaf(node1);
