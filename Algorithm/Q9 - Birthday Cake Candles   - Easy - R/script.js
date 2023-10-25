function birthdayCakeCandles(arr) {
  const maxCandle = Math.max(...arr);
  console.log(maxCandle);
  return arr.filter((item) => item === maxCandle).length;
  // return arr.reduce(
  //   (acc, current) => {
  //     if (current > acc[0]) {
  //       acc[0] = current;
  //       acc[1] = 1;
  //     } else if (current === acc[0]) {
  //       acc[1]++;
  //     }
  //     return acc;
  //   },
  //   [arr[0], 0] // currentAge , repeat
  // )[1];
}
console.log(birthdayCakeCandles([3, 2, 1, 3, 2, 3, 3, 3]));
