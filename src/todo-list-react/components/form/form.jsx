// import "../form/form.module.css";

import formStyles from "./form.module.css";

import { useEffect, useState } from "react";

export function FormComponent({ taskList, setTaskList }) {
  const [task, setTask] = useState({ name: "", id: "", state: false });

  const handleInput = (e) => {
    const inputValue = e.target.value;
    // console.log(inputValue);

    setTask((prevTask) => ({
      ...prevTask,
      name: inputValue,
    }));
    // console.log(task);
  };

  const handleAddBtn = (e) => {
    e.preventDefault();
    setTaskList([
      ...taskList,
      { ...task, id: task.name + Math.floor(Math.random() * 1000000) },
    ]);

    setTask((prevTask) => ({
      ...prevTask,
      name: "",
    }));
  };
  useEffect(() => {
    console.log(taskList);
  }, [taskList]);

  return (
    <div className="todo-list">
      <form className={formStyles["todo-list__bar"]} onSubmit={handleAddBtn}>
        <input
          className={formStyles["todo-list__bar-input"]}
          type="text"
          placeholder="Digita tu tarea del dia"
          onInput={handleInput}
          value={task.name}
        />
        <button className={formStyles["todo-list__bar-button"]} type="submit">
          Añadir
        </button>
      </form>
    </div>
  );
}
