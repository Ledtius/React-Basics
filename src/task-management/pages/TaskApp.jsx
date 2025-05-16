import { useEffect, useState } from "react";

import FormTask from "../components/FormTask/FormTask.jsx";

import TaskFilter from "../components/TaskFilter/TaskFilter.jsx";

import TaskList from "../components/TaskList/TaskList.jsx";

import Footer from "../components/Footer/Footer.jsx";

import { LucideListX } from "lucide-react";

import { Tooltip } from "react-tooltip";

const tooltipStyles = {
  backgroundColor: "var(--color-bg-tooltip)",
  color: "var(--text-color-tooltip)",
  padding: "0.5rem 1rem",
  borderRadius: "8px",
  fontSize: "1.2rem",
};

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

          <TaskList tooltipStyles={tooltipStyles} />
          <button className="deleteAllBtn">
            <LucideListX className="deleteIcon" />
            <Tooltip
              place="left"
              anchorSelect=".deleteAllBtn"
              content="Elinimar todas las tareas"
              style={tooltipStyles}
            />
          </button>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default TaskApp;
