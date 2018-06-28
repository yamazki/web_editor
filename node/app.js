const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const mongodb = require('mongodb');
const bodyParser = require('body-parser');
const MongodbClient = require('./lib/mongodb/MongodbClient.js'); 
  
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/editor", function(req, res) {
  res.sendFile(__dirname + "/views/editor.html");
});

app.get("/signup", function(req, res) {
  res.sendFile(__dirname + "/views/signup.html");
});
  
app.get("/savefile", function(req, res) {
});

app.get("/loadfile", function(req, res) {
});

io.on('connection', function(socket){
  
  socket.on("text changed", function(uploadedText) {
    io.emit("text overwrite", uploadedText);
  });
  
});

http.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

