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
        <label className={itemStyles["todo-list__task"]} htmlFor="check">
          Nombre de la tarea
        </label>
      </div>
      <div className={itemStyles["todo-list__options"]}>
        <button
          className={`${itemStyles["todo-list__button"]} ${itemStyles["todo-list__button--edit"]}`}
        >
          <Pencil
            className={itemStyles["todo-list__icon todo-list__icon--edit  "]}
            color="white"
            size={20}
          />
        </button>
        <button
          className={`${itemStyles["todo-list__button"]} ${itemStyles["todo-list__button--delete"]}`}
        >
          <Trash2
            className={itemStyles["todo-list__icon todo-list__icon--delete  "]}
            color="white"
            size={20}
          />
        </button>
      </div>
    </div>
  );
}
