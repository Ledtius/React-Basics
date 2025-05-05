import React, { StrictMode } from "react";

import { useState, useEffect } from "react";

import { createRoot } from "react-dom/client";

import { FormComponent } from "./todo-list-react/components/form/form";

import { ListComponent } from "./todo-list-react/components/list/list.jsx";

import "./general.css";

function ProveThings() {
  const [task1, setTask1] = useState({ name: "Read" });
  console.log(task1);

  const [task2, setTask2] = useState({ name: "Study" });
  const [task3, setTask3] = useState({ name: "Pray" });
  const [tasks, setTasks] = useState([task1.name, task2.name, task3.name]);
  console.log(tasks);
  const editTask = () => {
    setTask1({ name: "Kill You" });
    // setTasks([]);
  };

  return (
    <>
      <div>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
          <li>{task1.name}</li>
        </ul>
        <button onClick={editTask}>123</button>
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
