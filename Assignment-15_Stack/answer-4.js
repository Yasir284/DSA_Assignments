{
  /* <aside>
💡 **Question 4**

You are given a stack **St**. You have to reverse the stack using recursion.

**Example 1:**

```
Input:St = {3,2,1,7,6}
Output:{6,7,1,2,3}
```

**Example 2:**

Input:St = {4,3,9,6}
Output:{6,9,3,4}

</aside> */
}

let St = [3, 2, 1, 7, 6];

function reverseStack(St) {
  if (St.length <= 1) return;

  let topElement = St.pop();

  reverseStack(St);

  insertAtBottom(St, topElement);
}

function insertAtBottom(St, element) {
  if (St.length === 0) {
    St.push(element);
    return;
  }

  let topElement = St.pop();

  insertAtBottom(St, element);

  St.push(topElement);
}

reverseStack(St);
console.log(St);
