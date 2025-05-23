export const PracticeJS = () => {
  const animals = ["dog", "cat", "panda", "koala", "wolf"];
  // Create a new array with animals whose name ends with "a"

  const animalsEndedA = animals.filter((animal) => animal.endsWith("a"));

  console.log(animalsEndedA);

  const scores = [67, 89, 94, 76, 82];
  // Use `some()` to check if there is any score higher than 90

  const isGreaterThan90 = scores.some((score) => score > 90);

  console.log(isGreaterThan90);
};
