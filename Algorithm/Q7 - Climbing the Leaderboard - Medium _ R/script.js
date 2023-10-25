/// Version 1

// function climbingLeaderboard(ranked, player) {
//   ranked = ranked
//     .filter((el, index) => ranked.indexOf(el) === index)
//     .sort((a, b) => b - a);
//   console.log(ranked);
//   player = player.sort((a, b) => b - a);
//   console.log(player);
//   let finalScore = [];
//   player.forEach((element) => {
//     let position = null;

//     position = ranked.includes(element)
//       ? ranked.indexOf(element) + 1
//       : ranked.indexOf(
//           ranked.reduce(function (prev, curr) {
//             return Math.abs(curr - element) < Math.abs(prev - element)
//               ? curr
//               : prev;
//           })
//         ) + 1;
//     finalScore.push(position);
//   });
//   return finalScore;
// }

// version 2
function climbingLeaderboard(ranked, player) {
  ranked = [...new Set(ranked)];

  let result = [];

  player.forEach((player, pIndex) => {
    let flag = false;

    ranked.forEach((rank, rankIndex) => {
      if (flag) return;
      if (player >= rank) {
        flag = true;
        result[pIndex] = rankIndex + 1;
      }
    });

    if (!flag) {
      result[pIndex] = ranked.length + 1;
    }
  });
  return result;
}

let ranked = [100, 90, 90, 80, 75, 60];
let player = [50, 65, 77, 90, 102];

console.log(climbingLeaderboard(ranked, player));

/// version 3
// function climbingLeaderboard(ranked, player) {
//   ranked = [...new Set(ranked)];

//   let result = [];

//   // for (let index = 0; index < player.length; index++) {
//   player.forEach((element) => {
//     ranked.push(element);
//     const newScore = ranked.sort((a, b) => b - a);
//     const map = {};
//     newScore.reduce((rank, element) => {
//       if (!map[element]) {
//         map[element] = rank;
//         rank++;
//       }
//       return rank;
//     }, 1);
//     result.push(map[element]);
//   });
//   // }
//   return result;
// }

// let ranked = [100, 90, 90, 80, 75, 60];
// let player = [50, 65, 77, 90, 102];

// console.log(climbingLeaderboard(ranked, player));

// Ranked: [100 , 100 , 50 , 40 , 40 , 20 ,10 ] => [100, 50, 40, 20, 10] // nozoli
// Player: [ 5 , 25 , 50 , 120  ]    // sooodie
