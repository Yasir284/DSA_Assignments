{
  /* <aside>
💡 Question-1

Given a binary tree, your task is to find subtree with maximum sum in tree.

Examples:

Input1 :       

       1

     /   \

   2      3

  / \    / \

4   5  6   7

Output1 : 28

As all the tree elements are positive, the largest subtree sum is equal to sum of all tree elements.

Input2 :

       1

     /    \

  -2      3

  / \    /  \

4   5  -6   2

Output2 : 7

Subtree with largest sum is :

 -2

 / \

4   5

Also, entire tree sum is also 7.

</aside> */
}

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.rigth = null;
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

function sumOfSubTree(root) {
  if (root == null) {
    return { maxSum: Number.MIN_VALUE, currSum: 0 };
  }

  let left = sumOfSubTree(root.left);
  let right = sumOfSubTree(root.right);

  let currSum = root.val + left.currSum + right.currSum;
  let maxSum = Math.max(currSum, left.maxSum, right.maxSum);

  return { maxSum, currSum };
}

console.log(sumOfSubTree(node1));
