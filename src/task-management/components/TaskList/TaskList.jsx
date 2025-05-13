import TaskListStyles from "../TaskList/TaskList.module.css";

import { LucideListX } from "lucide-react";

const TaskList = () => {
  return (
    <>
      <div className={TaskListStyles.taskList}>
        <h2>asds</h2>

        <h2>asds</h2>
        <h2>asds</h2>
        <button className={TaskListStyles.deleteAllBtn}>
          <LucideListX className={TaskListStyles.deleteIcon} />
        </button>
      </div>
    </>
  );
};

export default TaskList;
