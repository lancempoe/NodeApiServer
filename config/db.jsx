const winston = require('winston');
const mongoose = require('mongoose');
const dbURI = 'mongodb://nodeuser:password@127.0.0.1:27017/NodeApiServer';
require('../model/cat.jsx');

module.exports = {
    connect() {
        mongoose.connect(dbURI);

        mongoose.connection.on('connected', () => {
            winston.log('INFO', 'Mongoose connection open');
        });

        mongoose.connection.on('error',(err) => {
            winston.log('ERROR', `Mongoose connection error: ${err}`);
        });

        // If the Node process ends, close the Mongoose connection
        process.on('SIGINT', () => {
            mongoose.connection.close(() => {
                winston.log('INFO', 'Mongoose connection disconnected through app termination');
                process.exit(0);
            });
        });
    }
};