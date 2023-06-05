{
  /* <aside>
💡 **Question 2**

Given a string num which represents an integer, return true *if* num *is a **strobogrammatic number***.

A **strobogrammatic number** is a number that looks the same when rotated 180 degrees (looked at upside down).

**Example 1:**

**Input:** num = "69"

**Output:**

true

</aside> */
}

function isStrobogrammatic(num) {
  let strobogrammaticSet = new Set(["1", "6", "8", "9", "0"]);

  let pl = 0;
  let pr = num.length - 1;

  while (pl < pr) {
    let left = num[pl];
    let right = num[pr];

    // console.log("left:", left, "right:", right);

    if (!(strobogrammaticSet.has(left) && strobogrammaticSet.has(right))) {
      return false;
    }

    if (left !== right && (left || right) !== ("6" || "9")) return false;

    pl++;
    pr--;
  }

  return true;
}
console.log(isStrobogrammatic("69"));
