import { useState } from "react";

import toggleStyles from "./toggle.module.css";
import { CheckCheck } from "lucide-react";

export const ToggleComponent = () => {
  const [check, setCheck] = useState(false);
  const [styleText, setStyleText] = useState("accordion__text");

  const checkFunction = (e) => {
    const checkValue = e.target.checked;

    if (checkValue === false) {
      setStyleText("accordion__text--inactive");
    } else {
      setStyleText("accordion__text");
    }

    console.log(checkValue);
  };

  return (
    <>
      <div className={toggleStyles["accordion"]}>
        <input
          className={toggleStyles["accordion__checkbox"]}
          type="checkbox"
          id="check"
          onChange={checkFunction}
        />
        <label className={toggleStyles["accordion__label"]} htmlFor="check">
          <p className={toggleStyles[styleText]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis fuga
            inventore eius magnam hic blanditiis, nam provident aperiam
            consequuntur laboriosam perferendis repudiandae, accusantium quaerat
            officia, maxime est ipsum! Possimus, sapiente?
          </p>
        </label>
      </div>
    </>
  );
};
