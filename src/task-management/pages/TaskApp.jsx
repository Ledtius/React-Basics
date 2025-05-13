import { useEffect, useState } from "react";

import FormTask from "../components/FormTask/FormTask.jsx";

import TaskList from "../components/TaskList/TaskList.jsx";

const TaskApp = () => {
  const [task, setTask] = useState({ name: "", description: "", state: false });

  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    console.log(task);
  }, [task]);

  return (
    <>
      <div className="taskApp">
        <FormTask
          task={task}
          setTask={setTask}
          taskList={taskList}
          setTaskList={setTaskList}
        />

        <TaskList />
      </div>
    </>
  );
};

export default TaskApp;
