const mongoose = require('mongoose');
const _ = require('lodash');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');


// JWT Secret
const jwtSecret = "517786sss57fgadgs41fsdklafjasdkljfsklfjd7148924065";

const CabinetSchema = new mongoose.Schema({
    name: {
        type: String,
      
    },
    rows: {
        type: Number
    },
    Qr: {
        type: String,
      
    },
    typesofrow: {
        type: [Number],
      
    },
});







const Cabinet = mongoose.model('Cabinet', CabinetSchema,'cabinet');

module.exports = { Cabinet }