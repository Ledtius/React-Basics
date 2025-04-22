import { useState } from "react";

import toggleStyles from "./toggle.module.css";
import { CheckCheck } from "lucide-react";

export const ToggleComponent = ({ text, id }) => {
  const [check, setCheck] = useState(false);
  const [styleText, setStyleText] = useState("accordion__text");

  const checkFunction = (e) => {
    const checkValue = e.target.checked;

    if (checkValue === false) {
      setStyleText("accordion__text--inactive");
    } else {
      setStyleText("acscordion__text");
    }

    console.log(checkValue);
  };

  return (
    <>
      <div className={toggleStyles["accordion"]}>
        <input
          className={toggleStyles["accordion__checkbox"]}
          type="checkbox"
          id={id}
          onChange={checkFunction}
        />
        <label className={toggleStyles["accordion__label"]} htmlFor={id}>
          <p className={toggleStyles[styleText]}>{text}</p>
        </label>
      </div>
    </>
  );
};
