import React, { StrictMode, use } from "react";

import { useState, useEffect } from "react";

import { createRoot } from "react-dom/client";

import { FormComponent } from "./todo-list-react/components/form/form";

import { ListComponent } from "./todo-list-react/components/list/list.jsx";

import itemStyles from "./todo-list-react/components/item/item.module.css";
import "./general.css";
import { ToggleLeft } from "lucide-react";

function ProveThings() {
  /* **Lista de usuarios aleatorios**: Genera usuarios con nombre y edad aleatoria, agrégalos a una lista con un botón. Asegúrate de mantener los anteriores. */
  const names = [
    "Pedro",
    "Alexander",
    "Tomas",
    "Leonardo",
    "Cricet",
    "Pilar",
    "Melissa",
    "Sandra",
  ];

  const ages = [20, 29, 38, 19, 27];

  const [person, setPerson] = useState({ name: "", age: 0 });

  const [persons, setPersons] = useState([]);

  const createRandomPerson = () => {
    const randomValueNames = Math.floor(Math.random() * names.length);
    const randomValueAges = Math.floor(Math.random() * ages.length);

    console.log(`Names index:${randomValueNames}`);
    console.log(`Ages index:${randomValueAges}`);

    const newPerson = {
      name: names[randomValueNames],
      age: ages[randomValueAges],
    };
    setPerson(newPerson);

    setPersons([...persons, newPerson]);

    // if (person.name) setPersons([...persons, newPerson]);
  };
  useEffect(() => {
    console.log(person);
  }, [person]);
  useEffect(() => {
    console.log(persons);
  }, [persons]);

  return (
    <>
      <div>
        <div>
          <strong>Possible name options</strong>
          <ol>
            {names.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ol>
        </div>
        <div>
          <strong>Possible age options</strong>
          <ul>
            {ages.map((age, index) => (
              <li key={index}>{age}</li>
            ))}
          </ul>
        </div>

        <div>
          <strong>
            Your random person is:{`Name:${person.name}\nAge:${person.age}`}
          </strong>
        </div>

        <button onClick={createRandomPerson}>Random person</button>
        <div>
          <strong>Generated person history</strong>
          <ol>
            {persons.map((person, index) => (
              <li key={index}>{`Name: ${person.name}, Age:${person.age}`}</li>
            ))}
          </ol>
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
