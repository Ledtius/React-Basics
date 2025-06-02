export const PracticeJS = () => {
  const products = [{ id: 1, name: "Mouse" }];
  const newProduct = { id: 2, name: "Keyboard" };

  function addProduct(products, newProduct) {
    return Object.assign({}, ...products, newProduct );
    // return [...products, newProduct];
  }

  console.log(addProduct(products, newProduct));
  // → [
  //   { id: 1, name: "Mouse" },
  //   { id: 2, name: "Keyboard" }
  // ]
};
