const mongoose = require('mongoose');
const dbURI = 'mongodb://nodeuser:password@127.0.0.1:27017/NodeApiServer';
require('../model/cat.jsx');

module.exports = {
    connect() {
        mongoose.connect(dbURI);

        mongoose.connection.on('connected', function () {
            console.log('Mongoose connection open');
        });

        mongoose.connection.on('error',function (err) {
            console.log(`Mongoose connection error: ${err}`);
        });

        // If the Node process ends, close the Mongoose connection
        process.on('SIGINT', function() {
            mongoose.connection.close(function () {
                console.log('Mongoose connection disconnected through app termination');
                process.exit(0);
            });
        });
    }
};