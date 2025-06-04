export const PracticeJS = () => {
  const original = {
    task: "Learn JS",
    completed: false,
  };

  // 👉 Create a copy of `original` using the spread operator
  // and update `completed` to true in the new object without modifying the original.

  const clone = { ...original, completed: true };

  console.log(clone);
};
