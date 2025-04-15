// import "../form/form.module.css";
import { useState } from "react";
import formStyles from "./form.module.css";

console.log(formStyles);

export function FormTodoList() {
  const [text, setText] = useState("");
  const [task, setTask] = useState([]);

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleClickForm = () => {
    if (text.trim() === "") return;

    setTask([...task, text]);
    console.log(text);
    console.log(...task);
    setText("");
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
      <button
        className={formStyles["todo-list__bar-button"]}
        type="button"
        onClick={handleClickForm}
      >
        Añadir
      </button>
    </form>
  );
}
