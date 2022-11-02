import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Case } from '../models/case';
import { Cs } from '../models/infocs';
import { Sample } from '../models/sample';
import { Sectioning } from '../models/sectioning';
import { Sendout } from '../models/sendout';
import { User } from '../models/user';
import { UserService } from '../user.service';
@Component({
  selector: 'app-pathinfo',
  templateUrl: './pathinfo.component.html',
  styleUrls: ['./pathinfo.component.css']
})
export class PathinfoComponent implements OnInit {

  constructor(private router: Router, private UserService: UserService) { }

  ngOnInit(): void {
    let user1 = JSON.parse(sessionStorage.getItem("patolog")) as User; 
    this.me=user1;
    let s=JSON.parse(sessionStorage.getItem("case")) as string; 
    this.case=s;
    this.UserService.getAllCases().subscribe((data: Case[])=>{
      this.allCase=data;
    
    for (let index = 0; index < this.allCase.length; index++) {
    if(this.allCase[index].formatcn==this.case)
    {
      this.my=this.allCase[index];
    }
      
    }
    
    })

  }
  me:User;
  logout(){
    sessionStorage.clear();
    this.router.navigate(['/login-patholog']);
  }
  my:Case;
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
}
