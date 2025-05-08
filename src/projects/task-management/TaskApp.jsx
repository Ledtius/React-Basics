import FormTask from "./components/FormTask";
import IncompleteTasks from "./components/IncompleteTasks.jsx";
import "./styles/TaskApp.css";
const TaskApp = () => {
  return (
    <>
      <FormTask />
      <IncompleteTasks />
    </>
  );
};

export default TaskApp;
