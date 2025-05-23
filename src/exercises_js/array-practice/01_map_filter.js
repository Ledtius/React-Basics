export const PracticeJS = () => {
  const persona = {
    nombre: "Laura",
    edad: 29,
    ciudad: "Bogotá",
  };

  // Usa destructuring para obtener nombre y edad
  const { nombre, edad } = persona;

  console.log(nombre, edad);

  // Usa spread para clonar el objeto y agregar una propiedad "profesion"

  const clon = { ...persona, ["profesion"]: "Ingeniero" };

  console.log(clon);
};
