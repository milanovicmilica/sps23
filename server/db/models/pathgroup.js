const mongoose = require('mongoose');
const _ = require('lodash');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');


// JWT Secret
const jwtSecret = "51778657246321226641fsdklafjasdkljfsklfjd7148924065";

const PathGroupSchema = new mongoose.Schema({
    pathologist: {
        type: String,
      
    },
    ss:{
        type: [String],
    },
    ihc:{
        type: [String],
    },
    type: {
        type: String,
      
    },
    groupname: {
        type: String,
      
    }
});







const PathGroup = mongoose.model('PathGroup', PathGroupSchema,'pathgroups');

module.exports = { PathGroup }