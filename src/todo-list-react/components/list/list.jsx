import listStyles from "./list.module.css";
import { ItemComponent } from "../item/item";

export const ListComponent = () => {
  return (
    <div className={listStyles["todo-list__tasks"]}>
      <ItemComponent />
    </div>
  );
};
