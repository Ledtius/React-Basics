import React, { StrictMode } from "react";

import { createRoot } from "react-dom/client";

import "./general.css";

import { FormComponent } from "./todo-list-react/components/form/form";

import { ItemComponent } from "./todo-list-react/components/item/item";

import { ListComponent } from "./todo-list-react/components/list/list.jsx";

const root = createRoot(document.getElementById("root")).render(
  <>
    <div className="todo-list">
      <h1 className="todo-list__title">Lista de tareas</h1>
      <FormComponent />
      <ListComponent />
    </div>
  </>
);
