'use strict';

var express = require('express');
var app = express();
var port = process.env.PORT || 4000;
var time = new Date();
var clc = require('cli-color');
var path = require('path');
var bodyparser = require('body-parser');

app.use(express.static(__dirname + '/'));

app.get('/', function (req, res) {
  res.sendFile('./index.html');
});

app.get('/teaorcoffee', function (req, res) {
  res.sendFile(__dirname + '/views/teaorcoffee.html')
});

app.listen(port, function () {
  console.log(clc.cyanBright('server started at: ' + time + ' on port: ' + port));
});