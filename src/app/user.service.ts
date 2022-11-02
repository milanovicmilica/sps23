import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
   }

   login(username, password){
     const data={

      username: username,
      password: password
     }
      return this.http.post('https://sps23.herokuapp.com/guest/login', data) || 
      this.http.post('https://sps23.herokuapp.com/login-embedding/guest/login', data) ||
      this.http.post('https://sps23.herokuapp.com/login-staininghe/guest/login', data) ||
      this.http.post('https://sps23.herokuapp.com/login-sectioning/guest/login', data) || 
      this.http.post('https://sps23.herokuapp.com/login-grossing/guest/login', data) || 
      this.http.post('https://sps23.herokuapp.com/login-accessioning/guest/login', data) || 
      this.http.post('https://sps23.herokuapp.com/login-processing/guest/login', data) ||
      this.http.post('https://sps23.herokuapp.com/login-coverslipping/guest/login', data) ||
      this.http.post('https://sps23.herokuapp.com/login-sendout/guest/login', data) ||
      this.http.post('https://sps23.herokuapp.com/login-patholog/guest/login', data);
   }
   loginProvera(username, password){
    const data={

     username: username,
     password: password
    }
     return this.http.post('https://sps23.herokuapp.com/guest/loginprovera', data) ||
     this.http.post('https://sps23.herokuapp.com/login-embedding/guest/loginprovera', data) ||
     this.http.post('https://sps23.herokuapp.com/login-staininghe/guest/loginprovera', data) ||
     this.http.post('https://sps23.herokuapp.com/login-sectioning/guest/loginprovera', data) || 
     this.http.post('https://sps23.herokuapp.com/login-grossing/guest/loginprovera', data) || 
     this.http.post('https://sps23.herokuapp.com/login-accessioning/guest/loginprovera', data) || 
     this.http.post('https://sps23.herokuapp.com/login-processing/guest/loginprovera', data) || 
     this.http.post('https://sps23.herokuapp.com/login-coverslipping/guest/loginprovera', data) ||
     this.http.post('https://sps23.herokuapp.com/login-sendout/guest/loginprovera', data) ||
     this.http.post('https://sps23.herokuapp.com/login-patholog/guest/loginprovera', data);
  }
 
  addUser(username,password, brTipa, firstname,lastname){
    let t=0;

    const data={
      
      username: username,
      password: password,
     type:brTipa,
     firstname:firstname,
     lastname:lastname
    }

    return this.http.post('https://sps23.herokuapp.com/dashfirst/guest/addUser', data)
  }
  addProtocol(name,hours, minutes, processor){
    let t=0;

    const data={
      
      name: name,
      hours: hours,
      minutes:minutes,
     processor:processor
    }

    return this.http.post('https://sps23.herokuapp.com/addprotocol/guest/addProtocol', data)
  }
  addSTProtocol(name,hours, minutes, stainer){
    let t=0;

    const data={
      
      name: name,
      hours: hours,
      minutes:minutes,
      stainer:stainer
    }

    return this.http.post('https://sps23.herokuapp.com/addstprotocol/guest/addSTProtocol', data)
  }
  addProcessor(name,num, free){
  let t=0;

  const data={
    
    name: name,
    num: num,
    free:free,
   
  }

  return this.http.post('https://sps23.herokuapp.com/addprocessor/guest/addProcessor', data)
  }
  addBasket(name, free){
    let t=0;
  
    const data={
      
      name: name,
     
      free:free,
     
    }
  
    return this.http.post('https://sps23.herokuapp.com/addbasket/guest/addBasket', data)
    }
    addRack(name, free){
      let t=0;
    
      const data={
        
        name: name,
       
        free:free,
       
      }
    
      return this.http.post('https://sps23.herokuapp.com/addrack/guest/addRack', data)
      }
  addStainer(name,num, free){
    let t=0;
  
    const data={
      
      name: name,
      num: num,
      free:free,
     
    }
  
    return this.http.post('https://sps23.herokuapp.com/addstainer/guest/addStainer', data)
    }
  addSample(caseid,sample,s2,brTipa,num,id,slovo, spec, ihc){


    const data={
      
      caseid: caseid,
      casetype: sample,
      sampletype: s2,
      acs:brTipa,
      num:num,
      id:id,
      slovo:slovo,
      spec:spec,
      ihc:ihc
    }

    return this.http.post('https://sps23.herokuapp.com/acssecond/guest/addSample', data)

  }
  addSampleSlide(caseid,sample,s2,brTipa,num,id,slovo, choice, firstch, spec, ihc, niz1,niz2, exbl){


    const data={
      
      caseid: caseid,
      casetype: sample,
      sampletype: s2,
      acs:brTipa,
      num:num,
      id:id,
      slovo:slovo,
      choice:choice,
      firstch:firstch,
      spec:spec,
      ihc:ihc,
      niz1:niz1,
      niz2:niz2,
      exbl:exbl
    }

    return this.http.post('https://sps23.herokuapp.com/acssecond/guest/addSampleSlide', data)

  }
  addSampleBlock(caseid,sample,s2,brTipa,num,id,slovo, exbl, spec,ihc, niz1,niz2){


    const data={
      
      caseid: caseid,
      casetype: sample,
      sampletype: s2,
      acs:brTipa,
      num:num,
      id:id,
      slovo:slovo,
      exbl:exbl,
      spec:spec,
      ihc:ihc,
      niz1:niz1,
      niz2:niz2
    }

    return this.http.post('https://sps23.herokuapp.com/acssecond/guest/addSampleBlock', data)

  }
  printCassette(caseid,slovo,podslovo,print,code,path, asistent)
  {
    const data={
      
      caseid: caseid,
      
      slovo:slovo,
     
      podslovo:podslovo,
      print:print,
      code:code,
      path:path,
      asistent:asistent,
    }

    return this.http.post('https://sps23.herokuapp.com/grossnext/guest/addprcs', data)
  }
  addCS(caseid,brK,specstain,ihc,slovo, plocice,comm, path, asistent, podslovo, niz1,niz2){


    const data={
      
      caseid: caseid,
      brK: brK,
      specstain: specstain,
      ihc:ihc,
      slovo:slovo,
      plocice:plocice,
      comm:comm,
      path:path,
      asistent:asistent,
      podslovo:podslovo,
      niz1:niz1,
      niz2:niz2
    }

    return this.http.post('https://sps23.herokuapp.com/grossnext/guest/addCS', data)

  }
  addProcess(processor,protocol,bascet,casette,hours,minutes,status,poshours,posminutes,posday,posmonth,posyear){


    const data={
      
      processor: processor,
      protocol: protocol,
     
      bascet:bascet,
      casette:casette,
      hours:hours,
      minutes:minutes,
      status:status,
      poshours:poshours,
      posminutes:posminutes,
      posday:posday,
      posmonth:posmonth,
      posyear:posyear
    }

    return this.http.post('https://sps23.herokuapp.com/dashfourproc/guest/addprocess', data)

  }
  addProcessStaining(stainer,protocol,bascet,casette,hours,minutes,status,poshours,posminutes,posday,posmonth,posyear,possec){


    const data={
      
      stainer: stainer,
      protocol: protocol,
     
      bascet:bascet,
      casette:casette,
      hours:hours,
      minutes:minutes,
      status:status,
      poshours:poshours,
      posminutes:posminutes,
      posday:posday,
      posmonth:posmonth,
      posyear:posyear,
      possec:possec
    }

    return this.http.post('https://sps23.herokuapp.com/staining/guest/addstainingprocess', data)

  }
  endProcess(bascet, endhours,endminutes)
  {
    const data={
      
  
      bascet:bascet,
  
      endhours:endhours,
      endminutes:endminutes,
      
    }

    return this.http.post('https://sps23.herokuapp.com/dashfour/guest/endprocess', data)
  }
  endSProcess(bascet, endhours,endminutes,cassette)
  {
    const data={
      
  
      bascet:bascet,
  
      endhours:endhours,
      endminutes:endminutes,
      cassette:cassette
    }

    return this.http.post('https://sps23.herokuapp.com/dashsix/guest/endsprocess', data)
  }
  updateProcessor(processor)
  {
    const data={
      
  
      processor:processor,
  
  
      
    }

    return this.http.post('https://sps23.herokuapp.com/dashfour/guest/updateProcessor', data)
  }
  updateStainer(stainer)
  {
    const data={
      
  
      stainer:stainer,
  
  
      
    }

    return this.http.post('https://sps23.herokuapp.com/dashsix/guest/updateStainer', data)
  }
  changeID(caseid)
  {
    const data={
      
    
     
      caseid:caseid
    }
    return this.http.post('https://sps23.herokuapp.com/acssecond/guest/changeid', data)
  }
  changeslovo(caseid)
  {
    const data={
      
    
     
      caseid:caseid
    }
    return this.http.post('https://sps23.herokuapp.com/acssecond/guest/changeslovo', data)
  }
  deleteSample(id, caseid){


    const data={
      
    
      id:id,
      caseid:caseid
    }

    return this.http.post('https://sps23.herokuapp.com/acssecond/guest/deleteSample', data)

  }
  findCassette(cassette)
  {
    const data={
      
    
      cassette:cassette
      
    }

    return this.http.post('http://localhost:4000/guest/findCassette', data)
  }
  confirmEmb(caseid, cassette, date, time, minute)
  {
    const data={
      
    
      cassette:cassette,
      caseid:caseid,
      date:date,
      time:time,
      minute:minute,
    }

    return this.http.post('https://sps23.herokuapp.com/dashfive/guest/confirmEmb', data)
  }
  addSectioning(cassette,dan,mesec,godina,nizQr,nizprint, nizOznaka)
  {
    const data={
      
    
      cassette:cassette,
      dan:dan,
      mesec:mesec,
      godina:godina,
      nizQr:nizQr,
      nizprint:nizprint,
      nizOznaka:nizOznaka
    }

    return this.http.post('https://sps23.herokuapp.com/dashseven/guest/addSectioning', data)
  }
  addSendout(laborant,caseid,sati,minuti,dan,mesec,godina){
    const data={
      
    
      laborant:laborant,
      dan:dan,
      mesec:mesec,
      godina:godina,
      caseid:caseid,
      minuti:minuti,
      sati:sati
    }

    return this.http.post('https://sps23.herokuapp.com/sendoutlabmain/guest/addSendout', data)
  }
  SendoutUpdate(patolog,caseid,endsati,endminuti,enddan,endmesec,endgodina){
    const data={
      
    
      patolog:patolog,
      enddan:enddan,
      endmesec:endmesec,
      endgodina:endgodina,
      caseid:caseid,
      endminuti:endminuti,
      endsati:endsati
    }

    return this.http.post('https://sps23.herokuapp.com/sendoutpathmain/guest/SendoutUpdate', data)
  }
  confirmCoverslipping(caseid,rack, dan, mesec, godina, time, minute, lab){

    const data={
      
    
      caseid:caseid,
      rack:rack,
      day:dan,
      month:mesec,
      year:godina,
      time:time,
      minute:minute,
      laborant:lab
    }

    return this.http.post('https://sps23.herokuapp.com/dasheight/guest/confirmCoverslipping', data)
  }
  updateSectioning(cassette)
  {
    const data={
      
    
      cassette:cassette
     
    }

    return this.http.post('https://sps23.herokuapp.com/dashseven/guest/updateSectioning', data)
  }
  updateSampleCode(caseid,slovo,s){
    const data={
      
    
      caseid:caseid,
      slovo:slovo,
      s:s
     
    }

    return this.http.post('https://sps23.herokuapp.com/acssecond/guest/updateSampleCode', data)
  }
  updateEXSSampleCode(caseid,slovo,nizQr,nizOznaka)
  {
    const data={
      
    
      caseid:caseid,
      slovo:slovo,
      nizQr:nizQr,
      nizOznaka:nizOznaka
     
    }

    return this.http.post('https://sps23.herokuapp.com/acssecond/guest/updateEXSSampleCode', data)
  }
  addCase(sender,hospitalid,contact,address,firstname,lastname,
    pid,date,lbo,hnum,num,diagnosis,pathologist,adcomments,format,cn, gen){
    const data={
      
      sender: sender,
      hospitalid: hospitalid,
     contact:contact,
     address:address,
     firstname:firstname,
     lastname:lastname,
     pid:pid,
     date:date,
     lbo:lbo,
     hnum:hnum,
     bnum:num,
      diagnosis:diagnosis,
      path:pathologist,
      adcom:adcomments,
      casenum:cn,
      formatcn:format,
      gen:gen


    }

    return this.http.post('https://sps23.herokuapp.com/acsfirst/guest/addCase', data)
  }
  getAllPath(){
    return this.http.get('https://sps23.herokuapp.com/guest/getallpath') || this.http.get('https://sps23.herokuapp.com/acsfirst/guest/getallpath') 
  }
  getAllCs(){
    return this.http.get('https://sps23.herokuapp.com/guest/getallcs') ||
    this.http.get('https://sps23.herokuapp.com/dashfive/guest/getallcs') || 
    this.http.get('https://sps23.herokuapp.com/dashseven/guest/getallcs') ||
    this.http.get('https://sps23.herokuapp.com/sendoutpathdash/guest/getallcs') || 
    this.http.get('https://sps23.herokuapp.com/pathdash/guest/getallcs');
  }
  getAllCases(){
    return this.http.get('https://sps23.herokuapp.com/guest/getallcases') || 
    this.http.get('https://sps23.herokuapp.com/grossfirst/guest/getallcases') 
    || this.http.get('https://sps23.herokuapp.com/acsfirst/guest/getallcases') ||
     this.http.get('https://sps23.herokuapp.com/acssecond/guest/getallcases') ||
    this.http.get('https://sps23.herokuapp.com/clacs/guest/getallcases') ||
    this.http.get('https://sps23.herokuapp.com/dashfive/guest/getallcases') ||
    this.http.get('https://sps23.herokuapp.com/dashseven/guest/getallcases') || 
    this.http.get('https://sps23.herokuapp.com/grossfirst/guest/getallcases') || 
    this.http.get('https://sps23.herokuapp.com/grossnext/guest/getallcases') || 
    this.http.get('https://sps23.herokuapp.com/sendoutpathdash/guest/getallcases') ||
    this.http.get('https://sps23.herokuapp.com/pathdash/guest/getallcases') ||
    this.http.get('https://sps23.herokuapp.com/pathinfo/guest/getallcases');
  }
  getAllHospitals(){
    return this.http.get('https://sps23.herokuapp.com/guest/getallhospitals') || this.http.get('https://sps23.herokuapp.com/acsfirst/guest/getallhospitals')
  }
  getAllSendout(){
    return this.http.get('https://sps23.herokuapp.com/sendoutpathdash/guest/getallsendout') ||
    this.http.get('https://sps23.herokuapp.com/pathdash/guest/getallsendout');
  }
  getAllSamples()
  {
    return this.http.get('https://sps23.herokuapp.com/guest/getallsamples') || 
    this.http.get('https://sps23.herokuapp.com/acssecond/guest/getallsamples')
    || this.http.get('https://sps23.herokuapp.com/clacs/guest/getallsamples') ||
    this.http.get('https://sps23.herokuapp.com/dashfive/guest/getallsamples') ||
    this.http.get('https://sps23.herokuapp.com/dashseven/guest/getallsamples') || 
    this.http.get('https://sps23.herokuapp.com/grossfirst/guest/getallsamples') ||
    this.http.get('https://sps23.herokuapp.com/grossnext/guest/getallsamples') ||
    this.http.get('https://sps23.herokuapp.com/sendoutpathdash/guest/getallsamples') ||
    this.http.get('https://sps23.herokuapp.com/pathdash/guest/getallsamples'); 
  }
  getAllProcessors()
  {
    return this.http.get('https://sps23.herokuapp.com/guest/getallprocessors') ||  
    this.http.get('https://sps23.herokuapp.com/addprotocol/guest/getallprocessors') ||
    this.http.get('https://sps23.herokuapp.com/dashfour/guest/getallprocessors') ||
    this.http.get('https://sps23.herokuapp.com/dashfourproc/guest/getallprocessors')
  }
  
  getAllProtocols()
  {
    return this.http.get('https://sps23.herokuapp.com/guest/getallprotocols')||
    this.http.get('https://sps23.herokuapp.com/dashfourproc/guest/getallprotocols')
  }
  getAllProtocols2()
  {
    return this.http.get('https://sps23.herokuapp.com/guest/getallprotocols2') ||
    this.http.get('https://sps23.herokuapp.com/staining/guest/getallprotocols2');
  }
  getAllProcess()
  {
    return this.http.get('https://sps23.herokuapp.com/dashfour/guest/getallprocess')
  }
  getAllEmb()
  {
    return this.http.get('https://sps23.herokuapp.com/guest/getallemb') ||
    this.http.get('https://sps23.herokuapp.com/dashfive/guest/getallemb') || 
    this.http.get('https://sps23.herokuapp.com/dashseven/guest/getallemb');
  }
  getAllStainers()
  {
    return this.http.get('https://sps23.herokuapp.com/guest/getallstainers') ||
    this.http.get('https://sps23.herokuapp.com/dashsix/guest/getallstainers') ||
    this.http.get('https://sps23.herokuapp.com/staining/guest/getallstainers');
  }
  getAllStainersAdmin()
  {
    return this.http.get('https://sps23.herokuapp.com/addstprotocol/guest/getallstainers')
  }
  getAllRack()
  {
    return this.http.get('https://sps23.herokuapp.com/dasheight/guest/getallrack')
  }
  getAllBascets()
  {
    return this.http.get('https://sps23.herokuapp.com/dashfourproc/guest/getallbascets')
  }
  getAllCover()
  {
    return this.http.get('https://sps23.herokuapp.com/dasheight/guest/getallcover')
  }
  getAllFreeRack()
  {
    return this.http.get('https://sps23.herokuapp.com/staining/guest/getallfreerack') ||
    this.http.get('https://sps23.herokuapp.com/dasheight/guest/getallfreerack')
  }
  getAllUsers()
  {
    return this.http.get('https://sps23.herokuapp.com/guest/getallusers') || 
    this.http.get('https://sps23.herokuapp.com/grossfirst/guest/getallusers')
  }
  getAllStainingProcess()
  {
    return this.http.get('https://sps23.herokuapp.com/guest/getallstainingprocess') || 
    this.http.get('https://sps23.herokuapp.com/dashsix/guest/getallstainingprocess')
  }
  getAllSectioning()
  {
    return this.http.get('https://sps23.herokuapp.com/guest/getallsectioning') || 
    this.http.get('https://sps23.herokuapp.com/dashseven/guest/getallsectioning')||
    this.http.get('https://sps23.herokuapp.com/sendoutlabmain/guest/getallsectioning');
  }
  dodajKupcaPoc(ime, prezime, korime, lozinka, grad, datum, telefon, mejl, slika){
    let t=0;
    const data={
      
      ime: ime,
      prezime: prezime,
      korime: korime,
      lozinka: lozinka,
      grad: grad,
      datum: datum,
      telefon: telefon,
      mejl: mejl,
      tip: 0,
      agencija:0,
      brLic:0,
      odobren:0,
      slika:slika
    }

    return this.http.post('http://localhost:4000/administrator/addkupca', data)
  }




}
