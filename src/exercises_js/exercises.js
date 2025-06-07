export const PracticeJS = () => {
  const users = [
    { name: "Ana", city: "Bogotá", isActive: true },
    { name: "Luis", city: "Medellín", isActive: false },
    { name: "María", city: "Bogotá", isActive: true },
    { name: "Pedro", city: "Cali", isActive: true },
    { name: "Sofía", city: "Medellín", isActive: true },
  ];

  /* reduce */

  const reduceVersion = users.reduce((acc, { city, isActive }) => {
    if (isActive) acc[city] = acc[city] ? acc[city] + 1 : 1;

    return acc;
  }, {});

  console.log(reduceVersion);

  /* for of  */
  const forOfVersion = {};

  for (const { city, isActive } of users) {
    if (isActive)
      forOfVersion[city] = forOfVersion[city] ? forOfVersion[city] + 1 : 1;
  }
  console.log(forOfVersion);
};
