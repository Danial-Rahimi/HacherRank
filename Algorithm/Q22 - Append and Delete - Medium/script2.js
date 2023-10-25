function appendAndDelete(s, t, k) {
  let sArr = s.split("")
  let tArr = t.split("")
  let count = 0
  for (let i = 0; i === count && i < s.length; i++) {
    if (sArr[i] === tArr[i]) {
      count++
    }
  }
  console.log(count)

  let tMinusCount = t.length - count
  // console.log(tMinusCount)
  let sMinusCount = s.length - count
  // console.log(sMinusCount)

  let STK = k - (tMinusCount + sMinusCount)
  // console.log(tMinusCount + sMinusCount < k)
  // console.log(t.length + s.length > k)
  // console.log(STK % 2 !== 0)
  if (
    tMinusCount + sMinusCount < k &&
    t.length + s.length > k &&
    STK % 2 !== 0
  ) {
    return "No"
  } else if (tMinusCount + sMinusCount <= k) {
    return "Yes"
  } else {
    return "No"
  }
}
console.log(appendAndDelete("abcd", "abcdert", 10))
