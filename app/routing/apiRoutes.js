var express = require('express');
var path = require("path");
var fs = require('fs');
var friends = require('../data/friends');

var apiRoutes = express.Router();

var FRIENDSFILE = "friends.json";
var DEBUG = true;

apiRoutes.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

//     For the POST and GET API call in this file, I use a JSON file to hold
// the friends array during development. This makes it convenient for 
// debugging. 

// API GET Request /friends
// Creates response containing the friends array as JSON data
apiRoutes.get('/friends', function(req, res) {
    console.log("apiRoutes.get(\'/friends\', function(req, res) {");

    if (DEBUG) {
        try {
            var data = fs.readFileSync(FRIENDSFILE);
            friends = JSON.parse(data);
        } catch (err) {
            // if the file is not found, use the array contents
            console.log("Error reading file \"" + FRIENDSFILE + "\", using static array.");
        }
    }

    res.json(friends);
});

apiRoutes.post('/friends', function(req, res) {
    console.log("apiRoutes.post(\'/friends\', function(req, res) {");
    friends.push(req.body);

    if (DEBUG) {
        try {
            fs.writeFileSync(FRIENDSFILE, JSON.stringify(friends));
        } catch (err) {
            // if the file is not found, use the array contents
            console.log("Error writing file \"" + FRIENDSFILE + "\".");
        }
    }
    res.json(friends[Math.floor((Math.random() * friends.length))]);
});

module.exports = apiRoutes;