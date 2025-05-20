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

  const salesByProduct = sales.map((sale) => sale.price * sale.quantity);

  // console.log(salesByProduct);
  const totalSales = salesByProduct.reduce(
    (accumulator, currentSale, index, array) => accumulator + currentSale
  );

  // console.log(totalSales);

  /* Contar cuántas personas tienen cada tipo de sangre 
  
Devuelve un objeto que cuente cuántas personas hay por cada tipo de sangre. Ejemplo de salida:

  {
  'O+': 2,
  'A+': 2,
  'B-': 1
}
  */

  const people = [
    { name: "Carlos", bloodType: "O+" },
    { name: "Sofía", bloodType: "A+" },
    { name: "Juan", bloodType: "O+" },
    { name: "Ana", bloodType: "B-" },
    { name: "Luis", bloodType: "A+" },
  ];

  const peopleOPositive = people.filter(
    (person) => person.bloodType === "O+"
  ).length;

  const peopleAPositive = people.filter(
    (person) => person.bloodType === "A+"
  ).length;

  const peopleBNegative = people.filter(
    (person) => person.bloodType === "B-"
  ).length;

  // const typeBloodData = {
  //   "O+": peopleOPositive,
  //   "A+": peopleAPositive,
  //   "B-": peopleBNegative,
  // };

  // console.log(typeBloodData);
  // console.log(peopleOPositive);
  // console.log(peopleAPositive);
  // console.log(peopleBNegative);

  let countOPositive = 0;
  let countAPositive = 0;
  let countBNegative = 0;
  const miracle = people.reduce((accumulator, person, index) => {
    if (person.bloodType === "O+") {
      // console.log(person.bloodType);
      countOPositive++;
    }
    if (person.bloodType === "A+") {
      // console.log(person.bloodType);
      countAPositive++;
    }
    if (person.bloodType === "B-") {
      // console.log(person.bloodType);
      countBNegative++;
    }

    return { "O+": countAPositive, "A+": countAPositive, "B-": countBNegative };

    // console.log(index);
    // console.log(accumulator);

    // console.log(accumulator + person.bloodType);
  }, 0); // Por descubrir el 0 este me di cuenta que se podia hacer lo que hice ahora, por que en el anterior ejercicio del reduce si te puedes dar cuenta, tube que usar el map porque sin el 0 este en el reduce el currentValue no iniciaba desde el indice 0

  // console.log(countOPositive);

  // console.log(countAPositive);

  // console.log(countBNegative);
  // console.log(miracle);

  /* 
  Crear una lista de correos válidos

  Filtra solo los correos válidos (que tengan "@" y terminen en .com).
  */

  const emails = [
    "juan@gmail.com",
    "invalid-email",
    "ana123@outlook.com",
    "sofía@hotmail",
    "luis@gmail.com",
  ];

  const emailRegex =
    /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

  const validEmails = emails.filter((email) => {
    if (emailRegex.test(email)) return email;
  });

  // console.log(validEmails);

  /*   Devolver un array con los nombres únicos

  Devuelve un array con los nombres únicos, es decir, sin repetir.

 */

  const people1 = [
    { name: "Ana" },
    { name: "Luis" },
    { name: "Ana" },
    { name: "Carlos" },
    { name: "Luis" },
    { name: "María" },
  ];

  let count = 0;
  let index1 = 0;
  let clearRepetitions = [];
  let nameTimesArray = 0;
  const noRepeated = people1.filter((person, index) => {
    // console.log(people1[0]);
    // console.log(people1[0]);

    console.log("Afuera " + count, index);
    if (count != index) {
      console.log(count, index);
      if (people1[count].name === person.name) {
        if (true !== index) {
          console.log(
            `people1[${count}}].name: ${people1[count].name}\npersona.name, ${index}: ${person.name}`
          );

          nameTimesArray++;
          console.log(
            `Nombre: ${people1[count].name} Vista: ${nameTimesArray}`
          );

          if (nameTimesArray >= 1) {
            count++;

            nameTimesArray = 0;
          }
        }
      }
      return people1.filter((e, i) => i !== count);
    }
  }, 0);

  console.log(noRepeated);

  people1.forEach((element) => {
    // console.log(element);
  });
};
