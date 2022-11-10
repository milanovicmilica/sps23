const mongoose = require('mongoose');
const _ = require('lodash');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');


// JWT Secret
const jwtSecret = "51778657246321226641fsdklafjasdkljfsklfjd7148924065";

const DcassettesSchema = new mongoose.Schema({
    Qr: {
        type: String,
      
    },
    hours: {
        type: Number
    },
    minutes: {
        type: Number
    },
    day: {
        type: Number
    },
    month: {
        type: Number
    },
    year: {
        type: Number
    },
    caseid: {
        type: String,
      
    },
    pathologist: {
        type: String,
      
    },
    mark: {
        type: String,
      
    },
});







const Dcassette = mongoose.model('Dcassette', DcassettesSchema,'dcassettes');

module.exports = { Dcassette }