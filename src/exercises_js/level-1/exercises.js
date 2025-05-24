export const PracticeJS = () => {
  const posts = [
    { id: 1, title: "Intro to JS", tags: ["js", "programming", "web"] },
    { id: 2, title: "React Basics", tags: ["react", "js", "web"] },
    { id: 3, title: "CSS Tricks", tags: ["css", "design"] },
  ];

  // ✅ Create a new array with all the unique tags (no duplicates)
  // Hint: combine flat() + Set

  const tags = [...new Set(posts.map((post) => post.tags).flat())];

  console.log(tags);
  //   const tags = posts.map((post) => post.tags).flat();

  //   const tagsNoneRepeat = tags.filter(
  //     (tagName, index, array) => index === array.indexOf(tagName)
  //   );
  //   console.log(tagsNoneRepeat);
};
