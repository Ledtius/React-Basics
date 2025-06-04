export const PracticeJS = () => {
  const tasks = [
    { id: 1, title: "Study JS", completed: false },
    { id: 2, title: "Build portfolio", completed: false },
    { id: 3, title: "Play Valorant", completed: false },
  ];

  const completeTask = (id) => {
    console.log(id);
    const newTasks = [...tasks];
    return newTasks.map(({ id: idTask, title, completed }) => {
      console.log(idTask);
      if (idTask === id) {
        return { idTask, title, completed: true };
      }
      return { idTask, title, completed };
    });
  };

  const [{ id1: id }, { id: id2 }, { id: id3 }] = tasks;

  console.log(completeTask(id3));
  // 👉 Your task:
  // 1. Write a function `completeTask(id)` that:
  //    - takes a task ID
  //    - returns a new array with that task marked as `completed: true`
  //    - does NOT mutate the original array

  // 🧠 Tip: use map + spread
};
