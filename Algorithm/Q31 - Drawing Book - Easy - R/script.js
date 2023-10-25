// https://www.hackerrank.com/challenges/drawing-book/problem

function pageCount(tottalPages, target) {
  if (
    tottalPages == target ||
    target == 1 ||
    (tottalPages % 2 === 1 && target + 1 === tottalPages)
  )
    return 0

  const movesFromFirst = Math.floor(target / 2)
  const movesFromLast = Math.floor(tottalPages / 2 - movesFromFirst)

  return Math.min(movesFromFirst, movesFromLast)
}
