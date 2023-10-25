// https://www.hackerrank.com/challenges/apple-and-orange/problem

function countApplesAndOranges(
  houseStart,
  houseEnd,
  appleTreeLocation,
  orangeTreeLocation,
  applesArr,
  orangesArr
) {
  let applesOnHouse = 0;
  let orangesOnHouse = 0;
  applesArr.forEach((loc) => {
    loc + appleTreeLocation >= houseStart && loc + appleTreeLocation <= houseEnd
      ? applesOnHouse++
      : applesOnHouse;
  });
  orangesArr.forEach((loc) => {
    loc + orangeTreeLocation >= houseStart &&
    loc + orangeTreeLocation <= houseEnd
      ? orangesOnHouse++
      : orangesOnHouse;
  });

  console.log(applesOnHouse);
  console.log(orangesOnHouse);
}
