const mongoose = require('mongoose');
const _ = require('lodash');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');


// JWT Secret
const jwtSecret = "51778657246321226641fsdklafjasdkljfsklfjd7148924065";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 1,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
       
    },
    firstname: {
        type: String,
        required: true,
    
    },
    lastname: {
        type: String,
        required: true,
        
    },
    type: {
        type: Number,
        required: true,
        
    }

});







const User = mongoose.model('User', UserSchema,'korisnici');

module.exports = { User }