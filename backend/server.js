
const express = require('express');
const path = require('path');
const bodyParser= require('body-parser');
const app = express();
const connectDB = require('./database');

const PORT = process.env.PORT || 5000;

connectDB();

app.get('/',(req,res) => {
    res.send('API running');
});

app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
        /*MongoClient.connect(connectionString, {
            useUnifiedTopology: true
        }, (err, client) => {
            if (err) return console.error(err)
            console.log('Connected to Database')
        });}*/
});




