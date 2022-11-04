const mongoose = require('mongoose');
const _ = require('lodash');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');


// JWT Secret
const jwtSecret = "51778657246321226641fsdklafjasdkljfsklfjd7148924065";

const ProcessSSchema = new mongoose.Schema({
    stainer: {
        type: String,
    },
    protocol: {
        type: String,
    },
    bascet: {
        type: String,
    },
    lab: {
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
    endday: {
        type: Number,
    },
    endmonth: {
        type: Number,
    },
    endyear: {
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
    possec: {
        type: Number,
    },
});







const ProcessStaining = mongoose.model('ProcessStaining', ProcessSSchema,'stainingprocess');

module.exports = { ProcessStaining }