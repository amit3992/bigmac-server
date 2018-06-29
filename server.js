const express = require('express'); // Create, send REST requests
const morgan = require('morgan'); // Simplifies process of logging
const bodyParser = require('body-parser'); 
const mongoose = require('mongoose'); // MongoDB agent library
const config = require('./config');
const cors = require('cors');
const app = express();

app.use(bodyParser.json()); // Read data in json
app.use(bodyParser.urlencoded({ extended: false}));
app.use(morgan('dev')); // Log out all the requests on the terminal
app.use(cors()); // For server and client to communicate with each other


mongoose.connect(config.database, (err) => {
    if(err) {
        console.log("Error connectng to mLab -> ", err);
    } else {
        console.log("Connected to mLab!");
    }
})

app.get('/', (req, res, next) => {
    res.json({
        user:'Amit Kulkarni'
    })
})

app.listen(config.port, (err) => {
    console.log("Server running on port -> ", config.port);
})