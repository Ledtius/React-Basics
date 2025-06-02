export const PracticeJS = () => {
  console.log(countExtras("first", 1, 2, 3)); // → 3

  function countExtras(text, ...extras) {
    console.log(extras);
    return extras.length;
  }
  console.log(countExtras("onlyOne")); // → 0
};
