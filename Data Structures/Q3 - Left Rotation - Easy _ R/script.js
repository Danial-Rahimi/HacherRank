//https://www.hackerrank.com/challenges/array-left-rotation/problem

function leftRotation(arr, degree) {
  return arr.slice(degree, arr.length).concat(arr.slice(0, degree));
}

console.log(leftRotation([1, 2, 3, 4, 5, 6], 3));
