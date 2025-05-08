const FormTask = () => {
  const handleForm = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form onSubmit={handleForm}>
        <div>
          <label htmlFor="bar">Lista de tareas</label>
          <input type="text" id="bar" />
        </div>
        <button>Enviar</button>
      </form>
    </>
  );
};

export default FormTask;
