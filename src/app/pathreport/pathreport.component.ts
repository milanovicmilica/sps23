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
  selector: 'app-pathreport',
  templateUrl: './pathreport.component.html',
  styleUrls: ['./pathreport.component.css']
})
export class PathreportComponent implements OnInit {

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
      
    }})

  }

  me:User;
  case:string;
  allCase:Case[];
  my:Case;
  micror:string;
  pathd:string;
  logout(){
    sessionStorage.clear();
    this.router.navigate(['/login-pathologist']);
  }
}
