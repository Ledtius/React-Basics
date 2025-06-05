export const PracticeJS = () => {
  const users = [
    { id: 1, username: "Alice", password: "123", email: "a@a.com" },
    { id: 2, username: "Bob", password: "456", email: "b@b.com" },
    { id: 3, username: "Calet", password: "789", email: "c@c.com" },
  ];

  function sanitizeUsers(users) {
    return users.map(({ password, ...info }) => info);
  }

  console.log(sanitizeUsers(users));
};
