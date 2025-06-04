export const PracticeJS = () => {
  // Given the following object:
  const user = {
    name: "Calet",
    age: 23,
    country: "Colombia",
  };

  // 👉 Use destructuring to extract each value and log them in a sentence like:
  // "My name is Calet, I'm 23 years old and I live in Colombia."

  const { name, age, country } = user;
  
  console.log(
    `My name is ${name}, I'm ${age} years old and I live in ${country}`
  );
};
