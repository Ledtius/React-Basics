export const PracticeJS = () => {
  const products = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Phone", price: 800 },
    { id: 3, name: "Mouse", price: 25 },
    { id: 4, name: "Monitor", price: 300 },
    { id: 5, name: "Keyboard", price: 100 },
  ];

  // ✅ Filter the products with a price greater than 100
  // ✅ Return a new array with only the product names in UPPERCASE

  const productsGreaterThanHundred = products.filter((product) => {
    if (product.price > 100) {
      return product;
    }
  });

  console.log(productsGreaterThanHundred);

  const productsUC = products.map((product) => {
    return { ...product, name: product.name.toUpperCase() };
  });

  console.log(productsUC);
};
