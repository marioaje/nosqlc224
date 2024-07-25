const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    apellido: {
        type: String,
        required: true,
    },
    identificacion: {
        type: String,
        required: true,
    },
    telefono: {
        type: String,
        required: true,
    },
});

const Usuario = mongoose.model('Usuario', UsuarioSchema);

module.exports = Usuario;
