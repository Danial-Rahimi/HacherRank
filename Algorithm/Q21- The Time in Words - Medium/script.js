// https://www.hackerrank.com/challenges/the-time-in-words/problem

function timeInWords(hour, min) {
  const numberInWord = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    21: "twenty one",
    22: "twenty two",
    23: "twenty three",
    24: "twenty four",
    25: "twenty five",
    26: "twenty six",
    27: "twenty seven",
    28: "twenty eight",
    29: "twenty nine",
    30: "thirty",
    31: "thirty one",
    32: "thirty two",
    33: "thirty three",
    34: "thirty four",
    35: "twenty",
    36: "twenty",
    37: "twenty",
    38: "twenty",
    39: "twenty",
    40: "forty",
  }
  if (min === 0) {
    return `${numberInWord[hour]} o' clock`
  } else if (min === 1) {
    return `one minute past ${numberInWord[hour]}`
  } else if (min === 15) {
    return `quarter past ${numberInWord[hour]}`
  } else if (min === 30) {
    return `half past ${numberInWord[hour]}`
  } else if (min === 45) {
    return `quarter to ${numberInWord[hour + 1]}`
  } else if (min < 15 || min < 30) {
    return `${numberInWord[min]} minutes past ${numberInWord[hour]}`
  } else if (min > 30) {
    return `${numberInWord[60 - min]} minutes to ${numberInWord[hour + 1]}`
  }
}
console.log(timeInWords(7, 29))
