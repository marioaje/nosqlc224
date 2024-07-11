const express = require('express');
const mongoose = require('mongoose');
const bodyParse = require('body-parser');
//Ocupo el CRUD de rutas???
const empleadoRoutes = require('./routers/empleadoRoutes');
const urlConexion = 'mongodb://localhost:27017/nuevaBaseMiercoles';
const url = 'http://localhost';

const app = express();
const port = 3002;

//Toda el app seria tipo json o se le conoce como serializar
app.use(bodyParse.json());

//Conexion de MongoDB
mongoose.connect(urlConexion,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).
    then(
        () => {
            console.log('Connect');
        }
    )
    .catch(err => 
        console.error("Error al conectar: ", err)

);

//Declaracion de rutas
app.use('/api', empleadoRoutes);

app.listen(port, () => {    
        console.log(`Puerto de servicio ${url}:${port}/api`, port);
});
