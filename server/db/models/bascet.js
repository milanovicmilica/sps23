const mongoose = require('mongoose');
const _ = require('lodash');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');


// JWT Secret
const jwtSecret = "51778657246321226641fsdklafjasdkljfsklfjd7148924065";

const BascetSchema = new mongoose.Schema({
    name: {
        type: String,
      
    },
    free: {
        type: Number
    }
});







const Bascet = mongoose.model('Bascet', BascetSchema,'bascet');

module.exports = { Bascet }