const mongoose = require('mongoose');
const _ = require('lodash');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');


// JWT Secret
const jwtSecret = "51778657246321226641fsdklafjasdkljfsklfjd7148924065";

const Protocol2Schema = new mongoose.Schema({
    name: {
        type: String,
    },
   
    hours: {
        type: Number,
    },
    minutes: {
        type: Number,
    },
    stainer: {
        type: String,
    },
   
   
});







const Protocol2 = mongoose.model('Protocol2', Protocol2Schema,'protocol2');

module.exports = { Protocol2 }