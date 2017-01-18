var express = require('express');
var path = require("path");

var apiRoutes = express.Router();
var people = [];

apiRoutes.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

apiRoutes.get('/friends', function(req, res) {
    console.log("apiRoutes.get(\'/friends\', function(req, res) {");
    res.send("apiRoutes.get(\'/friends\', function(req, res) {");
});

apiRoutes.post('/friends', function(req, res) {
    console.log("apiRoutes.post(\'/friends\', function(req, res) {");

    var person = req.body;
    person.routeName = person.name.replace(/\s+/g, "").toLowerCase();
    console.log(person);
    people.push(person);
    res.json(person);

    res.send("apiRoutes.post(\'/friends\', function(req, res) {");
});

module.exports = apiRoutes;