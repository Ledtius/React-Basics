export const PracticeJS = () => {
  const employees = [
    { name: "Alice", salary: 3000 },
    { name: "Bob", salary: 2800 },
    { name: "Charlie", salary: 3500 },
    { name: "Diana", salary: 4000 },
  ];

  // ✅ Use reduce to calculate the total salary
  // ✅ Use object destructuring inside the reduce callback

  const totalSalary = employees.reduce((acc, employee) => {
    const { name, salary } = employee;

    return acc + salary;
  }, 0);

  console.log(totalSalary);
};
