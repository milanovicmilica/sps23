import { Component, OnInit, HostListener } from '@angular/core';
import { timestamp } from 'rxjs';
import { Processor } from '../models/processors';
import { Protocol } from '../models/protocol';
import { User } from '../models/user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';
import { Result } from '@zxing/library';
import { BarcodeFormat } from '@zxing/library';
import { Protocol2 } from '../models/protocol2';
import { Stainer } from '../models/stainer';
import { Rack } from '../models/rack';
import { ProcessStaining } from '../models/processstaining';
import { HttpResponse } from '@angular/common/http';
@Component({
  selector: 'app-staining',
  templateUrl: './staining.component.html',
  styleUrls: ['./staining.component.css']
})
export class StainingComponent implements OnInit {

  constructor(private router: Router, private UserService: UserService) { }

  ngOnInit(): void {
    let user1 = JSON.parse(sessionStorage.getItem("laborant")) as HttpResponse<any>; 
   
    if(!user1 || user1.body.type!=1){
      localStorage.clear();
      sessionStorage.clear();
      this.router.navigate(['/login-staininghe']);
    }else{
  this.me=user1.body;
    this.UserService.getAllStainers().subscribe((data: Stainer[])=>{
      this.allStainers=data;
      this.UserService.getAllFreeRack().subscribe((data: Rack[])=>{
        this.allrack=data;
        this.UserService.getAllStainingProcess().subscribe((data: ProcessStaining[])=>{
          this.allstainings=data;
   this.g1=0;
   this.g2=0;
   this.addf=0;
   this.popup=0;
   this.redSelect=0;
   this.word=""
      this.UserService.getAllProtocols2().subscribe((data: Protocol2[])=>{
        this.allProtocols=data;
        for (let index = 0; index < this.allStainers.length; index++) {
          if(this.allStainers[index].free>0)
          {
            let s=this.allStainers[index].name
            this.freeStainers.push(s);
          }
          
        }
        //this.casette.push("");
       // this.scanner.permissionResponse.subscribe((perm: boolean) => this.hasPermission = perm);
      })
      })
      })
    })}
  }


