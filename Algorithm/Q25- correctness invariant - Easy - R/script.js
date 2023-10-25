// https://www.hackerrank.com/challenges/correctness-invariant/problem

function insertionSort(ar) {
  for (i = 1; i < ar.length; i++) {
    var value = ar[i]
    var j = i - 1
    while (j > -1 && ar[j] > value) {
      ar[j + 1] = ar[j]
      j = j - 1
    }
    ar[j + 1] = value
  }
  return ar
}

var ar
//get input for ar
console.log(insertionSort([4, 1, 3, 5, 6, 2]))
//print ar
