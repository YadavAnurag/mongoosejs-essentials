const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var Book = require('./book.model');
const app = express();
const PORT = 3000;

var db = 'mongodb://localhost/bookdb';
mongoose.connect(db, ()=>{
    console.log('connected');
});


app.get('/', (req, res)=>{
    res.send('Get the root');
});

app.listen(PORT, ()=>{
    console.log(`Server is listening on ${PORT}`);
    
});