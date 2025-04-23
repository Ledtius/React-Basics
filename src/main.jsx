import React, { StrictMode } from "react";

import { createRoot } from "react-dom/client";

import { TableComponent } from "./fundamentals/table/table";

import "./general.css";

const students = [
  { name: "Juan", age: 20 },
  { name: "Maria", age: 22 },
  { name: "Carlos", age: 19 },
  { name: "Luisa", age: 21 },
];

const root = createRoot(document.getElementById("root")).render(
  <>
    <div className="container">
      {students.map(({ name, age }, index) => (
        <TableComponent name={name} age={age} key={index} />
      ))}
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
