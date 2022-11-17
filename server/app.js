const express = require('express');
const app = express();

const { mongoose } = require('./db/mongoose');

const bodyParser = require('body-parser');

// Load in the mongoose models
const { List, Task, User, Case, Embedding, Hospital, CS, Process, Processor, ProcessStaining, Protocol,
    Protocol2, Sample, Sectioning, Stainer , Coverslipping, Rack, Bascet, Sendout, Dcassette, PathGroup, Reporting} = require('./db/models');

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
app.get('/guest/getallusers' || '/grossfirst/guest/getallusers' || '/pathslide/guest/getallusers', (req, res) => {
   
    console.log('caoo')
    User.find({
       
    }).then((lists) => {
        res.send(lists);
    }).catch((e) => {
        res.send(e);
    });
})
app.get('/guest/getallsectioning' || '/dashseven/guest/getallsectioning' || '/sendoutlabmain/guest/getallsectioning' ||
'/labactivity/guest/getallsectioning', (req, res) => {
   
    Sectioning.find({
       
    }).then((lists) => {
        res.send(lists);
    }).catch((e) => {
        res.send(e);
    });
})
app.get('/guest/getallstainingprocess' || '/dashsix/guest/getallstainingprocess' || '/dasheight/guest/getallstainingprocess', (req, res) => {

    ProcessStaining.find({
       
    }).then((lists) => {
        res.send(lists);
    }).catch((e) => {
        res.send(e);
    });
})
app.get('/guest/getallstainers' || '/dashsix/guest/getallstainers' || '/staining/guest/getallstainers', (req, res) => {

    Stainer.find({
       
    }).then((lists) => {
        res.send(lists);
    }).catch((e) => {
        res.send(e);
    });
})
app.get('/addstprotocol/guest/getallstainers', (req, res) => {

    Stainer.find({
       
    }).then((lists) => {
        res.send(lists);
    }).catch((e) => {
        res.send(e);
    });
})
app.get('/dasheight/guest/getallrack', (req, res) => {

    Rack.find({
       
    }).then((lists) => {
        res.send(lists);
    }).catch((e) => {
        res.send(e);
    });
})


app.get('/guest/getallemb' || '/dashfive/guest/getallemb' || '/dashseven/guest/getallemb', (req, res) => {
    
    Embedding.find({
       
    }).then((lists) => {
        res.send(lists);
    }).catch((e) => {
        res.send(e);
    });
})
app.get('/guest/getallprocess' || '/dashfour/guest/getallprocess' || '/pathslide/guest/getallprocess', (req, res) => {
    
    Process.find({
       
    }).then((lists) => {
        res.send(lists);
    }).catch((e) => {
        res.send(e);
    });
})
app.get('/pathreport/guest/getallreporting' || '/pathactivity/guest/getallreporting', (req, res) => {
    
    Reporting.find({
       
    }).then((lists) => {
        res.send(lists);
    }).catch((e) => {
        res.send(e);
    });
})
app.get('/sendoutpathdash/guest/getallsendout' || '/pathdash/guest/getallsendout' , (req, res) => {
    
    Sendout.find({
       
    }).then((lists) => {
        res.send(lists);
    }).catch((e) => {
        res.send(e);
    });
})
app.get('/dashfourproc/guest/getallbascets', (req, res) => {
    
    Bascet.find({
       free:1
    }).then((lists) => {
        res.send(lists);
    }).catch((e) => {
        res.send(e);
    });
})
app.get('/dashfour/guest/getallprocess', (req, res) => {
    
    Process.find({
       
    }).then((lists) => {
        res.send(lists);
    }).catch((e) => {
        res.send(e);
    });
})
app.get('/guest/getallprotocols2' || '/staining/guest/getallprotocols2', (req, res) => {
    
    Protocol2.find({
       
    }).then((lists) => {
        res.send(lists);
    }).catch((e) => {
        res.send(e);
    });
})
app.get('/guest/getallprotocols' || '/dashfourproc/guest/getallprotocols', (req, res) => {
    
    Protocol.find({
       
    }).then((lists) => {
        res.send(lists);
    }).catch((e) => {
        res.send(e);
    });
})
app.get('/guest/getallprocessors' || '/addprotocol/guest/getallprocessors' || '/dashfour/guest/getallprocessors'
|| '/dashfourproc/guest/getallprocessors', (req, res) => {
    
    Processor.find({
       
    }).then((lists) => {
        res.send(lists);
    }).catch((e) => {
        res.send(e);
    });
})

