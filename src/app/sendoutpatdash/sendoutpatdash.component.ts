import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Case } from '../models/case';
import { Cs } from '../models/infocs';
import { Sample } from '../models/sample';
import { Sendout } from '../models/sendout';
import { User } from '../models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-sendoutpatdash',
  templateUrl: './sendoutpatdash.component.html',
  styleUrls: ['./sendoutpatdash.component.css']
})
export class SendoutpatdashComponent implements OnInit {

  constructor(private router: Router, private UserService: UserService) { }

  ngOnInit(): void {

   // let user1 = JSON.parse(sessionStorage.getItem("patolog")) as HttpResponse<any>;
   let p1=JSON.parse(sessionStorage.getItem("p1")) as string;
   if(!p1){
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigate(['/login-sendout']);
   }else{
   this.UserService.getAllUsers().subscribe((data: User[])=>{
    this.allUsers=data;
    
    for (let index = 0; index < this.allUsers.length; index++) {
     if(this.allUsers[index].username==p1)
     {
      this.me=this.allUsers[index]
     }
      
    }

    if(!p1 || this.me.type!=3){
      localStorage.clear();
      sessionStorage.clear();
      this.router.navigate(['/login-sendout']);
    }else{

    this.UserService.getAllCases().subscribe((data: Case[])=>{
      this.allCase=data;
      
      let k=1;
      for (let index = 0; index < this.allCase.length; index++) {
        
        this.n1.push(k);
        k=k+1
        let a=this.allCase[index].date;
    //    console.log(a);
     
      }
      

 this.UserService.getAllCs().subscribe((data: Cs[])=>{
      this.allcs=data;
//console.log(this.allcs.length)
for (let index = 0; index < this.allcs.length; index++) {
if(this.allcs[index].path==this.me.username)
{
  this.mycs.push(this.allcs[index]);

  let cn=this.allcs[index].caseid; 
  let fl=0;
  if(index==0)  {this.casenums.push(cn);}
  else{
  for (let index2= 0; index2 < this.casenums.length; index2++) {
    if(this.casenums[index2]==cn)
    {fl=1}
  }
  if(fl==0)
  {this.casenums.push(cn);}
  }
}
  
}
for (let index = 0; index < this.casenums.length; index++) {
//console.log(this.casenums[index])
  
}
console.log("mycasenum "+this.casenums.length)
for (let index = 0; index < this.allCase.length; index++) {
  for (let index2 = 0; index2 < this.casenums.length; index2++) {
    if(this.allCase[index].formatcn==this.casenums[index2])
    {
      this.myCases.push(this.allCase[index]);
      //console.log(this.allCase[index].formatcn)
    }
    
  }

}

for (let index = 0; index < this.myCases.length; index++) {
  this.numofSpec.push(0);
   
 }
 //console.log(this.numofSpec.length)
 for (let index = 0; index < this.myCases.length; index++) {
  this.checkarray.push(0);
   
 }
 console.log(this.checkarray.length)
 this.UserService.getAllSendout().subscribe((data: Sendout[])=>{
  this.allSendout=data;

  for (let index = 0; index < this.allSendout.length; index++) {
   
    for (let index2 = 0; index2 < this.myCases.length; index2++) {
      
      if(this.myCases[index2].formatcn==this.allSendout[index].caseid)
      {
        this.checkarray[index2]=1;
      }
    }
  }
//console.log('evo izbr sendour')


      this.UserService.getAllSamples().subscribe((data: Sample[])=>{
      this.allS=data;
      for (let index = 0; index < this.myCases.length; index++) {
       
        for (let index2 = 0; index2 < this.allS.length; index2++) {
          if(this.myCases[index].formatcn==this.allS[index2].caseid)
          {
            this.numofSpec[index]++;
          }
          
        }
        
      }
      for (let index = 0; index < this.checkarray.length; index++) {
     // console.log(this.checkarray[index])
        
      }
      })
    
  })})})
  }})}}
me:User;
  logout(){
    sessionStorage.clear();
    localStorage.clear()
    this.UserService.removeSession();
    this.router.navigate(['/login-sendout']);
  }
  allUsers:User[];
  day:string[]=[];
  month:number[]=[];
  year:number[]=[];
  allS:Sample[]=[];
  numofSpec:number[]=[];
allcs:Cs[]=[];
  allCase:Case[];
  case:string;
  message:string;
  n1:number[]=[];
  mycs:Cs[]=[];
  casenums:string[]=[];
  myCases:Case[]=[]
  checkarray:number[]=[];
  allSendout:Sendout[]=[];
  radiofill(a,i){
    this.case=a.formatcn;
  }
  next(){

    if (this.case==null)
  {this.message='Please choose a case'}
  else{
   
    this.message='';
    sessionStorage.setItem("case", JSON.stringify(this.case));
    sessionStorage.setItem("patolog", JSON.stringify(this.me));
    this.router.navigate(['/sendoutpathmain']);

  }

  }
}
