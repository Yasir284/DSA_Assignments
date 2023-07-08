{
  /* <aside>
💡 Question-4:

Given Preorder, Inorder and Postorder traversals of some tree. Write a program to check if they all are of the same tree.

**Examples:**

Input : 
        Inorder -> 4 2 5 1 3
        Preorder -> 1 2 4 5 3
        Postorder -> 4 5 2 3 1
Output : 

Yes
Explanation : 

All of the above three traversals are of
the same tree 

                           1
                         /   \
                        2     3
                      /   \
                     4     5

Input : 

        Inorder -> 4 2 5 1 3
        Preorder -> 1 5 4 2 3
        Postorder -> 4 1 2 3 5
Output : 

No

</aside> */
}

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Function to check if given preorder, postorder and inorder are of same tree
function checkTree(preorder, k1, inorder, k2, postorder, k3, len) {
  if (len === 0) return true;

  if (len === 1)
    return preorder[k1] == inorder[k2] && inorder[k2] == postorder[k3];

  let idx = -1;
  for (let i = k2; i < len; i++) {
    if (inorder[i] == preorder[k1]) {
      idx = i;
      break;
    }
  }

  if (idx == -1) return false;

  let ret1 = checkTree(preorder, k1 + 1, inorder, k2, postorder, k3, idx);
  let ret2 = checkTree(
    preorder,
    k1 + 1 + idx,
    inorder,
    k2 + idx + 1,
    postorder,
    k3 + idx,
    len - idx - 1
  );

  return ret1 && ret2;
}
console.log(
  checkTree([1, 2, 4, 5, 3], 0, [4, 2, 5, 1, 3], 0, [4, 5, 2, 3, 1], 0, 5)
);
console.log(
  checkTree([1, 5, 4, 2, 3], 0, [4, 2, 5, 1, 3], 0, [4, 1, 2, 3, 5], 0, 5)
);
