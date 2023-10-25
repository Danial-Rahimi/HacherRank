function minimumNumber(countOfLetter, str) {
  // minimum requierd number to convert a correct password
  let minReqdNum = 0;
  const minLength = 6;

  const digits = /\d/;
  const lowerCase = /[a-z]/;
  const upperCase = /[A-Z]/;
  const specialSymbol = /[^A-Za-z0-9]/;

  if (!digits.test(str)) minReqdNum++;

  if (!lowerCase.test(str)) minReqdNum++;

  if (!upperCase.test(str)) minReqdNum++;

  if (!specialSymbol.test(str)) minReqdNum++;

  if (countOfLetter + minReqdNum < minLength)
    minReqdNum += minLength - (countOfLetter + minReqdNum);

  return minReqdNum;
}

// console.log(minimumNumber(11, "#HackerRank")); // true
console.log(minimumNumber(3, "Ab1")); // false
