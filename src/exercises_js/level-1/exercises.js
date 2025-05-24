export const PracticeJS = () => {
  const team = [
    { name: "Emma", role: "Designer" },
    { name: "Liam", role: "Developer" },
    { name: "Olivia", role: "Project Manager" },
  ];

  // Create a new array with only the names

  const teamNames = team.map((member) => member.name);

  console.log(teamNames);
};
