export const PracticeJS = () => {
  /*   const survey = [
    { id: 1, name: "Carlos", answers: { q1: "Yes", q2: "No", q3: "Yes" } },
    { id: 2, name: "Ana", answers: { q1: "Yes", q2: "Yes", q3: "No" } },
    { id: 3, name: "Lucía", answers: { q1: "No", q2: "Yes", q3: "Yes" } },
  ]; */

  /* 
  1. Use `reduce` to count how many times "Yes" was answered per question.  
    Expected result:
    
    ```js
    { q1: 2, q2: 2, q3: 2 }
    ```
    
2. Use `Object.entries` + `map` to create strings like:  
    `"Carlos: Yes, No, Yes"`
    
3. Create a function with **default parameters** that allows adding new responses to the array.
  
  */

  /*   const yesCounterAnswers = survey.reduce((acc, { answers }, index) => {
    const keysA = Object.keys(answers);

    const valuesA = Object.values(answers);

    if (keysA[0]) {
    
      if (valuesA[0] === "Yes") {
        acc[keysA[0]] = (acc[keysA[0]] || 0) + 1;
        
      }
      if (valuesA[1] === "Yes") {
        acc[keysA[1]] = (acc[keysA[1]] || 0) + 1;
      }
      if (valuesA[2] === "Yes") {
        acc[keysA[2]] = (acc[keysA[2]] || 0) + 1;
      }
  
    }

    return acc;
  }, {});
  console.log(yesCounterAnswers); */

  const inventory = [
    { id: 1, name: "Laptop", price: 1200, stock: 10 },

    { id: 2, name: "Mouse", price: 25, stock: 200 },

    { id: 3, name: "Keyboard", price: 75, stock: 120 },
  ];

  /* 1. Use `map` to create an array of strings like:  

    `"Product: Laptop | Price: $1200"`

2. Use `filter` + `reduce` to calculate the total inventory value (`price * stock`).

3. Create a function that takes an `id` and returns the product using `find` and `optional chaining`.

4. Add a new product using `spread` without modifying the original array.

     */

  const priceProduct = inventory.map(
    ({ name, price }) => `Product: ${name} | Price: ${price}`
  );

  console.log(priceProduct);

  /* I think that third point of this exercise is wrong,the filter method is not necessary and I think that is not correct implemented because the filter method return in this case a array of objects in base in one condition and doesn't matter apply this in this case if the exercise told something like: Use `filter`  + `reduce` to calculate the total inventory value only for mouses and keyboard or only for prices greater than 25 for example   */

  /* 2. First form without of the third point of the exercise  */

  const averagePrice = Math.round(
    inventory
      .map(({ price, stock }) => price * stock)
      .reduce((acc, stockPrice) => acc + stockPrice, 0) / inventory.length
  );
  console.log(averagePrice);
  /* 2. Second form without of the third point of the exercise  */

  const averagePrice2 = Math.round(
    inventory.reduce((acc, product) => {
      const { price, stock } = product;

      acc += price * stock;

      return acc;
    }, 0) / inventory.length
  );

  console.log(averagePrice2);

  const newInventory = [
    ...inventory,

    { id: inventory.length + 1, name: "Monitor", price: 800, ["stock"]: 12 },
  ];

  console.log(newInventory);

  const findProduct = (idToFind = 1) => {
    const productFound =
      inventory.find((product) => idToFind === product.id)?.name ??
      "Product not found";

    console.log(productFound);
  };

  findProduct(4);
};
