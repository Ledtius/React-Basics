export const PracticeJS = () => {
  const grades = [100, 90, 85, 80, 75];

  // Use destructuring to get the first two grades in variables
  // and the rest in a new array called `remainingGrades`

  const [gradeOne, gradeTwo] = grades;

  console.log(gradeOne, gradeTwo);

  const [, , ...remainingGrades] = grades;

  console.log(remainingGrades);
};
