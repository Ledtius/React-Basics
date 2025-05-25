export const PracticeJS = () => {
  const purchases = [
    { name: "Phone", price: 900, quantity: 2 },
    { name: "Mouse", price: 50, quantity: 3 },
    { name: "Monitor", price: 300, quantity: 1 },
  ];

  // ✅ Create a new array with: { name, totalPrice }
  // ✅ totalPrice = price * quantity

  const totalPricePurchases = purchases.map((purchase) => {
    const { name, price, quantity } = purchase;

    return { name: name, ["totalPrice"]: quantity * price };
  });

  console.log(totalPricePurchases);
};
