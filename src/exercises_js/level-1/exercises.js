export const PracticeJS = () => {
  const scores = [67, 89, 94, 76, 82];

  // Use `some()` to check if there is any score higher than 90
  const greaterThanNinety = scores.some((score) => score > 90);

  console.log(greaterThanNinety);
};
