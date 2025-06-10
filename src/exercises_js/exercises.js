export const PracticeJS = () => {
  // Use for...in and optional chaining to count all keys inside the "details" object.
  const product = {
    name: "Phone",
    details: {
      brand: "TechCorp",
      price: 499,
      color: "black",
    },
  };
  // Output: 3
  let count = 0;
  const { details } = product;
  for (const key in details) {
    if (details?.[key]) count++;

    console.log(count);
  }
};
