function compareTwoArr(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return;
  if (arr1.length > 100 || arr2.length > 100) return;

  return arr1.reduce(
    (acc, _, currentIndex) => {
      if (arr1[currentIndex] === arr2[currentIndex]) return acc;
      if (arr1[currentIndex] > arr2[currentIndex]) {
        acc[0] = acc[0] + 1;
        return acc;
      }
      if (arr1[currentIndex] < arr2[currentIndex]) {
        acc[1] = acc[1] + 1;
        return acc;
      }
    },
    [0, 0]
  );
}
const arr1 = [17, 28, 30];
const arr2 = [99, 16, 8];
console.log(compareTwoArr(arr1, arr2));
