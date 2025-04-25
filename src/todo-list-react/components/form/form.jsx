// import "../form/form.module.css";
import { useState, useEffect } from "react";

import formStyles from "./form.module.css";

import { ItemComponent } from "../item/item";
import { Component } from "lucide-react";

export function FormComponent() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleTask = (e) => {
    // console.log(task);
    const inputValue = e.target.value;

    setTask(inputValue);


    console.log(e.currentTarget.textContent);
    // console.log(task);
  };

  const handleList = (e) => {
    e.preventDefault();
    setTaskList([...taskList, task]);
    const inputElement = e.target.classList.contains("todo-list__bar-input");
    // useEffect(() => {});
    console.log(inputElement);
   setTask("");

  };

  const handleDelete = (id) => {
    console.log(id);
    console.log(taskList);
    setTaskList(taskList.filter((_, index) => id !== index));
    console.log(taskList);
  };

  return (
    <div className="todo-list">
      <form className={formStyles["todo-list__bar"]}>
        <input
          className={formStyles["todo-list__bar-input"]}
          type="text"
          placeholder="Digita tu tarea del dia"
          value={task}
          onInput={handleTask}
        />
        <button
          className={formStyles["todo-list__bar-button"]}
          type="button"
          onClick={handleList}
        >
          Añadir
        </button>
      </form>
      <div className={formStyles["todo-list__tasks"]}>
        {taskList.map((task, index) => (
          <ItemComponent
            key={index}
            id={index}
            taskName={task}
            deleteItem={() => handleDelete(index)}
          />
        ))}
      </div>
    </div>
  );
}
