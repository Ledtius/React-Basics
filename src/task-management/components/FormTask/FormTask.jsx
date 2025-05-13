import FormStyles from "../FormTask/FormTask.module.css";

import { LucideSend } from "lucide-react";

const FormTask = () => {
  return (
    <>
      <form className={FormStyles.form}>
        <h1 className={FormStyles.title}>Gestor de tareas</h1>
        <div className={FormStyles.inputBtn}>
          <input
            className={FormStyles.input}
            type="text"
            name=""
            placeholder="Digita tu tarea aqui"
            id=""
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
