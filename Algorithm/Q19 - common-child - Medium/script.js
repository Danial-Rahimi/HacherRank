// https://www.hackerrank.com/challenges/common-child/problem

function commonChild(word_1, word_2) {
  // const listOfLetterW1 = {}
  // const listOfLetterW2 = {}

  let word1 = [...word_1]
  let word2 = [...word_2]

  // let transformedW1, transformedW2

  word1.forEach((letter, position) => {
    if (!word2.includes(letter)) word1.splice(position, 1)
  })
  word2.forEach((letter, position) => {
    if (!word1.includes(letter)) word2.splice(position, 1)
  })

  const matchingTable = []
  for (let x = 0; x < word2.length + 1; x++)
    matchingTable.push(new Array(word1.length + 1).fill(0))

  console.log(matchingTable)
  for (let i = 1; i < word1.length + 1; i++) {
    for (let j = 1; j < word2.length + 1; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        matchingTable[i][j] = matchingTable[i - 1][j - 1] + 1
      } else {
        matchingTable[i][j] = Math.max(
          matchingTable[i - 1][j],
          matchingTable[i][j - 1]
        )
      }
    }
  }
  return matchingTable[word1.length][word2.length]

  // while (index1 < transformedWord1.length) {
  //   while (index2 < transformedWord2.length) {
  //     if (transformedWord1[index1] === transformedWord2[index2]) {
  //       console.log("matchs:", transformedWord1[index1])
  //       index2++
  //       index1++
  //     } else {
  //       console.log("not matches")
  //       index2++
  //     }
  //   }
  //   index1++
  // }
  // for (let w1Index = 0; w1Index < word1.length; w1Index++) {
  //   console.log("started letter:", word1[w1Index])
  //   for (let w2Index = 0; w2Index < transformedWord.length; w2Index++) {
  //     if (w2Index === 0) startedLetter = w1Index
  //     if (word1[w1Index] === transformedWord[w2Index]) {
  //       console.log("matches:", transformedWord[w2Index], w1Index, w2Index)
  //       transformedWord = transformedWord.slice(
  //         w2Index + 1,
  //         transformedWord.length
  //       )
  //       w1Index++
  //       matchPointer++
  //       // console.log(transformedWord, matchPointer)
  //     }
  //   }
  //   // if (startedLetter !== word1.length) {
  //   //   w1Index = startedLetter
  //   // }
  // }

  // console.log("--------------------------")
  // console.log(word1)
  // console.log(word2)
  // return biggestCommonChild

  // word2.forEach((letter, position) => {
  //   if (!word1.includes(letter))

  // })

  // for (const letter in listOfLetterW1) {
  //   if (listOfLetterW2[letter] === undefined) delete listOfLetterW1[letter]
  // }

  // for (const letter in listOfLetterW2) {
  //   if (listOfLetterW1[letter] === undefined) delete listOfLetterW2[letter]
  // }

  // console.log(listOfLetterW2)
}

// SHINCHAN =>       h ,     n ,     h , a
// NOHARAAA =>   n ,   , h , a ,   , a , a  , a

// console.log(commonChild("SHINCHAN", "NOHARAAA"))
console.log(
  commonChild(
    "WEWOUCUIDGCGTRMEZEPXZFEJWISRSBBSYXAYDFEJJDLEBVHHKS",
    "FDAGCXGKCTKWNECHMRXZWMLRYUCOCZHJRRJBOAJOQJZZVUYXIC"
  )
)
