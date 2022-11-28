const mongoose = require('mongoose');
const _ = require('lodash');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');


// JWT Secret
const jwtSecret = "51778657246321226641fsdklafjasdkljfsklfjd7148924065";

const FijokaSchema = new mongoose.Schema({
    name: {
        type: String,
      
    },
    row: {
        type: Number
    },
    Qr: {
        type: String,
      
    },
    cabinet: {
        type: String,
      
    },
    nizQr: {
        type: [String],
      
    },
    typeofrow: {
        type: Number,
      
    },
});







const Fijoka = mongoose.model('Fijoka', FijokaSchema,'fijoka');

module.exports = { Fijoka }