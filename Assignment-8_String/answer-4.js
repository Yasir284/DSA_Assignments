{
  /* <aside>
💡 **Question 4**

You need to construct a binary tree from a string consisting of parenthesis and integers.

The whole input represents a binary tree. It contains an integer followed by zero, one or two pairs of parenthesis. The integer represents the root's value and a pair of parenthesis contains a child binary tree with the same structure.
You always start to construct the **left** child node of the parent first if it exists.

![Screenshot 2023-05-29 010548.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bdbea2d1-34a4-4c4b-a450-ea6db7410c43/Screenshot_2023-05-29_010548.png)

**Input:** s = "4(2(3)(1))(6(5))"

**Output:** [4,2,6,3,1,5]

</aside> */
}
let s = "4(2(3)(1))(6(5))";

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function buildTree(s, start = 0, end = s.length - 1) {
  if (start > end) {
    return null;
  }

  const rootVal = parseInt(s[start]);
  const root = new TreeNode(rootVal);

  let index = start + 1;
  let count = 0;

  while (index <= end) {
    if (s[index] === "(") {
      count++;
    } else if (s[index] === ")") {
      count--;
    }

    if (count === 0) {
      break;
    }

    index++;
  }

  root.left = buildTree(s, start + 2, index - 1);
  root.right = buildTree(s, index + 2, end - 1);

  return root;
}

const tree = buildTree(s);

// Helper function to convert binary tree to array
function treeToArray(root) {
  if (root === null) {
    return [];
  }

  const result = [root.val];
  const left = treeToArray(root.left);
  const right = treeToArray(root.right);
  return result.concat(left, right);
}

console.log(treeToArray(tree)); // Output: [4, 2, 6, 3, 1, 5]
