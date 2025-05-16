import { useState, useEffect } from "react";

import FormStyles from "../FormTask/FormTask.module.css";

import { LucideSend } from "lucide-react";

const FormTask = ({ task, setTask, taskList, setTaskList }) => {
  const [taskRepeat, setTaskRepeat] = useState(false);

  const handleForm = (e) => {
    e.preventDefault();

    const taskRepeat = taskList.some((element) => element.name === task.name);

    console.log(taskRepeat);
    //Input className

    setTaskRepeat(taskRepeat);
    if (taskRepeat) {
      setTask({ ...task, name: "" });
      setTimeout(() => {
        setTaskRepeat(false);
      }, [1000]);
      return;
    }

    console.log(taskRepeat);

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
    console.log(taskRepeat);
  }, [taskList, taskRepeat]);

  return (
    <>
      <form onSubmit={handleForm} className={FormStyles.form}>
        <h1 className={FormStyles.title}>Gestor de tareas</h1>
        <div className={FormStyles.inputBtn}>
          <input
            className={taskRepeat ? FormStyles.inputError : FormStyles.input}
            type="text"
            name="name"
            value={task.name}
            placeholder={
              taskRepeat
                ? "Nombre de tarea ya ingresado"
                : "Digita tu tarea aqui"
            }
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
