// https://www.hackerrank.com/challenges/arrays-ds/problem

function doReverseArray(arr) {
  let arrowIndex = 0;
  let arrLength = arr.length;

  while (arrowIndex < (arrLength - 1) / 2) {
    [arr[arrowIndex], arr[arrLength - 1 - arrowIndex]] = [
      arr[arrLength - 1 - arrowIndex],
      arr[arrowIndex],
    ];
    arrowIndex++;
  }

  return arr;
}

console.log(doReverseArray([1, 2, 3, 4, 5, 6]));
