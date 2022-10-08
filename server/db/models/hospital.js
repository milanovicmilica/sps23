const mongoose = require('mongoose');
const _ = require('lodash');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');


// JWT Secret
const jwtSecret = "51778657246321226641fsdklafjasdkljfsklfjd7148924065";

const HospitalSchema = new mongoose.Schema({
    hospital: {
        type: String,
      
    }

});







const Hospital = mongoose.model('Hospital', HospitalSchema,'hospital');

module.exports = { Hospital }