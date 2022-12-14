const express = require('express');
const app = express();

const { mongoose } = require('./db/mongoose');

const bodyParser = require('body-parser');

// Load in the mongoose models
const { List, Task, User, Case, Embedding, Hospital, CS, Process, Processor, ProcessStaining, Protocol,
    Protocol2, Sample, Sectioning, Stainer , Coverslipping, Rack, Bascet, Sendout, Dcassette, PathGroup, Reporting, Cabinet, Fijoka} = require('./db/models');

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
let authenticate = (req, res, next) => {
    let token = req.header('x-access-token');
   
  
    
    jwt.verify(token, User.getJWTSecret(), (err, decoded) => {
        if (err) {
            // there was an error
            // jwt is invalid - * DO NOT AUTHENTICATE *
            res.status(401).send(err);
        } else {
            // jwt is valid
           
            req.user_id = decoded._id;
            next();
        }
    });
}


let verifySession = (req, res, next) => {
    // grab the refresh token from the request header
    let refreshToken = req.header('x-refresh-token');

    // grab the _id from the request header
    let _id = req.header('_id');

    User.findByIdAndToken(_id, refreshToken).then((user) => {
        if (!user) {
            // user couldn't be found
            return Promise.reject({
                'error': 'User not found. Make sure that the refresh token and user id are correct'
            });
        }


        // if the code reaches here - the user was found
        // therefore the refresh token exists in the database - but we still have to check if it has expired or not

        req.user_id = user._id;
        req.userObject = user;
        req.refreshToken = refreshToken;

        let isSessionValid = false;

        user.sessions.forEach((session) => {
            if (session.token === refreshToken) {
                // check if the session has expired
                if (User.hasRefreshTokenExpired(session.expiresAt) === false) {
                    // refresh token has not expired
                    isSessionValid = true;
                }
            }
        });

        if (isSessionValid) {
            // the session is VALID - call next() to continue with processing this web request
            next();
        } else {
            // the session is not valid
            return Promise.reject({
                'error': 'Refresh token has expired or the session is invalid'
            })
        }

    }).catch((e) => {
        res.status(401).send(e);
    })
}


/* ROUTE HANDLERS */

/* LIST ROUTES */

/**
 * GET /lists
 * Purpose: Get all lists
 */

app.get('${process.env.PORT}/guest/getallusers', (req, res) => {
    // vra??a listu korisnika
   
    User.find({
        
    }).then((lists) => {
        res.send(lists);
    }).catch((e) => {
        res.send(e);
    });
})
app.get('/guest/getallusers' || '/grossfirst/guest/getallusers' || '/pathslide/guest/getallusers' ||
'/pathactivity/guest/getallusers' || '/adsactivity/guest/getallusers' || '/adlabactivity/guest/getallusers' 
|| '/listusers/guest/getallusers' || '/sendoutpathdash/guest/getallusers', (req, res) => {
   //vra??a listu korisnika
  
    User.find({
       
    }).then((lists) => {
        res.send(lists);
    }).catch((e) => {
        res.send(e);
    });
})
app.get('/guest/getallsectioning' || '/dashseven/guest/getallsectioning' || '/sendoutlabmain/guest/getallsectioning' ||
'/labactivity/guest/getallsectioning' || '/adlabactivity/guest/getallsectioning', authenticate,(req, res) => {
   //vra??a listu svih Sectioninga

    Sectioning.find({
       
    }).then((lists) => {
        res.send(lists);
    }).catch((e) => {
        res.send(e);
    });
})
app.get('/guest/getallstainingprocess' || '/dashsix/guest/getallstainingprocess' || '/dasheight/guest/getallstainingprocess'
|| '/adlabactivity/guest/getallstainingprocess' || '/staining/guest/getallstainingprocess', authenticate, (req, res) => {
//vra??a listu svih Staining procesa

    ProcessStaining.find({
       
    }).then((lists) => {
        res.send(lists);
    }).catch((e) => {
        res.send(e);
    });
})
app.get('/guest/getallstainers' || '/dashsix/guest/getallstainers' || '/staining/guest/getallstainers',authenticate, (req, res) => {
// vra??a listu svih Stainer-a

    Stainer.find({
       
    }).then((lists) => {
        res.send(lists);
    }).catch((e) => {
        res.send(e);
    });
})
app.get('/addstprotocol/guest/getallstainers',authenticate, (req, res) => {
// vra??a listu svih Stainer-a

    Stainer.find({
       
    }).then((lists) => {
        res.send(lists);
    }).catch((e) => {
        res.send(e);
    });
})
app.get('/dasheight/guest/getallrack',authenticate, (req, res) => {
//vra??a listu svih Rack-ova

    Rack.find({
       
    }).then((lists) => {
        res.send(lists);
    }).catch((e) => {
        res.send(e);
    });
})


app.get('/guest/getallemb' || '/dashfive/guest/getallemb' || '/dashseven/guest/getallemb' || 
'/adlabactivity/guest/getallemb',authenticate, (req, res) => {
// vra??a listu svih Embedding procesa

    Embedding.find({
       
    }).then((lists) => {
        res.send(lists);
    }).catch((e) => {
        res.send(e);
    });
})
app.get('/guest/getallprocess' || '/dashfour/guest/getallprocess' || '/pathslide/guest/getallprocess' 
|| '/adlabactivity/guest/getallprocess' || '/dashfourproc/guest/getallprocess',authenticate, (req, res) => {
// vra??a listu svih Processing procesa

    Process.find({
       
    }).then((lists) => {
        res.send(lists);
    }).catch((e) => {
        res.send(e);
    });
})
app.get('/pathreport/guest/getallreporting' || '/pathactivity/guest/getallreporting',authenticate, (req, res) => {
// vra??a listu svih Reporting-a
    
    Reporting.find({
       
    }).then((lists) => {
        res.send(lists);
    }).catch((e) => {
        res.send(e);
    });
})
app.get('/archivedash/guest/getallcabinets', authenticate,(req, res) => {
// vra??a listu svih Kabineta
    
    Cabinet.find({
       
    }).then((lists) => {
        res.send(lists);
    }).catch((e) => {
        res.send(e);
    });
})
app.get('/archivedash/guest/getallf',authenticate, (req, res) => {
// vra??a listu svih Fijoka     

    Fijoka.find({
       
    }).then((lists) => {
        res.send(lists);
    }).catch((e) => {
        res.send(e);
    });
})
app.get('/sendoutpathdash/guest/getallsendout' || '/pathdash/guest/getallsendout' || '/adlabactivity/guest/getallsendout',authenticate, (req, res) => {
// vra??a listu svih Sendout-a     

    Sendout.find({
       
    }).then((lists) => {
        res.send(lists);
    }).catch((e) => {
        res.send(e);
    });
})
app.get('/dashfourproc/guest/getallbascets', authenticate,(req, res) => {
// vra??a listu svih slobodnih Basketa     

    Bascet.find({
       free:1
    }).then((lists) => {
        res.send(lists);
    }).catch((e) => {
        res.send(e);
    });
})
app.get('/dashfour/guest/getallprocess', authenticate, (req, res) => {
// vra??a listu svih Processing procesa

    Process.find({
       
    }).then((lists) => {
        res.send(lists);
    }).catch((e) => {
        res.send(e);
    });
})
app.get('/guest/getallprotocols2' || '/staining/guest/getallprotocols2', authenticate, (req, res) => {
// vra??a listu svih protokola za Staining proces

    Protocol2.find({
       
    }).then((lists) => {
        res.send(lists);
    }).catch((e) => {
        res.send(e);
    });
})
app.get('/guest/getallprotocols' || '/dashfourproc/guest/getallprotocols' || '/listprocessor/guest/getallprotocols',authenticate, (req, res) => {
// vra??a listu svih protokola za Processing proces

    Protocol.find({
       
    }).then((lists) => {
        res.send(lists);
    }).catch((e) => {
        res.send(e);
    });
})
app.get('/guest/getallprocessors' || '/addprotocol/guest/getallprocessors' || '/dashfour/guest/getallprocessors'
|| '/dashfourproc/guest/getallprocessors' || '/listprocessor/guest/getallprocessors', authenticate,(req, res) => {
// vra??a listu svih Procesora

    Processor.find({
       
    }).then((lists) => {
        res.send(lists);
    }).catch((e) => {
        res.send(e);
    });
})

