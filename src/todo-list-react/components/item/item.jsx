import itemStyles from "./item.module.css";

import { Pencil, Trash2 } from "lucide-react";

export function ItemList() {
  return (
    <div className={itemStyles["todo-list__element"]}>
      <div className={itemStyles["todo-list__check-task"]}>
        <input
          className={itemStyles["todo-list__check"]}
          type="checkbox"
          name="checkTask"
          id="check"
        />
        <label className="todo-list__task" htmlFor="check">
          Nombre de la tarea
        </label>
      </div>
      <div className="todo-list__options">
        <button className="todo-list__edit">
          <Pencil
            className={itemStyles["todo-list__icon todo-list__icon--edit  "]}
            color="red"
            size={50}
          />
        </button>
        <button className={itemStyles["todo-list__icon todo-list__icon--edit"]}>
          <Trash2 />
        </button>
      </div>
    </div>
  );
}
