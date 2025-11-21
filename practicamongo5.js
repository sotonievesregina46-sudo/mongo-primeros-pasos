// Usamos la base de datos 'Escuela'
use('Escuela');

db.alumnos.find({ grado: '5A' });

db.alumnos.find({ edad: 17 });

db.alumnos.find({ nombre: 'Juan Pérez' });

db.alumnos.find({ grado: '4A' });

db.alumnos.find({ edad: { $lt: 16 } });

db.alumnos.find({ nombre: { $regex: '^M' } });

db.alumnos.find({ grupo: '3B' });

db.alumnos.find({ edad: { $gte: 16 } });

db.alumnos.find({ nombre: { $regex: 'o', $options: 'i' } });

db.alumnos.aggregate([
  { $group: { _id: "$grupo", total_alumnos: { $sum: 1 } } }
]);

db.profesores.find({ materia: 'Matemáticas' });

db.profesores.find({ años_experiencia: { $gt: 10 } });

db.profesores.find({ años_experiencia: { $lte: 5 } });

db.profesores.find({ nombre: { $regex: '^R' } });

db.profesores.find({ materia: 'Historia' });

db.profesores.find({ años_experiencia: { $gt: 8 } });

db.profesores.find({ nombre: { $regex: 'a', $options: 'i' } });

db.profesores.find({ materia: 'Inglés' });

db.profesores.find({ años_experiencia: { $lt: 7 } });

db.profesores.find({}, { _id: 0, nombre: 1, años_experiencia: 1 });

db.cursos.find({ nivel: 'Básico' });

db.cursos.find({ horas: { $gt: 40 } });

db.cursos.find({ nombre: 'Física' });

db.cursos.find({ nombre: { $regex: '^A' } });

db.cursos.find({ nivel: 'Intermedio', horas: { $gt: 40 } });

db.cursos.find({ horas: { $lt: 30 } });

db.cursos.find({ nombre: { $regex: 'Biología', $options: 'i' } });

db.cursos.find({ horas: { $gte: 30, $lte: 40 } });

db.cursos.find({ nivel: 'Avanzado' });

db.cursos.find({ nombre: 'Computación I' });

db.grupos.find({ tutor: 'Sandra Peña' });

db.grupos.find({ alumnos: { $gt: 25 } });

db.grupos.find({ grupo: { $regex: '^1' } });

db.grupos.find({ alumnos: { $lt: 25 } });

db.grupos.find({ tutor: 'Roberto Gómez' });

db.grupos.find({ alumnos: { $gt: 27 } });

db.grupos.find({ grupo: '5A' });

db.grupos.find({ grupo: { $regex: 'A', $options: 'i' } });

db.grupos.find({ tutor: 'Luis Salazar' });

db.grupos.find({ alumnos: { $lt: 24 } });

db.calificaciones.find({ calificacion: { $gt: 90 } });

db.calificaciones.find({ curso: 'Biología General' });

db.calificaciones.find({ alumno: 'Juan Pérez' });

db.calificaciones.find({ calificacion: { $lt: 80 } });

db.calificaciones.find({ curso: 'Álgebra' });

db.calificaciones.find({ curso: 'Deportes I' });

db.calificaciones.find({ calificacion: { $gt: 85 } });

db.calificaciones.find({ alumno: { $regex: '^M' } });

db.calificaciones.find({ calificacion: { $gte: 90 } });

db.calificaciones.find({}, { _id: 0, alumno: 1, calificacion: 1 });
