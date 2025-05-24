export const PracticeJS = () => {
  const users = [
    { name: "Daniel", skills: ["HTML", "CSS", "React"] },
    { name: "Sophia", skills: ["Python", "Django"] },
    { name: "Liam", skills: ["JavaScript", "React", "Node.js"] },
  ];

  // ✅ Filter users who have "React" in their skills
  // ✅ Return a new array with objects: { name, totalSkills }

  const reactUsers = users.filter((user) => user.skills.includes("React"));

  console.log(reactUsers);
};
