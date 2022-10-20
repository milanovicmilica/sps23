const mongoose = require('mongoose');
const _ = require('lodash');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');


// JWT Secret
const jwtSecret = "51778657246321226641fsdklafjasdkljfsklfjd7148924065";

const ProcessSchema = new mongoose.Schema({
    processor: {
        type: String,
    },
    protocol: {
        type: String,
    },
    bascet: {
        type: String,
    },
    casette: {
        type: [String],
    },
    hours: {
        type: Number,
    },
    minutes: {
        type: Number,
    },
    status: {
        type: Number,
    },
    endhours: {
        type: Number,
    },
    endminutes: {
        type: Number,
    },
    poshours: {
        type: Number,
    },
    posminutes: {
        type: Number,
    },
    posday: {
        type: Number,
    },
    posmonth: {
        type: Number,
    },
    posyear: {
        type: Number,
    },
});







const Process = mongoose.model('Process', ProcessSchema,'process');

module.exports = { Process }