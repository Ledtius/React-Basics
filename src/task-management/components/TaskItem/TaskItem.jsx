import TaskItemStyles from "../TaskItem/TaskItem.module.css";

import { SquarePen, CirclePlus, Trash2 } from "lucide-react";

const TaskItem = () => {
  return (
    <>
      <div className={TaskItemStyles.task}>
        <label className={TaskItemStyles.checkboxContent}>
          <input className={TaskItemStyles.checkbox} type="checkbox" />
          <span className={TaskItemStyles.checkmark}></span>
        </label>
        <div className={TaskItemStyles.information}>
          <div className={TaskItemStyles.titleIcon}>
            <strong className={TaskItemStyles.title}>
              Lorem ipsum dolor sit amet consectetur
            </strong>
            <SquarePen className={TaskItemStyles.editIcon} />
          </div>
          <div className={TaskItemStyles.descriptionIcon}>
            <div className={TaskItemStyles.descriptionContent}>
              <span className={TaskItemStyles.description}>
                Añadir descripción
              </span>
            </div>

            <CirclePlus className={TaskItemStyles.plusIcon} />
          </div>
        </div>

        <Trash2 className={TaskItemStyles.iconTrash} />
      </div>
    </>
  );
};

export default TaskItem;
