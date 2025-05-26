export const PracticeJS = () => {
  const userProfiles = [
    { id: 1, name: "Alice", contact: { email: "alice@mail.com" } },
    { id: 2, name: "Bob" }, // no contact
    { id: 3, name: "Carol", contact: { email: "carol@mail.com" } },
  ];

  // 4. Use optional chaining to print each user's email safely (if exists).

  userProfiles.forEach(({ contact }) => {
    console.log(contact?.email);
  });
};
