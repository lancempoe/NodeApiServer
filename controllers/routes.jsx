const express = require('express');
const router = new express.Router();
const catCtrl = require('./catsCtrl.jsx');

function isValidUser(req) {
    //At this point I could make sure that a user is authenticated.
    return true;
}

// middleware to use for all requests
router.use((req, res, next)  => {
    console.log(`Processing Request: ${req.method} on \"${req.path}\"`);
    if (isValidUser(req)) {
        next(); // Go to the next routes and don't stop here
    } else {
        console.log('nope. get out of here.');
    }
});

// ROUTES FOR OUR API
router.route('/cats').get(catCtrl.getCats);
router.route('/cats').post(catCtrl.postCat);
router.route('/cats/:cat_id').get(catCtrl.getCat);
router.route('/cats/:cat_id').put(catCtrl.putCat);

module.exports = router;