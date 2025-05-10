import { Icon } from "lucide-react";
import TaskItemStyles from "../styles/TaskItem.module.css";

import { SquarePen } from "lucide-react";

const TaskItem = () => {
  return (
    <>
      {/* lorem */}
      <button title="Editar tarea">
        <SquarePen />
      </button>
      <li className={TaskItemStyles["task-app__item"]}>
        <input
          className={TaskItemStyles["task-app__checkbox"]}
          type="checkbox"
          id="checkTask"
        />
        <div className={TaskItemStyles["task-app__label"]}>
          <label
            htmlFor="checkTask"
            className={TaskItemStyles["task-app__label-info"]}
          >
            <div className={TaskItemStyles["task-app__info"]}>
              <div className={TaskItemStyles["task-app__task-name-edit-btn"]}>
                <strong className={TaskItemStyles["task-app__task-name"]}>
                  Name of the Task
                </strong>
                <button>
                  <SquarePen className={TaskItemStyles["task-app__edit-btn"]} />
                </button>
              </div>

              {/* <p className={TaskItemStyles["task-app__task-description"]}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dignissimos eligendi ea ratione sequi porro aliquam, ipsam
                facilis sapiente voluptates officia dolorum mollitia nesciunt
                commodi odio voluptatibus ut. Dolorum, iste consectetur.
              </p> */}
            </div>
          </label>
        </div>
      </li>
    </>
  );
};

export default TaskItem;
