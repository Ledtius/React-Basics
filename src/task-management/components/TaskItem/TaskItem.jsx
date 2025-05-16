import TaskItemStyles from "../TaskItem/TaskItem.module.css";

import { SquarePen, CirclePlus, Trash2 } from "lucide-react";

import { Tooltip } from "react-tooltip";

const TaskItem = ({ tooltipStyles }) => {
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

            <Tooltip
              place="top-start"
              anchorSelect={`.${TaskItemStyles.editIcon}`}
              content="Editar tarea"
              style={tooltipStyles}
            />
          </div>
          <div className={TaskItemStyles.descriptionIcon}>
            <div className={TaskItemStyles.descriptionContent}>
              <span className={TaskItemStyles.description}>
                Añadir descripción
              </span>
            </div>

            <CirclePlus className={TaskItemStyles.plusIcon} />

            <Tooltip
              place="top-start"
              anchorSelect={`.${TaskItemStyles.plusIcon}`}
              content="Añadir descripción"
              style={tooltipStyles}
            />
          </div>
        </div>

        <Trash2 className={TaskItemStyles.trashIcon} />
      </div>

      <Tooltip
        place="top-start"
        anchorSelect={`.${TaskItemStyles.trashIcon}`}
        content="Eliminar tarea"
        style={tooltipStyles}
      />
    </>
  );
};

export default TaskItem;
