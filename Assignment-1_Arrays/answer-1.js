// 💡 **Q1.** Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// **Example:**
// Input: nums = [2,7,11,15], target = 9
// Output0 [0,1]

// **Explanation:** Because nums[0] + nums[1] == 9, we return [0, 1]

// Algorithm:
// 1. Create a Map() with value and its index
// 2. Now, target = value1 + value2. So, value2 = target-value1
// 3. if Map has value2 then return [index of value1, index of value2]
// 4. Else set map with value1 and its index.

function sumTwo(arr, target) {
  let map = new Map();

  for (let i = 0; i < arr.length; i++) {
    let value1 = arr[i];
    let value2 = target - value1;

    if (map.has(value2)) {
      return [map.get(value2), i];
    }

    map.set(value1, i);
    console.log(map);
  }
}
console.log(sumTwo([2, 7, 11, 15], 9));
