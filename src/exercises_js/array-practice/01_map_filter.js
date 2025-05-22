export const PracticeJS = () => {
  const productos = [
    { nombre: "Laptop", precio: 2500 },
    { nombre: "Mouse", precio: 50 },
    { nombre: "Teclado", precio: 100 },
  ];

  // Agrega un producto
  productos.push({ ["nombre"]: "Monitor", ["precio"]: 1000 });

  console.log(productos);
  // Elimina el segundo
  productos.splice(1, 1);
  console.log(productos);

  // Cambia el precio del primero
  productos[0]["precio"] = 2000;
  console.log(productos);
};