app.get('/pathaddgroup/guest/getallgroup' || '/pathedit/guest/getallgroup' || '/grossnext/guest/getallgroup', authenticate,(req, res) => {
// vra??a listu svih Grupa Favorita za Grossing

    PathGroup.find({
       
    }).then((lists) => {
        res.send(lists);
    }).catch((e) => {
        res.send(e);
    });
})
app.get('/guest/getallsamples' || '/acssecond/guest/getallsamples' || '/clacs/guest/getallsamples'
|| '/dashfive/guest/getallsamples' || '/dashseven/guest/getallsamples' || '/grossfirst/guest/getallsamples' ||
'/grossnext/guest/getallsamples' || '/sendoutpathdash/guest/getallsamples' || '/pathdash/guest/getallsamples', authenticate, (req, res) => {
// vra??a listu svih Sample-ova (uzoraka)

    Sample.find({
       
    }).then((lists) => {
        res.send(lists);
    }).catch((e) => {
        res.send(e);
    });
})
app.get('/guest/getallhospitals' || '/acsfirst/guest/getallhospitals', authenticate, (req, res) => {
// vra??a listu svh bolnica 

    Hospital.find({
       
    }).then((lists) => {
        res.send(lists);
    }).catch((e) => {
        res.send(e);
    });
})
app.get('/guest/getallcases', authenticate, (req, res) => {
// vra??a listu svih slu??ajeva

    Case.find({
       
    }).then((lists) => {
        res.send(lists);
    }).catch((e) => {
        res.send(e);
    });
})
app.get('/dasheight/guest/getallcover' || '/pathslide/guest/getallcover' || '/adlabactivity/guest/getallcover',authenticate, (req, res) => {
//vra??a listu svih Coverslipping procesa    

    Coverslipping.find({
       
    }).then((lists) => {
        res.send(lists);
    }).catch((e) => {
        res.send(e);
    });
})
app.get('/grossfirst/guest/getallcases' || '/acsfirst/guest/getallcases' || '/acssecond/guest/getallcases'
|| '/clacs/guest/getallcases' || '/dashfive/guest/getallcases' || '/dashseven/guest/getallcases' || 
'/grossfirst/guest/getallcases' || '/grossnext/guest/getallcases' || '/sendoutpathdash/guest/getallcases' || 
'/pathdash/guest/getallcases' || '/pathinfo/guest/getallcases' || '/pathslide/guest/getallcases' 
|| '/pathreport/guest/getallcases' || '/labactivity/guest/getallcases' || '/adsactivity/guest/getallcases',authenticate, (req, res) => {
// vra??a listu svih slu??ajeva (Case-eva)

    Case.find({
       
    }).then((lists) => {
        res.send(lists);
    }).catch((e) => {
        res.send(e);
    });
})
app.get('/guest/getallcs' || '/dashfive/guest/getallcs' || '/dashseven/guest/getallcs' || '/sendoutpathdash/guest/getallcs' 
|| '/pathdash/guest/getallcs' || '/pathslide/guest/getallcs' || '/grossnext/guest/getallcs' || '/labactivity/guest/getallcs', authenticate, (req, res) => {
// vra??a listu svih kaseta obra??enih na Grossing-u

    CS.find({
       
    }).then((lists) => {
        res.send(lists);
    }).catch((e) => {
        res.send(e);
    });
})
app.get('/guest/getallpath' || '/acsfirst/guest/getallpath',authenticate, (req, res) => {
// vra??a listu svih Patologa

    User.find({
     type: 3  
    }).then((lists) => {
        res.send(lists);
    }).catch((e) => {
        res.send(e);
    });
})
app.get('/staining/guest/getallfreerack' || '/dasheight/guest/getallfreerack',authenticate, (req, res) => {
// vra??a listu svih slobodnih Rack-ova

    Rack.find({
     free: 1 
    }).then((lists) => {
        res.send(lists);
    }).catch((e) => {
        res.send(e);
    });
})
/////////////



