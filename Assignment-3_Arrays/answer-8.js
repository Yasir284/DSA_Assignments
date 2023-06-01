// Question 8
// Given an array of meeting time intervals where intervals[i] = [starti, endi],
// determine if a person could attend all meetings.

// Example 1:
// Input: intervals = [[0,30],[5,10],[15,20]]
// Output: false

let intervals = [
  [0, 30],
  [30, 50],
  [50, 60],
];
intervals = [
  [0, 30],
  [5, 10],
  [15, 20],
];
function canAttendAll(intervals) {
  for (let i = 0; i < intervals.length - 1; i++) {
    if (intervals[i][1] > intervals[i + 1][0]) return false;
  }
  return true;
}
console.log(canAttendAll(intervals));
