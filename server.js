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

app.post('/newPlayer', function(req, res) {
    fs.readFile('players.json', 'utf8', function readFileCallback(err, data) {
        if (err) {
            console.log(err);
        } else {
            var obj = JSON.parse(data);
            obj.players.push(req.body);
            json = JSON.stringify(obj);
            fs.writeFile('players.json', json, 'utf8', (err) => {
                if (err) throw err;
                console.log('The file has been saved!');
            });
           res.send(data);
        }
    });
});