app.post('/guest/loginprovera' || '/login-embedding/guest/loginprovera' || '/login-staininghe/guest/loginprovera' || '/login-sectioning/guest/loginprovera'
|| '/login-grossing/guest/loginprovera' || '/login-accessioning/guest/loginprovera' || '/login-processing/guest/loginprovera'
|| '/login-coverslipping/guest/loginprovera' || '/login-sendout/guest/loginprovera' || '/login-patholog/guest/loginprovera'
|| '/login-archive/guest/loginprovera', (req, res) => {
    // provera da li postoji korisnik sa datim korisni??kim imenom i ta??nost ??ifre

    User.findOne({
        username: req.body.username
    }).then((user) => {
        if(user!=null){
        let a=user.toObject();
        console.log("evo u proveri")
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

app.post('/guest/login' || '/login-embedding/guest/login' || '/login-staininghe/guest/login' || '/login-sectioning/guest/login' || '/login-grossing/guest/login'
|| '/login-accessioning/guest/login' || '/login-processing/guest/login' || '/login-coverslipping/guest/login' ||
'/login-sendout/guest/login' || '/login-patholog/guest/login', (req, res) => {
    //za navedenog korisnika proverava postojanje u bazi

    User.findOne({
        username: req.body.username,
        
    }).then((user) => {
        if(user!=null){
        //res.send(user);
        User.findByCredentials(req.body.username, req.body.password).then((user) => {
            return user.createSession().then((refreshToken) => {
                // Session created successfully - refreshToken returned.
                // now we geneate an access auth token for the user
    
                return user.generateAccessAuthToken().then((accessToken) => {
                    // access auth token generated successfully, now we return an object containing the auth tokens
                    return { accessToken, refreshToken }
                });
            }).then((authTokens) => {
                // Now we construct and send the response to the user with their auth tokens in the header and the user object in the body
                res
                    .header('x-refresh-token', authTokens.refreshToken)
                    .header('x-access-token', authTokens.accessToken)
                    .send(user);
            })
        }).catch((e) => {
            res.send({ message: 'nema' })
       
        });
    }
    }).catch((e) => {
        res.send({ message: 'nema' })
   
    });
})
app.post('/addstprotocol/guest/addSTProtocol', authenticate,(req, res) => {
    //  Proverava da li postoji Staining protokol sa istim imenom u bazi i dodaje novi Staining protokol u bazu

    let name = req.body.name;

    let newP = new Protocol2({
        name,
        hours: req.body.hours,
        minutes: req.body.minutes,
        stainer: req.body.stainer
    });

    Protocol2.findOne({
        name: req.body.name
       
    }).then((user) => {
        if(user==null)
        {
            newP.save().then((us2) => {
                
                res.send({ message: 'user added' });
            })

        }else{
            res.send({ message: 'zauzeto' });
        }
    }).catch((e) => {
        res.send({ message: 'error' });
    });
})

app.post('/grossnext/guest/addDc',authenticate, (req, res) => {
    // Dodaje novu obrisanu kasetu u bazu na Grossingu
 

    let newP = new Dcassette({
       
        hours: req.body.hours,
        minutes: req.body.minutes, month: req.body.month, pathologist: req.body.pathologist,
        day: req.body.day, year: req.body.year, caseid: req.body.caseid, mark: req.body.mark,

    });

   
            newP.save().then((us2) => {
                
                res.send({ message: 'user' });
            }).catch((e) => {
        res.send({ message: 'error' });
    });
})
app.post('/grossnext/guest/addDcqr',authenticate, (req, res) => {
      // Dodaje novu obrisanu kasetu u bazu na Grossingu ima i (kaseta za koju je ve?? Print ura??en, ima QR)
 

    let newP = new Dcassette({
       
        hours: req.body.hours, Qr:req.body.Qr,
        minutes: req.body.minutes, month: req.body.month, pathologist: req.body.pathologist,
        day: req.body.day, year: req.body.year, caseid: req.body.caseid, mark: req.body.mark,

    });

   
            newP.save().then((us2) => {
                
                res.send({ message: 'user' });
            }).catch((e) => {
        res.send({ message: 'error' });
    });
})
app.post('/addstainer/guest/addStainer', authenticate,(req, res) => {
    // Proverava da li u sistemu postoji Stainer sa tim imenom i ukoliko ne postoji dodaje novi Stainer u bazu podataka

    let name = req.body.name;

    let newP = new Stainer({
        name,
        num: req.body.num,
        free: req.body.num
        
    });

    Stainer.findOne({
        name: req.body.name
       
    }).then((user) => {
        if(user==null)
        {
            newP.save().then((us2) => {
                
                res.send({ message: 'user added' });
            })

        }else{
            res.send({ message: 'zauzeto' });
        }
    }).catch((e) => {
        res.send({ message: 'error' });
    });
})
app.post('/addprocessor/guest/addProcessor',authenticate,(req, res) => {
    // Proverava da li postoji procesor sa istim nazivom u sistemu i ukoliko ne postoji dodaje ga u bazu podataka

    let name = req.body.name;

    let newP = new Processor({
        name,
        num: req.body.num,
        free: req.body.num
        
    });

    Processor.findOne({
        name: req.body.name
       
    }).then((user) => {
        if(user==null)
        {
            newP.save().then((us2) => {
                
                res.send({ message: 'user added' });
            })

        }else{
            res.send({ message: 'zauzeto' });
        }
    }).catch((e) => {
        res.send({ message: 'error' });
    });
})
app.post('/addprotocol/guest/addProtocol',authenticate, (req, res) => {
    // Proverava da li postoji Processing protokol sa istim nazivom u bazi i ukoliko ne postoji dodaje ga u bazu podataka

    let name = req.body.name;

    let newP = new Protocol({
        name,
        hours: req.body.hours,
        minutes: req.body.minutes,
        processor:req.body.processor
        
    });

    Protocol.findOne({
        name: req.body.name
       
    }).then((user) => {
        if(user==null)
        {
            newP.save().then((us2) => {
                
                res.send({ message: 'user added' });
            })

        }else{
            res.send({ message: 'zauzeto' });
        }
    }).catch((e) => {
        res.send({ message: 'error' });
    });
})
app.post('/dashfirst/guest/addUser', authenticate,(req, res) => {
    // Proverava da li postoji korisnik sa istim korisni??kim imenom u bazi podataka i ukoliko ne postoji dodaje ga u bazu
   

    let newP = new User({
        username : req.body.username,
        password: req.body.password,
        type: req.body.type,
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        
    });

    User.findOne({
        username: req.body.username
       
    }).then((user) => {
        if(user==null)
        {

            let body = req.body;
            let newUser = new User(body);
        
            newUser.save().then(() => {
                return newUser.createSession();
            }).then((refreshToken) => {
                // Session created successfully - refreshToken returned.
                // now we geneate an access auth token for the user
        
                return newUser.generateAccessAuthToken().then((accessToken) => {
                    // access auth token generated successfully, now we return an object containing the auth tokens
                    return { accessToken, refreshToken }
                });
            }).then((authTokens) => {
                // Now we construct and send the response to the user with their auth tokens in the header and the user object in the body
                res
                    .header('x-refresh-token', authTokens.refreshToken)
                    .header('x-access-token', authTokens.accessToken)
                    .send({ message: 'user added' });
            }).catch((e) => {
                res.status(400).send(e);
            })




/*

            newP.save().then((us2) => {
                
                res.send({ message: 'user added' });
            })*/

        }else{
            res.send({ message: 'zauzeto' });
        }


    }).catch((e) => {
        res.send({ message: 'error' });
    });
})
app.post('/acsfirst/guest/addCase' || '${process.env.PORT}/guest/addCase' || '${process.env.PORT}/acsfirst/guest/addCase', authenticate, (req, res) => {
    // Dodaje novi slu??aj (Case) u bazu podataka
   
   
    let newP = new Case({
        sender : req.body.sender, hospitalid: req.body.hospitalid,   contact: req.body.contact, address:req.body.address, firstname:req.body.firstname,
        lastname : req.body.lastname,    pid: req.body.pid,  date:req.body.date, lbo:req.body.lbo, hnum : req.body.hnum,bnum: req.body.bnum,
        diagnosis: req.body.diagnosis, path:req.body.path, adcom:req.body.adcom, gen: req.body.gen, casenum:req.body.casenum,
         formatcn:req.body.formatcn, day:req.body.currday, month:req.body.currmonth, worker:req.body.worker
    });
            newP.save().then((us2) => {
               
                res.send({ message: 'user added' });
            }).catch((e) => {
                res.send({ message: 'error' });
            });

})

app.post('/pathaddgroup/guest/addPathGroup', authenticate, (req, res) => {
    // Dodaje novu Grupu Favorita u bazu podataka 
   
    
    let newP = new PathGroup({
        groupname : req.body.groupname, pathologist: req.body.pathologist,   ss: req.body.ss, ihc:req.body.ihc, type:req.body.type,
     
    });
            newP.save().then((us2) => {
               
                res.send({ message: 'user' });
            }).catch((e) => {
                res.send({ message: 'error' });
            });

})
app.post('/acssecond/guest/addSample', authenticate, (req, res) => {    
// Dodaje novi uzorak (Sample) u bazu podataka

    let newP = new Sample({
        caseid : req.body.caseid, casetype: req.body.casetype,   sampletype: req.body.sampletype, acs:req.body.acs, num:req.body.num,
        id : req.body.id,    slovo: req.body.slovo,  spec:req.body.spec,ihc:req.body.ihc , print:req.body.print})
            newP.save().then((us2) => {
                
                res.send({ message: 'user' });
            }).catch((e) => {
                res.send({ message: 'error' });
            });

})

app.post('/pathreport/guest/addReporting', authenticate, (req, res) => {    
// Dodaje novi Reporting u bazu podataka

    let newP = new Reporting({
        caseid : req.body.caseid, microreporting: req.body.microreporting,   pathologist: req.body.pathologist,
        pathdiagnosis : req.body.pathdiagnosis, day:req.body.day,  month:req.body.month,year:req.body.year,
        hours:req.body.hours, minutes:req.body.minutes, })
            newP.save().then((us2) => {
                
                res.send({ message: 'user' });
            }).catch((e) => {
                res.send({ message: 'error' });
            });

})
app.post('/acssecond/guest/addSampleSlide', authenticate,(req, res) => {    
// Dodaje novi uzorak (Sample) kao External Slide

    let newP = new Sample({
        caseid : req.body.caseid, casetype: req.body.casetype,   sampletype: req.body.sampletype, acs:req.body.acs, num:req.body.num,
        id : req.body.id,    slovo: req.body.slovo,  spec:req.body.spec,ihc:req.body.ihc,
        choice: req.body.choice,  firstch:req.body.firstch,niz1:req.body.niz1,  niz2:req.body.niz2 , exbl:req.body.exbl})
            newP.save().then((us2) => {
                
                res.send({ message: 'user' });
            }).catch((e) => {
                res.send({ message: 'error' });
            });

})

app.post('/acssecond/guest/updateSampleCode', authenticate, (req, res) => {   
// A??urira QR kod i broj printanja na odgovaraju??em uzorku (Sample-u)

    Sample.findOne({
        caseid: req.body.caseid,
        slovo:req.body.slovo
       
    }).then((user) => {
        if(user==null){   res.send({ message: 'nema' });}

        Sample.collection.updateOne({'caseid' : req.body.caseid, 'slovo':req.body.slovo}, {$set: {'code' : req.body.s}});
        Sample.collection.updateOne({'caseid' : req.body.caseid, 'slovo':req.body.slovo}, {$set: {'print' : req.body.p}});
        res.send({ message: 'user' });
      

}).catch((e) => {
res.send({ message: 'error' });
});
})

app.post('/pathedit/guest/updatePathGroupss', authenticate, (req, res) => {   
// A??urira special stain ??lanove u okviru odre??ene Grupe Favorita 

    PathGroup.findOne({
        pathologist: req.body.pathologist,
        groupname:req.body.groupname
       
    }).then((user) => {
        if(user==null){   res.send({ message: 'nema' });}

        PathGroup.collection.updateOne({'pathologist' : req.body.pathologist, 'groupname':req.body.groupname}, {$set: {'ss' : req.body.ss}});
        res.send({ message: 'user' });
      

}).catch((e) => {
res.send({ message: 'error' });
});
})
app.post('/pathedit/guest/updatePathGroupihc', authenticate, (req, res) => {   
// A??urira IHC ??lanove u okviru odre??ene Grupe Favorita

    PathGroup.findOne({
        pathologist: req.body.pathologist,
        groupname:req.body.groupname
       
    }).then((user) => {
        if(user==null){   res.send({ message: 'nema' });}

        PathGroup.collection.updateOne({'pathologist' : req.body.pathologist, 'groupname':req.body.groupname}, {$set: {'ihc' : req.body.ihc}});
        res.send({ message: 'user' });
      

}).catch((e) => {
res.send({ message: 'error' });
});
})
app.post('/acssecond/guest/updateEXSSampleCode', authenticate, (req, res) => {   
// A??urira niz QR kodova i oznaka u okviru jednog External Slide-a u okviru uzorka

    Sample.findOne({
        caseid: req.body.caseid,
        slovo:req.body.slovo
       
    }).then((user) => {
        if(user==null){   res.send({ message: 'nema' });}else{

        Sample.collection.updateOne({'caseid' : req.body.caseid, 'slovo':req.body.slovo}, {$set: {'nizQr' : req.body.nizQr}});
        Sample.collection.updateOne({'caseid' : req.body.caseid, 'slovo':req.body.slovo}, {$set: {'nizOznaka' : req.body.nizOznaka}});
        res.send({ message: 'user' });
        }

}).catch((e) => {
res.send({ message: 'error' });
});
})
app.post('/dashfourproc/guest/addprocess', authenticate, (req, res) => {    
// Za navedeni Procesor a??urira zauzetost i rezervi??e (a??urira) Basket i dodaje Processing Proces u bazu podataka

    let newP = new Process({
        processor : req.body.processor, protocol: req.body.protocol,   bascet: req.body.bascet, casette:req.body.casette, hours:req.body.hours,
        minutes : req.body.minutes,    status: req.body.status,  poshours:req.body.poshours,posminutes:req.body.posminutes,
        posday: req.body.posday,  posmonth:req.body.posmonth,posyear:req.body.posyear})

        Processor.findOne({
            name: req.body.processor
           
        }).then((user) => {
            if(user==null){   res.send({ message: 'nema' });}

            let nova=user.free;
            nova=nova-1;
            Processor.collection.updateOne({'name' :req.body.processor}, {$set: {'free' : nova}});
            Bascet.collection.updateOne({'name' :req.body.bascet}, {$set: {'free' : 0}});
            newP.save().then((us2) => {
                

                res.send({ message: 'user' });
            }).catch((e) => {
                res.send({ message: 'error' });
            });

}).catch((e) => {
    res.send({ message: 'error' });
});

})

app.post('/acssecond/guest/addSampleBlock', authenticate, (req, res) => {    
// Dodaje novi uzorak (Sample) u bazu podataka

    let newP = new Sample({
        caseid : req.body.caseid, casetype: req.body.casetype,   sampletype: req.body.sampletype, acs:req.body.acs, num:req.body.num,
        id : req.body.id,    slovo: req.body.slovo,  spec:req.body.spec,ihc:req.body.ihc,
         niz1:req.body.niz1,  niz2:req.body.niz2 , exbl:req.body.exbl})
            newP.save().then((us2) => {
                
                res.send({ message: 'user' });
            }).catch((e) => {
                res.send({ message: 'error' });
            });

})
app.post('/sendoutlabmain/guest/addSendout', authenticate,(req, res) => {    
// Dodaje novi Sendout u bazu podataka

    let newP = new Sendout({
        caseid : req.body.caseid, sati: req.body.sati,   minuti: req.body.minuti, laborant:req.body.laborant, dan:req.body.dan,
        mesec : req.body.mesec,    godina: req.body.godina})
            newP.save().then((us2) => {
                
                res.send({ message: 'user' });
            }).catch((e) => {
                res.send({ message: 'error' });
            });

})

app.post('/addcabinet/guest/addCabinet', authenticate, (req, res) => {    
// Proverava da li postoji Kabinet sa istim imenom i ukoliko ne postoji dodaje ga u bazu podataka

    Cabinet.findOne({
        name: req.body.name
      
   }).then((user) => {
    if(user!=null)
    {  
     res.send({ message: 'zauzeto' });
    }else{
    let newP = new Cabinet({
        name : req.body.name, rows: req.body.rows,   typesofrow: req.body.typesofrow, Qr:req.body.qr})
            newP.save().then((us2) => {
                
                res.send({ message: 'user' });
            }).catch((e) => {
                res.send({ message: 'error' });
            });

}})})

app.post('/sendoutpathmain/guest/SendoutUpdate', authenticate, (req, res) => {    
// A??urira Send out podatke vezane za obradu od strane patologa

    Sendout.findOne({
        caseid: req.body.caseid
      
   }).then((user) => {
       if(user==null)
       {  
        res.send({ message: 'zauzeto' });
       }else{
   
        Sendout.collection.updateOne({ 'caseid': req.body.caseid }, {$set: {'endsati': req.body.endsati}})
        Sendout.collection.updateOne({ 'caseid': req.body.caseid }, {$set: {'endminuti': req.body.endminuti}})
        Sendout.collection.updateOne({ 'caseid': req.body.caseid }, {$set: {'enddan': req.body.enddan}})
        Sendout.collection.updateOne({ 'caseid': req.body.caseid }, {$set: {'endmesec': req.body.endmesec}})
        Sendout.collection.updateOne({ 'caseid': req.body.caseid }, {$set: {'endgodina': req.body.endgodina}})  
        Sendout.collection.updateOne({ 'caseid': req.body.caseid }, {$set: {'path': req.body.patolog}})  
        res.send({ message: 'user' });
       }})

})
app.post('/addbasket/guest/addBasket', authenticate, (req, res) => {    
// Proverava da li postoji basket sa tim nazivom i ukoliko ne postoji dodaje ga u bazu podataka

    Bascet.findOne({
        name: req.body.name
      
   }).then((user) => {
       if(user==null)
       {       let newP = new Bascet({
        name:req.body.name, free:req.body.free })
              newP.save().then((us2) => {
                  
                  res.send({ message: 'user' });
              }).catch((e) => {
                  res.send({ message: 'error' });
              });
  
       }else{
   
                
                res.send({ message: 'zauzeto' });
       }})

})
app.post('/addrack/guest/addRack', authenticate, (req, res) => {    
// Proverava da li postoji Rack sa tim nazivom i ukoliko ne postoji dodaje ga u bazu podataka

    Rack.findOne({
        name: req.body.name
      
   }).then((user) => {
       if(user==null)
       {       let newP = new Rack({
        name:req.body.name, free:req.body.free })
              newP.save().then((us2) => {
                  
                  res.send({ message: 'user' });
              }).catch((e) => {
                  res.send({ message: 'error' });
              });
  
       }else{
   
                
                res.send({ message: 'zauzeto' });
       }})

})
app.post('/acssecond/guest/deleteSample', authenticate, (req, res) => {    
// Bri??e uzorak sa odgovaraju??im ID-jem i CaseID-em

    Sample.findOneAndRemove({
        id: req.body.id, caseid: req.body.caseid
       
    }).then((user) => {
        if(user==null)
        {
            
                
                res.send({ message: 'nema' });
          

        }else{

            res.send({ message: 'deleted' });
        }


    }).catch((e) => {
        res.send({ message: 'error' });
    });

})
app.post('/acssecond/guest/changeid' || '/acssecond/guest/deleteSample/changeid', authenticate, (req, res) => {  
    //A??urira uzorak (Sample), njegov ID (nakon brisanja odre??enog Sample-a menjaju se ID preostalih Sample-ova)

    let sniz=['A','B','C','D','E','F','G','H','I',
    'J','K','L','M','N','O','P','Q','R','S','T',
    'U','V','W','X','Y','Z']; console.log("evoooo2")
    Sample.find({
         caseid: req.body.caseid
       
    }).then((user) => {
        if(user==null)
        {        
                res.send({ message: 'nema' }); 

        }else{
         
            for (let index = 0; index < user.length; index++) {
                Sample.collection.updateOne({ 'id': user[index].id, 'caseid': req.body.caseid }, {$set: {'id': index}})     
                
            }
           
            res.send({ message: 'user' });
        }


    }).catch((e) => {
        res.send({ message: 'error' });
    });

})
app.post('/acssecond/guest/changeslovo', authenticate, (req, res) => {  
    // A??urira slovnu oznaku uzorka (Nakon brisanja uzorka na Accessioningu menja se slovna oznaka preostalih uzoraka vezanih za taj slu??aj)
    
    let sniz=['A','B','C','D','E','F','G','H','I',
    'J','K','L','M','N','O','P','Q','R','S','T',
    'U','V','W','X','Y','Z'];
    Sample.find({
         caseid: req.body.caseid
       
    }).then((user) => {
        if(user==null)
        {        
                res.send({ message: 'nema' }); 

        }else{

            for (let index = 0; index < user.length; index++) {
   
                
                Sample.collection.updateOne({'id': user[index].id, 'caseid': req.body.caseid }, {    $set: {'slovo': sniz[index]}});
            }
           
            res.send({ message: 'user' });
        }


    }).catch((e) => {
        res.send({ message: 'error' });
    });

})
app.post('/dashfour/guest/endprocess', authenticate, (req, res) => {    
   // A??urira odre??eni Processing Proces i osloba??a odgovaraju??i basket 

    Process.findOne({
        bascet: req.body.bascet
       
    }).then((user) => {
        if(user==null)
        {        
                res.send({ message: 'nema' }); 

        }else{
            let s=1;
            Process.collection.updateOne({'casette': req.body.casette }, {  $set: {'lab': req.body.lab}});
            Process.collection.updateOne({'casette': req.body.casette }, {  $set: {'endday': req.body.endday}});
            Process.collection.updateOne({'casette': req.body.casette }, {  $set: {'endmonth': req.body.endmonth}});
            Process.collection.updateOne({'casette': req.body.casette }, {  $set: {'endyear': req.body.endyear}});
                Process.collection.updateOne({'casette': req.body.casette }, {  $set: {'status': s}});
                Process.collection.updateOne({'casette': req.body.casette }, {  $set: {'endhours': req.body.endhours}});
                Process.collection.updateOne({'casette': req.body.casette }, {    $set: {'endminutes': req.body.endminutes}});
                Bascet.collection.updateOne({'name': req.body.bascet }, {    $set: {'free': 1}});
            res.send({ message: 'user' });
        }


    }).catch((e) => {
        res.send({ message: 'error' });
    });

})
app.post('/dashfour/guest/updateProcessor', authenticate, (req, res) => {    
  // A??urira odgovaraju??i procesor (osloba??a ga)  

    Processor.findOne({
        name: req.body.processor
       
    }).then((user) => {
        if(user==null)
        {        
                res.send({ message: 'nema' }); 

        }else{
            let nova=user.free;
            let s=nova+1;
            Processor.collection.updateOne({'name' :req.body.processor}, { $set: {'free': s}});
        
            res.send({ message: 'user' });
        }


    }).catch((e) => {
        res.send({ message: 'error' });
    });

})
app.post('/dashfive/guest/confirmEmb', authenticate, (req, res) => {    
  // Dodaje novi Embedding proces u bazu podataka  

    let newP = new Embedding({
        cassette : req.body.cassette, caseid: req.body.caseid,   day: req.body.day, time:req.body.time, minute:req.body.minute, 
        month: req.body.month, year: req.body.year, lab:req.body.lab
      })
            newP.save().then((us2) => {
                
                res.send({ message: 'user' });
            }).catch((e) => {
                res.send({ message: 'error' });
            });

})
app.post('/dasheight/guest/confirmCoverslipping', authenticate, (req, res) => {    
   // Dodaje novi Coverslipping u bazu podataka 

    let newP = new Coverslipping({
        rack : req.body.rack, caseid: req.body.caseid,   day: req.body.day, time:req.body.time, minute:req.body.minute,
        month: req.body.month, year:req.body.year, laborant:req.body.laborant, slides:req.body.slides
      })
            newP.save().then((us2) => {
                
                res.send({ message: 'user' });
            }).catch((e) => {
                res.send({ message: 'error' });
            });

})
app.post('/dashsix/guest/endsprocess', authenticate, (req, res) => {    
   // A??urira odgovaraju??i Staining Proces (bele??i kraj procesa i informacije o tome) i odgovaraju??i Rack 

    ProcessStaining.findOne({
        bascet: req.body.bascet,
       casette:req.body.cassette
    }).then((user) => {
        if(user==null)
        {        
                res.send({ message: 'nema' }); 

        }else{
            let s=1;
            ProcessStaining.collection.updateOne({'bascet': req.body.bascet,  'casette':req.body.cassette }, {  $set: {'endday': req.body.endday}});
            ProcessStaining.collection.updateOne({'bascet': req.body.bascet,  'casette':req.body.cassette }, {    $set: {'endmonth': req.body.endmonth}});
            ProcessStaining.collection.updateOne({'bascet': req.body.bascet,  'casette':req.body.cassette }, {  $set: {'endyear': req.body.endyear}});
                ProcessStaining.collection.updateOne({'bascet': req.body.bascet,  'casette':req.body.cassette }, {    $set: {'lab': req.body.lab}});
                ProcessStaining.collection.updateOne({'bascet': req.body.bascet,  'casette':req.body.cassette}, {  $set: {'status': s}});
                ProcessStaining.collection.updateOne({'bascet': req.body.bascet,  'casette':req.body.cassette }, {  $set: {'endhours': req.body.endhours}});
                ProcessStaining.collection.updateOne({'bascet': req.body.bascet,  'casette':req.body.cassette }, {    $set: {'endminutes': req.body.endminutes}});
                Rack.collection.updateOne({'name' :req.body.bascet}, {$set: {'free' : 1}});
            res.send({ message: 'user' });
        }


    }).catch((e) => {
        res.send({ message: 'error' });
    });

})

app.post('/dashsix/guest/updateStainer', authenticate, (req, res) => {    
    // A??urira odgovaraju??i Stainer

    Stainer.findOne({
        name: req.body.stainer
       
    }).then((user) => {
        if(user==null)
        {        
                res.send({ message: 'nema' }); 

        }else{
            let nova=user.free;
            let s=nova+1;
            Stainer.collection.updateOne({'name' :req.body.stainer}, { $set: {'free': s}});
          
            res.send({ message: 'user' });
        }


    }).catch((e) => {
        res.send({ message: 'error' });
    });

})
app.post('/staining/guest/addstainingprocess', authenticate, (req, res) => {   
// Dodaje novi Staining Proces u bazu podataka, rezervi??e (a??urira i zauzima) odre??eni Stainer i Rack.

let user1=new ProcessStaining({stainer:req.body.stainer, protocol:req.body.protocol, 
    bascet:req.body.bascet, casette:req.body.casette, hours:req.body.hours, minutes:req.body.minutes,
status:req.body.status, poshours:req.body.poshours, posminutes:req.body.posminutes, posday:req.body.posday,
posmonth:req.body.posmonth, posyear:req.body.posyear, possec:req.body.possec })
      
    Stainer.findOne({'name':req.body.stainer}, (err,user)=>{
        
        if(user==null)  {   res.send({ message: 'nema' });}
        else{
            let nova=user.free;
            nova=nova-1;
            Stainer.collection.updateOne({'name' :req.body.stainer}, {$set: {'free' : nova}});
            Rack.collection.updateOne({'name' :req.body.bascet}, {$set: {'free' : 0}});
            user1.save().then(user2=>{
                res.send({ message: 'user' });
            }).catch(err=>{
                res.send({ message: 'error' });
            })
           
        }
    })
})
app.post('/dashseven/guest/addSectioning', authenticate, (req, res) => {    
// Ukoliko Sectioning za tu cassetu ne postoji dodaje ga u bazu, a ukoliko postoji a??urira njegovo stanje QR kodova, printova i oznaka

    let user1=new Sectioning({cassette:req.body.cassette, day:req.body.dan, month:req.body.mesec,
        year:req.body.godina, nizprint:req.body.nizprint, nizQr:req.body.nizQr, done:0, nizOznaka:req.body.nizOznaka
    })
              
    Sectioning.findOne({cassette :req.body.cassette}, (err,user)=>{
                
                if(user==null)  {   user1.save().then(user2=>{
                    res.send({ message: 'user' });
                }).catch(err=>{
                    res.send({ message: 'error' });
                })
               }
                else{
                   
                    Sectioning.collection.updateOne({'cassette' :req.body.cassette}, {$set: {'nizQr' : req.body.nizQr}});
                    Sectioning.collection.updateOne({'cassette' :req.body.cassette}, {$set: {'nizprint' : req.body.nizprint}});
                    Sectioning.collection.updateOne({'cassette' :req.body.cassette}, {$set: {'nizOznaka' : req.body.nizOznaka}});
                    res.send({ message: 'user' });
                }
            })
})
app.post('/dashseven/guest/updateSectioning', authenticate, (req, res) => {    
// za odgovaraju??i Sectioning bele??i kada je gotov i informacije o zavr??etku Sectioning procesa

    Sectioning.findOne({cassette:req.body.cassette}, (err,user)=>{
                    
        if(user==null)  {   
            res.send({ message: 'error' });
        
       }
        else{
           
            Sectioning.collection.updateOne({'cassette' :req.body.cassette}, {$set: {'done' : 1}});
            Sectioning.collection.updateOne({'cassette' :req.body.cassette}, {$set: {'minute' : req.body.minute}});
            Sectioning.collection.updateOne({'cassette' :req.body.cassette}, {$set: {'hour' : req.body.hour}});
            Sectioning.collection.updateOne({'cassette' :req.body.cassette}, {$set: {'lab' : req.body.lab}});
            res.send({ message: 'user' });
        }
    })
})
app.post('/archivedash/guest/updateF', authenticate, (req, res) => {    
// Za odgovaraju??u fijoku a??urira listu QR kodova koji se nalaze u njoj
    
    Fijoka.findOne({name:req.body.name, cabinet:req.body.cabinet}, (err,user)=>{
                    
        if(user==null)  {   
            res.send({ message: 'error' });
        
       }
        else{
           
            Fijoka.collection.updateOne({'name':req.body.name, 'cabinet':req.body.cabinet}, {$set: {'nizQr' : req.body.piece}});
         
            res.send({ message: 'user' });
        }
    })
})
app.post('/grossnext/guest/addprcs', authenticate, (req, res) => {    
// Ukoliko informacije o datoj kaseti na Grossingu nisu zavedene u bazi bele??i ih, a ukoliko jesu, a??urira broj printova

    let user1=new CS({caseid:req.body.caseid,
        podslovo:req.body.podslovo, slovo:req.body.slovo, print:req.body.print ,code:req.body.code ,path:req.body.path,
        asistent:req.body.asistent});
          
    CS.findOne({'caseid':req.body.caseid, 'podslovo' :req.body.podslovo}, (err,user)=>{
    
        if(user==null)  {  user1.save().then(user2=>{
            res.send({ message: 'user added' });
        }).catch(err=>{
            res.send({ message: 'error' });
        })}
        else{
          
            CS.collection.updateOne({'caseid' :req.body.caseid,'podslovo' :req.body.podslovo}, {$set: {'print' : req.body.print}});
            res.send({ message: 'zauzeto' });
        }
    })
})
app.post('/grossnext/guest/addCS', authenticate, (req, res) => {    
// Za odre??enu kasetu na Grossing-u a??urira dodatne informacije o kaseti

    CS.findOne({'caseid':req.body.caseid, 'podslovo' :req.body.podslovo}, (err,user)=>{
            
        if(user==null)  {  }
        else{
          
            CS.collection.updateOne({'caseid' :req.body.caseid,'podslovo' :req.body.podslovo}, {$set: {'specstain' : req.body.specstain}});
            CS.collection.updateOne({'caseid' :req.body.caseid,'podslovo' :req.body.podslovo}, {$set: {'ihc' : req.body.ihc}});
            CS.collection.updateOne({'caseid' :req.body.caseid,'podslovo' :req.body.podslovo}, {$set: {'plocice' : req.body.plocice}});
            CS.collection.updateOne({'caseid' :req.body.caseid,'podslovo' :req.body.podslovo}, {$set: {'comm' : req.body.comm}});
            CS.collection.updateOne({'caseid' :req.body.caseid,'podslovo' :req.body.podslovo}, {$set: {'niz1' : req.body.niz1}});
            CS.collection.updateOne({'caseid' :req.body.caseid,'podslovo' :req.body.podslovo}, {$set: {'niz2' : req.body.niz2}});
            CS.collection.updateOne({'caseid' :req.body.caseid,'podslovo' :req.body.podslovo}, {$set: {'day' : req.body.day}});
            CS.collection.updateOne({'caseid' :req.body.caseid,'podslovo' :req.body.podslovo}, {$set: {'month' : req.body.month}});
            CS.collection.updateOne({'caseid' :req.body.caseid,'podslovo' :req.body.podslovo}, {$set: {'year' : req.body.year}});
            CS.collection.updateOne({'caseid' :req.body.caseid,'podslovo' :req.body.podslovo}, {$set: {'hours' : req.body.hours}});
            CS.collection.updateOne({'caseid' :req.body.caseid,'podslovo' :req.body.podslovo}, {$set: {'minutes' : req.body.minutes}});
            res.send({ message: 'user added' });
        }
    })
})
app.get('/users/me/access-token', verifySession, (req, res) => {
    // we know that the user/caller is authenticated and we have the user_id and user object available to us
    req.userObject.generateAccessAuthToken().then((accessToken) => {
        res.header('x-access-token', accessToken).send({ accessToken });
    }).catch((e) => {
        res.status(400).send(e);
    });
})

app.use(express.static('.././dist/sps'));
app.get('/', (req, res) =>
    res.sendFile('index.html', {root: '../dist/sps/'}),
    
);
app.get('/login-embedding', (req, res) =>
    res.sendFile('index.html', {root: '../dist/sps/'}),
    
);
app.get('/login-staininghe', (req, res) =>
    res.sendFile('index.html', {root: '../dist/sps/'}),
    
);
app.get('/login-sectioning', (req, res) =>
    res.sendFile('index.html', {root: '../dist/sps/'}),
    
);
app.get('/login-grossing', (req, res) =>
    res.sendFile('index.html', {root: '../dist/sps/'}),
    
);
app.get('/login-accessioning', (req, res) =>
    res.sendFile('index.html', {root: '../dist/sps/'}),
    
);
app.get('/login-processing', (req, res) =>
    res.sendFile('index.html', {root: '../dist/sps/'}),
    
);

app.get('/dashsecond', (req, res) =>
    res.sendFile('index.html', {root: '../dist/sps/'}),
    
);

app.get('/dashfirst', (req, res) =>
    res.sendFile('index.html', {root: '../dist/sps/'}),
    
);
app.get('/dashfour', (req, res) =>
    res.sendFile('index.html', {root: '../dist/sps/'}),
    
);
app.get('/dashfive', (req, res) =>
    res.sendFile('index.html', {root: '../dist/sps/'}),
    
);
app.get('/dashsix', (req, res) =>
    res.sendFile('index.html', {root: '../dist/sps/'}),
    
);
app.get('/dashseven', (req, res) =>
    res.sendFile('index.html', {root: '../dist/sps/'}),
    
);
app.get('/clacs', (req, res) =>
    res.sendFile('index.html', {root: '../dist/sps/'}),
    
);
app.get('/login-coverslipping', (req, res) =>
    res.sendFile('index.html', {root: '../dist/sps/'}),
    
);
app.get('/login-sendout', (req, res) =>
    res.sendFile('index.html', {root: '../dist/sps/'}),
    
);
app.get('/login-pathologist', (req, res) =>
    res.sendFile('index.html', {root: '../dist/sps/'}),
    
);
app.get('/pathdash', (req, res) =>
    res.sendFile('index.html', {root: '../dist/sps/'}),
    
);
app.get('/pathinfo', (req, res) =>
    res.sendFile('index.html', {root: '../dist/sps/'}),
    
);
app.get('/login-archive', (req, res) =>
    res.sendFile('index.html', {root: '../dist/sps/'}),
    
);
app.get('/addprocessor', (req, res) =>
    res.sendFile('index.html', {root: '../dist/sps/'}),
    
);
app.get('/addprotocol', (req, res) =>
    res.sendFile('index.html', {root: '../dist/sps/'}),
    
);
app.get('/addstainer', (req, res) =>
    res.sendFile('index.html', {root: '../dist/sps/'}),
    
);
app.get('/addstprotocol', (req, res) =>
    res.sendFile('index.html', {root: '../dist/sps/'}),
    
);
app.get('/addbasket', (req, res) =>
    res.sendFile('index.html', {root: '../dist/sps/'}),
    
);
app.get('/addrack', (req, res) =>
    res.sendFile('index.html', {root: '../dist/sps/'}),
    
);
app.get('/labactivity', (req, res) =>
    res.sendFile('index.html', {root: '../dist/sps/'}),
    
);
app.get('/pathactivity', (req, res) =>
    res.sendFile('index.html', {root: '../dist/sps/'}),
    
);
app.get('/adsactivity', (req, res) =>
    res.sendFile('index.html', {root: '../dist/sps/'}),
    
);
app.get('/adlabactivity', (req, res) =>
    res.sendFile('index.html', {root: '../dist/sps/'}),
    
);
app.get('/addcabinet', (req, res) =>
    res.sendFile('index.html', {root: '../dist/sps/'}),
    
);
app.get('/listusers', (req, res) =>
    res.sendFile('index.html', {root: '../dist/sps/'}),
    
);
app.get('/listprocessor', (req, res) =>
    res.sendFile('index.html', {root: '../dist/sps/'}),
    
);
app.get('/grossfirst', (req, res) =>
    res.sendFile('index.html', {root: '../dist/sps/'}),
    
);
app.get('/grossnext', (req, res) =>
    res.sendFile('index.html', {root: '../dist/sps/'}),
    
);
app.get('/acsfirst', (req, res) =>
    res.sendFile('index.html', {root: '../dist/sps/'}),
    
);
app.get('/acssecond', (req, res) =>
    res.sendFile('index.html', {root: '../dist/sps/'}),
    
);
app.get('/clacs', (req, res) =>
    res.sendFile('index.html', {root: '../dist/sps/'}),
    
);
app.get('/dashfourproc', (req, res) =>
    res.sendFile('index.html', {root: '../dist/sps/'}),
    
);
app.get('/staining', (req, res) =>
    res.sendFile('index.html', {root: '../dist/sps/'}),
    
);
app.get('/dasheight', (req, res) =>
    res.sendFile('index.html', {root: '../dist/sps/'}),
    
);
app.get('/sendoutlabdash', (req, res) =>
    res.sendFile('index.html', {root: '../dist/sps/'}),
    
);
app.get('/sendoutlabmain', (req, res) =>
    res.sendFile('index.html', {root: '../dist/sps/'}),
    
);
app.get('/sendoutpathdash', (req, res) =>
    res.sendFile('index.html', {root: '../dist/sps/'}),
    
);
app.get('/sendoutpathmain', (req, res) =>
    res.sendFile('index.html', {root: '../dist/sps/'}),
    
);

app.get('/pathinfo', (req, res) =>
    res.sendFile('index.html', {root: '../dist/sps/'}),
    
);
app.get('/pathslide', (req, res) =>
    res.sendFile('index.html', {root: '../dist/sps/'}),
    
);
app.get('/pathaddgroup', (req, res) =>
    res.sendFile('index.html', {root: '../dist/sps/'}),
    
);
app.get('/pathedit', (req, res) =>
    res.sendFile('index.html', {root: '../dist/sps/'}),
    
);
app.get('/pathreport', (req, res) =>
    res.sendFile('index.html', {root: '../dist/sps/'}),
    
);
app.get('/pathdash', (req, res) =>
    res.sendFile('index.html', {root: '../dist/sps/'}),
    
);
app.get('/archivedash', (req, res) =>
    res.sendFile('index.html', {root: '../dist/sps/'}),
    
);
 app.listen(process.env.PORT );