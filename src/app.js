const express = require('express'),
      app = express(),
      port = 8080,
      bodyParser = require('body-parser'),
      MongoClient = require('mongodb').MongoClient,
      uri = "mongodb://hakeem1106:Megan1106@testclust-shard-00-00-w12h6.mongodb.net:27017,testclust-shard-00-01-w12h6.mongodb.net:27017,testclust-shard-00-02-w12h6.mongodb.net:27017/test?ssl=true&replicaSet=TestClust-shard-0&authSource=admin&retryWrites=true",
      client = new MongoClient(uri, { useNewUrlParser: true });


export default nowConn=()=> client.connect(err => {
  console.log("db connected")
});


/*let nameSave = new mongoose.Schema({
    name: String
});
*/

app.get("/", (req, res) => {
 res.send("Hello World");
});

app.listen(port, () => {
 console.log("Server listening on port " + port);
});

