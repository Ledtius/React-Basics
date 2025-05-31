export const PracticeJS = () => {
  const product = {
    name: "Laptop",
    price: 1200,
    specs: {
      cpu: "Intel i7",
      ram: "16GB",
    },
  };

  const {
    price,
    specs: { cpu, ram },
  } = product;

  console.log(price, cpu, ram);
};
