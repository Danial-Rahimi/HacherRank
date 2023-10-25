function biggerIsGreater(word) {
  const lettersCount = word.length
  let arrOfWord = [...word]
  let isSorted = arrOfWord.slice(1, lettersCount).sort()
  let Sorted = arrOfWord.slice(1, lettersCount)
  console.log(isSorted, Sorted)
  console.log(isSorted.join() === Sorted.join())
}

biggerIsGreater("abcd")
