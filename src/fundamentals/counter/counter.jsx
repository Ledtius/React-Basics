import counterStyle from "./counter.module.css";

import { useState } from "react";

export const CounterComponent = () => {
  let [counter, setCounter] = useState(0);
  const plusFunction = () => {
    setCounter(counter + 1);
  };
  const minusFunction = () => {
    setCounter(counter - 1);
  };

  return (
    <div className={counterStyle["counter"]}>
      <p className={counterStyle["counter__value"]}>{counter}</p>
      <div className={counterStyle["counter__btns"]}>
        <button className={counterStyle["counter__btn"]} onClick={plusFunction}>
          +
        </button>
        <button
          className={counterStyle["counter__btn"]}
          onClick={minusFunction}
        >
          -
        </button>
      </div>
    </div>
  );
};
