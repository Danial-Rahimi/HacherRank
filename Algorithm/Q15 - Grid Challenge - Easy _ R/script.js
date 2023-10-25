//www.hackerrank.com/challenges/grid-challenge/

https: function gridChallenge(arr) {
  const arrDimention = arr.length;
  arr.forEach(
    (eachString, stringIndex) => (arr[stringIndex] = [...eachString].sort())
  );

  arr = arr.flat();

  //fghij    olmkn   trpqs   xywuv;

  for (let index = 0; index < arr.length - arrDimention; index++)
    if (arr[index] > arr[index + arrDimention]) {
      return "NO";
    }

  return "YES";
}

console.log(gridChallenge(["ebacd", "fghij", "blmkn", "trpqs", "xywuv"]));
