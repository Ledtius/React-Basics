export const PracticeJS = () => {
  const estudiantes = [
    { nombre: "Luis", nota: 16 },
    { nombre: "María", nota: 19 },
    { nombre: "Pedro", nota: 12 },
    { nombre: "Lucía", nota: 14 },
  ];

  // Usa map para crear un array solo con los nombres
  estudiantes.map((estudiante) => {
    console.log(estudiante.nombre);
  });

  console.log(estudiantes);

  // Usa filter para obtener los aprobados (nota >= 14)

  const newEstudiantes = estudiantes.filter((estudiante) => {
    if (estudiante.nota >= 14) return estudiante;
  });

  console.log(newEstudiantes);

  // Usa find para buscar a Pedro
  estudiantes.find((estudiante) => {
    if (estudiante.nombre === "Pedro") console.log(estudiante);
  });

  // Usa some para saber si alguien sacó más de 18

  const mayorA18 = estudiantes.some((estudiante) => estudiante > 18);

  console.log(mayorA18);
  // Usa reduce para sacar el promedio de notas

  const promedio = estudiantes.reduce((acu, estudiante, index, array) => {
    const nota = estudiante.nota;
    acu = acu + nota;
    if (index >= array.length - 1) return acu / 4;
    return acu;
  }, 0);
  console.log(promedio);
};
