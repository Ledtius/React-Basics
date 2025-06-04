export const PracticeJS = () => {
  // 👉 Write a function called `sumAll` that takes any number of arguments
  // and returns the total sum.

  function sumAll(...nums) {
    return nums.reduce((acc, num) => acc + num, 0);
  }

  // Example:
  console.log(sumAll(2, 4, 6)); // 12
  console.log(sumAll(1, 1, 1, 1, 1)); // 5
};
