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
import { Cabinet } from '../models/cabinet';
import { Fijoka } from '../models/fijoka';


@Component({
  selector: 'app-archivedash',
  templateUrl: './archivedash.component.html',
  styleUrls: ['./archivedash.component.css']
})
export class ArchivedashComponent implements OnInit {

  constructor(private router: Router, private UserService: UserService) { }

  ngOnInit(): void {  let user1 = JSON.parse(sessionStorage.getItem("laborant")) as User; 
  this.me=user1;
  this.UserService.getAllCabinets().subscribe((data: Cabinet[])=>{
    this.allCabinets=data;
    this.UserService.getAllf().subscribe((data: Fijoka[])=>{
      this.allf=data;
  });
})
  }
  me:User;
  logout(){
    sessionStorage.clear();
    this.router.navigate(['/login-archive']);
  }
  inputval:string;
  allCabinets:Cabinet[];
  allf:Fijoka[];
last3:string[]=[];
 myf:Fijoka;
 f1:number=0;
  findf(inval){
    for (let index = 0; index < this.allf.length; index++) {
      if(this.allf[index]==inval)
      {
        this.myf=this.allf[index];
        if(this.myf.nizQr.length>=100)
        {this.f1=1;}
        else{this.f1=2;
        
          let a=this.myf.nizQr.length-4
        for (let index2 = 0; index2 <3; index2++) {
          
          this.last3.push(this.myf.nizQr[a])
          a++;

        }
        }
      }
      
    }
  }
  f2:number=0;
  word:string=""
  piece:string[]=[];
  @HostListener('window:keypress', ['$event'])
  keyEvent(event: KeyboardEvent): void {
   
    if(event.key=="]")
  {
    if(this.f2==1)
    {

      this.piece.push(this.word)
      this.word="";
    }else{
   console.log(this.word)
    this.inputval=this.word
  this.findf(this.inputval);
  if(this.f1==2)
  {
this.f2=1;
  }
    this.word=""
  }}
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
