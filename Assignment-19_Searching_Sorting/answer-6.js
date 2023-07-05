{
  /* <aside>
💡 **6. Merge two sorted arrays**

Given two sorted arrays, the task is to merge them in a sorted manner.

**Examples:**

> Input: arr1[] = { 1, 3, 4, 5}, arr2[] = {2, 4, 6, 8} 
Output: arr3[] = {1, 2, 3, 4, 4, 5, 6, 8}

Input: arr1[] = { 5, 8, 9}, arr2[] = {4, 7, 8}
Output: arr3[] = {4, 5, 7, 8, 8, 9}
> 
</aside> */
}

// Using merge sort approach
function merge(left, right) {
  let i = 0;
  let j = 0;
  let mergedArr = [];

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      mergedArr.push(left[i]);
      i++;
    } else {
      mergedArr.push(right[j]);
      j++;
    }
  }

  while (i < left.length) {
    mergedArr.push(left[i]);
    i++;
  }

  while (j < right.length) {
    mergedArr.push(right[j]);
    j++;
  }

  return mergedArr;
}

console.log("Example-1: Output = ", merge([1, 3, 4, 5], [2, 4, 6, 8]));
console.log("Example-2: Output = ", merge([5, 8, 9], [4, 7, 8]));
