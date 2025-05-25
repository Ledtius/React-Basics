export const PracticeJS = () => {
  const techStack = ["js", "html", "js", "css", "js", "html", "css"];

  // ✅ Return an object that counts how many times each technology appears
  // ✅ Result should look like: { js: 3, html: 2, css: 2 }

  const techCounter = techStack.reduce((acc, tech) => {
    acc[tech] = acc[tech] ? acc[tech] + 1 : 1;
    // I received help in this exercise
    return acc;
  }, {});
};
