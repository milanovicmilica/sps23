import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { Router } from '@angular/router';
import { Case } from '../models/case';
import { Hospital } from '../models/hospital';
import { User } from '../models/user';
import { UserService } from '../user.service';
import ZebraBrowserPrintWrapper from "zebra-browser-print-wrapper";
import { HttpResponse } from '@angular/common/http';
const printBarcode = async (cid,a) => {
  try {
    // Create a new instance of the object
    const browserPrint = new ZebraBrowserPrintWrapper();
    // Select default printer
    const defaultPrinter = await browserPrint.getAvailablePrinters();
    // Set the printer
    browserPrint.setPrinter(defaultPrinter[0]);

    // Check printer status
    const printerStatus = await browserPrint.checkPrinterStatus();
    // Check if the printer is ready
    if (printerStatus.isReadyToPrint) {
      // ZPL script to print a simple barcode

      const zpl = `
      ^XA~TA000~JSN^LT0^MNW^MTT^PON^PMN^LH0,0^JMA^PR4,4~SD15^JUS^LRN^CI0^XZ
^XA
^MMT
^PW456
^LL0650
^LS0
^FT45,318^A0B,42,40^FH\^FD`+cid+`^FS
^FT54,203^BQN,2,4
^FH\^FDLA,`+a+`^FS
^PQ1,0,1,Y^XZ
      
        `;

      browserPrint.print(zpl);
    } else {
      // console.log("Error/s", printerStatus.errors);
      console.log(printerStatus.errors, "error");
      if (printerStatus.errors !== "Unknown Error") {
        // errorFunction(printerStatus.errors);
      } else {
        // errorFunction("Please connect the printer or check the cable.");
      }
    }
  } catch (error) {
    // errorFunction("Please connect the printer or check the cable.");
  }
};
@Component({
  selector: 'app-acsfirst',
  templateUrl: './acsfirst.component.html',
  styleUrls: ['./acsfirst.component.css']
})
export class AcsfirstComponent implements OnInit {

  constructor(private router: Router, private UserService: UserService) { }

