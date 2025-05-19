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

console.log(sumWithInitial);
const sumNumbersR = numbersR.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);

console.log(sumNumbersR);

const sumPrices = prices.reduce(
  (accumulator, currentPrice) => accumulator + currentPrice
);

console.log(sumPrices);
