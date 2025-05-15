import React, { StrictMode } from "react";

import { createRoot } from "react-dom/client";

import "./task-management/styles/general.css";

import "./task-management/styles/variables.css";

import TaskApp from "./task-management/pages/TaskApp.jsx";



createRoot(document.getElementById("root")).render(
  <>
    <TaskApp />
  </>
);
