export const PracticeJS = () => {
  const users = [
    { id: 1, name: "Alice", premium: false },
    { id: 2, name: "Bob", premium: false },
    { id: 3, name: "Calet", premium: false },
  ];

  const newUsers = [...users];

  const upgradeUsers = (users) => {
    return users.map(({ id, name, premium }) => ({
      id,
      name,
      premium: true,
    }));
  };

  console.log(upgradeUsers(newUsers));
};
