import React, { StrictMode } from "react";

import { useState, useEffect } from "react";

import { createRoot } from "react-dom/client";

import { FormComponent } from "./todo-list-react/components/form/form";

import { ListComponent } from "./todo-list-react/components/list/list.jsx";

import "./general.css";
let count2 = 0;

function ProveThings() {
  const [count, setCount] = useState(0);

  console.log("Rendering...");
  console.log(`Cont2 fuera: ${count2}`);
  console.log(`Cont fuera: ${count}`);
  while (count2 !== 1) {
    count2++;
    setCount(2);
    console.log(`Cont2 dentro: ${count2}`);
    console.log(`Cont dentro: ${count}`);
  }
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
