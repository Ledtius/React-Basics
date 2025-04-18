import counterStyle from "./counter.module.css";

export const CounterComponent = () => {
  return (
    <div className={counterStyle["counter"]}>
      <p className={counterStyle["counter__value"]}>Valor</p>
      <div className={counterStyle["counter__btns"]}>
        <button className={counterStyle["counter__btn"]}>+</button>
        <button className={counterStyle["counter__btn"]}>-</button>
      </div>
    </div>
  );
};
