// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var ua = require('universal-analytics');
var visitor = ua('UA-109501568-1');
visitor.pageview(window.location.href).send();


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Serve static content for the app from the 'public' directory
// =============================================================
app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));

// Import routes and give the server access to them
// =============================================================
var router = require('./controllers/shopController.js');

app.use('/', router);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

