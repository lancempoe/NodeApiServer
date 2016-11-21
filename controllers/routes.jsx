const express = require('express');
const router = new express.Router();
const catCtrl = require('./cats.jsx');

// ROUTES FOR OUR API
router.route('/cats').get(catCtrl.getCats);

router.route('/').get((req, res) => {
    res.json({message: 'You should check for some cats!'});
});

module.exports = router;