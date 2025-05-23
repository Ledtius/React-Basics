export const PracticeJS = () => {
  const user = {
    name: "Sophie",
    city: "Paris",
    age: 32,
  };

  // Clone the user and add a new property: "isAdmin: true"

  // Don't modify the original object

  const userClone = { ...user, ["isAdmin"]: true };

  console.log(userClone);

  const grades = [100, 90, 85, 80, 75];

  // Use destructuring to get the first two grades in variables,
  const [firstGrade, secondGrade] = grades;

  console.log(firstGrade, secondGrade);

  // and the rest in a new array called `remainingGrades`

  const [fiG, seG, ...remainingGrades] = grades;

  console.log(remainingGrades);
};
