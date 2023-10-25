///   https://www.hackerrank.com/challenges/2d-array/problem

let my2D_arr = [
  [-9, -9, -9, 1, 1, 1],
  [0, -9, 0, 4, 3, 2],
  [-9, -9, -9, 1, 2, 3],
  [0, 0, 8, 6, 6, 0],
  [0, 0, 0, -2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

////
// -9 -9 -9  1 1 1 => 3
//  0 -9  0  4 3 2  =>  9
// -9 -9 -9  1 2 3 => 15
//  0  0  8  6 6 0  => 21
//  0  0  0 -2 0 0
//  0  0  1  2 4 0

function hourglassSum(arr) {
  const flated = arr.flat();

  let hourGlassArr = [];
  let breakPoint = 3;
  let startIndex;
  for (
    let index = 0;
    index < 22;
    index === breakPoint ? ((index += 3), (breakPoint += 6)) : index++
  ) {
    startIndex = index;
    const sumPatern =
      flated[startIndex] +
      flated[startIndex + 1] +
      flated[startIndex + 2] +
      flated[startIndex + 7] +
      flated[startIndex + 12] +
      flated[startIndex + 13] +
      flated[startIndex + 14];

    hourGlassArr.push(sumPatern);
  }
  return Math.max(...hourGlassArr);
}

console.log(
  hourglassSum([
    [-1, 1, -1, 0, 0, 0], //  0 , 1 ,2 ,3
    [0, -1, 0, 0, 0, 0], //  3  , 4 . 5 . 10 . 15 , 16 ,17
    [-1, -1, -1, 0, 0, 0],
    [0, -9, 2, -4, -4, 0],
    [-7, 0, 0, -2, 0, 0],
    [0, 0, -1, -2, -4, 0],
  ])
);