  ngOnInit(): void {
    this.num=2;
    this.vest=1357;
    let user1 = JSON.parse(sessionStorage.getItem("administrator")) as  HttpResponse<any>; 
   
    if(!user1 || user1.body.type!=2){
      localStorage.clear();
      sessionStorage.clear();
      this.router.navigate(['/login-accessioning']);
    }else{
  this.me=user1.body;
  this.today = new Date;
      this.me=user1.body;
    this.g1=0;    this.g2=0;this.g3=0;this.g4=0;this.g5=0;this.g6=0;this.g7=0;this.g8=0;this.g9=0;
    this.UserService.getAllPath().subscribe((data: User[])=>{
      this.allPath=data;
      })
      
        this.UserService.getAllHospitals().subscribe((data: Hospital[])=>{
          this.allHospital=data;
          })
    }
  }
  logout(){
    sessionStorage.clear();
    localStorage.clear()
    this.UserService.removeSession();
    this.router.navigate(['/login-accessioning']);
  }
  today:Date;
  me:User;
  sender:string;
  num:number;
  contact:string;
  address:string;
  firstname:string;
  lastname:string;
  pid:string;
  lbo:string;
  date:Date;
  hnum:string;
  diagnosis:string;
  pathologist:string;
  adcomments:string;
  allCases:Case[];
  allPath:User[];
  newcn:number;
  flag:number;
  hospitalid:string;
  allHospital:Hospital[];
  gen:string;
  month1:number;
  day1:number;
  pers(){
    this.sender='Personal';
    this.flag=1;
  }
  hos(){
    this.sender='Hospital';
    this.flag=0;
  }
  plus(){
    this.num=this.num+1;
  }
  minus(){
    if((this.num-1)>=2)
    this.num=this.num-1;
  }
  message:String;
  message2:String;
  format:string;
  g1:number;  g2:number;  g3:number;  g4:number;
  g5:number;  g6:number;  g8:number;  g7:number;g9:number;
vest:number;
datePickerId:Date;
case(){
  this.router.navigate(['clacs']);
}
addcase(){
 if (this.sender==null)
 this.message="Sender is Required*";
 else{
  this.message="";
  if(this.sender=="Personal" && this.contact==null)
  this.g1=1;
  if(this.sender=="Personal" && this.contact!=null)
  this.g1=0;
  if(this.sender=="Hospital" && this.hospitalid==null)
  this.g1=1;
  if(this.sender=="Hospital" && this.hospitalid!=null)
  this.g1=0;
  if( this.firstname==null)
  this.g2=1;
  if( this.firstname!=null)
  this.g2=0;
  if( this.lastname==null)
  this.g3=1;
  if( this.lastname!=null)
  this.g3=0;
  if( this.pid==null || this.pid.length!=13)
  this.g4=1;
  if( this.pid!=null && this.pid.length==13)
  this.g4=0;
  if( this.date==null)
  this.g5=1;
  if( this.date!=null)
  this.g5=0;
  if( this.lbo==null || this.lbo.length!=11)
  this.g6=1;
  if( this.lbo!=null && this.lbo.length==11)
  this.g6=0;
  if( this.diagnosis==null)
  this.g7=1;
  if( this.diagnosis!=null)
  this.g7=0;
  if( this.gen==null)
  this.g9=1;
  if( this.gen!=null)
  this.g9=0;
  if(this.lbo.length!=11)
  {
    this.message='Health insurance number must have 11 numbers*'
  }
  if(this.pid.length!=13)
  {
    this.message='Personal ID number must have 13 numbers*'
  }
  this.UserService.getAllCases().subscribe((data: Case[])=>{
    this.allCases=data;
    //this.newcn=this.allCases.length;
    let year=new Date;
    let s=this.allCases.length
    if (s==0)
    {
      this.newcn=this.vest;
    }
    else{
      let novi=this.allCases[s-1].casenum;
      this.newcn=novi+1;
    }
    this.format=this.newcn+'/'+(year.getFullYear()%100);
    let novi=new Date(this.date);
    let day=novi.getDate();
    let mon=novi.getMonth()+1;
    let ye=novi.getFullYear();
    let date=new Date();
     this.day1=new Date().getDate();
    this.month1=new Date().getMonth()+1;
    let godina=new Date().getFullYear();
    let s1,s2;
    if(day<10)
    { s1="0"+day; }
    else{s1=day}
    if(mon<10)
    {s2="0"+mon}
    else{s2=mon;}
    let dat=s1+"."+s2+"."+ye+"."
    if((this.sender=="Personal" && this.contact!=null && this.firstname!=null && this.lastname!=null && 
    this.pid!=null && this.date!=null && this.lbo!=null && this.lbo.length==11 && this.diagnosis!=null && this.gen!=null)||(this.sender=="Hospital" && this.hospitalid!=null
     && this.firstname!=null && this.lastname!=null && 
    this.pid!=null && this.date!=null && this.lbo!=null && this.diagnosis!=null && this.lbo.length==11))
    this.UserService.addCase(this.sender,this.hospitalid,this.contact,this.address,this.firstname,this.lastname,
      this.pid,dat,this.lbo,this.hnum,this.num,this.diagnosis,this.pathologist,this.adcomments,this.format, this.newcn,this.gen, this.day1,this.month1, this.me.username).subscribe((resp)=>{
  
      if(resp['message']=='user added')
      {this.message='Case added'; 
      let s="[spspIPMF"+this.format+"]";
      printBarcode(this.format ,s);

      this.router.navigate(['/acssecond']);}
      else{ 
        if (resp['message']=='zauzeto')
        {this.message2='Username is already used'; }
        else{
       this.message='Case is not added'; }
      }
  
    })
    })

}
}
}
