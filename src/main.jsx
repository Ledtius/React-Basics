import React, { StrictMode } from "react";

import { useState, useEffect } from "react";

import { createRoot } from "react-dom/client";

import { FormComponent } from "./todo-list-react/components/form/form";

import { ListComponent } from "./todo-list-react/components/list/list.jsx";

import "./general.css";

function ProveThings() {
  const [count, setCount] = useState(0);

  const [count2, setCount2] = useState(0);

  // const [totalC, setTotalC] = useState(0);

  const addCount = () => {
    setCount(count + 1);
  };
  const addCount2 = () => {
    setCount2(count2 + 1);
  };

  const subCount = () => {
    setCount(count - 1);
  };

  const subCount2 = () => {
    setCount2(count2 - 1);
  };

  const resetCount = () => {
    setCount(0);
  };
  const resetCount2 = () => {
    setCount2(0);
  };
  return (
    <>
      <div>
        <h3>Count 1</h3>
        <div>
          <button onClick={addCount}>+</button>
          <button onClick={subCount}>-</button>
          <button onClick={resetCount}>R</button>
        </div>
        <span>{count}</span>
      </div>
      <div>
        <h3>Count 2</h3>
        <div>
          <button onClick={addCount2}>+</button>
          <button onClick={subCount2}>-</button>
          <button onClick={resetCount2}>R</button>
        </div>
        <span>{count2}</span>
      </div>
      <div>
        <h3>Mix Count Values </h3>
        <span>{count + count2}</span>
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
