function twoStacks(maxSum, firstStack, secondStack) {
  // Write your code here
  let currentSum = 0;
  let currentMoves = 0;

  firstStack.forEach((stack, stackIndex) => {
    currentSum += stack;
    if (currentSum < maxSum) {
      currentMoves++;
      currentSum += secondStack[stackIndex];
      if (currentSum < maxSum) currentMoves++;
    } else return currentMoves;
  });
  return currentMoves;
}
