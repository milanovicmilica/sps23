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
  selector: 'app-pathslide',
  templateUrl: './pathslide.component.html',
  styleUrls: ['./pathslide.component.css']
})
export class PathslideComponent implements OnInit {

  constructor(private router: Router, private UserService: UserService) { }

  ngOnInit(): void {
    let user1 = JSON.parse(sessionStorage.getItem("patolog")) as User; 
    this.me=user1;
    let s=JSON.parse(sessionStorage.getItem("case")) as string; 
    this.case=s;
    let sl=JSON.parse(sessionStorage.getItem("slide")) as string; 
    this.slide=s;
    let k=JSON.parse(sessionStorage.getItem("sectioning")) as Sectioning; 
    if(k)
    {
      this.sectioning=k;
      this.UserService.getAllCases().subscribe((data: Case[])=>{
        this.allCase=data;
      
      for (let index = 0; index < this.allCase.length; index++) {
      if(this.allCase[index].formatcn==this.case)
      {
        this.my=this.allCase[index];
      }
      
      

      }})

    }
  }
  slide:string;
  allCase:Case[];
  allcass:Cs[]=[];
  allexbl:Sample[]=[];
  allSample:Sample[];
  allexslide:Sample[]=[];
  allslides:Sectioning[]=[];
  sectioning:Sectioning;
  me:User;
  my:Case;
  day:string[]=[];
  month:number[]=[];
  year:number[]=[];
  allS:Sample[]=[];
  numofSpec:number[]=[];
allcs:Cs[]=[];

  case:string;
  logout(){
    sessionStorage.clear();
    this.router.navigate(['/login-patholog']);
  }
}
