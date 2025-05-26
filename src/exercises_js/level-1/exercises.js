export const PracticeJS = () => {
  const users = [
    { name: "Alice", skills: ["js", "html"] },
    { name: "Bob", skills: ["css", "html"] },
    { name: "Carol", skills: ["js", "css"] },
  ];

  // Return an object like: { js: 2, html: 2, css: 2 }

  const allSeparateSkills = users.map((user) => user.skills).flat(users.length);

  console.log(allSeparateSkills);

  const skillGroup = allSeparateSkills.reduce((acc, skill) => {
    acc[skill] = (acc[skill] ?? 0) + 1;
    return acc;
  }, {});

  console.log(skillGroup);
};
