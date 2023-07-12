{
  /* <aside>
💡 Question-3:

Given a Binary Tree, print the Right view of it.

The right view of a Binary Tree is a set of nodes visible when the tree is visited from the Right side.

**Examples:**

**Input:**

         1

      /     \

   2         3

/   \       /  \

4     5   6    7

             \

               8

**Output**: 

Right view of the tree is 1 3 7 8

**Input:**

         1

       /

    8

  /

7

**Output**: 

Right view of the tree is 1 8 7

</aside> */
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
let node8 = new Node(8);

node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node3.left = node6;
node3.right = node7;
node6.right = node8;

let max_lvl = 0;
function printRightView(root, level) {
  if (root == null) return;

  if (max_lvl < level) {
    console.log(root.val);
    max_lvl = level;
  }

  printRightView(root.right, level + 1);
  printRightView(root.left, level + 1);
}

function rightView(root) {
  printRightView(root, 1);
}

rightView(node1);
