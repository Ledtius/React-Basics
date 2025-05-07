import React, { StrictMode, use } from "react";

import { createRoot } from "react-dom/client";

import "./general.css";

import TaskApp from "./projects/task-management/TaskApp";

function App() {
  return <h1>hola</h1>;
}

createRoot(document.getElementById("root")).render(
  <>
    <TaskApp />
    <App />
  </>
);
