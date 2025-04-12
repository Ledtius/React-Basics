// import "../form/form.module.css";
import { useState } from "react";
import formStyles from "./form.module.css";

console.log(formStyles);

export function FormTodoList() {
  const [text, setText] = useState("");

  const handleInputChange = (e) => {
    setText(e.target.value);
    console.log(e.target.value);
  };

  return (
    <form className={formStyles["todo-list__bar"]}>
      <input
        className={formStyles["todo-list__bar-input"]}
        type="text"
        placeholder="Digita tu tarea del dia"
        onInput={handleInputChange}
        value={text}
      />
      <button className={formStyles["todo-list__bar-button"]} type="button">
        Añadir
      </button>
    </form>
  );
}
