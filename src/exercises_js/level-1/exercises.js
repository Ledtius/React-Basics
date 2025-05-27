export const PracticeJS = () => {
  const name = "John";
  const age = 28;

  // 7. Create an object with shorthand property names for name and age.

  const user = { name, age };

  console.log(user);
  // 8. Create a function that returns this object using shorthand syntax.

  const greeting = () => ({ name, age });

  console.log(greeting());
};
