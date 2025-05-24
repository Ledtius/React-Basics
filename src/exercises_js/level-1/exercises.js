export const PracticeJS = () => {
  const animals = ["dog", "cat", "panda", "koala", "wolf"];

  // Create a new array with animals whose name ends with "a"

  const animalsEndedALetter = animals.filter((animal) => animal.endsWith("a"));

  console.log(animalsEndedALetter);
};
