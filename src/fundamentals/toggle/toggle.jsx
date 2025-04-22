import toggleStyles from "./toggle.module.css";

export const ToggleComponent = () => {
  return (
    <>
      <div className={toggleStyles["accordion"]}>
        <input
          className={toggleStyles["accordion__checkbox"]}
          type="checkbox"
          id="check"
          
        />
        <label className={toggleStyles["accordion__text"]} htmlFor="check">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis fuga
          inventore eius magnam hic blanditiis, nam provident aperiam
          consequuntur laboriosam perferendis repudiandae, accusantium quaerat
          officia, maxime est ipsum! Possimus, sapiente?
        </label>
      </div>
    </>
  );
};
