function equalStacks(stack1, stack2, stack3) {
  // Write your code here
  let [stackHeight1, stackHeight2, stackHeight3] = [0, 0, 0];
  let [currentPointer1, currentPointer2, currentPointer3] = [0, 0, 0];

  ///

  stack1.forEach((element) => (stackHeight1 += element));
  stack2.forEach((element) => (stackHeight2 += element));
  stack3.forEach((element) => (stackHeight3 += element));

  while (stackHeight1 > 0 || stackHeight2 > 0 || stackHeight3 > 0) {
    if (Math.max(stackHeight1, stackHeight2, stackHeight3) === stackHeight1) {
      stackHeight1 -= stack1[currentPointer1];
      currentPointer1++;
    }
    if (Math.max(stackHeight1, stackHeight2, stackHeight3) === stackHeight2) {
      stackHeight2 -= stack2[currentPointer2];
      currentPointer2++;
    }
    if (Math.max(stackHeight1, stackHeight2, stackHeight3) === stackHeight3) {
      stackHeight3 -= stack3[currentPointer3];
      currentPointer3++;
    }
    if (stackHeight3 === stackHeight2 && stackHeight3 === stackHeight1) {
      return stackHeight3;
    }
  }
}

console.log(equalStacks([3, 2, 1, 1, 1], [4, 3, 2], [1, 1, 4, 1]));
