import React, { StrictMode } from "react";

import { createRoot } from "react-dom/client";

import { TableComponent } from "./fundamentals/table/table";

import tableStyles from "../src/fundamentals/table/table.module.css";

import "./general.css";

const students = [
  { name: "Juan", age: 16 },
  { name: "Maria", age: 22 },
  { name: "Carlos", age: 17 },
  { name: "Luisa", age: 21 },
];

const root = createRoot(document.getElementById("root")).render(
  <>
    <div className="container">
      <table className={tableStyles["table"]}>
        <thead className={tableStyles["table__head"]}>
          <tr className={tableStyles["table__row"]}>
            <th className={tableStyles["table__column"]}>Name</th>
            <th className={tableStyles["table__column"]}>Age</th>
            <th className={tableStyles["table__column"]}>Under-age/Adult</th>
          </tr>
        </thead>
        <tbody className={tableStyles["table__body"]}>
          {students.map(({ name, age }, index) => (
            <TableComponent name={name} age={age} key={index} />
          ))}
        </tbody>
      </table>
    </div>
    {/* Second exercise */}
    {/* <CounterComponent /> */}
    {/* First exercise */}

    {/* <GreetingsComponent greeting="Ejercicio numero 1 cumplido" /> */}

    {/* Todo-list */}

    {/* 
  
    <div className="todo-list">
      <h1 className="todo-list__title">Lista de tareas</h1>
      <FormTodoList />
    </div>
    <div className="todo-list__content">
      <ItemList taskName="Tarea componetizada" id="1" />
      <ItemList taskName="Tarea componetizadasdsddd 23" id="2" />
    </div>
      */}
  </>
);
