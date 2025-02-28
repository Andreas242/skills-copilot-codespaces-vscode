//create web server
const express = require('express');
const app = express();
const port = 3000;
//create a server
const http = require('http').Server(app);
//create a socket
const io = require('socket.io')(http);
//create a path
const path = require('path');
//create a public path
const publicPath = path.join(__dirname, './public');
//create a comment path
const commentPath = path.join(__dirname, './comment');
//create an array
let comments = [];

//send the public path
app.use(express.static(publicPath));
//send the comment patha
app.use(express.static(commentPath));
//send the comments
app.get('/comments', (req, res) => {
  res.json(comments);
});
//send the index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});
//create a socket connection
io.on('connection', (socket) => {
  socket.on('comment', (comment) => {
    comments.push(comment);
    io.emit('comment', comment);
  });
});
//create a server
http.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});