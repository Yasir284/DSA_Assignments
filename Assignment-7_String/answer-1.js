{
  /* <aside>
💡 **Question 1**

Given two strings s and t, *determine if they are isomorphic*.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

**Example 1:**

**Input:** s = "egg", t = "add"

**Output:** true

</aside> */
}

function isIsomorphic(s, t) {
  if (s.length !== t.length) return false;

  let sMap = new Map();
  let tMap = new Map();

  for (let i = 0; i < s.length; i++) {
    let sChar = s[i];
    let tChar = t[i];

    if (
      (sMap.has(sChar) && sMap.get(sChar) !== tChar) ||
      (tMap.has(tChar) && tMap.get(tChar) !== sChar)
    )
      return false;

    sMap.set(sChar, tChar);
    tMap.set(tChar, sChar);
  }

  return true;
}
console.log(isIsomorphic("egg", "add"));
