import React, { StrictMode, use } from "react";

import { useState, useEffect } from "react";

import { createRoot } from "react-dom/client";

import { FormComponent } from "./todo-list-react/components/form/form";

import { ListComponent } from "./todo-list-react/components/list/list.jsx";

import itemStyles from "./todo-list-react/components/item/item.module.css";
import "./general.css";
import { ToggleLeft } from "lucide-react";

function ProveThings() {
  /* **Simular toggle (true/false)**: Crea un estado booleano `isVisible` y un botón que muestre u oculte un mensaje cada vez que lo presiones.
   */

  const [toggle, setToggle] = useState(false);

  const [style, setStyle] = useState("disappear");

  const handleToggle = (e) => {
    const value = e.target.checked;

    setToggle(value);
  };

  useEffect(() => {
    if (toggle) {
      // setStyle("appear");
      console.log(`truly: ${toggle}`);
    } else {
      // setStyle("disappear");
      console.log(`falsy: ${toggle}`);
    }
    console.log(style);
  }, [toggle]);

  useEffect(() => {
    console.log(`actual style: ${style}`);
  }, [style]);

  // console.log(toggle);
  return (
    <>
      <div className={itemStyles["todo-list__check-task"]}>
        <input
          className={itemStyles["todo-list__check"]}
          type="checkbox"
          id={`label`}
          onClick={handleToggle}
        />
        <label className={itemStyles["todo-list__task"]} htmlFor={`label`}>
          Imagine a Toggle
        </label>
      </div>
      <div
        className={itemStyles[`todo-list__${toggle ? "appear" : "disappear"}`]}
      >
        <h2>Message</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
          nihil iusto est repellat, sunt quisquam reprehenderit aut explicabo
          magnam! Earum ex, reiciendis optio ea ipsum quo ullam est eos
          necessitatibus.
        </p>
      </div>
    </>
  );
}

function App() {
  const [taskList, setTaskList] = useState([]);

  // console.log(taskList);
  return (
    <div className="todo-list">
      <h1 className="todo-list__title">Lista de tareas</h1>
      <FormComponent taskList={taskList} setTaskList={setTaskList} />
      <ListComponent taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <>
    <App />
    <ProveThings />
  </>
);
