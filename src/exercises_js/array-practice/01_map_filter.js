export const PracticeJS = () => {
  const company = {
    name: "InnovaTech",
    employees: [
      { name: "Alice", skills: ["HTML", "CSS"] },
      { name: "Bob", skills: ["Python", "Django"] },
    ],
  };

  // 1. Add "JavaScript" to Alice's skills

  company["employees"][0]["skills"].push("JavaScript");

  //or
  // company.employees[0].skills.push("JavaScript");

  console.log(company["employees"][0]);
  // 2. Print Bob's second skill

  console.log(company["employees"][1]["skills"][1]);

  const team = [
    { name: "Emma", role: "Designer" },
    { name: "Liam", role: "Developer" },
    { name: "Olivia", role: "Project Manager" },
  ];

  // Create a new array with only the names

  const membersTeamNames = team.map((member) => member.name);

  console.log(membersTeamNames);
};
