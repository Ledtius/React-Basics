export const PracticeJS = () => {
  const company = {
    name: "TechCorp",
    employees: [
      {
        name: "Alice",
        role: "Engineer",
        skills: ["HTML", "CSS"],
      },
      {
        name: "Bob",
        role: "Manager",
        skills: ["Communication", "Planning"],
      },
    ],
  };

  // 1. Add "JavaScript" to Alice's skills
  company["employees"][0]["skills"].push("JavaScript");

  console.log(company.employees[0].skills);

  // 2. Print Bob's second skill
  console.log(company.employees[1].skills[1]);
};