  me:User;
  redSelect:number;
  logout(){
    sessionStorage.clear();
    localStorage.clear()
    this.UserService.removeSession();
    this.router.navigate(['/login-staininghe']);
  }
  allstainings:ProcessStaining[];
  bascet:string;
  casette:string;
  slidearray:string[]=[];
  protocol:string;
  stainer:string;
  g1:number;
  g2:number;
  allrack:Rack[];
  closepopup(){
    this.popup=0;
  }
  startprocess(){
    let cnt;
    for (let index = 0; index < this.slidearray.length; index++) {
      cnt=0;
      for (let index2 = 0; index2 < this.slidearray[index].length; index2++) {
        if(this.slidearray[index].charAt(index2)==']')
        cnt++
      
      }
      if(cnt>=2)
      {
        this.slidearray[index]=this.slidearray[index].slice(0,this.slidearray[index].length-1)
      }
    }
    if(this.bascet==null)
    this.g1=1;
    else this.g1=0;
    
    if(this.addf==1)
    {
      this.slidearray[this.slidearray.length-1]=this.prom[this.prom.length-1];
    }
    if(this.protocol!=null  && this.bascet!=null && this.slidearray.length>0 && this.stainer!=null)
    {
      let vreme=new Date().getHours();
      let minuti=new Date().getMinutes();
      let posh;
      let posm;
      let posh2;
      let d=0;
      for (let index = 0; index < this.allProtocols.length; index++) {
       if(this.allProtocols[index].name==this.protocol && this.allProtocols[index].stainer==this.stainer)
       {
        let sati1=this.allProtocols[index].hours
        let minuti1=this.allProtocols[index].minutes;
        posh=sati1+vreme;
        
        if(posh>=24){
        while(posh>=24){
        if(posh>=24)
        {
          let prom=posh;
          posh=(posh%24);
          if(d==0)
          posh2=posh;
          d=d+1;
          posh=prom-24;
        }}
        posm=minuti1+minuti;
        if(posm>=60)
        {
          posm=posm%60;
        }

       }        else{posh2=posh
        posm=minuti1+minuti;
        if(posm>=60)
        {
          posm=posm%60;
          posh2=posh2+1;
        }
      }}
      }
      let year=new Date().getFullYear();
      let february = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 29 : 28;
      const daysInMonth = [31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      let dan=new Date().getDate();
      
      dan=dan+d;
      
      
      let mesec=new Date().getMonth()+1;
     console.log(mesec)
      if(daysInMonth[mesec]<dan)
      {mesec=mesec+1;
      if (mesec>12)
      {year=year+1;
      mesec=1;}
      }

      let status=0;
      let possec=new Date().getSeconds();;
      this.UserService.addProcessStaining(this.stainer,this.protocol,this.bascet,this.slidearray,vreme,minuti,status, posh2,posm, dan,mesec,year,possec).subscribe((resp)=>{
    
        if(resp['message']=='user')
        {
          this.router.navigate(['/dashsix']);
        }
        else{ 
          if (resp['message']=='zauzeto')
          { }
          else{
          }
        }
    
      })
    }
  }

  stain(){
this.router.navigate(['/dashsix']);
  }
  processor:string;
trenProtocols:Protocol2[];
allStainers:Stainer[];
allProtocols:Protocol2[];

freeStainers:string[]=[];
  getStainer(stainer){

      this.trenProtocols=[];
      for (let index = 0; index < this.allProtocols.length; index++) {
        
        if(this.allProtocols[index].stainer==stainer)
        {
          this.trenProtocols.push(this.allProtocols[index]);
        }
        
      }
  }
  addf:number;
  deletecass(i){
    if(this.addf==0)
    this.slidearray.splice(i,1);
    else{
      this.prom.splice(i,1);
      this.slidearray.splice(i,1);
    }
  }
  prom:string[]=[]
  word:string;
  addcass()
  { 
    
    this.word="";
    this.slidearray.push("")
   
  
  }
  trackByFn(index: any, item: any) {
    return index;
 }
 popup:number;
  @HostListener('window:keypress', ['$event'])
  keyEvent(event: KeyboardEvent): void {
    if(this.bascet==null)
    {
      this.redSelect=1;
    }else{
      this.redSelect=0;
    let x;
    if(this.word!=null){
   
    this.word+=event.key;
 
    
   
    
    let cnt=0;
    if(this.word!=null){
    for (let index = 0; index < this.word.length; index++) {
      if(this.word.charAt(index)==']')
      cnt++
    
    }
    if(cnt>=2)
    {
      this.word=this.word.slice(0,this.word.length-1)
    }
     }


     for (let index = 0; index < this.slidearray.length; index++) {
      cnt=0;
      for (let index2 = 0; index2 < this.slidearray[index].length; index2++) {
        if(this.slidearray[index].charAt(index2)==']')
        cnt++
      
      }
      if(cnt>=2)
      {
        this.slidearray[index]=this.slidearray[index].slice(0,this.slidearray[index].length-1)
      }
    }

    if (event.key == ']') {
      let flag=0;
        for (let index = 0; index < this.slidearray.length; index++) {
        if(this.word==this.slidearray[index])
          flag=1;
        }
        if(flag==0)
        {
          let flag2=0;
          for (let index = 0; index < this.allstainings.length; index++) {
            
            for (let index2 = 0; index2 < this.allstainings[index].casette.length; index2++) {
             if(this.allstainings[index].casette[index2]==this.word)
             {
              flag2=1;
              this.popup=1;
             }
              
            }
          }
          if(flag2==0){
          if(this.slidearray.length>0){
           
            let p1=this.word;
            p1=p1.slice(0,p1.length-1)
          if(this.slidearray[this.slidearray.length-1]==p1)
          {//this.slidearray.push(this.word)
          }
          else{
            this.slidearray.push(this.word)
          }
        }
        else
        {
          this.slidearray.push(this.word)
        }
      }
        }
         
        this.word="";

  

      }
   
   
  }
}
}}
