// https://www.hackerrank.com/challenges/migratory-birds/problem

function migratoryBirds(arrOfNum) {
  // Write your code here
  const numRepeats = {}
  let mostFrequent = 0 // {2: 5 }
  let frequency = 0

  arrOfNum.forEach((num) => {
    numRepeats[num] = (numRepeats[num] || 0) + 1
  })

  for (const key in numRepeats) {
    if (numRepeats[key] > frequency) {
      frequency = numRepeats[key]
      mostFrequent = key
    }

    if (numRepeats[key] === frequency && mostFrequent > key) {
      mostFrequent = key
    }
  }
  return mostFrequent
}
migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, , 1, 3, 4])
