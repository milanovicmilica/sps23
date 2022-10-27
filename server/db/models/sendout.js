const mongoose = require('mongoose');
const _ = require('lodash');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');


// JWT Secret
const jwtSecret = "51778657246321226641fsdklafjasdkljfsklfjd7148924065";

const SendoutSchema = new mongoose.Schema({
    laborant: {
        type: String,
      
    },
    caseid: {
        type: String,
      
    },
    sati: {
        type: Number,
      
    },
    minuti: {
        type: Number,
      
    },
    dan: {
        type: Number,
      
    },
    mesec: {
        type: Number,
      
    },
    godina: {
        type: Number,
      
    },
});







const Sendout = mongoose.model('Sendout', SendoutSchema,'sendout');

module.exports = { Sendout }