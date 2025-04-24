import React, { StrictMode } from "react";

import { createRoot } from "react-dom/client";

import "./general.css";

import { FormComponent } from "./todo-list-react/components/form/form";

import { ItemComponent } from "./todo-list-react/components/item/item";

const root = createRoot(document.getElementById("root")).render(
  <>
    <div className="todo-list">
      <h1 className="todo-list__title">Lista de tareas</h1>
      <FormComponent />
      <ItemComponent />
    </div>
  </>
);
