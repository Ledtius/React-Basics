import FormTask from "../components/FormTask/FormTask.jsx";

import { use, useEffect, useState } from "react";

const TaskApp = () => {
  const [task, setTask] = useState({ name: "", description: "", state: false });

  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    console.log(task);
  }, [task]);

  return (
    <>
      <FormTask
        task={task}
        setTask={setTask}
        taskList={taskList}
        setTaskList={setTaskList}
      />
    </>
  );
};

export default TaskApp;
