import elementStyle from "./element.module.css";

export const ElementComponent = ({ name }) => {
  return (
    <>
      <div className={elementStyle["element"]}>
        <span className={elementStyle["element__text"]}>{name}</span>
      </div>
    </>
  );
};
