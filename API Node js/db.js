const mongoose = require('mongoose');

const dbURL = 'mongodb://localhost:27017/miapi';

const connectDB = async () => {
    try {
        await mongoose.connect(dbURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Conectado a la base de datos de MongoDB');
    } catch (error) {
        console.error('Error al conectar a la base de datos de MongoDB', error);
        process.exit(1);
    }
};

module.exports = connectDB;
