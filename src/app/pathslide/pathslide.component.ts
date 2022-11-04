import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Case } from '../models/case';
import { Embedding } from '../models/embedding';
import { Cs } from '../models/infocs';
import { Process } from '../models/process';
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
      this.UserService.getAllProcess().subscribe((data: Process[])=>{
        this.allProcessings=data;
      
      for (let index = 0; index < this.allProcessings.length; index++) {
        
        for (let index2 = 0; index2 < this.allProcessings[index].casette.length; index2++) {
         
          if(this.cassette==this.allProcessings[index].casette[index2])
          {
            this.myProcess=this.allProcessings[index];
          }
        }
        
      }
      if(this.myProcess){
      for (let index = 0; index < this.allusers.length; index++) {
      if(this.allusers[index].username==this.myProcess.lab)
      this.proclab=this.allusers[index]
        
      }}
      this.UserService.getAllEmb().subscribe((data: Embedding[])=>{
        this.allEmbs=data;
      
        for (let index = 0; index < this.allEmbs.length; index++) {
          if(this.cassette==this.allEmbs[index].cassette)
          {
            this.myEmb=this.allEmbs[index]
          }
          
        }
        if(this.myEmb){
        for (let index = 0; index < this.allusers.length; index++) {
          
          if(this.myEmb.lab==this.allusers[index].username)
        {
          this.emblab=this.allusers[index]
        }
        }}
      })
      
      })
      })

    })
    })

    }
  }
  emblab:User;
  proclab:User;
  myEmb:Embedding;
  allEmbs:Embedding[];
  myProcess:Process;
  allProcessings:Process[];
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
