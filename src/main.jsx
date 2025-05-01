import React, { StrictMode } from "react";

import { useState, useEffect } from "react";

import { createRoot } from "react-dom/client";

import { FormComponent } from "./todo-list-react/components/form/form";

import { ListComponent } from "./todo-list-react/components/list/list.jsx";

import "./general.css";

function ProveThings() {
  const [person, setPerson] = useState({
    name: "Julian",
    age: 16,
    country: "Salvador",
  });

  const [count, setCount] = useState(0);

  const countries = ["Colombia", "Mexico", "Brazil"];

  const handleCountry = () => {
    setCount(count + 1);
    if (count >= 2) {
      setCount(0);
    }

    setPerson({ ...person, country: countries[count] });
  };

  useEffect(() => {
    console.log(countries[count]);
    console.log(person);
  }, [count]);

  return (
    <>
      <div>
        <div>
          <strong>Countries:</strong>
          {countries.map((country, index) => (
            <li key={index}>{country}</li>
          ))}
        </div>
        <div>
          <p>{person.name}</p>
          <p>{person.age}</p>
          <p>{person.country}</p>
        </div>
        <button onClick={handleCountry}>Change country</button>
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
