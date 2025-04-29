import itemStyles from "./item.module.css";

import { Pencil, Trash2 } from "lucide-react";

export function ItemComponent({ taskName, id, taskList, setTaskList }) {
  // console.log(taskName);
  // console.log(id);

  const handleCheck = (e) => {
    const checkValue = e.target.checked;

    const updatedList = taskList.map((task) =>
      task.id === id ? { ...task, state: checkValue } : task
    );
    console.log(checkValue);

    setTaskList(updatedList);
  };

  const handleDeleteTask = () => {};

  return (
    <div className={itemStyles["todo-list__element"]}>
      <div className={itemStyles["todo-list__check-task"]} id={id}>
        <input
          className={itemStyles["todo-list__check"]}
          type="checkbox"
          id={`label${id}`}
          onClick={handleCheck}
        />
        <label className={itemStyles["todo-list__task"]} htmlFor={`label${id}`}>
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
          />
        </button>
        <button
          className={`${itemStyles["todo-list__button"]} ${itemStyles["todo-list__button--delete"]}`}
        >
          <Trash2
            className={itemStyles["todo-list__icon todo-list__icon--delete  "]}
            color="white"
            size={20}
            id={id}
          />
        </button>
      </div>
    </div>
  );
}
