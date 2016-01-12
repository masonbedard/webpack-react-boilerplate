var express = require('express');
var app = express();
app.use(express.static(__dirname + '/dist'));
var server = app.listen(8080);
console.log("Server listening at localhost:8080")