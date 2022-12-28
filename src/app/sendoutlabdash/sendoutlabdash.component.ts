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
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-sendoutlabdash',
  templateUrl: './sendoutlabdash.component.html',
  styleUrls: ['./sendoutlabdash.component.css']
})
export class SendoutlabdashComponent implements OnInit {

  constructor(private router: Router, private UserService: UserService) { }

  ngOnInit(): void {
    let user1 = JSON.parse(sessionStorage.getItem("laborant")) as HttpResponse<any>; 
   
    if(!user1 || user1.body.type!=1){
      localStorage.clear();
      sessionStorage.clear();
      this.router.navigate(['/login-sendout']);
    }else{
  this.me=user1.body;}
  }
me:User;
logout(){
  sessionStorage.clear();
  localStorage.clear()
    this.UserService.removeSession();
  this.router.navigate(['/login-sendout']);
}
slide:string="";
word:string="";
@HostListener('window:keypress', ['$event'])
  keyEvent(event: KeyboardEvent): void {
  
    let x;
    
    if (event.key == ']') {
      
       
      this.word+=event.key;
        this.slide=(this.word)
        console.log(this.slide)
        sessionStorage.setItem("slide", JSON.stringify(this.slide));
        sessionStorage.setItem("laborant", JSON.stringify(this.me));
        this.router.navigate(['/sendoutlabmain']);
        this.word="";
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
        
      }
  }   
}
