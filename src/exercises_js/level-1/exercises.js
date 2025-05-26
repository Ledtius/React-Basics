export const PracticeJS = () => {
  const languages = [
    "JavaScript",
    "Python",
    "Java",
    "JavaScript",
    "Python",
    "C++",
  ];

  // 2. Create a Set from the array to remove duplicates.
  // 3. Convert the Set back to an array.

  const languagesSet = new Set(languages);
  const languagesNoRepeat2 = [...new Set(languages)];

  console.log(languagesNoRepeat2);

  const languagesNoRepeat = [...languagesSet];

  console.log(languagesNoRepeat);
};
