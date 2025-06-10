export const PracticeJS = () => {
  const product = { name: "Laptop", price: 800 };

  const newProduct = { ...product, price: 999 };

  console.log(newProduct);
};
