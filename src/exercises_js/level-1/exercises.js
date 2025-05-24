export const PracticeJS = () => {
  const user = {
    name: "Sophie",
    city: "Paris",
    age: 32,
  };

  // Clone the user and add a new property: "isAdmin: true"
  // Don't modify the original object
  const cloneUser = { ...user, ["isAdmin"]: true };

  console.log(cloneUser);
};
