import tableStyles from "../table/table.module.css";

export const TableComponent = ({ name, age }) => {
  return (
    <>
      <table className={tableStyles["table"]}>
        <tr className={tableStyles["table__row"]}>
          <td className={tableStyles["table__column"]}>Name</td>
          <td className={tableStyles["table__column"]}>Age</td>
        </tr>
        <tr className={tableStyles["table__row"]}>
          <td className={tableStyles["table__column"]}>{name}</td>
          <td className={tableStyles["table__column"]}>{age}</td>
        </tr>
        <tr className={tableStyles["table__row"]}>
          <td className={tableStyles["table__column"]}>{name}</td>
          <td className={tableStyles["table__column"]}>{age}</td>
        </tr>
        <tr className={tableStyles["table__row"]}>
          <td className={tableStyles["table__column"]}>{name}</td>
          <td className={tableStyles["table__column"]}>{age}</td>
        </tr>
        <tr className={tableStyles["table__row"]}>
          <td className={tableStyles["table__column"]}>{name}</td>
          <td className={tableStyles["table__column"]}>{age}</td>
        </tr>
      </table>
    </>
  );
};
