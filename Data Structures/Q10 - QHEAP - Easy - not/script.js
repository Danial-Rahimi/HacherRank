//www.hackerrank.com/challenges/qheap1/problem

function processData(input) {
  //Enter your code here
  const arrOfStr = input.split("\n").filter((val) => val !== "")
  const heapsArr = []

  console.log(arrOfStr)
  arrOfStr.forEach((element) => {
    if (element[0] === "1") {
      const heapValue = element.split(" ")[1]
      heapsArr.push(heapValue)
    } else if (element[0] === "2") {
      const heapValue = element.split(" ")[1]
      const pos = heapsArr.indexOf(heapValue)
      heapsArr.splice(pos, 1)
    } else if (element[0] === "3") {
      console.log(Math.min(...heapsArr))
    }
  })

  // let index = 1
  // while (index < arrOfStr.length) {
  //   switch (arrOfStr[index]) {
  //     case "1":
  //       heapsArr.push(arrOfStr[index + 1])
  //       index += 2
  //       break
  //     case "2":
  //       let pos = heapsArr.indexOf(arrOfStr[index + 1])
  //       heapsArr.splice(pos, 1)
  //       index += 2
  //       break
  //     case "3":
  //       console.log(Math.min(...heapsArr))
  //       index++
  //       break

  //     default:
  //       index++
  //       break
  //   }
  // if (arrOfStr[index] === 1) {
  //   heapsArr.push(arrOfStr[index + 1])
  //   index += 2
  // } else if (arrOfStr[index] === 2) {
  // }
  // }
}
// 1 4         insert 4
// 1 9         insert 9
// 3           print minimum
// 2 4         delete 4
// 3
processData(`1 3
1 65
2 65
3
2 3
1 7
3
1 -1
3
2 -1
3
2 7
`)
