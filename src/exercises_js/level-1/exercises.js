export const PracticeJS = () => {
  const letters = ["a", "b", "a", "c", "b", "a"];

  // Return an object like: { a: 3, b: 2, c: 1 }

  const counterLetters = letters.reduce((acc, letter) => {
    if (acc[letter]) acc[letter]++;
    else acc[letter] = 1;
    return acc;
  }, {});
  const counterLetters2 = letters.reduce((acc, letter) => {
    acc[letter] = acc[letter] ? acc[letter] + 1 : 1;

    return acc;
  }, {});
  const counterLetters3 = letters.reduce((acc, letter) => {
    acc[letter] = (acc[letter] ?? 0) + 1;
    return acc;
  }, {});

  console.log(counterLetters);
  console.log(counterLetters2);
  console.log(counterLetters3);
};
