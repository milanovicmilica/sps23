import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Case } from '../models/case';
import { Sample } from '../models/sample';
import { User } from '../models/user';
import { UserService } from '../user.service';
@Component({
  selector: 'app-caselistad',
  templateUrl: './caselistad.component.html',
  styleUrls: ['./caselistad.component.css']
})
export class CaselistadComponent implements OnInit {

  constructor(private router: Router, private UserService: UserService) { }

  ngOnInit(): void {
    let user1 = JSON.parse(sessionStorage.getItem("administrator")) as  HttpResponse<any>; 
   
    if(!user1 || user1.body.type!=2){
      localStorage.clear();
      sessionStorage.clear();
      this.router.navigate(['/login-accessioning']);
    }else{
  this.me=user1.body;
    this.UserService.getAllCases().subscribe((data: Case[])=>{
      this.allCase=data;
      let user1 = JSON.parse(sessionStorage.getItem("patolog")) as User; 
      let k=1;
      for (let index = 0; index < this.allCase.length; index++) {
        
        this.n1.push(k);
        k=k+1
        let a=this.allCase[index].date;
       // console.log(a);
     
      }
      this.me=user1;
      for (let index = 0; index < this.allCase.length; index++) {
       this.numofSpec.push(0);
        
      }
      this.UserService.getAllSamples().subscribe((data: Sample[])=>{
      this.allS=data;
      for (let index = 0; index < this.allCase.length; index++) {
       
        for (let index2 = 0; index2 < this.allS.length; index2++) {
          if(this.allCase[index].formatcn==this.allS[index2].caseid)
          {
            this.numofSpec[index]++;
          }
          
        }
        
      }
      
      })

  })}

}
logout(){
  sessionStorage.clear();
  localStorage.clear()
    this.UserService.removeSession();
  this.router.navigate(['/login-accessioning']);
}
day:string[]=[];
month:number[]=[];
year:number[]=[];
allS:Sample[]=[];
numofSpec:number[]=[];
me:User;
allCase:Case[];
case:string;
message:string;
n1:number[]=[];
next(){

  if (this.case==null)
{this.message='Please choose a case'}
else{
  this.message='';
  sessionStorage.setItem("case", JSON.stringify(this.case));
  this.router.navigate(['/grossnext']);

}

}
cl(){
  this.router.navigate(['/clacs']);


}
poc(){
  this.router.navigate(['/dashsecond']);
}
}

