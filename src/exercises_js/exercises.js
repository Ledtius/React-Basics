export const PracticeJS = () => {
  const developers = [
    {
      name: "Juan",
      skills: ["HTML", "CSS", "JavaScript"],
    },
    {
      name: "Laura",
      skills: ["JavaScript", "React", "Tailwind"],
    },
  ];

  const allSkills = [
    ...new Set(developers.map(({ skills }) => skills).flat()),
  ].join("♥, ");

  console.log(`The developers domain: ${allSkills}`);
};
