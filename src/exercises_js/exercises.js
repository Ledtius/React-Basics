export const PracticeJS = () => {
  const user = {
    name: "Calet",
    age: 23,
    city: "Barrancabermeja",
    isStudent: true,
  };

  console.log(user.name);
  user["city"] = "Medellín";
  console.log(user.city);

  user.pets = ["Randy"];
  console.log(user["pets"]);
};
