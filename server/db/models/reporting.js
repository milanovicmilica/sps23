const mongoose = require('mongoose');
const _ = require('lodash');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');


// JWT Secret
const jwtSecret = "51778657246321226641fsdklafjasdkljfsklfjd7148924065";

const ReportingSchema = new mongoose.Schema({
    caseid: {
        type: String,
      
    },
  
    pathdiagnosis: {
        type: String,
      
    },
    microreporting: {
        type: String,
      
    },
    pathologist: {
        type: String,
      
    },
});







const Reporting = mongoose.model('Reporting', ReportingSchema,'reporting');

module.exports = { Reporting }