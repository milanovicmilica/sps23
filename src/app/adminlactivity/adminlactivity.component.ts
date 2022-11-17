
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { Case } from '../models/case';
import { Coverslipping } from '../models/coverslipping';
import { Embedding } from '../models/embedding';
import { Cs } from '../models/infocs';
import { Process } from '../models/process';
import { ProcessStaining } from '../models/processstaining';
import { Sectioning } from '../models/sectioning';
import { Sendout } from '../models/sendout';
import { User } from '../models/user';
import { UserService } from '../user.service';
@Component({
  selector: 'app-adminlactivity',
  templateUrl: './adminlactivity.component.html',
  styleUrls: ['./adminlactivity.component.css']
})
export class AdminlactivityComponent implements OnInit {

  constructor(private router: Router, private UserService: UserService) { }

  ngOnInit(): void {
    let date=new Date();
    let dan=new Date().getDate();
    let mesec=new Date().getMonth()+1;
    let godina=new Date().getFullYear();
    for (let index = 2000; index <= godina; index++) {
        this.years.push(index);
    }
    this.UserService.getAllUsers().subscribe((data: User[])=>{
      this.allUsers=data;
     
    for (let index = 0; index < this.allUsers.length; index++) {
     if(this.allUsers[index].type==1)
      {
        this.laborants.push(this.allUsers[index])
      }
    }
    })
  }
  activity:string;
  period:string;
  periods:string[]=['Year', 'Month', 'Date']
  activties:string[]=['Reporting', ]
  years:number[]=[];
  months:string[]=['January', 'February', 'March','April', 'May', 'June' , 'July', 'August', 'September','October','November','December'];
  daysinm:number[]=[31, 28, 31,30,31, 30 , 31, 31, 30,31,30,31];
  year:number;
  month:string;
  startdate:number;
  day:number;
  startday:Date;
  endday:Date;
  numofcaseid:number;
  allCase:Case[];
  fl1:number;
  message:string;
  numofslides:number;
  fl2:number;
  labs:string;
  allUsers:User[];
  laborants:User[]=[];
  allSectionings:Sectioning[];
  allEmb:Embedding[];
  allSendOut:Sendout[];
  allCover:Coverslipping[];
  allShe:ProcessStaining[];
  allProcessing:Process[]
  getval(){

    this.UserService.getAllSectioning().subscribe((data: Sectioning[])=>{
      this.allSectionings=data;
      this.UserService.getAllEmb().subscribe((data: Embedding[])=>{
        this.allEmb=data;
        this.UserService.getAllSendout().subscribe((data: Sendout[])=>{
          this.allSendOut=data;
          this.UserService.getAllCover().subscribe((data: Coverslipping[])=>{
            this.allCover=data;
            this.UserService.getAllStainingProcess().subscribe((data: ProcessStaining[])=>{
              this.allShe=data;
              this.UserService.getAllProcess().subscribe((data: Process[])=>{
                this.allProcessing=data;
              
              })
            })
          })
        })
      })
    })
  }
  logout(){
    sessionStorage.clear();
    this.router.navigate(['']);
  }
  gotopathactivity(){
    this.router.navigate(['/pathactivity']);
  }
  gotoadsactivity(){
    this.router.navigate(['/adsactivity']);
  }
  gotolabactivity(){
    this.router.navigate(['/labactivity']);
  }
  ch(){
    if(this.period=='Year')
    {
      this.startday=null;
      this.endday=null;
      this.month=null
    }
    else{
      if(this.period=='Month')
      {
        this.startday=null;
        this.endday=null;
        this.year=null;
      }
      else{
        if(this.period=='Date')
        {
          this.month=null;
          this.year=null;
        }
      }
    }
  }
}
