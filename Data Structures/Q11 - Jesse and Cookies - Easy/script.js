// function cookies(scaleValue, arr) {
//   // create new same array of Numbers
//   const arryOfNum = arr
//   let totalOperations = 0

//   const sortArr = (arr) => arr.sort((a, b) => a - b)

//   const operations = (arr, newNum) => {
//     arr.splice(0, 2)
//     arr.push(newNum)
//     sortArr(arr)
//     // console.log(arr, "1")
//   }

//   // sort
//   sortArr(arryOfNum)
//   while (true) {
//     if (arryOfNum[0] >= scaleValue) {
//       return totalOperations
//     }
//     if (arryOfNum[0] < scaleValue) {
//       let newIndex = arryOfNum[0] + arryOfNum[1] * 2
//       operations(arryOfNum, newIndex)
//       totalOperations++
//     } else return -1
//     // console.log("first", arryOfNum[0])
//     // console.log("sec", arryOfNum[1])
//     // console.log("new index", newIndex)
//   }
//   // sortArr(arryOfNum)
//   // while (arryOfNum[0] < scaleValue || arryOfNum[1] < scaleValue) {
//   //   // console.log("first", arryOfNum[0])
//   //   // console.log("sec", arryOfNum[1])
//   //   let newIndex = arryOfNum[0] + arryOfNum[1] * 2
//   //   // console.log("new index", newIndex)
//   //   operations(arryOfNum, newIndex)
//   //   totalOperations++
//   // }
//   // console.log(arryOfNum)
//   // console.log(arryOfNum[0] < scaleValue && arryOfNum[1] < scaleValue)
// }

function cookies(scaleValue, arr) {
  const smaller = arr.filter((val) => val < scaleValue)
  let totalOperations = 0
  if (smaller.length < 1) return -1
  while (true) {
    smaller.sort((a, b) => a - b)
    if (smaller[0] >= scaleValue) {
      return totalOperations
    }
    if (smaller[0] < scaleValue) {
      let newIndex = smaller[0] + smaller[1] * 2
      smaller.splice(0, 2)
      smaller.push(newIndex)
      totalOperations++
    }
  }
}

console.log(cookies(7, [1, 2, 2, 2, 2, 12]))
