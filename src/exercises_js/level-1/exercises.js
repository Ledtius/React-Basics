export const PracticeJS = () => {
  const product = { name: "Laptop", price: 999.99, stock: 10 };

  // 6. Create a string using template literals: "The Laptop costs $999.99 and there are 10 in stock."

  const { name, price, stock } = product;

  console.log(
    `The ${name}, cost: ${price} and there are ${stock} in the stock`
  );
};
