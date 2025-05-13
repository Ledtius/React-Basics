const TaskApp = () => {
  return (
    <>
      <div className="task-app">
        <FormTask />
        <IncompleteTasks />
      </div>
    </>
  );
};

export default TaskApp;
