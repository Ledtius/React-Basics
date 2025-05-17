import TaskListStyles from "../TaskList/TaskList.module.css";

import TaskItem from "../TaskItem/TaskItem.jsx";

const TaskList = ({ tooltipStyles, taskList, setTaskList, task, setTask }) => {
  return (
    <>
      <div className={TaskListStyles.taskList}>
        {taskList.map((task) => (
          <TaskItem
            tooltipStyles={tooltipStyles}
            taskList={taskList}
            setTaskList={setTaskList}
            task={task}
            setTask={setTaskList}
            taskName={task.name}
            key={task.name}
          />
        ))}
      </div>
    </>
  );
};

export default TaskList;
