const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb://hakeem1106:Megan1106@testclust-shard-00-00-w12h6.mongodb.net:27017,testclust-shard-00-01-w12h6.mongodb.net:27017,testclust-shard-00-02-w12h6.mongodb.net:27017/test?ssl=true&replicaSet=TestClust-shard-0&authSource=admin&retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  console.log("db connected")
});


/*let nameSave = new mongoose.Schema({
    name: String
});
*/