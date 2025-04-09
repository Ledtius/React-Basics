// import "../form/form.module.css";
import formStyles from "./form.module.css";

console.log(formStyles);

export function FormTodoList() {
  return (
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
  );
}
