const mongoose = require('mongoose');
const _ = require('lodash');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const { stringify } = require('querystring');


// JWT Secret
const jwtSecret = "51778657246321226641fsdklafjasdkljfsklfjd7148924065";

const SampleSchema = new mongoose.Schema({
    caseid: {
        type: String,
       
    },
    casetype: {
        type: String,
    
    },
    sampletype: {
        type: String,
    
    },
    acs: {
        type: String,
    
    },
    num: {
        type: Number, 
    },
    id: {
        type: Number, 
    },
    spec: {
        type: [String]
       
    },
    ihc: {
        type: [String]
       
    },
    slovo: {
        type: String
       
    },
    choice: {
        type: String,
    },
    firstch: {
        type: String, 
    },
    exbl: {
        type: Number
       
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
    nizOznaka: {
        type: [String]
       
    },
    nizQr: {
        type: [String]
       
    },
});







const Sample = mongoose.model('Sample', SampleSchema,'sample');

module.exports = { Sample }