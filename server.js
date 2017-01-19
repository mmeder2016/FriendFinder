var express = require('express');
var bodyParser = require("body-parser");
var path = require("path");
var fs = require('fs');

var PORT = process.env.PORT || 3000;

var apiRoutes = require('./app/routing/apiRoutes');
var htmlRoutes = require('./app/routing/htmlRoutes');

var app = express();

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
    type: "application/vnd.api+json"
}));

app.use(apiRoutes);
app.use(htmlRoutes);

// Set up automatic serving of static files
//app.use(express.static('app/public/'));

app.listen(PORT, function(){
	console.log("App listening on " + PORT);
});
