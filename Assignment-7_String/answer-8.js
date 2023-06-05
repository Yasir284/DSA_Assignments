{
  /* <aside>
💡 **Question 8**

You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

**Example 1:**

![Screenshot 2023-05-29 010117.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/012b0a97-4e4b-49b6-bc95-0531fc712978/Screenshot_2023-05-29_010117.png)

**Input:** coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]

**Output:** true

</aside> */
}

let coordinates = [
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 7],
];

function isStraightLine(coordinates) {
  let diff = [
    coordinates[1][0] - coordinates[0][0],
    coordinates[1][1] - coordinates[0][1],
  ];

  for (let i = 1; i < coordinates.length; i++) {
    let xDiff = coordinates[i][0] - coordinates[i - 1][0];
    let yDiff = coordinates[i][1] - coordinates[i - 1][1];
    if (xDiff != diff[0] || yDiff != diff[1]) return false;
  }

  return true;
}
console.log(isStraightLine(coordinates));
