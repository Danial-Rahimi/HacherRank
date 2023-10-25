function birthday(arr, day, month) {
  // https://www.hackerrank.com/challenges/the-birthday-bar/problem
  const chocolateArr = [...arr]
  let result = 0
  // const calcSum = (arr) => arr.reduce((acc, cur) => acc + cur, 0)

  // chocolateArr.forEach((_, chocIndex) => {
  //   let selectedPart = chocolateArr.slice(chocIndex, chocIndex + month)
  //   if (calcSum(selectedPart) === day) result++
  // })
  chocolateArr.forEach((_, pos) => {
    let sum = 0
    chocolateArr.slice(pos, pos + month).forEach((element) => {
      sum += element
    })
    if (sum === day) result++
  })
  return result
}

console.log(birthday([1, 2, 1, 3, 2], 3, 2))
