import React, { StrictMode, use } from "react";

import { useState, useEffect } from "react";

import { createRoot } from "react-dom/client";

import { FormComponent } from "./todo-list-react/components/form/form";

import { ListComponent } from "./todo-list-react/components/list/list.jsx";

import itemStyles from "./todo-list-react/components/item/item.module.css";
import "./general.css";
import { ToggleLeft } from "lucide-react";

function ProveThings() {
  /* **Formulario con múltiples campos**: Usa un solo estado para manejar los valores de un formulario (`nombre`, `email`, `edad`) y actualízalos de forma controlada. */

  const [formData, setFormData] = useState({
    name: "none name",
    lastName: "none last name",
    email: "none@gmail.com",
    age: 0,
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    console.log(name, value);

    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleForm = (e) => {
    e.preventDefault();
  };

  const handleFormSubmit = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      name: "",
      lastName: "",
      email: "",
      age: 0,
    }));
  };

  console.log(formData);
  useEffect(() => {
    console.log(formData.name);
    console.log(formData.lastName);
    console.log(formData.email);
    console.log(formData.age);
  }, [formData]);
  return (
    <>
      <form onSubmit={handleForm}>
        <div>
          <label htmlFor="fName">First Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            id="fName"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lName">Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            id="lName"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            id="email"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            id="age"
            onChange={handleChange}
          />
        </div>

        <button type="submit" onClick={handleFormSubmit}>
          Send
        </button>
      </form>
    </>
  );
}

function App() {
  const [taskList, setTaskList] = useState([]);

  // console.log(taskList);
  return (
    <div className="todo-list">
      <h1 className="todo-list__title">Lista de tareas</h1>
      <FormComponent taskList={taskList} setTaskList={setTaskList} />
      <ListComponent taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <>
    <App />
    <ProveThings />
  </>
);
