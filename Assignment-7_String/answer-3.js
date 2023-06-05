{
  /* <aside>
💡 **Question 3**

Given two non-negative integers, num1 and num2 represented as string, return *the sum of* num1 *and* num2 *as a string*.

You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.

**Example 1:**

**Input:** num1 = "11", num2 = "123"

**Output:**

"134"

</aside> */
}

// ================================ Approach-2 =================================
function sumOfTwoStr(num1, num2) {
  let n1 = num1.length - 1;
  let n2 = num2.length - 1;
  let carry = 0;
  let ans = "";

  while (n1 >= 0 || n2 >= 0 || carry > 0) {
    let digit1 = Number(num1[n1]) || 0;
    let digit2 = Number(num2[n2]) || 0;

    let sum = digit1 + digit2 + carry;

    let digit = sum % 10;
    carry = Math.floor(sum / 10);
    console.log("digit:", digit, "sum:", sum);
    ans = digit + ans;

    n1--;
    n2--;
  }

  return ans;
}

// ================================ Approach-1 =================================
// function sumOfTwoStr(num1, num2) {
//   // console.log((Number(num1[1]) + Number(num2[2])));

//   let n1 = num1.length - 1;
//   let n2 = num2.length - 1;
//   let ans = 0;
//   let tens = 0;
//   while (n1 >= 0 || n2 >= 0) {
//     console.log("num1:", num1[n1], "num2:", num2[n2]);
//     ans +=
//       (num1[n1] || 0) * Math.pow(10, tens) +
//       (num2[n2] || 0) * Math.pow(10, tens);
//     tens++;
//     n1--;
//     n2--;
//   }

//   return ans.toString();
// }
console.log(sumOfTwoStr("99", "111"));
