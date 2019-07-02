// Require Dependencies
var express = require("express");
var mongoose = require("mongoose");
var expressHandlebars = require("express-handlebars");
var bodyParser = require("body-parser");

// Set up the Port
var PORT = process.env.PORT || 3000;

// If deployed, use deployed database. Otherwise use the local mongoheadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/monogHeadlines";

// Initiates Express App
var app = express();

// Set up the Express Router
var router = express.Router();

// Requires the routes file to pass the router object
require("./config/routes")(router);

// Assigns Public Folder as Static Directory
app.use(express.static(_dirname + "/public"));

// Connecting Handlebars to Express
app.engine("handlebars", expressHandlebars({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

//Using bodyParser
app.use(bodyParser.urlencoded({
    extended: false
}));

// Have Requests go through Router
app.use(router);

// Connect mongoose to DB
mongoose.connect(MONGODB_URI, function(error) {
    if (error) {
        console.log(error);
    } 
    else {
        console.log("mongoose connection is successful");
    }
});

// Listen on Port...
app.listen(PORT, function() {
    console.log("Listening on port:" + PORT);
});