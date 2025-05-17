import TaskItemStyles from "../TaskItem/TaskItem.module.css";

import { SquarePen, CirclePlus, Trash2 } from "lucide-react";

import { Tooltip } from "react-tooltip";

import { useEffect, useState } from "react";

const TaskItem = ({
  tooltipStyles,
  taskList,
  setTaskList,
  taskName,
  task,
  setTask,
  taskDescription,
  state,
}) => {
  const [tasKUpdate, setTaskUpdate] = useState({
    name: "",
    description: "",
    state: false,
  });

  let arrayNames = [];
  const handleCheckbox = (e) => {
    const checkedValue = e.target.checked;

    arrayNames = taskList.map((task) => task.name);

    const indexPosition = arrayNames.indexOf(taskName);

    console.log(arrayNames);

    console.log(
      `Name: ${taskName}\nstate: ${checkedValue}\nIndex: ${indexPosition}`
    );

    setTaskUpdate(taskList[indexPosition]);

    setTaskUpdate((prev) => ({ ...prev, state: checkedValue }));

    const modTask = taskList.map((task, index) => {
      if (task.name === taskName) {
        return {
          ...task,
          state: checkedValue,
        };
      } else {
        return task;
      }
    });

    const newList = taskList.map((task, index) => {
      index !== indexPosition;
      return [modTask, ...taskList];
    });

    console.log(newList);
    //  setTaskList((prev)=>(
    //   prev.map((task) =)

    //  ));

    console.log(modTask);
  };

  useEffect(() => {
    console.log(tasKUpdate);
    console.log(taskList);
    // console.log(taskList.fill(tasKUpdate, 0));
  }, [tasKUpdate, taskList]);

  return (
    <>
      <div className={TaskItemStyles.task}>
        <label className={TaskItemStyles.checkboxContent}>
          <input
            className={TaskItemStyles.checkbox}
            type="checkbox"
            onChange={handleCheckbox}
          />
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
            <strong className={TaskItemStyles.title}>{taskName}</strong>
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
