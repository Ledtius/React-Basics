export const PracticeJS = () => {
  const colors = ["red", "blue", "green", "yellow", "purple"];
  // 1. Remove the first element

  colors.shift();
  // 2. Remove the last element
  colors.pop();
  // 3. Print the final array
  console.log(colors);

  const numbers = [10, 20, 30, 40, 50, 60];

  // Create a new array that contains only the elements from index 2 to 4 (inclusive)
  const newNumbers = numbers.slice(2, 5);

  console.log(newNumbers);
  console.log(numbers);
};
