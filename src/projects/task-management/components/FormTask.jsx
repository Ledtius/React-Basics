import FormTaskStyles from "../styles/FormTask.module.css";

const FormTask = () => {
  const handleForm = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form className={FormTaskStyles["task-app__form"]}>
        <div className={FormTaskStyles["task-app__header"]}>
          <label className={FormTaskStyles["task-app__title"]} htmlFor="bar">
            Lista de tareas
          </label>
          <div className={FormTaskStyles["task-app__input-group"]}>
            <input
              className={FormTaskStyles["task-app__input"]}
              type="text"
              id="bar"
            />
            <button className={FormTaskStyles["task-app__button"]}>
              Enviar
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default FormTask;
