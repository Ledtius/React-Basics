import TaskItem from "./taskItem";

import IncompleteTasksStyles from "../styles/IncompleteTasks.module.css";

const ListTask = () => {
  return (
    <>
      <ul className={IncompleteTasksStyles["task-app__tasks"]}>
        <TaskItem />
        <TaskItem />
      </ul>
    </>
  );
};

export default ListTask;
