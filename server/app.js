const express = require('express');
const app = express();

const { mongoose } = require('./db/mongoose');

const bodyParser = require('body-parser');

// Load in the mongoose models
const { List, Task, User, Case, Embedding, Hospital, CS, Process, Processor, ProcessStaining, Protocol,
    Protocol2, Sample, Sectioning, Stainer } = require('./db/models');

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
app.get('/guest/getallsectioning', (req, res) => {
    // We want to return an array of all the lists that belong to the authenticated user 
    //console.log('caoo')
    Sectioning.find({
       
    }).then((lists) => {
        res.send(lists);
    }).catch((e) => {
        res.send(e);
    });
})
app.get('/guest/getallstainingprocess', (req, res) => {
    // We want to return an array of all the lists that belong to the authenticated user 
    //console.log('caoo')
    ProcessStaining.find({
       
    }).then((lists) => {
        res.send(lists);
    }).catch((e) => {
        res.send(e);
    });
})
app.get('/guest/getallstainers', (req, res) => {

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
app.get('/guest/getallemb', (req, res) => {
    
    Embedding.find({
       
    }).then((lists) => {
        res.send(lists);
    }).catch((e) => {
        res.send(e);
    });
})
app.get('/guest/getallprocess' || '/dashfour/guest/getallprocess', (req, res) => {
    
    Process.find({
       
    }).then((lists) => {
        res.send(lists);
    }).catch((e) => {
        res.send(e);
    });
})
app.get('/guest/getallprotocols2', (req, res) => {
    
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
app.get('/guest/getallsamples' || '/acssecond/guest/getallsamples' || '/clacs/guest/getallsamples', (req, res) => {
    
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
app.get('/grossfirst/guest/getallcases' || '/acsfirst/guest/getallcases' || '/acssecond/guest/getallcases'
|| '/clacs/guest/getallcases', (req, res) => {
    
    Case.find({
       
    }).then((lists) => {
        res.send(lists);
    }).catch((e) => {
        res.send(e);
    });
})
app.get('/guest/getallcs', (req, res) => {
    
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
/////////////



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
app.post('/acsfirst/guest/addCase', (req, res) => {
    // We want to return an array of all the lists that belong to the authenticated user 
   

    let newP = new Case({
        sender : req.body.sender, hospitalid: req.body.hospitalid,   contact: req.body.contact, address:req.body.address, firstname:req.body.firstname,
        lastname : req.body.lastname,    pid: req.body.pid,  date:req.body.date,lbo:req.body.lbo, hnum : req.body.hnum,bnum: req.body.bnum,
        diagnosis: req.body.diagnosis,path:req.body.path, adcom:req.body.adcom, gen: req.body.gen, casenum:req.body.casenum,formatcn:req.body.formatcn,
    });
            newP.save().then((us2) => {
                
                res.send({ message: 'user added' });
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
            Processor.updateOne({'name' :req.body.processor}, {$set: {'free' : nova}});
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
                Sample.updateOne({ 'id': user[index].id, 'caseid': req.body.caseid }, {$set: {'id': index}})     
              
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
                Sample.updateOne({ 'id': user[index].id, 'caseid': req.body.caseid }, {
                    $set: {'slovo': sniz[index]}
                })     
                           
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
            
            Process.updateOne({  'bascet': req.body.bascet }, {
                    $set: {'status': s}
                })     
                Process.updateOne({  'bascet': req.body.bascet }, {
                    $set: {'endhours': req.body.endhours}
                })    
                Process.updateOne({  'bascet': req.body.bascet }, {
                    $set: {'endminutes': req.body.endminutes}
                })         
            
           
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
            
            Processor.updateOne({  'name': req.body.processor }, {
                    $set: {'free': s}
                })     
                  
            
           
            res.send({ message: 'user' });
        }


    }).catch((e) => {
        res.send({ message: 'error' });
    });

})


app.use(express.static('.././dist/sps'));
app.get('/', (req, res) =>
    res.sendFile('index.html', {root: '../dist/sps/'}),
    
);

app.listen(process.env.PORT);