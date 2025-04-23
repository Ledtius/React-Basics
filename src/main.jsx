import React, { StrictMode } from "react";

import { createRoot } from "react-dom/client";

import { ToggleComponent } from "./fundamentals/toggle/toggle";

import "./general.css";

const inLoveArray = ["Fernanda", "Danna", "Lady", "Valentina", "Loren", "Eva"];

const root = createRoot(document.getElementById("root")).render(
  <>
    <div className="container">
      {inLoveArray.map((lovers, index) => (
        <ToggleComponent text={lovers} id={index} />
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
