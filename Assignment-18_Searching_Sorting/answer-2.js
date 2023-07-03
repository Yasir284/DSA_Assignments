{
  /* <aside>
💡 2. **Sort Colors**

Given an array `nums` with `n` objects colored red, white, or blue, sort them **[in-place](https://en.wikipedia.org/wiki/In-place_algorithm)** so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers `0`, `1`, and `2` to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

**Example 1:**

```
Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]

```

**Example 2:**

```
Input: nums = [2,0,1]
Output: [0,1,2]

```

**Constraints:**

- `n == nums.length`
- `1 <= n <= 300`
- `nums[i]` is either `0`, `1`, or `2`.
</aside> */
}

let nums = [2, 0, 2, 1, 1, 0];

function sortColors(arr) {
  let p0 = 0;
  let curr = 0;
  let p2 = arr.length - 1;

  while (curr < p2) {
    if (arr[curr] === 0) {
      [arr[p0], arr[curr]] = [arr[curr], arr[p0]];
      p0++;
      curr++;
    } else if (arr[curr] === 2) {
      [arr[p2], arr[curr]] = [arr[curr], arr[p2]];
      p2--;
    } else {
      curr++;
    }
  }

  return arr;
}

console.log(sortColors(nums));
