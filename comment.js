// create web server
// create a web server that listens on port 3000 and serves up the comment.js file from the previous exercise.

var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    fs.readFile('comment.js', 'utf8', function(err, data) {
        if (err) {
            res.end('Error reading file');
        } else {
            res.end(data);
        }
    });
}).listen(3000, 'localhost');

console.log('Server running at http://localhost:3000/');