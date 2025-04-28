import itemStyles from "./item.module.css";

import { Pencil, Trash2 } from "lucide-react";

export function ItemComponent({ taskName, id, deleteItem, editItem }) {
  return (
    <div className={itemStyles["todo-list__element"]}>
      <div className={itemStyles["todo-list__check-task"]}>
        <input
          className={itemStyles["todo-list__check"]}
          type="checkbox"
          name="checkTask"
          id={id}
        />
        <label className={itemStyles["todo-list__task"]} htmlFor={id}>
          {taskName}
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
            onClick={editItem}
          />
        </button>
        <button
          className={`${itemStyles["todo-list__button"]} ${itemStyles["todo-list__button--delete"]}`}
        >
          <Trash2
            className={itemStyles["todo-list__icon todo-list__icon--delete  "]}
            color="white"
            size={20}
            onClick={deleteItem}
            id={id}
          />
        </button>
      </div>
    </div>
  );
}
