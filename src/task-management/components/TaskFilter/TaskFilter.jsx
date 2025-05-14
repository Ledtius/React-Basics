import FilterStyles from "../TaskFilter/TaskFilter.module.css";

import { ListTodo, LayoutList, ListChecks, Search } from "lucide-react";

const TaskFilter = () => {
  return (
    <>
      <div className={FilterStyles.filter}>
        <button className={FilterStyles.btn}>
          <ListTodo className={FilterStyles.icon} />
          <span className={FilterStyles.text}>Todas</span>
        </button>
        <button className={FilterStyles.btn}>
          <LayoutList className={FilterStyles.icon} />
          <span className={FilterStyles.text}>Incompletas</span>
        </button>
        <button className={FilterStyles.btn}>
          <ListChecks className={FilterStyles.icon} />
          <span className={FilterStyles.text}>Completas</span>
        </button>
      </div>
      <form className={FilterStyles.form}>
        <input
          className={FilterStyles.input}
          type="text"
          placeholder="Busca tu tarea aqui"
        />
        <button className={FilterStyles.formBtn}>
          <Search className={FilterStyles.formIcon} />
        </button>
      </form>
    </>
  );
};

export default TaskFilter;
