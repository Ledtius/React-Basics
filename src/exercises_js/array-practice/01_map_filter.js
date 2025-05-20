import { lazy } from "react";

export const PracticeJS = () => {
  // Map
  const numbers = [1, 2, 3, 4, 5];

  const doubleNumbers = numbers.map((num) => num * 2);

  //Filter
  const ages = [12, 17, 8, 24, 32, 15];

  const agesOver18 = ages.filter((age) => age > 18);

  //Reduce
  const prices = [10.99, 5.0, 8.5, 3.25];

  const numbersR = [1, 2, 3, 4];

  const initialValue = -10;

  const sumWithInitial = numbersR.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );

  // console.log(sumWithInitial);
  const sumNumbersR = numbersR.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );

  // console.log(sumNumbersR);

  const sumPrices = prices.reduce(
    (accumulator, currentPrice) => accumulator + currentPrice
  );

  // console.log(sumPrices);

  /* 1. Obtener nombres en mayúsculas de usuarios mayores de edad */

  const users = [
    { name: "Ana", age: 17 },
    { name: "Luis", age: 21 },
    { name: "Carlos", age: 19 },
    { name: "María", age: 15 },
    { name: "Lucía", age: 23 },
  ];

  const userUpperCaseOver18 = users
    .filter((user) => user.age >= 18)
    .map((user) => user.name.toUpperCase());

  // console.log(userUpperCaseOver18);

  /* 2. Calcular el total recaudado en ventas */

  const sales = [
    { product: "Camisa", price: 25, quantity: 2 },
    { product: "Pantalón", price: 40, quantity: 1 },
    { product: "Zapatos", price: 60, quantity: 3 },
  ];

  let last = 0;

  const salesByProduct = sales.map((sale) => sale.price * sale.quantity);

  console.log(salesByProduct);
  const totalSales = salesByProduct.reduce(
    (accumulator, currentSale, index, array) => accumulator + currentSale
  );

  console.log(totalSales);

};
