use('escuela');
db.createCollection('alumnos');
db.alumnos.insertOne({
nombre:"Regina Soto",
edad: 16,
direccion:{
    Calle:"Av. Constituyentes", 
    "Numero":11, 
    Ciudad: "Queretaro"
   },
   Telefono:"4421310946"
   }
);