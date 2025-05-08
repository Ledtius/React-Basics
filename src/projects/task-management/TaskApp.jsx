import FormTask from "./components/FormTask";
import IncompleteTasks from "./components/IncompleteTasks.jsx";
import "./styles/TaskApp.css";
const TaskApp = () => {
  return (
    <>
      <div className="body">
        <FormTask />
        <IncompleteTasks />
      </div>
    </>
  );
};

export default TaskApp;
