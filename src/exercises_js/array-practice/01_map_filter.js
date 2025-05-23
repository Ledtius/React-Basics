export const PracticeJS = () => {
  const students = [
    { name: "Daniel", grade: 14 },
    { name: "Isabella", grade: 19 },
    { name: "Tom", grade: 11 },
    { name: "Sophia", grade: 17 },
  ];

  /*
1. Create a new array with only the names of the students.
2. Filter only those who passed (grade >= 14).
3. Use `reduce()` to calculate the average grade of the class.
4. Use `some()` to check if any student got more than 18.
*/

  const studentsNames = students.map((student) => student.name);

  console.log(studentsNames);

  const studentsPassed = students.filter((student) => student.grade >= 14);

  console.log(studentsPassed);

  const studentsAverage =
    students.reduce((acc, student) => acc + student.grade, 0) / students.length;

  console.log(studentsAverage);

  const greaterEighteen = students.some((student) => student.grade > 18);

  console.log(greaterEighteen);
};
