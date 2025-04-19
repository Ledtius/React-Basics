import barStyles from "./bar.module.css";

import { useState } from "react";

import { Send } from "lucide-react";

export const BarComponent = () => {
  let [input, setInput] = useState("");

  let handleInputChange = (e) => {
    setInput(e.target.value.trim());
    // console.log(setInput());
  };

  let handleSendMessage = () => {
    // input = setInput;
    console.log(`Texto: ${input}`);
  };

  return (
    <>
      <div className={barStyles["form"]}>
        <h1 className={barStyles["form__title"]}>Cambia el valor del elemento</h1>
        <div className={barStyles["form__bar"]}>
          <input
            className={barStyles["form__input"]}
            type="text"
            placeholder="Escribe algo..."
            value={input}
            onInput={handleInputChange}
          />
          <button className={barStyles["form__btn"]} type="button">
            <Send
              className={barStyles["form__icon"]}
              onClick={handleSendMessage}
            />
          </button>
        </div>
      </div>
    </>
  );
};
