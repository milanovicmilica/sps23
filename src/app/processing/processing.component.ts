//import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timestamp } from 'rxjs';
import { Processor } from '../models/processors';
import { Protocol } from '../models/protocol';
import { User } from '../models/user';
import { UserService } from '../user.service';
import { Component, VERSION, OnInit, ViewChild, HostListener } from '@angular/core';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';
import { Result } from '@zxing/library';
import { BarcodeFormat } from '@zxing/library';
import { isThisTypeNode } from 'typescript';
import { Bascet } from '../models/bascet';
@Component({
  selector: 'app-processing',
  templateUrl: './processing.component.html',
  styleUrls: ['./processing.component.css']
})
export class ProcessingComponent implements OnInit {

  constructor(private router: Router, private UserService: UserService) {


   }

  ngOnInit(): void {
   // this.casette.push("");
    let user1 = JSON.parse(sessionStorage.getItem("laborant")) as User; 
    this.me=user1;
    this.UserService.getAllProcessors().subscribe((data: Processor[])=>{
      this.allProcessors=data;

   this.g1=0;
   this.g2=0;
      this.UserService.getAllProtocols().subscribe((data: Protocol[])=>{
        this.allProtocols=data;
        for (let index = 0; index < this.allProcessors.length; index++) {
          if(this.allProcessors[index].free>0)
          {
            let s=this.allProcessors[index].name
            this.freeProcessors.push(s);
          }
          
        }
        this.UserService.getAllBascets().subscribe((data: Bascet[])=>{
          this.allBascets=data;
          this.addf=0;
        this.redSelect=0;})
       // this.cassettearray.push("");
        //this.casette.push("");
       // this.scanner.permissionResponse.subscribe((perm: boolean) => this.hasPermission = perm);
  
      })
    
    })
  }
  me:User;
  allBascets:Bascet[];
  allProcessors:Processor[];
  allProtocols:Protocol[];
  protocol:string;
  scanproc:string;
  bascet:string;
  casette:string;
  freeProcessors:string[]=[];
  allowedFormats = [ BarcodeFormat.QR_CODE, BarcodeFormat.EAN_13, BarcodeFormat.CODE_128, BarcodeFormat.DATA_MATRIX /*, ...*/ ];
  trenProtocols:Protocol[];
  cassettearray:string[]=[];
  @ViewChild('scanner')
  scanner: ZXingScannerComponent;
  qrResultString: string;
  qrResult: Result;
  redSelect:number;
  logout(){
    sessionStorage.clear();
    this.router.navigate(['/login-processing']);
  }
  procpoc(){
    this.router.navigate(['/dashfour']);
  }


  g1:number;
  g2:number;
  startprocess(){

    if(this.bascet==null)
    this.g1=1;
    else this.g1=0;
    if(this.casette==null)
    this.g2=1; else this.g2=0;
    if(this.protocol!=null  && this.bascet!=null && this.cassettearray.length>0 && this.processor!=null)
    {
     
      let status=0;
      let vreme=new Date().getHours();
      let minuti=new Date().getMinutes();
      let posh;
      let posm;
      let posh2;
      let d=0;
      for (let index = 0; index < this.allProtocols.length; index++) {
       if(this.allProtocols[index].name==this.protocol && this.allProtocols[index].processor==this.processor)
       {
        let sati1=this.allProtocols[index].hours
        let minuti1=this.allProtocols[index].minutes;
        posh=sati1+vreme;
        
        if(posh>24){
        while(posh>24){
        if(posh>24)
        {
          let prom=posh;
          posh=(posh%24);
          if(d==0)
          posh2=posh;
          d=d+1;
          posh=prom-24;
        }}
        posm=minuti1+minuti;
        if(posm>60)
        {
          posm=posm%60;
        }

       }        else{posh2=posh
        posm=minuti1+minuti;
        if(posm>60)
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
      
      
      let mesec=new Date().getUTCMonth()+1;
     
      if(daysInMonth[mesec]<dan)
      {mesec=mesec+1;
      if (mesec>12)
      {year=year+1;
      mesec=1;}
      }

   
      this.UserService.addProcess(this.processor,this.protocol,this.bascet,this.cassettearray,vreme,minuti,status,posh2,posm, dan,mesec,year).subscribe((resp)=>{
    
        if(resp['message']=='user')
        {
        this.router.navigate(['/dashfour']);}
        else{ 
          if (resp['message']=='zauzeto')
          { }
          else{
          }
        }
    
      })
    }
  }
  processor:string;
word:string;
  getProtocols(processor){

      this.trenProtocols=[];
      for (let index = 0; index < this.allProtocols.length; index++) {
        
        if(this.allProtocols[index].processor==processor)
        {
          this.trenProtocols.push(this.allProtocols[index]);
        }
        
      }
  }
  @HostListener('window:keypress', ['$event'])
  keyEvent(event: KeyboardEvent): void {
    if(this.bascet==null)
    {
      this.redSelect=1;
    }else{
      this.redSelect=0;
    let x;
    if(this.word=='undefined' || this.word=='undefined'+this.bascet || this.word==this.bascet )
      {this.word='';
    
      if(this.bascet!=null)
      {
    this.word=""}
    }
     
    if (event.key == ']') {
      let flag=0;
     for (let index = 0; index < this.cassettearray.length; index++) {
      if(this.cassettearray[index]==this.word)
      {
        flag=1;
      }}
      if(flag==0){
        this.word+="]"
       if(this.addf==0)
        this.cassettearray.push(this.word)
        /*for (let index = 0; index < this.cassettearray.length; index++) {
          for (let index2 = 0; index2 < this.cassettearray.length; index2++) {
        if(this.cassettearray[index].search(this.cassettearray[index2])!=-1 && index!=index2)
        {
          let x=this.cassettearray[index2]
          let y=""
          console.log('ima')
         for (let index3 = 0; index3 < this.cassettearray[index].length; index3++) {
          
          if(index3>=x.length)
          {y=y+this.cassettearray[index].charAt(index3)}

         }
         this.cassettearray[index]=y;
         console.log(y)

        }*/
         
        this.word="";
      }
   
    } else {
      if(this.word=='undefined' || this.word=='undefined'+this.bascet || this.word==this.bascet )
      {this.word='';
    
      if(this.bascet!=null)
      {
    this.word=""}
    }
      else{
        let fl2=0
        if(this.addf==0){
        if(this.bascet!=null){
          for (let index = 0; index < this.bascet.length; index++) {
           if(index>0)
           {if(this.bascet.charAt(index)!='undefined')
            x=x+this.bascet.charAt(index)
           }
            
          }
         
          if(this.word==x)
          {this.word="";
          fl2=1;}
        }
      this.word+=event.key;
      if(this.word.search('undefined')!=-1)
      this.word=""
      }else{
        this.word+=event.key;
      }}
   
    }
  }}
  addf:number;
  deletecass(i){
    this.cassettearray.splice(i,1);
  }
  prom:string[]=[]
  addcass()
  { 
    this.word="";
    this.cassettearray.push("")
    if(this.cassettearray.length>1)
    this.cassettearray[this.cassettearray.length-1]=this.prom[this.prom.length-1];
    else{
      if(this.cassettearray.length==1)
      this.cassettearray[0]=this.prom[this.prom.length-1];
    }
    this.addf=1;
  }
  res(){
    this.word=""
  }
}
