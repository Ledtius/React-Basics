// import "../form/form.module.css";
import { useState } from "react";

import formStyles from "./form.module.css";

import { ItemComponent } from "../item/item";

export function FormComponent() {
  const [task, setTask] = useState({ name: "", id: "", state: false });

  return (
    <div className="todo-list">
      <form className={formStyles["todo-list__bar"]}>
        <input
          className={formStyles["todo-list__bar-input"]}
          type="text"
          placeholder="Digita tu tarea del dia"
        />
        <button className={formStyles["todo-list__bar-button"]} type="button">
          Añadir
        </button>
      </form>
    </div>
  );
}
