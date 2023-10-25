//https://www.hackerrank.com/challenges/sock-merchant/problem?isFullScreen=true

function sockMerchant(length, ar) {
  const arrOfNum = [...ar]
  let pairs = 0
  arrOfNum.forEach((num, pos) => {
    if (pos !== arrOfNum.lastIndexOf(num) && num !== null) {
      pairs++
      arrOfNum[pos] = null
      arrOfNum[arrOfNum.lastIndexOf(num)] = null
    }
  })
  return pairs
}

sockMerchant(10, [10, 20, 20, 10, 10, 30, 50, 10, 20])
