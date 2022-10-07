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
      return this.http.post('${process.env.PORT}/guest/login', data);
   }
   loginProvera(username, password){
    const data={

     username: username,
     password: password
    }
     return this.http.post('${process.env.PORT}/guest/loginprovera', data);
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

    return this.http.post('http://localhost:4000/guest/addUser', data)
  }
  addProtocol(name,hours, minutes, processor){
    let t=0;

    const data={
      
      name: name,
      hours: hours,
      minutes:minutes,
     processor:processor
    }

    return this.http.post('http://localhost:4000/guest/addProtocol', data)
  }
  addSTProtocol(name,hours, minutes, stainer){
    let t=0;

    const data={
      
      name: name,
      hours: hours,
      minutes:minutes,
      stainer:stainer
    }

    return this.http.post('http://localhost:4000/guest/addSTProtocol', data)
  }
  addProcessor(name,num, free){
  let t=0;

  const data={
    
    name: name,
    num: num,
    free:free,
   
  }

  return this.http.post('http://localhost:4000/guest/addProcessor', data)
  }
  addStainer(name,num, free){
    let t=0;
  
    const data={
      
      name: name,
      num: num,
      free:free,
     
    }
  
    return this.http.post('http://localhost:4000/guest/addStainer', data)
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

    return this.http.post('http://localhost:4000/guest/addSample', data)

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

    return this.http.post('http://localhost:4000/guest/addSampleSlide', data)

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

    return this.http.post('http://localhost:4000/guest/addSampleBlock', data)

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

    return this.http.post('http://localhost:4000/guest/addprcs', data)
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

    return this.http.post('http://localhost:4000/guest/addCS', data)

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

    return this.http.post('http://localhost:4000/guest/addprocess', data)

  }
  addProcessStaining(stainer,protocol,bascet,casette,hours,minutes,status,poshours,posminutes,posday,posmonth,posyear){


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
      posyear:posyear
    }

    return this.http.post('http://localhost:4000/guest/addstainingprocess', data)

  }
  endProcess(bascet, endhours,endminutes)
  {
    const data={
      
  
      bascet:bascet,
  
      endhours:endhours,
      endminutes:endminutes,
      
    }

    return this.http.post('http://localhost:4000/guest/endprocess', data)
  }
  endSProcess(bascet, endhours,endminutes)
  {
    const data={
      
  
      bascet:bascet,
  
      endhours:endhours,
      endminutes:endminutes,
      
    }

    return this.http.post('http://localhost:4000/guest/endsprocess', data)
  }
  updateProcessor(processor)
  {
    const data={
      
  
      processor:processor,
  
  
      
    }

    return this.http.post('http://localhost:4000/guest/updateProcessor', data)
  }
  updateStainer(stainer)
  {
    const data={
      
  
      stainer:stainer,
  
  
      
    }

    return this.http.post('http://localhost:4000/guest/updateStainer', data)
  }
  changeID(caseid)
  {
    const data={
      
    
     
      caseid:caseid
    }
    return this.http.post('http://localhost:4000/guest/changeid', data)
  }
  changeslovo(caseid)
  {
    const data={
      
    
     
      caseid:caseid
    }
    return this.http.post('http://localhost:4000/guest/changeslovo', data)
  }
  deleteSample(id, caseid){


    const data={
      
    
      id:id,
      caseid:caseid
    }

    return this.http.post('http://localhost:4000/guest/deleteSample', data)

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

    return this.http.post('http://localhost:4000/guest/confirmEmb', data)
  }
  addSectioning(cassette,dan,mesec,godina,nizQr,nizprint)
  {
    const data={
      
    
      cassette:cassette,
      dan:dan,
      mesec:mesec,
      godina:godina,
      nizQr:nizQr,
      nizprint:nizprint
    }

    return this.http.post('http://localhost:4000/guest/addSectioning', data)
  }
  updateSectioning(cassette)
  {
    const data={
      
    
      cassette:cassette
     
    }

    return this.http.post('http://localhost:4000/guest/updateSectioning', data)
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

    return this.http.post('http://localhost:4000/guest/addCase', data)
  }
  getAllPath(){
    return this.http.get('http://localhost:4000/guest/getallpath')
  }
  getAllCs(){
    return this.http.get('http://localhost:4000/guest/getallcs')
  }
  getAllCases(){
    return this.http.get('http://localhost:4000/guest/getallcases')
  }
  getAllHospitals(){
    return this.http.get('http://localhost:4000/guest/getallhospitals')
  }
  getAllSamples()
  {
    return this.http.get('http://localhost:4000/guest/getallsamples')
  }
  getAllProcessors()
  {
    return this.http.get('http://localhost:4000/guest/getallprocessors')
  }
  getAllProtocols()
  {
    return this.http.get('http://localhost:4000/guest/getallprotocols')
  }
  getAllProtocols2()
  {
    return this.http.get('http://localhost:4000/guest/getallprotocols2')
  }
  getAllProcess()
  {
    return this.http.get('http://localhost:4000/guest/getallprocess')
  }
  getAllEmb()
  {
    return this.http.get('http://localhost:4000/guest/getallemb')
  }
  getAllStainers()
  {
    return this.http.get('http://localhost:4000/guest/getallstainers')
  }
  getAllUsers()
  {
    return this.http.get('${process.env.PORT}/guest/getallusers')
  }
  getAllStainingProcess()
  {
    return this.http.get('http://localhost:4000/guest/getallstainingprocess')
  }
  getAllSectioning()
  {
    return this.http.get('http://localhost:4000/guest/getallsectioning')
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