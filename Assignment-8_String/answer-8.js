{
  /* <aside>
💡 **Question 8**

Given two strings s and goal, return true *if you can swap two letters in* s *so the result is equal to* goal*, otherwise, return* false*.*

Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at s[i] and s[j].

- For example, swapping at indices 0 and 2 in "abcd" results in "cbad".

**Example 1:**

**Input:** s = "ab", goal = "ba"

**Output:** true

**Explanation:** You can swap s[0] = 'a' and s[1] = 'b' to get "ba", which is equal to goal.

</aside> */
}

const s = "ab";
const goal = "ba";

function canBeEqualBySwap(s, goal) {
  if (s.length !== goal.length) {
    return false;
  }

  let diffCount = 0;
  let diffIndices = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) {
      diffCount++;
      diffIndices.push(i);
    }

    if (diffCount > 2) {
      return false;
    }
  }

  if (diffCount === 0) {
    return true;
  }

  if (diffCount === 2) {
    const [index1, index2] = diffIndices;
    if (s[index1] === goal[index2] && s[index2] === goal[index1]) {
      return true;
    } else {
      return false;
    }
  }

  return false;
}

console.log(canBeEqualBySwap(s, goal));
