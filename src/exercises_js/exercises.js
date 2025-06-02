export const PracticeJS = () => {
  console.log(splitFirstAndRest([10, 20, 30, 40]));

  function splitFirstAndRest(nums) {
    const [first, ...others] = nums;
    return { first, others };
  }
  // → { first: 10, others: [20, 30, 40] }
};
