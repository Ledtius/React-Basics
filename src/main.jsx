import React, { StrictMode, use } from "react";

import { createRoot } from "react-dom/client";

import "./general.css";

import TaskApp from "./projects/task-management/TaskApp";

createRoot(document.getElementById("root")).render(
  <>
    <TaskApp />
  </>
);
