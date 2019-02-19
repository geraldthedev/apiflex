import mongoose from 'mongoose';
const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');

db = mongoose.connect("mongodb+srv://hakeem1106:Megan1106@testclust-w12h6.mongodb.net/test?retryWrites=true");

let nameSave = new mongoose.Schema({
    name: String
});



app.get("/", (req, res) => {
 res.send("Hello World");
});

app.listen(port, () => {
 console.log("Server listening on port " + port);
});