{
  /* <aside>
💡 1. **Merge k Sorted Lists**

You are given an array of `k` linked-lists `lists`, each linked-list is sorted in ascending order.

*Merge all the linked-lists into one sorted linked-list and return it.*

**Example 1:**

```
Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6

```

**Example 2:**

```
Input: lists = []
Output: []

```

**Example 3:**

```
Input: lists = [[]]
Output: []

```

**Constraints:**

- `k == lists.length`
- `0 <= k <= 10000`
- `0 <= lists[i].length <= 500`
- `-10000 <= lists[i][j] <= 10000`
- `lists[i]` is sorted in **ascending order**.
- The sum of `lists[i].length` will not exceed `10000`.
</aside> */
}

import LinkedList from "../LinkedList.js";

function mergeSortedList(lists) {
  if (lists.length === 0) return null;

  while (lists.length > 1) {
    let merged = [];
    for (let i = 0; i < lists.length; i += 2) {
      let mergedList = mergeTwoLists(lists[i], lists[i + 1]);
      merged.push(mergedList);
    }
    lists = merged;
  }

  return lists[0];
}

function mergeTwoLists(l1, l2) {
  let list = new LinkedList();
  list.add(0);
  let curr = list;

  while (l1 && l2) {
    if (l1.element <= l2.element) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }

  curr.next = l1 || l2;

  return list.next;
}

let lists = [];
let l1 = new LinkedList();
let l2 = new LinkedList();
let l3 = new LinkedList();
[1, 4, 5].forEach((e) => l1.add(e));
[1, 3, 4].forEach((e) => l2.add(e));
[2, 6].forEach((e) => l3.add(e));
lists.push(l1.head);
lists.push(l2.head);
lists.push(l3.head);
console.log(mergeSortedList(lists));
