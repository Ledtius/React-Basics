export const PracticeJS = () => {
  const userInfo = {
    name: "Calet",
    age: 23,
    city: "Barrancabermeja",
    isActive: true,
    verified: false,
    level: 5,
  };

  function countTypes(obj) {
    let objTypes = {};
    for (const key in obj) {
      const type = typeof obj[key];
      objTypes[type] = objTypes[type] ? objTypes[type] + 1 : 1;
    }
    return  objTypes;
  }

  console.log(countTypes(userInfo));
  // Expected output: { string: 2, number: 2, boolean: 2 }
};
