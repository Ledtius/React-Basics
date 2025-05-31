export const PracticeJS = () => {
  const users = [
    { name: "Ana", age: 25 },
    { name: "Luis", age: 30 },
    { name: "Karen", age: 22 },
  ];

  for (const { name, age } of users) {
    console.log(`${name} is ${age} years old`);
  }

  const onlyNames = users.map(({ name }) => name);

  console.log(onlyNames);
};
