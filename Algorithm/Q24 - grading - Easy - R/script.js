//https://www.hackerrank.com/challenges/grading/problem

function gradingStudents(grades) {
  const finalGrades = [...grades]
  finalGrades.forEach((grade, pos) => {
    if (grade < 38) return
    const toNext5Multiple = (100 - grade) % 5
    if (toNext5Multiple < 3) finalGrades[pos] = grade + toNext5Multiple
  })
  return finalGrades
}
console.log(gradingStudents([98, 73, 67, 38, 33]))
