const express = require('express');
const app = express();
const port = 8080;

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;mongoose.connect("");

app.get("/", (req, res) => {
 res.send("Hello World");
});

app.listen(port, () => {
 console.log("Server listening on port " + port);
});