//www.hackerrank.com/challenges/maximizing-xor/problem

https: function maximizingXor(floor, cilling) {
  let biggestDistance = 0;
  for (let index = floor; index < cilling + 1; index++) {
    for (
      let innerIndexer = index + 1;
      innerIndexer < cilling + 1;
      innerIndexer++
    ) {
      console.log(index, innerIndexer);
      let temp = index ^ innerIndexer;

      if (temp >= biggestDistance) biggestDistance = temp;
    }
  }
  return biggestDistance;
}

maximizingXor(10, 15);
