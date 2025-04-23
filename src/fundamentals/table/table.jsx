import tableStyles from "../table/table.module.css";

export const TableComponent = ({ name, age }) => {
  return (
    <>
      <table className={tableStyles["table"]}>
        <thead className={["table__head"]}>
          <tr className={tableStyles["table__row"]}>
            <th className={tableStyles["table__column"]}>Name</th>
            <th className={tableStyles["table__column"]}>Age</th>
          </tr>
        </thead>
        <tbody className={["table__body"]}>
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
        </tbody>
      </table>
    </>
  );
};
