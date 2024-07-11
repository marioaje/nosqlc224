const mongoose = require('mongoose');

const empleadoSchema = new mongoose.Schema(
        {
            nombre: {type: String, required: true},
            salario: {type: Number, required: true},
            genero: {type: String, required: true},
            diat:  {type: Number, required: true},
            area: {type: String, required: true},
            edad: {type: Number, required: true},
            fechapago: {type: Date, required: true}
        }
);

module.exports = mongoose.model('Empleado', empleadoSchema);

// id
// 666120547f40dbf889f0615b
// nombre
// "Joel"
// salario
// 1000
// genero
// "M"
// diat
// 7
// area
// "Ventas"
// edad
// 30
// fechapago
// 2023-01-15T00:00:00.000+00:00

// "_id": {
//     "nombre":"Joel",
// 		"salario":1000,
// 		"genero": "M",
//     "diat":7,
// 		"area":"Ventas",
// 		"edad":30,
// 		"fechapago": 2023-01-15T00:00:00.000+00:00
//   }