{
  /* <aside>
💡 **Question 7**

Given two strings s and t, return true *if they are equal when both are typed into empty text editors*. '#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

**Example 1:**

**Input:** s = "ab#c", t = "ad#c"

**Output:** true

**Explanation:**

Both s and t become "ac".

</aside> */
}
let s = "ab#c",
  t = "ad#c";
// s = "aad#c";

// ================== Approach 2 ======================
function makeString(str) {
  let arr = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== "#") {
      arr.push(str[i]);
    } else if (arr.length > 0) {
      arr.pop();
    }
  }

  return arr.join("");
}

function isEqual(s, t) {
  let strS = makeString(s);
  let strT = makeString(t);

  return strS === strT;
}

// ================== Approach 1 ======================
// function isEqual(s, t) {
//   let newS = "";
//   let newT = "";

//   let ps = s.length - 1;
//   let pt = t.length - 1;
//   let sBackspace = 0;
//   let tBackspace = 0;

//   while (0 <= ps || 0 <= pt) {
//     if (s[ps]) {
//       if (s[ps] === "#") {
//         sBackspace++;
//       } else if (s[ps] !== "#" && sBackspace > 0) {
//         sBackspace--;
//       } else {
//         newS = s[ps] + newS;
//       }
//     }

//     if (t[pt]) {
//       if (t[pt] === "#") {
//         tBackspace++;
//       } else if (t[pt] !== "#" && tBackspace > 0) {
//         tBackspace--;
//       } else {
//         newT = t[pt] + newT;
//       }
//     }

//     ps--;
//     pt--;
//   }

//   return newS == newT;
// }
console.log(isEqual(s, t));
