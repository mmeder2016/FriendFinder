var express = require('express');
var path = require("path");
var fs = require('fs');

var apiRoutes = express.Router();

var peopleFile = "people.json";
var people = [];

var people = [{
        name: "George Washington",
        photo: "http://www.mapsofworld.com/usa/presidents/images/thumbnail/George_Washington.jpg",
        scores: ['2', '3', '4', '5', '5', '4', '3', '2', '1', '1']
    }, {
        name: 'Thomas Jefferson',
        photo: 'http://www.mapsofworld.com/usa/presidents/images/thumbnail/Thomas_Jefferson.jpg',
        scores: ['1', '2', '3', '4', '5', '5', '4', '3', '2', '1']
    }, {
        name: 'John Adams',
        photo: 'http://www.mapsofworld.com/usa/presidents/images/thumbnail/john_adams.jpg',
        scores: ['5', '5', '3', '3', '1', '1', '2', '2', '4', '4']
    }, {
        name: 'James Madison',
        photo: 'http://www.mapsofworld.com/usa/presidents/images/thumbnail/James_Madison.jpg',
        scores: ['3', '3', '3', '3', '3', '3', '3', '3', '3', '']
    }, {
        name: 'James Monroe',
        photo: 'http://www.mapsofworld.com/usa/presidents/images/thumbnail/James_Monroe.jpg',
        scores: ['1', '2', '3', '3', '2', '1', '1', '2', '3', '3']
    }
];



apiRoutes.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

apiRoutes.get('/friends', function(req, res) {
    console.log("apiRoutes.get(\'/friends\', function(req, res) {");
    res.json(people[Math.floor((Math.random() * people.length))]);
});

apiRoutes.post('/friends', function(req, res) {
    console.log("apiRoutes.post(\'/friends\', function(req, res) {");

    people.push(req.body);

    fs.writeFileSync(peopleFile, JSON.stringify(people));

    res.send("apiRoutes.post(\'/friends\', function(req, res) {");
});

module.exports = apiRoutes;