const mongoose = require('mongoose');
const _ = require('lodash');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const { stringify } = require('querystring');


// JWT Secret
const jwtSecret = "51778657246321226641fsdklafjasdkljfsklfjd7148924065";

const InfoCSSchema = new mongoose.Schema({
    caseid: {
        type: String,
       
    },
    brK: {
        type: Number,
    
    },
    specstain: {
        type: [String]
       
    },
    ihc: {
        type: [String]
       
    },
    slovo: {
        type: String
       
    },
    comm: {
        type: String,
    },
    plocice: {
        type: Number, 
    },
    codes: {
        type: [String]
       
    },
    asistent: {
        type: String
       
    },
    path: {
        type: String
       
    },
    podslovo: {
        type: String
       
    },
    niz1: {
        type: [Number]
       
    },
    niz2: {
        type: [Number]
       
    },
    code: {
        type: String
       
    },
    print: {
        type: Number, 
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
    hours: {
        type: Number,
        
        
    },
    minutes: {
        type: Number,
        
        
    }
});







const CS = mongoose.model('CS', InfoCSSchema,'cs');

module.exports = { CS }