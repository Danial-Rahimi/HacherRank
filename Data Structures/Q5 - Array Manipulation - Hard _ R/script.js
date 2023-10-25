//www.hackerrank.com/challenges/crush/problem/

// function arrayManipulation(n, queries) {
//   const scores = {};
//   let maximumScore = 0;

//   queries.forEach((locations) => {
//     for (let index = locations[0]; index < locations[1] + 1; index++) {
//       scores[index] = (scores[index] || 0) + locations[2];
//       maximumScore =
//         scores[index] > maximumScore ? scores[index] : maximumScore;
//     }
//   });

//   return maximumScore;
// }
// time complexity = O(n**2)
// error timeout :(

function arrayManipulation(n, queries) {
  const arrOfPoints = [];
  let maxValue = 0;
  let currentValue = 0;

  /// creat e new array with locating the start point ,
  // end point with value of each of them
  queries.forEach(([startPoint, endPoint, pointValue]) => {
    arrOfPoints[startPoint] = arrOfPoints[startPoint] || {
      start: 0,
      end: 0,
    };
    arrOfPoints[endPoint] = arrOfPoints[endPoint] || {
      start: 0,
      end: 0,
    };
    arrOfPoints[startPoint].start += pointValue;
    arrOfPoints[endPoint].end += pointValue;
  });

  // arrOfPoints[1]{start:3   , end: 0 }
  // arrOfPoints[5]{start:0   , end: 3 }

  // arrOfPoints[4]{start:7   , end: 0 }
  // arrOfPoints[8]{start:0   , end: 7 }

  arrOfPoints.forEach((point) => {
    if (point) {
      currentValue += point.start;
      maxValue = currentValue > maxValue ? currentValue : maxValue;
      currentValue -= point.end;
    }
  });
  return maxValue;
}

console.log(
  arrayManipulation(10, [
    [1, 2, 100],
    [2, 5, 100],
    [3, 4, 100],
  ])
);
