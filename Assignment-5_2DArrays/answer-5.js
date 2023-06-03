// 💡 **Question 5**

// Given two integer arrays arr1 and arr2, and the integer d, *return the distance value between the two arrays*.

// The distance value is defined as the number of elements arr1[i] such that there is not any element arr2[j] where |arr1[i]-arr2[j]| <= d.

// **Example 1:**

// **Input:** arr1 = [4,5,8], arr2 = [10,9,1,8], d = 2

// **Output:** 2

// **Explanation:**

// For arr1[0]=4 we have:

// |4-10|=6 > d=2

// |4-9|=5 > d=2

// |4-1|=3 > d=2

// |4-8|=4 > d=2

// For arr1[1]=5 we have:

// |5-10|=5 > d=2

// |5-9|=4 > d=2

// |5-1|=4 > d=2

// |5-8|=3 > d=2

// For arr1[2]=8 we have:

// **|8-10|=2 <= d=2**

// **|8-9|=1 <= d=2**

// |8-1|=7 > d=2

// **|8-8|=0 <= d=2**

let arr1 = [4, 5, 8],
  arr2 = [6, 7, 10, 12],
  d = 2;

function distanceValues(arr1, arr2, d) {
  let count = 0;
  arr2.sort((a, b) => a - b);

  for (let i = 0; i < arr1.length; i++) {
    let target = arr1[i];

    let left = 0;
    let right = arr2.length - 1;

    // to find the number which is less than or equal to the target
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      let diff = Math.abs(arr2[mid] - target);

      //   console.log("mid value:", arr2[mid], "diff:", diff);

      if (diff > d) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }

      if (left < arr2.length && Math.abs(arr2[left] - target) <= d) count++;

      //   console.log("count:", count);
    }
  }
  return count;
}
console.log(distanceValues(arr1, arr2, d));
