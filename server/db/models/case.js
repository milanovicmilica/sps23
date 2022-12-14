const mongoose = require('mongoose');
const _ = require('lodash');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');


// JWT Secret
const jwtSecret = "5177865724asdsakdallafjasdkljfsklfjd7148924065";

const CaseSchema = new mongoose.Schema({
    sender: {
        type: String,
        unique: false
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
    month: {
        type: Number,
       
        
    },
    day: {
        type: Number,
       
        
    },
    worker: {
        type: String,
        
    },

});







const Case = mongoose.model('Case', CaseSchema,'cases');

module.exports = { Case }