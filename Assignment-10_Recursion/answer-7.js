{
  /* <aside>
💡 **Question 7**

Given a string **str**, the task is to print all the permutations of **str**. A **permutation** is an arrangement of all or part of a set of objects, with regard to the order of the arrangement. For instance, the words ‘bat’ and ‘tab’ represents two distinct permutation (or arrangements) of a similar three letter word.

**Examples:**

> Input: str = “cd”
> 
> 
> **Output:** cd dc
> 
> **Input:** str = “abb”
> 
> **Output:** abb abb bab bba bab bba
> 
</aside> */
}

function printPermutations(str, prefix, visited) {
  if (prefix.length === str.length) {
    console.log(prefix);
    return;
  }

  for (let i = 0; i < str.length; i++) {
    if (!visited.has(i)) {
      visited.add(i);
      printPermutations(str, prefix + str[i], visited);
      visited.delete(i);
    }
  }
}

let str1 = "cd";
printPermutations(str1, "", new Set());
