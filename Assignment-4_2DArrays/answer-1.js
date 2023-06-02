{
  /* 
💡 **Question 1**
Given three integer arrays arr1, arr2 and arr3 **sorted** in **strictly increasing** order, return a sorted array of **only** the integers that appeared in **all** three arrays.

**Example 1:**

Input: arr1 = [1,2,3,4,5], arr2 = [1,2,5,7,9], arr3 = [1,3,4,5,8]

Output: [1,5] 

**Explanation:** Only 1 and 5 appeared in the three arrays. */
}

let arr1 = [1, 2, 3, 4, 5],
  arr2 = [1, 2, 5, 7, 9],
  arr3 = [1, 3, 4, 5, 8];

// Using binary search approach
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] == target) return true;

    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
}

function findCommon(arr1, arr2, arr3) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    if (
      binarySearch(arr2, arr1[i]) &&
      binarySearch(arr3, arr1[i]) &&
      !result.includes(arr1[i])
    ) {
      result.push(arr1[i]);
    }
  }

  return result;
}
console.log(findCommon(arr1, arr2, arr3));
