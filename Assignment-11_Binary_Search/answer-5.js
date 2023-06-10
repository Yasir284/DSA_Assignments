{
  /* <aside>
💡 **Question 5**

Given two integer arrays `nums1` and `nums2`, return *an array of their intersection*. Each element in the result must be **unique** and you may return the result in **any order**.

**Example 1:**
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]


**Example 2:**
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.

</aside> */
}

let nums1 = [1, 2, 2, 1],
  nums2 = [2, 2];

function intersectArr(nums1, nums2) {
  let set = new Set(nums1);
  let intersection = [];

  for (let i = 0; i < nums2.length; i++) {
    if (set.has(nums2[i])) {
      intersection.push(nums2[i]);
      set.delete(nums2[i]);
    }
  }

  return intersection;
}
console.log(intersectArr(nums1, nums2));
