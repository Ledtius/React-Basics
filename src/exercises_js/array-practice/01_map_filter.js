export const PracticeJS = () => {
  let numeros = [1, 2, 3, 4, 5];

  // Agrega el número 6 al final
  numeros.push(6);
  console.log(numeros);

  // Elimina el primer número
  numeros.pop();
  console.log(numeros);

  // Inserta el número 99 en la posición 2 (sin eliminar ninguno)
  numeros.splice(2, 0, 99);
  console.log(numeros);

  // Crea una copia del array desde el índice 1 al 3

  const copy = numeros.splice(0, 4);
  console.log(copy);
};
