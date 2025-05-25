export const PracticeJS = () => {
  const flags = [true, false, true, true, false, false, true];

  // Use reduce to count how many `true` values are in the array

  const trueCounter = flags.reduce((acc, value) => acc + (value || 0), 0);

  console.log(trueCounter);
};
