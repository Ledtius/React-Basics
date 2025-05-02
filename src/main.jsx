import React, { StrictMode } from "react";

import { useState, useEffect } from "react";

import { createRoot } from "react-dom/client";

import { FormComponent } from "./todo-list-react/components/form/form";

import { ListComponent } from "./todo-list-react/components/list/list.jsx";

import "./general.css";

function ProveThings() {
  const [fruits, setFruits] = useState(["Lime", "Kiwi", "Papaya"]);

  const deleteFruit = () => {
    setFruits(fruits.filter((fruit) => fruit !== "Kiwi"));
  };
  useEffect(() => {
    console.log(fruits);
  }, [fruits]);
  // console.log(fruits.length);
  return (
    <>
      <div>
        <div>
          <strong>Your fruit's basket</strong>
          <ul>
            {fruits.map((fruit, index) => (
              <li key={index}>{fruit}</li>
            ))}
          </ul>
          <button onClick={deleteFruit}>Deleted Fruit</button>
        </div>
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
