export const PracticeJS = () => {
  const user = {
    id: 101,
    name: "Calet",
    location: "Barrancabermeja",
    skills: ["HTML", "CSS", "JS"],
  };

  const { id, name, ...info } = user;
  const newUser = { id, name, ...info, level: "beginner" };
  console.log(newUser);
};
