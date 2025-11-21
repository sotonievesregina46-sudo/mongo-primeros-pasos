use('Escuela');

db.alumnos.deleteMany({ nombre: { $in: ['Juan Pérez', 'Ana López'] } });

db.professores.deleteMany({ nombre: { $in: ['Roberto Gómez', 'Diana Ortega'] } });

db.cursos.deleteMany({ nombre: { $in: ['Álgebra', 'Química Orgánica'] } });

db.grupos.deleteMany({ nombre: { $in: ['1A', '2B'] } });

db.calificaciones.deleteMany({ alumno: { $in: ['Juan Pérez', 'Ana López'] } });
