{
  /* <aside>
💡 Question-2:

Given a Binary tree, the task is to print the **left view** of the Binary Tree. The left view of a Binary Tree is a set of leftmost nodes for every level.

**Examples:**

***Input:***

            4

          /   \

        5     2

             /   \

            3     1

           /  \

          6    7

***Output:** 4 5 3 6*

**Explanation:**

!https://media.geeksforgeeks.org/wp-content/cdn-uploads/left-view.png

***Input:***

                    1

                  /   \

                2       3

                 \

                   4

                     \

                        5

                           \

                             6

**Output:** 1 2 4 5 6

</aside> */
}

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let node1 = new Node(4);
let node2 = new Node(5);
let node3 = new Node(2);
let node4 = new Node(3);
let node5 = new Node(1);
let node6 = new Node(6);
let node7 = new Node(7);

node1.left = node2;
node1.right = node3;
node3.left = node4;
node3.right = node5;
node4.left = node6;
node4.right = node7;

let max_lvl = 0;
function printLeftView(root, level) {
  if (root == null) return;

  if (max_lvl < level) {
    console.log(root.val);
    max_lvl = level;
  }

  printLeftView(root.left, level + 1);
  printLeftView(root.right, level + 1);
}

function leftView(root) {
  printLeftView(root, 1);
}

leftView(node1);
