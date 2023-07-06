{
  /* <aside>
💡 Question-2:

Given a Binary Search Tree with all unique values and two keys. Find the distance between two nodes in BST. The given keys always exist in BST.

Example:

Consider the following BST:

![1.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f2455039-7e12-43fc-a7d3-b5be24931c1c/1.png)

**Input-1:**

n = 9

values = [8, 3, 1, 6, 4, 7, 10, 14,13]

node-1 = 6

node-2 = 14

**Output-1:**

The distance between the two keys = 4

**Input-2:**

n = 9

values = [8, 3, 1, 6, 4, 7, 10, 14,13]

node-1 = 3

node-2 = 4

**Output-2:**

The distance between the two keys = 2

</aside> */
}
import { BinaryST } from "../BinaryTree.js";

let tree = new BinaryST();
[8, 3, 1, 6, 4, 7, 10, 14, 13].forEach((e) => tree.insert(e));

function distanceFromRoot(root, x) {
  if (root.val === x) return 0;
  else if (root.val > x) return 1 + distanceFromRoot(root.left, x);
  else return 1 + distanceFromRoot(root.right, x);
}

function distanceBetweenTwoNodes(root, k1, k2) {
  let distanceOfK1 = distanceFromRoot(root, k1);
  let distanceOfK2 = distanceFromRoot(root, k2);

  if ((root.val < k1 && root.val < k1) || (root.val > k1 && root.val > k2)) {
    return Math.abs(distanceOfK1 - distanceOfK2);
  }

  if ((root.val > k1 && root.val < k2) || (root.val < k1 && root.val > k2)) {
    return distanceOfK1 + distanceOfK2;
  }
}

console.log(
  "\n Example-1 \n Output:",
  distanceBetweenTwoNodes(tree.root, 6, 14)
);
console.log(
  "\n Example-2 \n Output:",
  distanceBetweenTwoNodes(tree.root, 3, 4)
);
