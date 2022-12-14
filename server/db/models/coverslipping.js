const mongoose = require('mongoose');
const _ = require('lodash');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');


// JWT Secret
const jwtSecret = "51778657246asdkalsdljfsklfjd7148924065";

const CslippingSchema = new mongoose.Schema({
    caseid: {
        type: String,
       
    },
    rack: {
        type: String,
      
    },
    slides: {
        type: [String],
    },
    day: {
        type: Number,
       
    },
    month: {
        type: Number,
       
    },
    year: {
        type: Number,
       
    },
    time: {
        type: Number,
        
        
    },
    minute: {
        type: Number,
        
        
    },
    laborant: {
        type: String,
      
    },

});







const Coverslipping = mongoose.model('Coverslipping', CslippingSchema,'coverslipping');

module.exports = { Coverslipping }