// https://www.hackerrank.com/challenges/candies/problem

function candies(length, arrOfCandies) {
  const candies = Array(length).fill(1)
  for (let pos = 0; pos < length - 1; pos++) {
    if (arrOfCandies[pos] < arrOfCandies[pos + 1])
      candies[pos + 1] = candies[pos] + 1
  }
  for (let pos = length - 1; -1 < pos; pos--) {
    if (arrOfCandies[pos] < arrOfCandies[pos - 1])
      candies[pos - 1] = Math.max(candies[pos] + 1, candies[pos - 1])
  }
  // console.log(candies)
  return candies.reduce((acc, num) => acc + num, 0)
}
console.log(candies(5, [4, 7, 8, 2, 1])) // => 1 ,2 ,1 ,2 ,1 , 2 ,3 ,4 ,2 ,1

// 2 4 2 6 1 7  8 9 2 1  => 1,2,1,2,1,2,3,4,2 ,1
//lastBig = 9 =>
// lastBig = 4 / pos+1

// function candies(length, arrOfCandies) {
//   const candies = Array(length).fill(1)
//   let lastBig
//   for (let pos = 0; pos < length - 1; pos++) {
//     if (
//       arrOfCandies[pos] > arrOfCandies[pos + 1] &&
//       lastBig !== arrOfCandies[pos]
//     ) {
//       candies[pos] = candies[pos + 1] + 1
//     }
//     if (arrOfCandies[pos] < arrOfCandies[pos + 1]) {
//       candies[pos + 1] = candies[pos] + 1
//       lastBig = arrOfCandies[pos + 1]
//     }
//   }
//   // console.log(candies)
//   console.log(candies.reduce((acc, num) => acc + num, 0))
// }
