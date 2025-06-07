export const PracticeJS = () => {
  const fruits = ["apple", "banana", "apple", "orange", "banana", "banana"];

  function countItems(array) {
    let countFruits = {};

    for (const element of array) {
      countFruits[element] = countFruits[element]
        ? countFruits[element] + 1
        : 1;
    }

    return countFruits;
  }

  console.log(countItems(fruits));
  // Expected output: { apple: 2, banana: 3, orange: 1 }
};
