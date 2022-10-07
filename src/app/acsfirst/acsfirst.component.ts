import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { Router } from '@angular/router';
import { Case } from '../models/case';
import { Hospital } from '../models/hospital';
import { User } from '../models/user';
import { UserService } from '../user.service';
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
    this.g1=0;    this.g2=0;this.g3=0;this.g4=0;this.g5=0;this.g6=0;this.g7=0;this.g8=0;this.g9=0;
    this.UserService.getAllPath().subscribe((data: User[])=>{
      this.allPath=data;
      })
      
        this.UserService.getAllHospitals().subscribe((data: Hospital[])=>{
          this.allHospital=data;
          })
        
  }
  logout(){
    sessionStorage.clear();
    this.router.navigate(['']);
  }
  sender:string;
  num:number;
  contact:string;
  address:string;
  firstname:string;
  lastname:string;
  pid:string;
  lbo:string;
  date:string;
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
  if( this.pid==null)
  this.g4=1;
  if( this.pid!=null)
  this.g4=0;
  if( this.date==null)
  this.g5=1;
  if( this.date!=null)
  this.g5=0;
  if( this.lbo==null)
  this.g6=1;
  if( this.lbo!=null)
  this.g6=0;
  if( this.diagnosis==null)
  this.g7=1;
  if( this.diagnosis!=null)
  this.g7=0;
  if( this.gen==null)
  this.g9=1;
  if( this.gen!=null)
  this.g9=0;
  
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
    if((this.sender=="Personal" && this.contact!=null && this.firstname!=null && this.lastname!=null && 
    this.pid!=null && this.date!=null && this.lbo!=null && this.diagnosis!=null && this.gen!=null)||(this.sender=="Hospital" && this.hospitalid!=null
     && this.firstname!=null && this.lastname!=null && 
    this.pid!=null && this.date!=null && this.lbo!=null && this.diagnosis!=null))
    this.UserService.addCase(this.sender,this.hospitalid,this.contact,this.address,this.firstname,this.lastname,
      this.pid,this.date,this.lbo,this.hnum,this.num,this.diagnosis,this.pathologist,this.adcomments,this.format, this.newcn,this.gen).subscribe((resp)=>{
  
      if(resp['message']=='user added')
      {this.message='Case added'; 
      this.router.navigate(['/acssecond']);}
      else{ 
        if (resp['message']=='zauzeto')
        {this.message2='Username is aleready used'; }
        else{
       this.message='Case is not added'; }
      }
  
    })
    })

}
}
}