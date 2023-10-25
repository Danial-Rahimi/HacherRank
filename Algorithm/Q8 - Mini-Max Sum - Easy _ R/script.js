function miniMaxSum(arr) {
  const [sum, lowest, biggest] = arr.reduce(
    (acc, current) => {
      // sum
      acc[0] += current;

      if (current > acc[2]) acc[2] = current;
      if (current < acc[1]) acc[1] = current;

      return acc;
    },
    [0, arr[0], arr[0]] // => [min Sum , lowest  , biggest Number in the arr ]
  );
  console.log(sum - biggest, sum - lowest);
}
miniMaxSum([1, 2, 3, 4, 5]);
