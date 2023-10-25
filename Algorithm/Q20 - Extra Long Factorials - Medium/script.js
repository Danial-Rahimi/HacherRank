// https://www.hackerrank.com/challenges/extra-long-factorials/problem

function extraLongFactorials(number) {
  let factorielResult = BigInt(1)
  for (let num = BigInt(number); 0 < num; num--) {
    factorielResult *= num
  }
  return String(factorielResult)
}
console.log(extraLongFactorials(25))
