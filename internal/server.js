
const express = require('express');
const path = require('path');
const bodyParser= require('body-parser');
const app = express();

const PORT = process.env.PORT || 5000;

const MongoClient = require('mongodb').MongoClient;
const connectionString = 'mongodb+srv://arnav1:test123@cluster0-opdre.mongodb.net/test?retryWrites=true&w=majority';

//app.use(bodyParser.urlencoded({ extended: true }));
/*app.use(express.static(path.join(__dirname, 'personal-website/internal')));*/

app.get('/',(req,res) => {
    res.send('API running');
});

/*app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/public/index.html'));
});*/

app.listen(PORT, () => {
    {
        console.log(`Server running on port ${PORT}`);
        MongoClient.connect(connectionString, {
            useUnifiedTopology: true
        }, (err, client) => {
            if (err) return console.error(err)
            console.log('Connected to Database')
        });}
});




