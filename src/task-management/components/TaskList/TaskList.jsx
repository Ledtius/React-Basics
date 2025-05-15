import TaskListStyles from "../TaskList/TaskList.module.css";

import TaskItem from "../TaskItem/TaskItem.jsx";

const TaskList = () => {
  return (
    <>
      <div className={TaskListStyles.taskList}>
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
      </div>
    </>
  );
};

export default TaskList;
