/**
 * Created by lancepoehler on 11/20/16.
 *
 * Node looks here when starting the application to know how to configure the API
 */

const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes.jsx');
const app = express();
const port = process.env.PORT || 8080;

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// REGISTER ROUTES
app.use('/api', routes);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log(`Server is now running on http://www.localhost:${port}/api/`);
