use('Escuela');

db.alumnos.find({ edad: 17 });

db.profesores.find({ materia: 'Matemáticas' });

db.cursos.find({ nivel: 'Básico' });

db.grupos.find({ grupo: '1A' });

db.calificaciones.find({ calificación: { $gt: 81 } });

db.alumnos.find({ grado: '3A'});

db.profesores.find({ años_experiencia: { $gt: 10 } });

db.cursos.find({ horas: 20 });

db.grupos.find({alumnos: 21 });

db.alumnos.find({ nombre: { $regex: 'Carlos' } });
