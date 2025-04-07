import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { FormTodoList } from "./todo-list-react/components/form/form.jsx";

import "./general.css";

const root = createRoot(document.getElementById("root")).render(
  <>
    <FormTodoList />
  </>
);
