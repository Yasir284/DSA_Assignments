{
  /* 
💡 Question-1:

Given preorder of a binary tree, calculate its **[depth(or height)](https://www.geeksforgeeks.org/write-a-c-program-to-find-the-maximum-depth-or-height-of-a-tree/)** [starting from depth 0]. The preorder is given as a string with two possible characters.

1. ‘l’ denotes the leaf
2. ‘n’ denotes internal node

The given tree can be seen as a full binary tree where every node has 0 or two children. The two children of a node can ‘n’ or ‘l’ or mix of both.

**Examples :**

Input  : nlnll
Output : 2
Explanation :

!https://media.geeksforgeeks.org/wp-content/uploads/btree1.png

Input  : nlnnlll
Output : 3
 */
}

function heightOfTree(preorder) {
  return heightOfTreeUtil(preorder, preorder.length, 0);
}

function heightOfTreeUtil(preorder, n, i) {
  if (i >= n || preorder[i] == "l") return 0;

  i++;
  let left = heightOfTreeUtil(preorder, n, i);

  i++;
  let right = heightOfTreeUtil(preorder, n, i);

  return Math.max(left, right) + 1;
}

console.log(heightOfTree("nlnll"));
console.log(heightOfTree("nlnnlll"));
console.log(heightOfTree("nnlnllnl"));
