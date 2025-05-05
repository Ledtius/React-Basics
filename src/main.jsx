import React, { StrictMode } from "react";

import { useState, useEffect } from "react";

import { createRoot } from "react-dom/client";

import { FormComponent } from "./todo-list-react/components/form/form";

import { ListComponent } from "./todo-list-react/components/list/list.jsx";

import "./general.css";

function ProveThings() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Read" },
    { id: 2, name: "Study" },
    { id: 3, name: "Pray" },
  ]);

  const editTask = (idToEdit) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === idToEdit ? { ...task, name: "Kill You" } : task
      )
    );
  };

  return (
    <>
      <div>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>{task.name}</li>
          ))}
        </ul>
        <button onClick={() => editTask(1)}>Edit task1</button>
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
