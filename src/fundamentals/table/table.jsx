import tableStyles from "../table/table.module.css";

export const TableComponent = ({ name, age }) => {
  return (
    <>
      <tr className={tableStyles["table__row"]}>
        <td className={tableStyles["table__column"]}>{name}</td>
        <td className={tableStyles["table__column"]}>{age}</td>
        <td className={tableStyles["table__column"]}>
          {age > 18 ? "Adult" : "Under-age"}
        </td>
      </tr>
      {/* <tr className={tableStyles["table__row"]}>
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
          </tr> */}
    </>
  );
};
