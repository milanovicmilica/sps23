const mongoose = require('mongoose');
const _ = require('lodash');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');


// JWT Secret
const jwtSecret = "51778657246321226641fsdklafjasdkljfsklfjd7148924065";

const StainerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 1,
        trim: true,
        unique: true
    },
   
    num: {
        type: Number,
        required: true,
        
    },
    free: {
        type: Number,
        required: true,
        
    },

});







const Stainer = mongoose.model('Stainer', StainerSchema,'stainer');

module.exports = { Stainer }