function breakingRecords(scoresArray) {
  // https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem
  const pos = { MAX: 0, MIN: 1, MAX_BROKE_COUNT: 2, MIN_BROKE_COUNT: 3 }
  return scoresArray
    .reduce(
      (acc, current) => {
        if (current > acc[pos.MAX]) {
          acc[pos.MAX] = current
          acc[pos.MAX_BROKE_COUNT]++
        } else if (current < acc[pos.MIN]) {
          acc[pos.MIN] = current
          acc[pos.MIN_BROKE_COUNT]++
        }
        return acc
      },
      [scoresArray[0], scoresArray[0], 0, 0]
    )
    .slice(-2)
}

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]))
