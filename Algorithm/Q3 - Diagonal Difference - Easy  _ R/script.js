function absoluteDiagonals(matrix) {
  let mainSum = 0;
  let leadingSum = 0;

  matrix.forEach((row, rowIndex) => {
    row.forEach((number, numberIndex, array) => {
      if (rowIndex === numberIndex) mainSum += number;
      if (array.length - numberIndex - 1 === rowIndex) leadingSum += number;
    });
  });

  return Math.abs(mainSum - leadingSum);
}
let myArr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

console.log(absoluteDiagonals(myArr));
