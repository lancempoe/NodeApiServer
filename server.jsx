/**
 * Created by lancepoehler on 11/20/16.
 *
 * Node looks here when starting the application to know how to configure the API
 */

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = new express.Router(); // Getting instance of the express Router
const port = process.env.PORT || 8080; // set the api port

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// ROUTES FOR OUR API
// =============================================================================

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', (req, res) => {
    res.json({message: 'hooray! welcome to our api!'});
});
// I can put more routes here. But I should move them to another routes.jsx class


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log(`Server is now running on http://www.{host}:${port}/api/`);
