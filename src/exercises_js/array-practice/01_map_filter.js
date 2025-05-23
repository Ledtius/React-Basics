export const PracticeJS = () => {
  const frutas = ["melocoton", "banana", "mango", "piña"];

  // Recorre el array y muestra cada fruta en mayúsculas con forEach

  frutas.forEach((fruta) => {
    console.log(fruta.toUpperCase());
  });
  
  // Crea un nuevo array que tenga solo las frutas que terminan en "a"
  const newFrutas = frutas.filter((fruta) =>
    fruta[fruta.length - 1].includes("a")
  );
  console.log(newFrutas);

};
