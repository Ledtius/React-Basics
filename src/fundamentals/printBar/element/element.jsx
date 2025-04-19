import elementStyle from "./element.module.css";

export const ElementComponent = () => {
  return (
    <>
      <div className={elementStyle["element"]}>
        <span className={elementStyle["element__text"]}>sdfs</span>
      </div>
    </>
  );
};
