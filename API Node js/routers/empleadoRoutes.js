const express = require('express');
const router = express.Router();
const Empleado = require('../models/empleado');

//Obtener todos los datos del empleado
router.get('/empleado', async (req, res) =>{
    try {
        const empleado = await Empleado.find();
        res.send(empleado);
    }
    catch (err) {
        res.status(500).send(err);
    }

});

module.exports = router;