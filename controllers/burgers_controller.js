// Require express

const express = require('express');


// Require burger.js - thi is the model to use its database functions

const burger = require('../models/burger');

// Create the `router` for the app

const router = express.Router();

// Create the routes and set up the logic within where required. 

// GET

router.get('/', (req, res) => {
    
})

// Export the router at the end of the file. 

module.exports = router;