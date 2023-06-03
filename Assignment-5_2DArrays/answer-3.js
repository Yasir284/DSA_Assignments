// 💡 **Question 3**

// Given an integer array nums sorted in **non-decreasing** order, return *an array of **the squares of each number** sorted in non-decreasing order*.

// **Example 1:**

// **Input:** nums = [-4,-1,0,3,10]

// **Output:** [0,1,9,16,100]

// **Explanation:** After squaring, the array becomes [16,1,0,9,100].

// After sorting, it becomes [0,1,9,16,100].

let nums = [-4, -1, 0, 3, 10];

function squareAndSort(nums) {
  let arr = Array.from({ length: nums.length });

  let left = 0;
  let right = nums.length - 1;
  let i = right;

  while (left <= right) {
    let leftSquare = nums[left] * nums[left];
    let rightSquare = nums[right] * nums[right];

    if (leftSquare > rightSquare) {
      arr[i] = leftSquare;
      left++;
    } else {
      arr[i] = rightSquare;
      right--;
    }

    i--;
  }

  return arr;
}

console.log(squareAndSort(nums));
