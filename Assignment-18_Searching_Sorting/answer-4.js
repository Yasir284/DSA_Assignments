{
  /* <aside>
💡 4. **Maximum Gap**

Given an integer array `nums`, return *the maximum difference between two successive elements in its sorted form*. If the array contains less than two elements, return `0`.

You must write an algorithm that runs in linear time and uses linear extra space.

**Example 1:**

```
Input: nums = [3,6,9,1]
Output: 3
Explanation: The sorted form of the array is [1,3,6,9], either (3,6) or (6,9) has the maximum difference 3.

```

**Example 2:**

```
Input: nums = [10]
Output: 0
Explanation: The array contains less than 2 elements, therefore return 0.

```

**Constraints:**

- `1 <= nums.length <= 10^5`
- `0 <= nums[i] <= 10^9`
</aside> */
}
function maximumGap(nums) {
  const n = nums.length;
  if (n < 2) {
    return 0;
  }

  let minNum = Math.min(...nums);
  let maxNum = Math.max(...nums);

  let minGap = Math.ceil((maxNum - minNum) / (n - 1));

  const bucketMin = new Array(n - 1).fill(Infinity);
  const bucketMax = new Array(n - 1).fill(-Infinity);

  for (let i = 0; i < n; i++) {
    if (nums[i] === minNum || nums[i] === maxNum) {
      continue;
    }
    let index = Math.floor((nums[i] - minNum) / minGap);
    bucketMin[index] = Math.min(bucketMin[index], nums[i]);
    bucketMax[index] = Math.max(bucketMax[index], nums[i]);
  }

  let maxGap = 0;
  let prevMax = minNum;
  for (let i = 0; i < n - 1; i++) {
    if (bucketMin[i] === Infinity && bucketMax[i] === -Infinity) {
      continue;
    }
    maxGap = Math.max(maxGap, bucketMin[i] - prevMax);
    prevMax = bucketMax[i];
  }
  maxGap = Math.max(maxGap, maxNum - prevMax);

  return maxGap;
}

console.log(maximumGap([3, 6, 9, 1])); // Output: 3
console.log(maximumGap([10])); // Output: 0
