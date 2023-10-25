function superDigit(digit, repeat) {
  // Check if the number is lower than 10
  if (digit < 10 && repeat === 1) return digit;

  // if it is greater than 9
  let convertedDigit = [...`${digit}`];
  let sum = convertedDigit.reduce((acc, elm) => acc + Number(elm), 0);

  sum *= repeat;

  return superDigit(sum, 1);
}
console.log(superDigit(148, 3));

// function sumOfDigits(number) {
//   let temp = BigInt(number);
//   let sum = BigInt(0);
//   while (temp > 0) {
//     console.log("temp % 10:", temp % BigInt(10));
//     sum += temp % BigInt(10);
//     console.log("the sum:", sum);
//     temp = temp / BigInt(10);
//     console.log("the number:", temp);
//   }

//   return sum;
// }

// function superDigit(digit, repeat) {
//   let temp = digit.toString().repeat(repeat);
//   console.log("first number:", temp);
//   temp = sumOfDigits(+temp);
//   if (temp < 10) {
//     return temp;
//   }
//   return superDigit(temp, 1);
// }
// console.log(superDigit(9875, 4));
