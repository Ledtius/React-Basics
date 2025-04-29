import React, { StrictMode } from "react";

import { useState } from "react";

import { createRoot } from "react-dom/client";

import { FormComponent } from "./todo-list-react/components/form/form";

import { ListComponent } from "./todo-list-react/components/list/list.jsx";

import "./general.css";

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
  </>
);
