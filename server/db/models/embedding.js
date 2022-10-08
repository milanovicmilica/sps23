const mongoose = require('mongoose');
const _ = require('lodash');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');


// JWT Secret
const jwtSecret = "51778657246321226641fsdklafjasdkljfsklfjd7148924065";

const EmbeddingSchema = new mongoose.Schema({
    caseid: {
        type: String,
       
    },
    cassette: {
        type: String,
      
    },
    date: {
        type: String,
       
    },
   
    time: {
        type: Number,
        
        
    },
    minute: {
        type: Number,
        
        
    }

});







const Embedding = mongoose.model('Embedding', EmbeddingSchema,'embeddingdata');

module.exports = { Embedding }