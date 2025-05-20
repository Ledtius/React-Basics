import React, { StrictMode } from "react";

import { createRoot } from "react-dom/client";

import "./task-management/styles/general.css";

import "./task-management/styles/variables.css";

import TaskApp from "./task-management/pages/TaskApp.jsx";

import { PracticeJS } from "./exercises_js/array-practice/01_map_filter.js";

createRoot(document.getElementById("root")).render(
  <>
    <TaskApp />
    <PracticeJS />
  </>
);
