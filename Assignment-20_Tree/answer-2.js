{
  /* <aside>
💡 Question-2

Construct the BST (Binary Search Tree) from its given level order traversal.

Example:

Input: arr[] = {7, 4, 12, 3, 6, 8, 1, 5, 10}

Output: BST:

            7

         /    \

       4     12

     /  \     /

    3   6  8

   /    /     \

 1    5      10

</aside> */
}

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinaryST {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const node = new Node(val);

    if (this.root === null) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }

  insertNode(node, newNode) {
    if (node.val > newNode.val) {
      if (node.left === null) node.left = newNode;
      else this.insertNode(node.left, newNode);
    } else {
      if (node.right === null) node.right = newNode;
      else this.insertNode(node.right, newNode);
    }
  }

  printTree() {
    this.printTreeNodes(this.root);
  }

  printTreeNodes(node) {
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
}

let tree = new BinaryST();
[7, 4, 12, 3, 6, 8, 1, 5, 10].forEach((e) => tree.insert(e));
console.log(tree);
tree.printTree();
