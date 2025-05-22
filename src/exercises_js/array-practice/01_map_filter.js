export const PracticeJS = () => {
  const persona = {
    nombre: "Ana",
    edad: 28,
    direccion: {
      ciudad: "Lima",
      pais: "Perú",
    },
  };

  // Accede al nombre
  console.log(persona.nombre);
  console.log(persona["nombre"]);

  // Cambia la edad a 30
  persona.edad = 30;
  console.log(persona.edad);
  persona["edad"] = 30;
  console.log(persona["edad"]);

  // Agrega una propiedad "profesion" con valor "Ingeniera"
  persona.profesion = "Ingenieria";
  console.log(persona["profesion"]);
  persona["profesion"] = "Ingenieria";
  console.log(persona.profesion);

  // Muestra la ciudad
  console.log(persona.direccion.ciudad);
  console.log(persona["direccion"]["ciudad"]);
};
