import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cs } from '../models/infocs';
import { Processor } from '../models/processors';
import { Protocol } from '../models/protocol';
import { Sectioning } from '../models/sectioning';
import { User } from '../models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-listprocessor',
  templateUrl: './listprocessor.component.html',
  styleUrls: ['./listprocessor.component.css']
})
export class ListprocessorComponent implements OnInit {

  constructor(private router: Router, private UserService: UserService) { }

  ngOnInit(): void {
    let user1 = JSON.parse(sessionStorage.getItem("first")) as HttpResponse<any>; 
    if(!user1 || user1.body.type!=0){
      localStorage.clear();
      sessionStorage.clear();
      this.router.navigate(['']);
    }else{
  this.me=user1.body;
    this.UserService.getAllProcessors().subscribe((data: Processor[])=>{
      this.allProcessors=data;
      this.UserService.getAllProtocols().subscribe((data: Protocol[])=>{
        this.allProtocols=data;})
    
    })
  }
    
  }
  me:User;
  allProtocols:Protocol[];
  allProcessors:Processor[];
  gotolp(){
    this.router.navigate(['/listprocessor']);
  }
  logout(){
    sessionStorage.clear();
    localStorage.clear()
    this.UserService.removeSession();
    this.router.navigate(['']);
  }
  gotolaact(){
    this.router.navigate(['/labactivity']);
  }
  gotoadsactivity(){
    this.router.navigate(['/adsactivity']);
  }
  gotopathactivity(){
    this.router.navigate(['/pathactivity']);
  }
  gotolabact(){
    this.router.navigate(['/adlabactivity']);
  }
  gotolistusers()
  {
    this.router.navigate(['/listusers']);
  }
}
