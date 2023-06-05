{
  /* <aside>
💡 **Question 6**

Given two strings s and goal, return true *if and only if* s *can become* goal *after some number of **shifts** on* s.

A **shift** on s consists of moving the leftmost character of s to the rightmost position.

- For example, if s = "abcde", then it will be "bcdea" after one shift.

**Example 1:**

**Input:** s = "abcde", goal = "cdeab"

**Output:**

true

</aside> */
}

function shiftStr(s, goal) {
  if (s.length != goal.length) return false;
  let i = s.split("").findIndex((e) => e === goal[0]);
  let k = 0;

  for (let j = i; j < i + s.length; j++) {
    let char = s[Math.floor(j % s.length)];
    // console.log("char:", char, "goal:", goal[k]);
    if (char !== goal[k]) return false;
    k++;
  }

  return true;
}
console.log(shiftStr("abcde", "cdeab"));
