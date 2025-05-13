import { useEffect } from "react";

import FormStyles from "../FormTask/FormTask.module.css";

import { LucideSend } from "lucide-react";

const FormTask = ({ task, setTask, taskList, setTaskList }) => {
  const handleForm = (e) => {
    e.preventDefault();

    setTask({ ...task, name: "" });

    setTaskList([...taskList, task]);
  };

  const handleInput = (e) => {
    const inputValue = e.target.value;
    console.log(inputValue);

    setTask({ ...task, name: inputValue });
  };

  useEffect(() => {
    console.log(task);
  }, [task]);

  useEffect(() => {
    console.log(taskList);
  }, [taskList]);

  return (
    <>
      <form onSubmit={handleForm} className={FormStyles.form}>
        <h1 className={FormStyles.title}>Gestor de tareas</h1>
        <div className={FormStyles.inputBtn}>
          <input
            className={FormStyles.input}
            type="text"
            name="name"
            value={task.name}
            placeholder="Digita tu tarea aqui"
            onChange={handleInput}
          />
          <button className={FormStyles.btn}>
            <LucideSend className={FormStyles.icon} />
          </button>
        </div>
      </form>
    </>
  );
};

export default FormTask;
