export const PracticeJS = () => {
  const numbers = [2, 5, 6, 8, 11, 14, 17, 20];

  // Use reduce to count how many even numbers are in the array

  const countNumbers = numbers.reduce((acc, number, index, array) => {
    number % 2 === 0 ? acc++ : 0;
    return acc;
  }, 0);

  console.log(countNumbers);
};
