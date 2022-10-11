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
@Component({
  selector: 'app-dasheight',
  templateUrl: './dasheight.component.html',
  styleUrls: ['./dasheight.component.css']
})
export class DasheightComponent implements OnInit {

  constructor(private router: Router, private UserService: UserService) { }

  ngOnInit(): void {  let user1 = JSON.parse(sessionStorage.getItem("laborant")) as User; 
  this.me=user1;
  this.g=0;
  this.flag1=0;
  this.UserService.getAllRack().subscribe((data: Rack[])=>{
    this.allRack=data;
    this.UserService.getAllCover().subscribe((data: Coverslipping[])=>{
      this.allCsl=data;
     })
   })

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
      this.g=0;
      let done=0;
      for (let index = 0; index < this.allCsl.length; index++) {
        
        if(this.rack==this.allCsl[index].rack)
        {
          done=1
        }
        
      }  
      if(done==1)
      {
        this.flag1=0;
        this.message1="Done Coverslipping"
      }
      else{
      this.flag1=1;
      let f0=0;
      this.message1=""
      for (let index = 0; index < this.allRack.length; index++) {
        if(this.rack==this.allRack[index].qr)
        {
          f0=1;
          
        }
        
      }
      if(f0==0)
      {
        this.message1="This rack don't exist"
      }

      }}
  }
message:string;
  confirm(){
  
      let done=0;
      for (let index = 0; index < this.allCsl.length; index++) {
        
        if(this.rack==this.allCsl[index].rack)
        {
          done=1
        }
        
      }  
      if(done==1)
      {
       // this.flag1=0;
        this.message="Done Embedding"
      }else{
    let date=new Date();
    let time=date.getHours();
    let minute=date.getMinutes();
    let dan=new Date().getDate();
let mesec=new Date().getMonth()+1;
let godina=new Date().getFullYear();
    this.UserService.confirmCoverslipping(this.caseid, this.rack, dan, mesec, godina, time, minute).subscribe((resp)=>{

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
  
    })
  
  }}
}