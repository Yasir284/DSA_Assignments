{
  /* <aside>
💡 **Question 3**

****Given a set represented as a string, write a recursive code to print all subsets of it. The subsets can be printed in any order.

**Example 1:**

Input :  set = “abc”

Output : { “”, “a”, “b”, “c”, “ab”, “ac”, “bc”, “abc”}

**Example 2:**

Input : set = “abcd”

Output : { “”, “a” ,”ab” ,”abc” ,”abcd”, “abd” ,”ac” ,”acd”, “ad” ,”b”, “bc” ,”bcd” ,”bd” ,”c” ,”cd” ,”d” }

</aside> */
}

function generateSubsets(str, index, subset, subsets) {
  if (index === str.length) {
    subsets.push(subset);
    return;
  }

  generateSubsets(str, index + 1, subset + str[index], subsets);
  generateSubsets(str, index + 1, subset, subsets);
}

let subsets = [];
console.log(generateSubsets("abcd", 0, "", subsets));
console.log(subsets);
