import React, { StrictMode } from "react";

import { createRoot } from "react-dom/client";

import { FormTodoList } from "./todo-list-react/components/form/form.jsx";

import { ItemList } from "./todo-list-react/components/item/item.jsx";

import "./general.css";

import { GreetingsComponent } from "./fundamentals/greeting/greeting.jsx";

import { CounterComponent } from "./fundamentals/counter/counter.jsx";

import { BarComponent } from "./fundamentals/bar/bar.jsx";

const root = createRoot(document.getElementById("root")).render(
  <>
    <BarComponent />

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
