{
  /* <aside>
💡 Question-3

Given an array of size n. The problem is to check whether the given array can represent the level order traversal of a Binary Search Tree or not.

Examples:

Input1 : arr[] = {7, 4, 12, 3, 6, 8, 1, 5, 10}

Output1 : Yes

For the given arr[], the Binary Search Tree is:

            7

         /    \

       4     12

     /  \     /

    3   6  8

   /    /     \

 1    5      10

Input2 : arr[] = {11, 6, 13, 5, 12, 10}

Output2 : No

The given arr[] does not represent the level order traversal of a BST.

</aside> */
}

class Node {
  constructor(val) {
    this.val = val;
    this.min;
    this.max;
  }
}

function isBinaryST(arr, n) {
  if (n === 0) return true;
  let queue = [];
  let i = 0;
  let newNode = new Node(arr[i++]);
  newNode.max = Number.MAX_VALUE;
  newNode.min = Number.MIN_VALUE;

  queue.push(newNode);

  while (i != n && queue.length > 0) {
    let temp = queue[0];
    queue.shift();
    newNode = new Node();

    if (i < n && arr[i] < temp.val && arr[i] > temp.min) {
      newNode.val = arr[i++];
      newNode.min = temp.min;
      newNode.max = temp.val;
      queue.push(newNode);
    }

    newNode = new Node();

    if (i < n && arr[i] > temp.val && arr[i] < temp.max) {
      newNode.val = arr[i++];
      newNode.min = temp.val;
      newNode.max = temp.max;
      queue.push(newNode);
    }
  }

  if (i == n) return true;

  return false;
}

console.log(isBinaryST([7, 4, 12, 3, 6, 8, 1, 5, 10], 9));
console.log(isBinaryST([11, 6, 13, 5, 12, 10], 6));
