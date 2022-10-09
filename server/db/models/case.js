const mongoose = require('mongoose');
const _ = require('lodash');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');


// JWT Secret
const jwtSecret = "51778657246321226641fsdklafjasdkljfsklfjd7148924065";

const CaseSchema = new mongoose.Schema({
    sender: {
        type: String,
        required: true,
        minlength: 1,
        trim: true,
        unique: true
    },
    contact: {
        type: String,
       
      
    },
    address: {
        type: String,
      
    },
    firstname: {
        type: String,
        
    },
    lastname: {
        type: String,
        
    },
    pid: {
        type: String,
        
    },
    date: {
        type: String,
        
    },
    lbo: {
        type: String,
        
    },
    hnum: {
        type: String,
        
    },
    bnum: {
        type: Number,
     
        
    },
    diagnosis: {
        type: String,
        
    },
    path: {
        type: String,
        
    },
    adcom: {
        type: String,
        
    },
    casenum: {
        type: Number,
       
        
    },
    formatcn: {
        type: String,
        
    },
    hospitalid: {
        type: String,
        
    },
    gen: {
        type: String,
        
    },
});







const Case = mongoose.model('Case', CaseSchema,'cases');

module.exports = { Case }