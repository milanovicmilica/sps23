import { Component, OnInit,HostListener } from '@angular/core';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { Process } from '../models/process';
import { Processor } from '../models/processors';

import { UserService } from '../user.service';
import { Sample } from '../models/sample';
import { Case } from '../models/case';
import { Cs } from '../models/infocs';
import { Embedding } from '../models/embedding';
@Component({
  selector: 'app-dashfive',
  templateUrl: './dashfive.component.html',
  styleUrls: ['./dashfive.component.css']
})
export class DashfiveComponent implements OnInit {

  constructor(private router: Router, private UserService: UserService) { }

  ngOnInit(): void {
    let user1 = JSON.parse(sessionStorage.getItem("laborant")) as User; 
    this.me=user1;
    this.g=0;
    this.flag1=0;
    this.UserService.getAllSamples().subscribe((data: Sample[])=>{
      this.allSamples=data;
      this.UserService.getAllCases().subscribe((data: Case[])=>{
        this.allCases=data;
        this.UserService.getAllCs().subscribe((data: Cs[])=>{
          this.allCS=data;
          this.UserService.getAllEmb().subscribe((data: Embedding[])=>{
            this.allEmb=data;
          
          })
        })
    })})

  }
  allEmb:Embedding[];
  allCases:Case[];
  me:User;
  cassette:string;
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
    this.router.navigate(['/login-embedding']);
  }
  search(){
    this.message=""
    this.message1=""
    this.flag1=0;
    if (this.cassette==null)
    {
      this.g=1;this.flag1=0;
    }
    else{
      this.g=0;
      let done=0;
      for (let index = 0; index < this.allEmb.length; index++) {
        
        if(this.cassette==this.allEmb[index].cassette)
        {
          done=1
        }
        
      }  
      if(done==1)
      {
        this.flag1=0;
        this.message1="Done Embedding"
      }
      else{
      this.flag1=1;
      let f0=0;
      this.message1=""
      for (let index = 0; index < this.allSamples.length; index++) {
        if(this.cassette==this.allSamples[index].code)
        {
          f0=1;
          this.caseid=this.allSamples[index].caseid;
          for (let index2 = 0; index2 < this.allCases.length; index2++) {
            if(this.caseid== this.allCases[index2].formatcn)
            {
              this.firstname=this.allCases[index2].firstname;
              this.lastname=this.allCases[index2].lastname;
              this.cassette="";
            }
            
          }
        }
        
      }
      if(f0==0)
      {
        for (let index = 0; index < this.allCS.length; index++) {
          
       //   for (let index2 = 0; index2 < this.allCS[index].codes.length; index2++) {

            if( this.allCS[index].code== this.cassette)
            {
              this.caseid=this.allCS[index].caseid;
              this.comment=this.allCS[index].comm;
              for (let index3 = 0; index3 < this.allCases.length; index3++) {
               if(this.allCases[index3].formatcn==this.caseid)
               {
                this.firstname=this.allCases[index3].firstname;
                this.lastname=this.allCases[index3].lastname;
                this.cassette="";
               }
              }
            }
        //  }
        }
      }

      }}
  }
message:string;
  confirm(){
  
      let done=0;
      for (let index = 0; index < this.allEmb.length; index++) {
        
        if(this.cassette==this.allEmb[index].cassette)
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
    this.UserService.confirmEmb(this.caseid, this.cassette, date, time, minute).subscribe((resp)=>{

      if(resp['message']=='user')
      {
        this.message="Done";
        this.UserService.getAllEmb().subscribe((data: Embedding[])=>{
          this.allEmb=data;
        this.flag1=0;this.cassette="";
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
  word:string=""
  @HostListener('window:keypress', ['$event'])
  keyEvent(event: KeyboardEvent): void {
   
    if(event.key=="]")
  {
    this.word+=event.key;
    if(this.word.charAt(this.word.length-2)=="]")
    this.word=this.word.slice(0,this.word.length-1);
    this.cassette=this.word
    this.word=""
  }
  else{
    this.word+=event.key;
  }
  }
  @HostListener('window:keydown', ['$event'])
  keyEvent2(event: KeyboardEvent): void {
    if(event.key=="Backspace")
    {
      this.word=this.word.slice(0,this.word.length-1);
      console.log(this.word)
    }
}}
