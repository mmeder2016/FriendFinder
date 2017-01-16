var express = require('express');
var apiRoutes = require('./app/routing/apiRoutes');
var htmlRoutes = require('./app/routing/htmlRoutes');

var app = express();

// Set up automatic serving of static files
app.use(express.static('app/public/'));

app.get('/', function(req, res) {
    res.send('Hello World');
});

app.listen(3000);