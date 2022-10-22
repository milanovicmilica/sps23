const mongoose = require('mongoose');
const _ = require('lodash');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');


// JWT Secret
const jwtSecret = "51778657246321226641fsdklafjasdkljfsklfjd7148924065";

const RackSchema = new mongoose.Schema({
    qr: {
        type: String,
      
    },
    niz: {
        type: [String],
      
    },
    name: {
        type: String,
      
    },
    free: {
        type: Number,
      
    },
});







const Rack = mongoose.model('Rack', RackSchema,'rack');

module.exports = { Rack }