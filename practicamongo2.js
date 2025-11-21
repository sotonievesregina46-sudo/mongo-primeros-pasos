
use('Escuela');

db.alumnos.insertMany([
  { nombre: 'Juan Pérez', edad: 17, grado: '5A' },
  { nombre: 'Ana López', edad: 16, grado: '4B' },
  { nombre: 'Luis Torres', edad: 15, grado: '3A' },
  { nombre: 'María Ruiz', edad: 17, grado: '5B' },
  { nombre: 'Carlos Vega', edad: 14, grado: '2A' },
  { nombre: 'Lucía Díaz', edad: 16, grado: '4A' },
  { nombre: 'Pedro Lima', edad: 15, grado: '3B' },
  { nombre: 'Paula Reyes', edad: 14, grado: '2B' },
  { nombre: 'Miguel Soto', edad: 13, grado: '1A' },
  { nombre: 'Sara Campos', edad: 13, grado: '1B' }
]);

db.profesores.insertMany([
  { nombre: 'Roberto Gómez', materia: 'Matemáticas', años_experiencia: 12 },
  { nombre: 'Elena Fuentes', materia: 'Historia', años_experiencia: 8 },
  { nombre: 'Jorge Ramírez', materia: 'Biología', años_experiencia: 11 },
  { nombre: 'Laura Vázquez', materia: 'Química', años_experiencia: 6 },
  { nombre: 'Mario Cárdenas', materia: 'Física', años_experiencia: 10 },
  { nombre: 'Sandra Peña', materia: 'Inglés', años_experiencia: 7 },
  { nombre: 'Víctor Luna', materia: 'Artes', años_experiencia: 5 },
  { nombre: 'Diana Ortega', materia: 'Geografía', años_experiencia: 9 },
  { nombre: 'Rosa Méndez', materia: 'Computación', años_experiencia: 4 },
  { nombre: 'Luis Salazar', materia: 'Deportes', años_experiencia: 13 }
]);

db.cursos.insertMany([
  { nombre: 'Álgebra', nivel: 'Intermedio', horas: 40 },
  { nombre: 'Historia Universal', nivel: 'Básico', horas: 35 },
  { nombre: 'Biología General', nivel: 'Intermedio', horas: 42 },
  { nombre: 'Química Orgánica', nivel: 'Avanzado', horas: 50 },
  { nombre: 'Física Mecánica', nivel: 'Intermedio', horas: 45 },
  { nombre: 'Inglés I', nivel: 'Básico', horas: 30 },
  { nombre: 'Computación I', nivel: 'Básico', horas: 25 },
  { nombre: 'Artes Plásticas', nivel: 'Básico', horas: 20 },
  { nombre: 'Geografía Física', nivel: 'Intermedio', horas: 38 },
  { nombre: 'Deportes I', nivel: 'Básico', horas: 15 }
]);

db.grupos.insertMany([
  { grupo: '1A', tutor: 'Sandra Peña', alumnos: 28 },
  { grupo: '1B', tutor: 'Víctor Luna', alumnos: 26 },
  { grupo: '2A', tutor: 'Laura Vázquez', alumnos: 30 },
  { grupo: '2B', tutor: 'Mario Cárdenas', alumnos: 27 },
  { grupo: '3A', tutor: 'Diana Ortega', alumnos: 25 },
  { grupo: '3B', tutor: 'Luis Salazar', alumnos: 29 },
  { grupo: '4A', tutor: 'Elena Fuentes', alumnos: 23 },
  { grupo: '4B', tutor: 'Rosa Méndez', alumnos: 24 },
  { grupo: '5A', tutor: 'Roberto Gómez', alumnos: 21 },
  { grupo: '5B', tutor: 'Jorge Ramírez', alumnos: 22 }
]);

db.calificaciones.insertMany([
  { alumno: 'Juan Pérez', curso: 'Álgebra', calificacion: 88 },
  { alumno: 'Ana López', curso: 'Historia Universal', calificacion: 92 },
  { alumno: 'Luis Torres', curso: 'Biología General', calificacion: 85 },
  { alumno: 'María Ruiz', curso: 'Química Orgánica', calificacion: 90 },
  { alumno: 'Carlos Vega', curso: 'Física Mecánica', calificacion: 78 },
  { alumno: 'Lucía Díaz', curso: 'Inglés I', calificacion: 95 },
  { alumno: 'Pedro Lima', curso: 'Computación I', calificacion: 89 },
  { alumno: 'Paula Reyes', curso: 'Artes Plásticas', calificacion: 94 },
  { alumno: 'Miguel Soto', curso: 'Geografía Física', calificacion: 81 },
  { alumno: 'Sara Campos', curso: 'Deportes I', calificacion: 87 }
]);
