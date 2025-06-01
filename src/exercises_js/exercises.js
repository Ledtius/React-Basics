export const PracticeJS = () => {
  const result = separateId({
    id: 99,
    name: "Calet",
    level: "Beginner",
  });

  function separateId({ id, ...rest }) {
    return { data: rest };
  }

  console.log(result);
  // → { data: { name: "Calet", level: "Beginner" } }
};
