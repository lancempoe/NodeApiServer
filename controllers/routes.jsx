const winston = require('winston');
const express = require('express');
const router = new express.Router();
const catCtrl = require('./catsCtrl.jsx');

// middleware to use for all requests
router.use((req, res, next)  => {
    winston.log('INFO', `Processing Request: ${req.method} on \"${req.path}\"`);
    //At this point I could make sure that a user is authenticated.
    next(); // Go to the next routes and don't stop here
});

// ROUTES FOR OUR API
router.route('/cats').get(catCtrl.getCats);
router.route('/cats').post(catCtrl.postCat);
router.route('/cats/:cat_id').get(catCtrl.getCat);
router.route('/cats/:cat_id').put(catCtrl.putCat);
router.route('/cats/:cat_id').delete(catCtrl.deleteCat);

module.exports = router;