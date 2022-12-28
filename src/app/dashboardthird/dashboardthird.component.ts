import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Case } from '../models/case';
import { Sample } from '../models/sample';
import { User } from '../models/user';
import { UserService } from '../user.service';
@Component({
  selector: 'app-dashboardthird',
  templateUrl: './dashboardthird.component.html',
  styleUrls: ['./dashboardthird.component.css']
})
export class DashboardthirdComponent implements OnInit {

  constructor(private router: Router, private UserService: UserService) { }

  ngOnInit(): void {
    let user1 = JSON.parse(sessionStorage.getItem("patolog")) as  HttpResponse<any>; 
   
    if(!user1 || user1.body.type!=3){
      localStorage.clear();
      sessionStorage.clear();
      this.router.navigate(['/login-grossing']);
    }else{
  this.me=user1.body;
    this.UserService.getAllCases().subscribe((data: Case[])=>{
      this.allCase=data;

      let k=1;
      for (let index = 0; index < this.allCase.length; index++) {
        
        this.n1.push(k);
        k=k+1
      }
      this.me=user1.body;
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
      this.UserService.getAllUsers().subscribe((data: User[])=>{
        this.allUsers=data;

        for (let index = 0; index < this.allUsers.length; index++) {
        
          if(this.allUsers[index].type==1 || this.allUsers[index].type==4)
          {
            this.specU.push(this.allUsers[index]);
          }
        }
      })
    });
  })}
}
radiofill(a,i){
  this.case=a.formatcn;
}
none:string='None';
  logout(){
    sessionStorage.clear();
    localStorage.clear()
    this.UserService.removeSession();
    this.router.navigate(['/login-grossing']);
  }
  specU:User[]=[];
  allUsers:User[]=[];
  numofSpec:number[]=[];
  me:User;
  allCase:Case[];
  case:string;
message:string;n1:number[]=[];allS:Sample[]=[];
asistent:string;
  next(){

    if (this.case==null)
  {this.message='Please choose a case'}
  else{
    if (this.asistent==null)
    {
      this.message='Please choose an assistent'
    }
    else{
    this.message='';
    sessionStorage.setItem("case", JSON.stringify(this.case));
    sessionStorage.setItem("asistent", JSON.stringify(this.asistent));
    this.router.navigate(['/grossnext']);

  }}

  }
}
