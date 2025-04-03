import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "./components/App.jsx";

// import css from "./main.css";

// const name = prompt("Digite el nombre");

const root = createRoot(document.getElementById("root")).render(
  <Card name="fsdfs" />
);
