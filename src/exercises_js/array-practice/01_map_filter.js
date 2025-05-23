export const PracticeJS = () => {
  const empresa = {
    nombre: "TechCorp",
    empleados: [
      {
        nombre: "Carlos",
        cargo: "Desarrollador",
        habilidades: ["JS", "React"],
      },
      {
        nombre: "Ana",
        cargo: "Diseñadora",
        habilidades: ["Figma", "Photoshop"],
      },
    ],
  };

  // Muestra el nombre del segundo empleado

  console.log(empresa["empleados"][1]["nombre"]);

  // Agrega "TypeScript" a las habilidades de Carlos
  empresa["empleados"][0]["habilidades"].push("TypeScript");
  console.log(empresa["empleados"][0]["habilidades"]);

  // Crea un array con todos los nombres de empleados
  const nombresEmpleados = empresa.empleados.map((empleado) => {
    return empleado["nombre"];
  });

  console.log(nombresEmpleados);
};
