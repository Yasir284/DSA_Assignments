{
  /* <aside>
💡 2. **Count of Smaller Numbers After Self**

Given an integer array `nums`, return *an integer array* `counts` *where* `counts[i]` *is the number of smaller elements to the right of* `nums[i]`.

**Example 1:**

```
Input: nums = [5,2,6,1]
Output: [2,1,1,0]
Explanation:
To the right of 5 there are2 smaller elements (2 and 1).
To the right of 2 there is only1 smaller element (1).
To the right of 6 there is1 smaller element (1).
To the right of 1 there is0 smaller element.

```

**Example 2:**

```
Input: nums = [-1]
Output: [0]

```

**Example 3:**

```
Input: nums = [-1,-1]
Output: [0,0]

```

**Constraints:**

- `1 <= nums.length <= 100000`
- `-10000 <= nums[i] <= 10000`
</aside> */
}

function smallNumAfterSelf(nums) {
  let result = new Array(nums.length).fill(0);
  let stack = [];

  for (let i = nums.length - 1; i >= 0; i--) {
    while (stack.length > 0 && nums[i] <= stack[stack.length - 1]) {
      stack.pop();
    }
    result[i] = stack.length;
    stack.push(nums[i]);
  }

  return result;
}

console.log(smallNumAfterSelf([5, 2, 6, 1, 3]));
console.log(smallNumAfterSelf([-1]));
console.log(smallNumAfterSelf([-1, -1]));
