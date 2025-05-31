export const PracticeJS = () => {
  const frontendSkills = ["HTML", "CSS", "JavaScript"];
  const learning = ["JavaScript", "React", "Tailwind"];

  const newFrontendSkills = [...new Set(frontendSkills.concat(learning))];

  console.log(newFrontendSkills);
};
