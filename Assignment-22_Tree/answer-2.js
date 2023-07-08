{
  /*
💡 Question-2

A Given a binary tree, the task is to flip the binary tree towards the right direction that is clockwise. See the below examples to see the transformation.

In the flip operation, the leftmost node becomes the root of the flipped tree and its parent becomes its right child and the right sibling becomes its left child and the same should be done for all left most nodes recursively.

Example1:

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a5f5bbbe-8607-4f17-9ab4-b31327ffa2d0/Untitled.png)
*/
}

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);
let node6 = new Node(6);
let node7 = new Node(7);

node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node3.left = node6;
node3.right = node7;

function flipTreeToRight(root) {
  if (root === null || (root.left === null && root.right === null)) return root;

  let flippedRoot = flipTreeToRight(root.left);

  root.left.left = root.right;
  root.left.right = root;
  root.left = root.right = null;
  return flippedRoot;
}

console.log(flipTreeToRight(node1));
