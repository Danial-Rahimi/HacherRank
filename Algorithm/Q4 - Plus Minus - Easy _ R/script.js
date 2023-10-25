function proportion_Minus_Plus_Zero_inArray(arr) {
  let [positives, negative, zeros] = [0, 0, 0];

  arr.forEach((element) => {
    if (element > 0) positives++;
    if (element < 0) negative++;
    if (element === 0) zeros++;
  });
  return console.log(
    (positives / arr.length).toFixed(6) +
      "\n" +
      (negative / arr.length).toFixed(6) +
      "\n" +
      (zeros / arr.length).toFixed(6)
  );
}
let arr = [1, 2, 3, -1, -2, -3, 0, 0];
let arrLength = arr.length;
proportion_Minus_Plus_Zero_inArray(arr);
