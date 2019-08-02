// REQUIRE
var express = require('express');
var mongoose = require('mongoose');
var Device = require('./api/models/deviceModel');
var Room = require('./api/models/roomModel');
var bodyParser = require('body-parser');

// MONGO
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/domo-api');

const PHILLIPSAPI = "S6Y5h1opJ90JSsnajfII9yxVRebNJy7LXV8DVB8P"

// SETUP APP
var port = process.env.PORT || 3000;
app = express();

// SETUP PARSER
app.use(bodyParser.urlencoded({extended: true, useNewUrlParser:true}));
app.use(bodyParser.json());

// SETUP ROUTES
var routesDevices = require('./api/routes/deviceRoute');
var routesRoom = require('./api/routes/roomRoute');
routesDevices(app);
routesRoom(app);

// START
app.listen(port);

console.info("Domo Link RESTful API started on : " + port);