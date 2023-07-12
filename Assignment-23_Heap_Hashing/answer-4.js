{
  /* <aside>
💡 Question-4:

Given a Binary Tree, The task is to print the **bottom view** from left to right. A node **x** is there in output if x is the bottommost node at its horizontal distance. The horizontal distance of the left child of a node x is equal to a horizontal distance of x minus 1, and that of a right child is the horizontal distance of x plus 1.

**Examples:**

**Input:**

             20

           /     \

        8         22

    /      \         \

5         3        25

        /    \

   10       14

**Output:** 5, 10, 3, 14, 25.

**Input:**

             20

           /     \

        8         22

    /      \      /   \

 5         3    4     25

         /    \

     10       14

**Output:**

5 10 4 14 25.

**Explanation:**

If there are multiple bottom-most nodes for a horizontal distance from the root, then print the later one in the level traversal.

**3 and 4** are both the bottom-most nodes at a horizontal distance of 0, we need to print 4.

</aside> */
}
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let node1 = new Node(20);
let node2 = new Node(8);
let node3 = new Node(22);
let node4 = new Node(5);
let node5 = new Node(3);
let node6 = new Node(25);
let node7 = new Node(10);
let node8 = new Node(14);

node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node3.right = node6;
node5.left = node7;
node5.right = node8;

function printBottomView(root) {
  if (root === null) return;
  let d = {};
  let str = "";
  bottomViewUtil(root, d, 0, 0);
  Object.keys(d)
    .sort((a, b) => a - b)
    .forEach((e) => {
      str += d[e][0] + " ";
    });
  return str;
}

function bottomViewUtil(root, d, hd, lvl) {
  if (root === null) return;
  if (d[hd]) {
    if (lvl >= d[hd][1]) {
      d[hd] = [root.val, lvl];
    }
  } else {
    d[hd] = [root.val, lvl];
  }
  bottomViewUtil(root.left, d, hd - 1, lvl + 1);
  bottomViewUtil(root.right, d, hd + 1, lvl + 1);
}

console.log(printBottomView(node1));
