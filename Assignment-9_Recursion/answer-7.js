{
  /* <aside>
💡 **Question 7**

Given a string S, the task is to write a program to print all permutations of a given string.

**Example 1:**

***Input:***

*S = “ABC”*

***Output:***

*“ABC”, “ACB”, “BAC”, “BCA”, “CBA”, “CAB”*

**Example 2:**

***Input:***

*S = “XY”*

***Output:***

*“XY”, “YX”*

</aside> */
}

function allPermutations(S) {
  let result = [];
  helper(S.split(""), 0, S.length - 1, result);
  return result;
}

function helper(sList, l, r, result) {
  if (l === r) {
    result.push(sList.join(""));
  } else {
    for (let i = l; i <= r; i++) {
      [sList[l], sList[i]] = [sList[i], sList[l]];
      helper(sList, l + 1, r, result);
      [sList[l], sList[i]] = [sList[i], sList[l]];
    }
  }
}
console.log(allPermutations("ABC"));
