{
  /* <aside>
💡 4. **Move all zeroes to end of array**

Given an array of random numbers, Push all the zero’s of a given array to the end of the array. For example, if the given arrays is {1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0}, it should be changed to {1, 9, 8, 4, 2, 7, 6, 0, 0, 0, 0}. The order of all other elements should be same. Expected time complexity is O(n) and extra space is O(1).

**Example:**
Input :  arr[] = {1, 2, 0, 4, 3, 0, 5, 0};
Output : arr[] = {1, 2, 4, 3, 5, 0, 0, 0};

Input : arr[]  = {1, 2, 0, 0, 0, 3, 6};
Output : arr[] = {1, 2, 3, 6, 0, 0, 0};
1,2,6,0,0,3,0
1,2,6,3,0,0,0
</aside> */
}

function moveZeroAtEnd(arr) {
  let curr = 0;
  let p0 = arr.length - 1;

  while (curr <= p0) {
    if (arr[p0] === 0) {
      p0--;
    }
    if (arr[curr] === 0) {
      [arr[curr], arr[p0]] = [arr[p0], arr[curr]];
      p0--;
    }
    curr++;
  }

  return arr;
}

console.log(moveZeroAtEnd([1, 2, 0, 4, 3, 0, 5, 0]));
console.log(moveZeroAtEnd([1, 2, 0, 0, 0, 3, 6]));
