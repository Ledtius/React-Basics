export const PracticeJS = () => {
  const items = [
    { name: "Book", price: 12.5 },
    { name: "Pen", price: 1.75 },
    { name: "Notebook", price: 6.3 },
  ];

  // Use `reduce()` to calculate the average price of all items

  const averagePrice =
    items.reduce((acc, item) => acc + item.price, 0) / items.length;

  const averagePrice1 =
    items.reduce((acc, item) => {
      acc = acc + item.price;
      return acc;
    }, 0) / items.length;

  console.log(averagePrice);
  console.log(averagePrice1);
};
