var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    path = require('path')
fs = require('fs');

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/**Create page */
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));

}).listen(8080);

