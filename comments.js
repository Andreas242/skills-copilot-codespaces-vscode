//setup webserver
var express = require('express');
var app = express();

//setup body parser
var bodyParser = require('body-parser');
app.use(bodyParser.json());

//setup mongodb
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/comment');
