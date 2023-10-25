function bigIntCalc(numsArray) {
  let sum = BigInt(0);
  numsArray.forEach((number) => {
    sum += BigInt(number);
  });

  return sum;
}

let myBigArr = [4, 4, 4, 4, 4];
console.log(bigIntCalc(myBigArr));
