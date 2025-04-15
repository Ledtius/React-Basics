// import "../form/form.module.css";
import { useState } from "react";
import formStyles from "./form.module.css";

console.log(formStyles);

export function FormTodoList() {
  const [text, setText] = useState("");
  const [click, setClick] = useState(false);

  let arrayTask = [];
  let textValue = "";
  let taskName = "";

  const handleInputChange = (e) => {
    console.log(e.target.value);
    const value = e.target.value;
    textValue += value;
    console.log(textValue);
    return textValue;
  };

  const handleClickForm = () => {
    setClick(!click);
    taskName = handleInputChange();
    arrayTask.push(taskName);
    console.log(arrayTask);
  };

  return (
    <form className={formStyles["todo-list__bar"]}>
      <input
        className={formStyles["todo-list__bar-input"]}
        type="text"
        placeholder="Digita tu tarea del dia"
        onInput={handleClickForm ? handleClickForm : none}
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
