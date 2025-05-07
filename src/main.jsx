import React, { StrictMode, use } from "react";

import { useState, useEffect } from "react";

import { createRoot } from "react-dom/client";

import "./general.css";

function App() {
  return <h1>hola</h1>;
}

createRoot(document.getElementById("root")).render(
  <>
    <App />
  </>
);
