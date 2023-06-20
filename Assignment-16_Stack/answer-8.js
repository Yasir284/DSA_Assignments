{
  /* <aside>
💡 **Question 8**

Given an array of integers, the task is to find the maximum absolute difference between the nearest left and the right smaller element of every element in the array.

**Note:** If there is no smaller element on right side or left side of any element then we take zero as the smaller element. For example for the leftmost element, the nearest smaller element on the left side is considered as 0. Similarly, for rightmost elements, the smaller element on the right side is considered as 0.

**Examples:**

```
Input : arr[] = {2, 1, 8}
Output : 1
Left smaller  LS[] {0, 0, 1}
Right smaller RS[] {1, 0, 0}
Maximum Diff of abs(LS[i] - RS[i]) = 1

Input  : arr[] = {2, 4, 8, 7, 7, 9, 3}
Output : 4
Left smaller   LS[] = {0, 2, 4, 4, 4, 7, 2}
Right smaller  RS[] = {0, 3, 7, 3, 3, 3, 0}
Maximum Diff of abs(LS[i] - RS[i]) = 7 - 3 = 4

Input : arr[] = {5, 1, 9, 2, 5, 1, 7}
Output : 1
```

</aside> */
}
let arr = [2, 4, 8, 7, 7, 9, 3];

function maxDiff(arr) {
  const n = arr.length;
  const leftStack = [];
  const rightStack = [];
  const leftSmaller = new Array(n).fill(0);
  const rightSmaller = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    while (
      rightStack.length > 0 &&
      arr[i] < arr[rightStack[rightStack.length - 1]]
    ) {
      const index = rightStack.pop();
      rightSmaller[index] = arr[i];
    }
    rightStack.push(i);
  }

  rightStack.length = 0;

  for (let i = n - 1; i >= 0; i--) {
    while (
      leftStack.length > 0 &&
      arr[i] < arr[leftStack[leftStack.length - 1]]
    ) {
      const index = leftStack.pop();
      leftSmaller[index] = arr[i];
    }
    leftStack.push(i);
  }

  let maxDiff = 0;

  for (let i = 0; i < n; i++) {
    const diff = Math.abs(leftSmaller[i] - rightSmaller[i]);
    maxDiff = Math.max(maxDiff, diff);
  }

  return maxDiff;
}

console.log(maxDiff(arr));
