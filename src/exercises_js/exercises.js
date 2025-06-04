export const PracticeJS = () => {
  const user = {
    id: 99,
    username: "Calet23",
    password: "supersecret",
    email: "calet@example.com",
  };

  const { password, ...email } = user;
  const newUser = { ...email };
  console.log(newUser);
};
