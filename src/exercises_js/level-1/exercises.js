export const PracticeJS = () => {
  const products = [
    { name: "Laptop", category: "tech" },
    { name: "Shoes", category: "fashion" },
    { name: "Phone", category: "tech" },
    { name: "T-shirt", category: "fashion" },
    { name: "Tablet", category: "tech" },
  ];

  // Return an object like: { tech: 3, fashion: 2 }

  const productsDistribution = products.reduce((acc, { category }) => {
    acc[category] = (acc[category] ?? 0) + 1;

    return acc;
  }, {});

  console.log(productsDistribution);
};
