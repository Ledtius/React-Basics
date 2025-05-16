import TaskListStyles from "../TaskList/TaskList.module.css";

import TaskItem from "../TaskItem/TaskItem.jsx";

const TaskList = ({ tooltipStyles }) => {
  return (
    <>
      <div className={TaskListStyles.taskList}>
        <TaskItem tooltipStyles={tooltipStyles} />
        <TaskItem tooltipStyles={tooltipStyles} />
        <TaskItem tooltipStyles={tooltipStyles} />
        <TaskItem tooltipStyles={tooltipStyles} />
      </div>
    </>
  );
};

export default TaskList;
