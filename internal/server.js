
const express = require('express');
const bodyParser= require('body-parser');
const app = express();

const MongoClient = require('mongodb').MongoClient;
const connectionString = 'mongodb+srv://arnav1:test123@cluster0-opdre.mongodb.net/test?retryWrites=true&w=majority';

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, () => {
    console.log(`Server running on port 3000`);
    MongoClient.connect(connectionString, {
    useUnifiedTopology: true
    }, (err, client) => {
    if (err) return console.error(err)
    console.log('Connected to Database')
});}
);



