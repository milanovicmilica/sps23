import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { Process } from '../models/process';
import { Processor } from '../models/processors';

import { UserService } from '../user.service';
import { Sample } from '../models/sample';
import { Case } from '../models/case';
import { Cs } from '../models/infocs';
import { Embedding } from '../models/embedding';
import { Rack } from '../models/rack';
import { Coverslipping } from '../models/coverslipping';
import { ProcessStaining } from '../models/processstaining';
import { HttpResponse } from '@angular/common/http';
@Component({
  selector: 'app-dasheight',
  templateUrl: './dasheight.component.html',
  styleUrls: ['./dasheight.component.css']
})
export class DasheightComponent implements OnInit {

  constructor(private router: Router, private UserService: UserService) { }

  ngOnInit(): void {  

    let user1 = JSON.parse(sessionStorage.getItem("laborant")) as HttpResponse<any>; 
   
    if(!user1 || user1.body.type!=1){
      localStorage.clear();
      sessionStorage.clear();
      this.router.navigate(['/login-coverslipping']);
    }else{
  this.me=user1.body;
  this.g=0;
  this.flag1=0;
  this.UserService.getAllFreeRack().subscribe((data: Rack[])=>{
    this.allRack=data;
    this.UserService.getAllCover().subscribe((data: Coverslipping[])=>{
      this.allCsl=data;
     })
   })
  }
  }
  allCsl:Coverslipping[];
  allRack:Rack[];
  allEmb:Embedding[];
  allCases:Case[];
  me:User;
  rack:string;
  g:number;
  flag1:number;
  
  allSamples:Sample[];
  caseid:string;
  firstname:string;
  lastname:string;
  comment:string;
  allCS:Cs[];
  message1:string;
  logout(){
    sessionStorage.clear();
    localStorage.clear()
    this.UserService.removeSession();
    this.router.navigate(['/login-coverslipping']);
  }
  search(){
    this.message=""
    this.message1=""
    this.flag1=0;
    if (this.rack==null)
    {
      this.g=1;this.flag1=0;
    }
    else{
      
      this.flag1=1;
      let f0=0;
      this.message1=""
      for (let index = 0; index < this.allRack.length; index++) {
        if(this.rack==this.allRack[index].name)
        {
          f0=1;
          
        }
        
      }
      if(f0==0)
      {
        this.message1="This rack don't exist"
        this.flag1=0;
      }

      }
  }
message:string;
allstain:ProcessStaining[];
rst:ProcessStaining[]=[];
  confirm(){
  
     /* let done=0;
      for (let index = 0; index < this.allCsl.length; index++) {
        
        if(this.rack==this.allCsl[index].rack)
        {
          done=1
        }
        
      }  
      if(done==1)
      {
       // this.flag1=0;
        this.message="Done Coverslipping"
      }else{*/
    let date=new Date();
    let time=date.getHours();
    let minute=date.getMinutes();
    let dan=new Date().getDate();
let mesec=new Date().getMonth()+1;
let godina=new Date().getFullYear();
let lab=this.me.username;

this.UserService.getAllStainingProcess().subscribe((data: ProcessStaining[])=>{
  this.allstain=data;

  for (let index = 0; index < this.allstain.length; index++) {
   if(this.rack==this.allstain[index].bascet)
   {
    this.rst.push(this.allstain[index])
   }
    
  }
    this.UserService.confirmCoverslipping(this.caseid, this.rack, dan, mesec, godina, time, minute, lab, this.rst[this.rst.length-1].casette).subscribe((resp)=>{

      if(resp['message']=='user')
      {
        this.message="Done";
        this.UserService.getAllCover().subscribe((data: Coverslipping[])=>{
          this.allCsl=data;
        this.flag1=0;this.rack="";
        })
        }
      else{ 
        if (resp['message']=='zauzeto')
        {
      }
        else{
       }
      }
  
    })})
  
  }
}