import counterStyle from "./counter.module.css";

export const CounterComponent = () => {
  return (
    <div className={counterStyle["count"]}>
      <p>Valor</p>
      <div>
        <button>+</button>
        <button>-</button>
      </div>
    </div>
  );
};
