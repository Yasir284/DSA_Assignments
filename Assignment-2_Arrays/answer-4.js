// Question 4
// You have a long flowerbed in which some of the plots are planted, and some are not.
// However, flowers cannot be planted in adjacent plots.
// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

// Example 1:
// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true
let flowerbed = [1, 0, 0, 0, 0],
  n = 1;
function flowers(flowerbed, n) {
  let newFlowers = 0;

  for (let i = 0; i < flowerbed.length; i++) {
    let left = i - 1;
    let right = i + 1;

    // console.log(i, flowerbed[i]);
    if (flowerbed[i] === 0) {
      if (left < 0) {
        if (flowerbed[right] === 0) {
          flowerbed[i] = 1;
          newFlowers += 1;
        }
      } else if (right >= flowerbed.length) {
        if (flowerbed[left] === 0) {
          flowerbed[i] = 1;
          newFlowers += 1;
        }
      } else {
        if (flowerbed[left] === 0 && flowerbed[right] === 0) {
          flowerbed[i] = 1;
          newFlowers += 1;
        }
      }
      //   console.log("n:", newFlowers);
      //   console.log(flowerbed);
    }

    if (newFlowers >= n) return true;
  }

  return false;
}
console.log(flowers(flowerbed, 2));
