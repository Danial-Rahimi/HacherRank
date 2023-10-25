/// https://www.hackerrank.com/challenges/sparse-arrays/problem

function matchingStrings(stringList, queries) {
  const stringWithRepeats = {};
  const matchResult = [];
  stringList.forEach(
    (string) =>
      (stringWithRepeats[string] = (stringWithRepeats[string] || 0) + 1)
  );

  queries.forEach((element) => {
    matchResult.push(stringWithRepeats[element] || 0);
  });
  return matchResult;
}
console.log(matchingStrings(["ab", "ab", "gsde", "ab"], ["ab", "dc"]));
