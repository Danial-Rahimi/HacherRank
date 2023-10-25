function marcsCakewalk(calorie) {
  const sortedCalories = [...calorie].sort((a, b) => b - a);
  return sortedCalories.reduce((acc, current, index) => {
    acc = acc + current * 2 ** index;
    return acc;
  }, 0);
}

console.log(marcsCakewalk([7, 4, 9, 6]));
