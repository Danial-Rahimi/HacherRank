//https://www.hackerrank.com/challenges/dynamic-array/problem

function dynamicArray(countOfArrs, queries) {
  let lastAnswer = 0
  const resultArr = []
  const asnwersArr = []

  for (let i = 0; i < countOfArrs; i++) {
    resultArr.push([])
  }

  queries.forEach((innerArr) => {
    const idx = (innerArr[1] ^ lastAnswer) % countOfArrs
    if (innerArr[0] === 1) {
      resultArr[idx].push(innerArr[2])
    } else if (innerArr[0] === 2) {
      const length = resultArr[idx].length
      const mud = innerArr[2] % length
      lastAnswer = resultArr[idx][mud]
      asnwersArr.push(lastAnswer)
    }
  })
  return asnwersArr
}
dynamicArray(2, [
  [1, 0, 5],
  [1, 1, 7],
  [1, 0, 3],
  [2, 1, 0],
  [2, 1, 1],
])
