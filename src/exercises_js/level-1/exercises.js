export const PracticeJS = () => {
  const numbers = [10, 20, 30, 40, 50, 60];

  // Create a new array that contains only the elements from index 2 to 4 (inclusive)

  const newNumbers = numbers.splice(2, 3);

  console.log(newNumbers);
};
