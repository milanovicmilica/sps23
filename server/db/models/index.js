const { List } = require('./list.model');
const { Task } = require('./task.model');
const { User } = require('./user.model');
const { Case } = require('./case');
const { Embedding } = require('./embedding');
const { Hospital } = require('./hospital');
const { CS } = require('./infocs');
const { Process } = require('./process');
const { Processor } = require('./processors');
const { ProcessStaining } = require('./processstaining');
const { Protocol } = require('./protocol');
const { Protocol2 } = require('./protocol2');
const { Sample } = require('./sample');
const { Sectioning } = require('./sectioning');
const { Stainer } = require('./stainer.model');
const { Coverslipping } = require('./coverslipping');
const { Rack } = require('./rack');
const { Bascet } = require('./bascet');
const { Sendout } = require('./sendout');
const { Dcassette } = require('./dcassettes');
const { PathGroup } = require('./pathgroup');
const { Reporting } = require('./reporting');
const { Cabinet } = require('./cabinet');
const { Fijoka } = require('./fijoka');
module.exports = {
    List,
    Task,
    User,
    Case,
    Embedding,
    Hospital,
    CS,
    Process,
    Processor,
    ProcessStaining,
    Protocol,
    Protocol2,
    Sample,
    Sectioning,
    Stainer,
    Coverslipping,
    Rack,
    Bascet,
    Sendout,
    Dcassette,
    PathGroup,
    Reporting,
    Cabinet,
    Fijoka
}