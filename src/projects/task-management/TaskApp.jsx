import FormTask from "./components/FormTask";
import IncompleteTasks from "./components/IncompleteTasks.jsx";

const TaskApp = () => {
  return (
    <>
      <FormTask />
      <IncompleteTasks />
    </>
  );
};

export default TaskApp;
