const mongoose = require('mongoose');

const dbURL = 'mongodb://localhost:27017/miapi';

const connectDB = async () => {
    try {
        await mongoose.connect(dbURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connect a la BD miapi');
    } catch (error) {
        console.error('No Connect a la BD miapi, error: ' + error);
        process.exit(1);
    }

};

module.exports = connectDB;