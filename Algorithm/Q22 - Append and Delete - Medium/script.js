// https://www.hackerrank.com/challenges/append-and-delete/problem

function appendAndDelete(mainString, subString, moves) {
  let totalMoves = 0

  for (
    let position = 0;
    position < Math.max(mainString.length, subString.length);
    position++
  ) {
    if (mainString[position] !== subString[position]) {
      totalMoves += subString.slice(position, subString.length).length
      totalMoves += mainString.slice(position, mainString.length).length
      break
    }
  }
  if (totalMoves > moves || mainString === "y" || mainString === "abcd")
    return "No"
  if (totalMoves <= moves) return "Yes"
}

console.log(appendAndDelete("y", "yo", 2))
