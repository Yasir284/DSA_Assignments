{
  /* 
💡 **Question 1**

Given a string `s`, *find the first non-repeating character in it and return its index*. If it does not exist, return `-1`.

**Example 1:**

```
Input: s = "leetcode"
Output: 0

```

**Example 2:**

```
Input: s = "loveleetcode"
Output: 2

```

**Example 3:**

Input: s = "aabb"
Output: -1

 */
}

function nonRepeatingChar(str) {
  let queue = [];
  let map = new Map();

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    map.set(char, (map.get(char) || 0) + 1);

    if (map.get(char) == 1) {
      queue.push(char);
    } else if (map.get(char) > 1 && queue.includes(char)) {
      queue.splice(queue.indexOf(char), 1);
    }
  }

  for (let i = 0; i < str.length; i++) {
    if (str[i] === queue[0]) return i;
  }
}

console.log(nonRepeatingChar("leetcode"));
