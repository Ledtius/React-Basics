export const PracticeJS = () => {
  const numeros = [10, 20, 30, 40];

  // Usa destructuring para obtener los dos primeros números
  const [index1, index2] = numeros;

  console.log(index1);
  console.log(index2);

  // Usa rest para guardar el resto en otra variable

  const [in1, in2, ...res] = numeros;

  console.log(res);
  // Crea una copia del array y agrega 50 al final usando spread
  const copy = [...numeros, 60];
  console.log(copy);
};
