import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { FormTodoList } from "./todo-list-react/components/form/form.jsx";

import "./general.css";

const root = createRoot(document.getElementById("root")).render(
  <>
    <div className="todo-list">
      <h1 className="todo-list__title">Lista de tareas</h1>
      <FormTodoList />
    </div>
  </>
);
