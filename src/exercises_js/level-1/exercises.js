export const PracticeJS = () => {
  const users = [
    { name: "Alice", skills: ["js", "html"] },
    { name: "Bob", skills: ["css", "html"] },
    { name: "Carol", skills: ["js", "css"] },
  ];

  // Return an object like: { js: 2, html: 2, css: 2 }
  const separateSkills = [];

  const counterOfSkills = users.reduce((acc, user, index, array) => {
    const { skills } = user;

    if (index <= array.length) separateSkills.push(skills);
    // console.log(separateSkills);
    if (separateSkills.length >= array.length) {
      const skillsInGroup = separateSkills.flat(separateSkills.length);
      console.log(skillsInGroup);

      /* Estoy viendo que fuera mas facil que lo fuera hecho con .map y .flat primero :/ */
    }

    return acc;
  }, {});

  console.log(counterOfSkills);
};
