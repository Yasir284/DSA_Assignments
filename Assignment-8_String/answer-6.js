{
  /* <aside>
💡 **Question 6**

Given two strings s and p, return *an array of all the start indices of* p*'s anagrams in* s. You may return the answer in **any order**.

An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

**Example 1:**

**Input:** s = "cbaebabacd", p = "abc"

**Output:** [0,6]

**Explanation:**

The substring with start index = 0 is "cba", which is an anagram of "abc".

The substring with start index = 6 is "bac", which is an anagram of "abc".

</aside> */
}

let s = "cbaebabacd",
  p = "abc";

function findAnagrams(s, p) {
  const result = [];
  const pFreq = Array(26).fill(0);
  const sFreq = Array(26).fill(0);

  for (let i = 0; i < p.length; i++) {
    pFreq[p.charCodeAt(i) - 97]++;
  }

  let left = 0;
  let right = 0;

  while (right < s.length) {
    sFreq[s.charCodeAt(right) - 97]++;

    if (right - left + 1 > p.length) {
      sFreq[s.charCodeAt(left) - 97]--;
      left++;
    }

    if (compareFrequencyArrays(pFreq, sFreq)) {
      result.push(left);
    }

    right++;
  }

  return result;
}

function compareFrequencyArrays(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

console.log(findAnagrams(s, p));
