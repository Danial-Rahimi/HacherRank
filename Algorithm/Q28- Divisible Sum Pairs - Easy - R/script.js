//https://www.hackerrank.com/challenges/divisible-sum-pairs/problem

function divisibleSumPairs(countOfNum, divisor, arrOfNum) {
  // Write your code here
  let result = 0
  arrOfNum.forEach((element, pos) => {
    for (let index = pos + 1; index < countOfNum; index++) {
      if ((element + arrOfNum[index]) % divisor === 0) result++
    }
  })
  return result
}

console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]))
