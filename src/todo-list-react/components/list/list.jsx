import listStyles from "./list.module.css";
import { ItemComponent } from "../item/item";

export const ListComponent = ({ taskList }) => {
  return (
    <div className={listStyles["todo-list__tasks"]}>
      {taskList.map((task) => (
        <ItemComponent taskName={task.name} id={task.id} key={task.id} />
      ))}
    </div>
  );
};
