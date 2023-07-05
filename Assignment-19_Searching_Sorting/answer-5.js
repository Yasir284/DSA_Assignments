{
  /* <aside>
💡 5. **Rearrange array in alternating positive & negative items with O(1) extra space**

Given an **array of positive** and **negative numbers**, arrange them in an **alternate** fashion such that every positive number is followed by a negative and vice-versa maintaining the **order of appearance**. The number of positive and negative numbers need not be equal. If there are more positive numbers they appear at the end of the array. If there are more negative numbers, they too appear at the end of the array.

**Examples:**

> Input:  arr[] = {1, 2, 3, -4, -1, 4}
Output: arr[] = {-4, 1, -1, 2, 3, 4}

Input:  arr[] = {-5, -2, 5, 2, 4, 7, 1, 8, 0, -8}
Input:  arr[] = {-5, 5, -2, 2, 4, 7, 1, 8, 0, -8}
Output: arr[] = {-5, 5, -2, 2, -8, 4, 7, 1, 8, 0}
> 
</aside> */
}

function reorderArr(arr) {
  let outOfPlace = -1;

  for (let i = 0; i < arr.length; i++) {
    if (outOfPlace == -1) {
      if ((arr[i] >= 0 && i % 2 == 0) || (arr[i] < 0 && i % 2 !== 0)) {
        outOfPlace = i;
      }
    }

    if (outOfPlace >= 0) {
      if (
        (arr[i] >= 0 && arr[outOfPlace] < 0) ||
        (arr[i] < 0 && arr[outOfPlace] >= 0)
      ) {
        rotateToRight(arr, outOfPlace, i);

        if (i - outOfPlace >= 2) outOfPlace += 2;
        else outOfPlace = -1;
      }
    }
  }

  return arr;
}

// move curr value to outOfPlace value
function rotateToRight(arr, outOfPlace, curr) {
  let temp = arr[curr];

  for (let i = curr; i > outOfPlace; i--) {
    arr[i] = arr[i - 1];
  }
  arr[outOfPlace] = temp;
}

console.log("Example-1: Output = ", reorderArr([1, 2, 3, -4, -1, 4]));
console.log(
  "Example-2: Output = ",
  reorderArr([-5, -2, 5, 2, 4, 7, 1, 8, 0, -8])
);
