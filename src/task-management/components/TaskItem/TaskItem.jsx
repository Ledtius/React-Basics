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

        <Tooltip
          place="top-start"
          anchorSelect={`.${TaskItemStyles.checkboxContent}`}
          html="<span  style='text-align:center;display:block; width:100%;'>Estado de tarea<br/>(Click para cambiar)</span>"
          content=""
          style={tooltipStyles}
        />
        <div className={TaskItemStyles.information}>
          <div className={TaskItemStyles.titleIcon}>
            <strong className={TaskItemStyles.title}>
              Lorem ipsum dolor sit amet consectetur
            </strong>
            <SquarePen className={TaskItemStyles.editIcon} />

            <Tooltip
              place="right"
              anchorSelect={`.${TaskItemStyles.titleIcon}`}
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

            {/* <Tooltip
              place="top-end"
              anchorSelect={`.${TaskItemStyles.descriptionIcon}`}
              content="Añadir descripción"
              style={tooltipStyles}
            /> */}
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
