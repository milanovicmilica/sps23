const express = require('express');
const app = express();

const { mongoose } = require('./db/mongoose');

const bodyParser = require('body-parser');

// Load in the mongoose models
const { List, Task, User } = require('./db/models');

const jwt = require('jsonwebtoken');


/* MIDDLEWARE  */

// Load middleware
app.use(bodyParser.json());


// CORS HEADERS MIDDLEWARE
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token, x-refresh-token, _id");

    res.header(
        'Access-Control-Expose-Headers',
        'x-access-token, x-refresh-token'
    );

    next();
});



/* END MIDDLEWARE  */




/* ROUTE HANDLERS */

/* LIST ROUTES */

/**
 * GET /lists
 * Purpose: Get all lists
 */
app.get('${process.env.PORT}/guest/getallusers', (req, res) => {
    // We want to return an array of all the lists that belong to the authenticated user 
    console.log('caoo')
    User.find({
        
    }).then((lists) => {
        res.send(lists);
    }).catch((e) => {
        res.send(e);
    });
})
app.get('/guest/getallusers', (req, res) => {
    // We want to return an array of all the lists that belong to the authenticated user 
    console.log('caoo')
    User.find({
       
    }).then((lists) => {
        res.send(lists);
    }).catch((e) => {
        res.send(e);
    });
})
app.post('/guest/loginprovera', (req, res) => {
    // We want to return an array of all the lists that belong to the authenticated user 
    User.findOne({
        username: req.body.username
    }).then((user) => {
        if(user!=null){
        let a=user.toObject();
      
        if(a.password == req.body.password)
        res.send({ message: 'ok' })
        else
        res.send({ message: 'ne' })}
        else{
            res.send({ message: 'nema' })
        }
    }).catch((e) => {
        res.send({ message: 'nema' })
   
    });
})

app.post('/guest/login', (req, res) => {
    // We want to return an array of all the lists that belong to the authenticated user 
    User.findOne({
        username: req.body.username,
        password: req.body.password
    }).then((user) => {
        res.send(user);
    }).catch((e) => {
        res.send("nema");
    });
})

app.use(express.static('.././dist/sps'));
app.get('/', (req, res) =>
    res.sendFile('index.html', {root: '../dist/sps/'}),
    
);
app.listen(process.env.PORT);