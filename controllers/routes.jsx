const express = require('express');
const router = new express.Router();
const catCtrl = require('./catRoutes.jsx');

// middleware to use for all requests
router.use((req, res, next)  => {
    console.log(`API \"${req.path}\" is being requested.`);
    next(); // Go to the next routes and don't stop here
});

// ROUTES FOR OUR API
router.route('/cats').get(catCtrl.getCats);

module.exports = router;