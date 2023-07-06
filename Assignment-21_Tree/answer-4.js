{
  /* <aside>
💡 Question-4:

Write a program to connect nodes at the same level.

Input:

        1

      /   \

    2      3

  /   \   /   \

4     5 6    7

Output:

1 → -1

2 → 3

3 → -1

4 → 5

5 → 6

6 → 7

7 → -1

</aside> */
}

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.next = null;
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

function connectNodesOfSameLvl(root) {
  let queue = [];
  queue.push(root);

  let temp = null;
  while (queue.length > 0) {
    let n = queue.length;
    for (let i = 0; i < n; i++) {
      let prev = temp;
      temp = queue.shift();

      if (i > 0) prev.next = temp;
      if (temp.left != null) queue.push(temp.left);
      if (temp.right != null) queue.push(temp.right);
    }
    temp.next = null;
  }
}

connectNodesOfSameLvl(node1);
console.log(node1);
