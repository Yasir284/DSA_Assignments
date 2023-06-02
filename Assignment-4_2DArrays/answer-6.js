// 💡 **Question 6**
// Given an integer array nums sorted in **non-decreasing** order, return *an array of **the squares of each number** sorted in non-decreasing order*.

// **Example 1:**

// Input: nums = [-4,-1,0,3,10]

// Output: [0,1,9,16,100]

// **Explanation:** After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100]

let nums = [-4, -1, 0, 3, 10];
function squareArr(nums) {
  let left = 0;
  let right = nums.length - 1;
  let newArr = new Array(nums.length);

  for (let i = newArr.length - 1; i <= 0; i++) {
    let leftSquare = nums[left] * nums[left];
    let rightSquare = nums[right] * nums[right];

    if (rightSquare > leftSquare) {
      newArr[i] = rightSquare;
      right--;
    } else {
      newArr[i] = leftSquare;
      left++;
    }
  }

  return newArr;
}
console.log(squareArr(nums));
