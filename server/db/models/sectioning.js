const mongoose = require('mongoose');
const _ = require('lodash');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');


// JWT Secret
const jwtSecret = "51778657246321226641fsdklafjasdkljfsklfjd7148924065";

const SectioningSchema = new mongoose.Schema({
    cassette: {
        type: String,
    },
   
    nizprint: {
        type: [Number],
    },
    nizQr: {
        type: [String],
    },
    done: {
        type: Number,
    },
    day: {
        type: Number,
    },
    month: {
        type: Number,
    },
    year: {
        type: Number,
    },
   
   
});







const Sectioning = mongoose.model('Sectioning', SectioningSchema,'sectioning');

module.exports = { Sectioning }