app.get('/pathaddgroup/guest/getallgroup' || '/pathedit/guest/getallgroup' || '/grossnext/guest/getallgroup', (req, res) => {
    
    PathGroup.find({
       
    }).then((lists) => {
        res.send(lists);
    }).catch((e) => {
        res.send(e);
    });
})
app.get('/guest/getallsamples' || '/acssecond/guest/getallsamples' || '/clacs/guest/getallsamples'
|| '/dashfive/guest/getallsamples' || '/dashseven/guest/getallsamples' || '/grossfirst/guest/getallsamples' ||
'/grossnext/guest/getallsamples' || '/sendoutpathdash/guest/getallsamples' || '/pathdash/guest/getallsamples', (req, res) => {
    
    Sample.find({
       
    }).then((lists) => {
        res.send(lists);
    }).catch((e) => {
        res.send(e);
    });
})
app.get('/guest/getallhospitals' || '/acsfirst/guest/getallhospitals', (req, res) => {
    
    Hospital.find({
       
    }).then((lists) => {
        res.send(lists);
    }).catch((e) => {
        res.send(e);
    });
})
app.get('/guest/getallcases', (req, res) => {
    
    Case.find({
       
    }).then((lists) => {
        res.send(lists);
    }).catch((e) => {
        res.send(e);
    });
})
app.get('/dasheight/guest/getallcover' || '/pathslide/guest/getallcover', (req, res) => {
    
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
|| '/pathreport/guest/getallcases' || '/labactivity/guest/getallcases', (req, res) => {
    
    Case.find({
       
    }).then((lists) => {
        res.send(lists);
    }).catch((e) => {
        res.send(e);
    });
})
app.get('/guest/getallcs' || '/dashfive/guest/getallcs' || '/dashseven/guest/getallcs' || '/sendoutpathdash/guest/getallcs' 
|| '/pathdash/guest/getallcs' || '/pathslide/guest/getallcs' || '/grossnext/guest/getallcs', (req, res) => {
    
    CS.find({
       
    }).then((lists) => {
        res.send(lists);
    }).catch((e) => {
        res.send(e);
    });
})
app.get('/guest/getallpath' || '/acsfirst/guest/getallpath', (req, res) => {
    
    User.find({
     type: 3  
    }).then((lists) => {
        res.send(lists);
    }).catch((e) => {
        res.send(e);
    });
})
app.get('/staining/guest/getallfreerack' || '/dasheight/guest/getallfreerack', (req, res) => {
    
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
|| '/login-coverslipping/guest/loginprovera' || '/login-sendout/guest/loginprovera' || '/login-patholog/guest/loginprovera', (req, res) => {
    // We want to return an array of all the lists that belong to the authenticated user 
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
    // We want to return an array of all the lists that belong to the authenticated user 
    User.findOne({
        username: req.body.username,
        password: req.body.password
    }).then((user) => {
        if(user!=null){
        res.send(user);}
       
        
    }).catch((e) => {
        res.send({ message: 'nema' })
   
    });
})
app.post('/addstprotocol/guest/addSTProtocol', (req, res) => {
    // We want to return an array of all the lists that belong to the authenticated user 
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

app.post('/grossnext/guest/addDc', (req, res) => {
    // We want to return an array of all the lists that belong to the authenticated user 
 

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
app.post('/grossnext/guest/addDcqr', (req, res) => {
    // We want to return an array of all the lists that belong to the authenticated user 
 

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
app.post('/addstainer/guest/addStainer', (req, res) => {
    // We want to return an array of all the lists that belong to the authenticated user 
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
app.post('/addprocessor/guest/addProcessor', (req, res) => {
    // We want to return an array of all the lists that belong to the authenticated user 
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
app.post('/addprotocol/guest/addProtocol', (req, res) => {
    // We want to return an array of all the lists that belong to the authenticated user 
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
app.post('/dashfirst/guest/addUser', (req, res) => {
    // We want to return an array of all the lists that belong to the authenticated user 
   

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
app.post('/acsfirst/guest/addCase' || '${process.env.PORT}/guest/addCase' || '${process.env.PORT}/acsfirst/guest/addCase', (req, res) => {
    // We want to return an array of all the lists that belong to the authenticated user 
   
    console.log('evoo u app1')
    let newP = new Case({
        sender : req.body.sender, hospitalid: req.body.hospitalid,   contact: req.body.contact, address:req.body.address, firstname:req.body.firstname,
        lastname : req.body.lastname,    pid: req.body.pid,  date:req.body.date, lbo:req.body.lbo, hnum : req.body.hnum,bnum: req.body.bnum,
        diagnosis: req.body.diagnosis, path:req.body.path, adcom:req.body.adcom, gen: req.body.gen, casenum:req.body.casenum,
         formatcn:req.body.formatcn, day:req.body.currday, month:req.body.currmonth
    });
            newP.save().then((us2) => {
                console.log('evoo u app')
                res.send({ message: 'user added' });
            }).catch((e) => {console.log('evoo u error')
                res.send({ message: 'error' });
            });

})

app.post('/pathaddgroup/guest/addPathGroup', (req, res) => {
    // We want to return an array of all the lists that belong to the authenticated user 
   
    
    let newP = new PathGroup({
        groupname : req.body.groupname, pathologist: req.body.pathologist,   ss: req.body.ss, ihc:req.body.ihc, type:req.body.type,
     
    });
            newP.save().then((us2) => {
               
                res.send({ message: 'user' });
            }).catch((e) => {
                res.send({ message: 'error' });
            });

})
app.post('/acssecond/guest/addSample', (req, res) => {    

    let newP = new Sample({
        caseid : req.body.caseid, casetype: req.body.casetype,   sampletype: req.body.sampletype, acs:req.body.acs, num:req.body.num,
        id : req.body.id,    slovo: req.body.slovo,  spec:req.body.spec,ihc:req.body.ihc})
            newP.save().then((us2) => {
                
                res.send({ message: 'user' });
            }).catch((e) => {
                res.send({ message: 'error' });
            });

})

app.post('/pathreport/guest/addReporting', (req, res) => {    

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
app.post('/acssecond/guest/addSampleSlide', (req, res) => {    

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

app.post('/acssecond/guest/updateSampleCode', (req, res) => {   

    Sample.findOne({
        caseid: req.body.caseid,
        slovo:req.body.slovo
       
    }).then((user) => {
        if(user==null){   res.send({ message: 'nema' });}

        Sample.collection.updateOne({'caseid' : req.body.caseid, 'slovo':req.body.slovo}, {$set: {'code' : req.body.s}});
        res.send({ message: 'user' });
      

}).catch((e) => {
res.send({ message: 'error' });
});
})

app.post('/pathedit/guest/updatePathGroupss', (req, res) => {   

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
app.post('/pathedit/guest/updatePathGroupihc', (req, res) => {   

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
app.post('/acssecond/guest/updateEXSSampleCode', (req, res) => {   

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
app.post('/dashfourproc/guest/addprocess', (req, res) => {    

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

app.post('/acssecond/guest/addSampleBlock', (req, res) => {    

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
app.post('/sendoutlabmain/guest/addSendout', (req, res) => {    

    let newP = new Sendout({
        caseid : req.body.caseid, sati: req.body.sati,   minuti: req.body.minuti, laborant:req.body.laborant, dan:req.body.dan,
        mesec : req.body.mesec,    godina: req.body.godina})
            newP.save().then((us2) => {
                
                res.send({ message: 'user' });
            }).catch((e) => {
                res.send({ message: 'error' });
            });

})
app.post('/sendoutpathmain/guest/SendoutUpdate', (req, res) => {    

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
app.post('/addbasket/guest/addBasket', (req, res) => {    
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
app.post('/addrack/guest/addRack', (req, res) => {    
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
app.post('/acssecond/guest/deleteSample', (req, res) => {    
    
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
app.post('/acssecond/guest/changeid' || '/acssecond/guest/deleteSample/changeid', (req, res) => {    
    let sniz=['A','B','C','D','E','F','G','H','I',
    'J','K','L','M','N','O','P','Q','R','S','T',
    'U','V','W','X','Y','Z']; console.log("evoooo2")
    Sample.find({
         caseid: req.body.caseid
       
    }).then((user) => {
        if(user==null)
        {         console.log("evooooc")
                res.send({ message: 'nema' }); 

        }else{
            console.log("evoooo")
            for (let index = 0; index < user.length; index++) {
                Sample.collection.updateOne({ 'id': user[index].id, 'caseid': req.body.caseid }, {$set: {'id': index}})     
                
            }
           
            res.send({ message: 'user' });
        }


    }).catch((e) => {
        res.send({ message: 'error' });
    });

})
app.post('/acssecond/guest/changeslovo', (req, res) => {    
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
app.post('/dashfour/guest/endprocess', (req, res) => {    
    
    Process.findOne({
        bascet: req.body.bascet
       
    }).then((user) => {
        if(user==null)
        {        
                res.send({ message: 'nema' }); 

        }else{
            let s=1;
            Process.collection.updateOne({'bascet': req.body.bascet }, {  $set: {'lab': req.body.lab}});
            Process.collection.updateOne({'bascet': req.body.bascet }, {  $set: {'endday': req.body.endday}});
            Process.collection.updateOne({'bascet': req.body.bascet }, {  $set: {'endmonth': req.body.endmonth}});
            Process.collection.updateOne({'bascet': req.body.bascet }, {  $set: {'endyear': req.body.endyear}});
                Process.collection.updateOne({'bascet': req.body.bascet }, {  $set: {'status': s}});
                Process.collection.updateOne({'bascet': req.body.bascet }, {  $set: {'endhours': req.body.endhours}});
                Process.collection.updateOne({'bascet': req.body.bascet }, {    $set: {'endminutes': req.body.endminutes}});
            res.send({ message: 'user' });
        }


    }).catch((e) => {
        res.send({ message: 'error' });
    });

})
app.post('/dashfour/guest/updateProcessor', (req, res) => {    
    
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
app.post('/dashfive/guest/confirmEmb', (req, res) => {    
    
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
app.post('/dasheight/guest/confirmCoverslipping', (req, res) => {    
    
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
app.post('/dashsix/guest/endsprocess', (req, res) => {    
    
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

app.post('/dashsix/guest/updateStainer', (req, res) => {    
    
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
app.post('/staining/guest/addstainingprocess', (req, res) => {   
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
app.post('/dashseven/guest/addSectioning', (req, res) => {    

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
app.post('/dashseven/guest/updateSectioning', (req, res) => {    

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
app.post('/grossnext/guest/addprcs', (req, res) => {    

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
app.post('/grossnext/guest/addCS', (req, res) => {    

    CS.findOne({'caseid':req.body.caseid, 'podslovo' :req.body.podslovo}, (err,user)=>{
            
        if(user==null)  {  }
        else{
          
            CS.collection.updateOne({'caseid' :req.body.caseid,'podslovo' :req.body.podslovo}, {$set: {'specstain' : req.body.specstain}});
            CS.collection.updateOne({'caseid' :req.body.caseid,'podslovo' :req.body.podslovo}, {$set: {'ihc' : req.body.ihc}});
            CS.collection.updateOne({'caseid' :req.body.caseid,'podslovo' :req.body.podslovo}, {$set: {'plocice' : req.body.plocice}});
            CS.collection.updateOne({'caseid' :req.body.caseid,'podslovo' :req.body.podslovo}, {$set: {'comm' : req.body.comm}});
            CS.collection.updateOne({'caseid' :req.body.caseid,'podslovo' :req.body.podslovo}, {$set: {'niz1' : req.body.niz1}});
            CS.collection.updateOne({'caseid' :req.body.caseid,'podslovo' :req.body.podslovo}, {$set: {'niz2' : req.body.niz2}});
            res.send({ message: 'user added' });
        }
    })
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
app.get('/grossfirst', (req, res) =>
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
app.listen(process.env.PORT);