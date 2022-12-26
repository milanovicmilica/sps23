const mongoose = require('mongoose');
const _ = require('lodash');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');


// JWT Secret
const jwtSecret = "5177asdasdasvxvcxcvxcvgfdgfrtetklafjasdkljfsklfjd7148924065";

const ProcessorSchema = new mongoose.Schema({
    name: {
        type: String,
    },
   
    num: {
        type: Number,
    },
    free: {
        type: Number,
    },
  
   
});







const Processor = mongoose.model('Processor', ProcessorSchema,'processors');

module.exports = { Processor }