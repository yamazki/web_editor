const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const mongodb = require('mongodb');
const bodyParser = require('body-parser');
const MongodbClient = require('./lib/mongodb/MongodbClient.js'); 
  
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

let mongodbClient = new MongodbClient();

app.get("/", function(req, res){
  res.sendFile(__dirname + "/views/index.html");
  let firstConnectMessage = "new connect";
});

  

http.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

