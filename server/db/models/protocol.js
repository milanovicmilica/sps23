const mongoose = require('mongoose');
const _ = require('lodash');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');


// JWT Secret
const jwtSecret = "51778657246321226641fsdklafjasdkljfsklfjd7148924065";

const ProtocolSchema = new mongoose.Schema({
    name: {
        type: String,
    },
   
    hours: {
        type: Number,
    },
    minutes: {
        type: Number,
    },
    processor: {
        type: String,
    },
   
   
});







const Protocol = mongoose.model('Protocol', ProtocolSchema,'protocol');

module.exports = { Protocol }