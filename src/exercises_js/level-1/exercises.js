export const PracticeJS = () => {
  const fruits = [
    { id: 1, name: "Apple", color: "red" },
    { id: 2, name: "Banana", color: "yellow" },
    { id: 3, name: "Grape", color: "purple" },
  ];

  // 1. Create a new Map where the key is the fruit's id and the value is the fruit's name.

  const fruitsMap = new Map();

  fruits.forEach((fruit) => {
    const { id, name } = fruit;
    fruitsMap.set(id, name);
  });

  if (fruitsMap.size === fruits.length) console.log(fruitsMap);

  console.log(fruitsMap.size);
};
