const winston = require('winston');
const mongoose = require('mongoose');
const dbURI = 'mongodb://127.0.0.1:27017/forecast';
require('../model/cat.jsx');

module.exports = {
    connect() {
        mongoose.connect(dbURI);

        mongoose.connection.on('connected', () => {
            winston.info('Mongoose connection open');
        });

        mongoose.connection.on('error',(err) => {
            winston.error(`Mongoose connection error: ${err}`);
        });

        // If the Node process ends, close the Mongoose connection
        process.on('SIGINT', () => {
            mongoose.connection.close(() => {
                winston.info('Mongoose connection disconnected through app termination');
                process.exit(0);
            });
        });
    }
};