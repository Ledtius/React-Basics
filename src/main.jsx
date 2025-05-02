import React, { StrictMode } from "react";

import { useState, useEffect } from "react";

import { createRoot } from "react-dom/client";

import { FormComponent } from "./todo-list-react/components/form/form";

import { ListComponent } from "./todo-list-react/components/list/list.jsx";

import "./general.css";

function ProveThings() {
  const [fruits, setFruits] = useState(["Lime", "Kiwi", "Papaya"]);

  const [count, setCount] = useState(0);

  const otherFruits = ["Watermelon", "Strawberry", "Grape", "Cherry"];
  const addedFruits = () => {
    console.log(count);
    if (count < otherFruits.length) {
      // setFruits([...fruits, (fruits[fruits.length-1] = otherFruits[count])]);
      setCount(count + 1);
      console.log(count);

      setFruits([...fruits, otherFruits[count]]);
    }
  };
  // console.log(fruits.length);
  return (
    <>
      <div>
        <div>
          <strong>Options</strong>
          <ul>
            {otherFruits.map((fruit, index) => (
              <li key={index}>{fruit}</li>
            ))}
          </ul>
        </div>
        <div>
          <strong>Your fruit's basket</strong>
          <ul>
            {fruits.map((fruit, index) => (
              <li key={index}>{fruit}</li>
            ))}
          </ul>
          <button onClick={addedFruits}>Added Fruit</button>
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
