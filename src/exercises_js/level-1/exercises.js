export const PracticeJS = () => {
  const people = [
    { name: "Anna", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Carla", age: 30 },
    { name: "David", age: 25 },
    { name: "Eva", age: 35 },
  ];

  // Return an object like: { 25: 2, 30: 2, 35: 1 }

  const peopleByAge = people.reduce((acc, person) => {
    const { name, age } = person;

    if (acc[age]) acc[age]++;
    else acc[age] = 1;
    return acc;
  }, {});

  console.log(peopleByAge);
};
