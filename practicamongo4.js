use('Escuela');

db.alumnos.updateOne(
  { nombre: 'Luis Torres' },
  { $set: { edad: 17, grupo: "5B" } }
);

db.alumnos.updateOne(
  { nombre: 'Carlos Vega'},
  { $set: { edad: 16, grupo: "4A" } }
);

db.profesores.updateOne(
  { nombre: 'Mario Cárdenas' },
  { $set: { años_experiencia: 13, materia: 'Física' } }
);

db.profesores.updateOne(
  { nombre: 'Rosa Méndez' },
  { $set: { años_experiencia: 6, materia: 'Biología' } }
);

db.cursos.updateOne(
  { nombre: 'Biología General' },
  { $set: { nivel: 'Avanzado' } }
);

db.cursos.updateOne(
  { nombre: 'Computación I' },
  { $set: { nivel: 'Intermedio', horas:27 } }
);

db.grupos.updateOne(
  { nombre: '1B', tutor: 'Víctor Luna' },
  { $set: { tutor: 'Victoria Perez' } }
);

db.grupos.updateOne(
  { nombre: '5A',  alumnos: 21 },
  { $set: { nombre: "5AB", alumnos: 27 } }
);

db.calificaciones.updateOne(
  { alumno: 'Luis Torres', curso: 'Biología General' },
  { $set: { calificacion: 80 } }
);

db.calificaciones.updateOne(
  { alumno: 'Paula Reyes', curso: 'Artes Plásticas' },
  { $set: { calificación: 92 } }
);
