{
  /* <aside>
💡 Question-1

You are given a binary tree. The binary tree is represented using the TreeNode class. Each TreeNode has an integer value and left and right children, represented using the TreeNode class itself. Convert this binary tree into a binary search tree.

Input:

        10

       /   \

     2      7

   /   \

 8      4

Output:

        8

      /   \

    4     10

  /   \

2      7

</aside> */
}

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let node1 = new Node(10);
let node2 = new Node(2);
let node3 = new Node(7);
let node4 = new Node(8);
let node5 = new Node(4);

node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;

// Converting Binary tree to Binary Search tree
function binaryToBST(root) {
  if (root === null) return;
  let arr = [];
  treeToArr(root, arr);
  arr = mergeSort(arr);
  arrToBST(arr, root);
  return root;
}

// Storing tree values in array
function treeToArr(root, arr) {
  if (root == null) return arr;
  treeToArr(root.left, arr);
  arr.push(root.val);
  treeToArr(root.right, arr);
}
// ==============================================

// Sorted Array to BST
function arrToBST(arr, root) {
  if (root == null) return;
  arrToBST(arr, root.right);
  root.val = arr.pop();
  arrToBST(arr, root.left);
}
// ==============================================

// Sort array with merge sort
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let merged = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      merged.push(left[i++]);
    } else {
      merged.push(right[j++]);
    }
  }

  while (i < left.length) {
    merged.push(left[i++]);
  }

  while (j < right.length) {
    merged.push(right[j++]);
  }

  return merged;
}
// ==============================================

// Print Tree accornding to Levels
function printTreeNodes(node) {
  let queue = [];
  queue.push(node);

  while (queue.length > 0) {
    let levelSize = queue.length;
    let currentLevel = [];
    for (let i = 0; i < levelSize; i++) {
      let node = queue.shift();
      currentLevel.push(node.val);

      if (node.left !== null) {
        queue.push(node.left);
      }

      if (node.right !== null) {
        queue.push(node.right);
      }
    }
    console.log(currentLevel);
  }
}
// ==============================================

console.log(binaryToBST(node1));
printTreeNodes(node1);
