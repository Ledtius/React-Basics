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
    console.log(task);
  };

  const handleAddBtn = () => {
    setTaskList([...taskList, { ...task, id: task.name }]);

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
      <form className={formStyles["todo-list__bar"]}>
        <input
          className={formStyles["todo-list__bar-input"]}
          type="text"
          placeholder="Digita tu tarea del dia"
          onInput={handleInput}
          value={task.name}
        />
        <button
          className={formStyles["todo-list__bar-button"]}
          type="button"
          onClick={handleAddBtn}
        >
          Añadir
        </button>
      </form>
    </div>
  );
}
