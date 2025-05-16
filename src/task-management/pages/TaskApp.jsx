import { useEffect, useState } from "react";

import FormTask from "../components/FormTask/FormTask.jsx";

import TaskFilter from "../components/TaskFilter/TaskFilter.jsx";

import TaskList from "../components/TaskList/TaskList.jsx";

import Footer from "../components/Footer/Footer.jsx";

import { LucideListX } from "lucide-react";



const TaskApp = () => {
  const [task, setTask] = useState({ name: "", description: "", state: false });

  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    console.log(task);
  }, [task]);

  return (
    <>
      <div className="tasAppFooter">
        <div className="taskApp">
          <FormTask
            task={task}
            setTask={setTask}
            taskList={taskList}
            setTaskList={setTaskList}
          />

          <TaskFilter />

          <TaskList />
          <button className="deleteAllBtn">
            <LucideListX className="deleteIcon" />
          </button>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default TaskApp;
