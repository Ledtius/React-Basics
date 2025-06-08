export const PracticeJS = () => {
  // Use reduce to group items by their type.
  const items = [
    { name: "Banana", type: "fruit" },
    { name: "Carrot", type: "vegetable" },
    { name: "Apple", type: "fruit" },
  ];

  console.log(
    items.reduce(
      (acc, { name, type }) => {
        // console.log(name, type);

        // /* Aqui pasa algo raro */
        // if (type === "fruit") {
        //   console.log(type);
        //   console.log(name);
        //   // console.log(acc[type]);
        //   acc[type] = acc[type] ? (acc[type] = [...acc[type], name]) : [name];
        //   console.log(acc[type]);
        // } else {
        //   acc[type] = acc[type] ? acc[type].push(name) : [name];
        // }

        /* Por que no toma el valor inicial que se indico que tendria la propiedad fruit en  el objeto acc?, ademas cuando hago acc.fruit.push(...) me marca un error, pero  si defino de nuevo acc.fruit = [] si me permite hacer el push. */
        // acc.fruit = [];
        if (type === "fruit") acc.fruit.push(name);

        // acc.vegetable =
        //   type === "vegetable" ? acc.vegetable.push(name) : acc.vegetable;

        return acc;
      },
      { fruit: [] }
    )
  );

  /*
Expected output:
{
  fruit: ["Banana", "Apple"],
  vegetable: ["Carrot"]
}
*/
};
