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
    this.slide=sl;
   if(JSON.parse(sessionStorage.getItem("sectioning")))
    {
      this.sectioning=JSON.parse(sessionStorage.getItem("sectioning")) as Sectioning; 
      this.UserService.getAllCases().subscribe((data: Case[])=>{
        this.allCase=data;
      
      for (let index = 0; index < this.allCase.length; index++) {
      if(this.allCase[index].formatcn==this.case)
      {
        this.my=this.allCase[index];
      }
      
      }
    this.cassette=this.sectioning.cassette

    this.UserService.getAllCs().subscribe((data: Cs[])=>{
      this.allcs=data;

      for (let index = 0; index < this.allcs.length; index++) {
       
        if(this.allcs[index].code==this.cassette)
        this.mycs=this.allcs[index]
      }

      this.UserService.getAllUsers().subscribe((data: User[])=>{
        this.allusers=data;
      
      for (let index = 0; index < this.allusers.length; index++) {
        if(this.allusers[index].username==this.mycs.asistent)
        this.grossasistent=this.allusers[index]
        
      }
      
      })

    })
    })

    }
  }
  grossasistent:User;
  allusers:User[];
  slide:string;
  allCase:Case[];
  allcass:Cs[]=[];
  allexbl:Sample[]=[];
  allSample:Sample[];
  allexslide:Sample[]=[];
  allslides:Sectioning[]=[];
  sectioning:Sectioning;
  mycs:Cs;
  me:User;
  my:Case;
  day:string[]=[];
  month:number[]=[];
  year:number[]=[];
  allS:Sample[]=[];
  numofSpec:number[]=[];
  cassette:string;
allcs:Cs[]=[];

  case:string;
  logout(){
    sessionStorage.clear();
    this.router.navigate(['/login-patholog']);
  }
}
