import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { Case } from '../models/case';
import { Reporting } from '../models/reporting';
import { Sectioning } from '../models/sectioning';
import { User } from '../models/user';
import { UserService } from '../user.service';
@Component({
  selector: 'app-adminadsactivity',
  templateUrl: './adminadsactivity.component.html',
  styleUrls: ['./adminadsactivity.component.css']
})
export class AdminadsactivityComponent implements OnInit {
  allUsers: User[];
  paths: User[];

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
     if(this.allUsers[index].type==2)
      {
        this.paths.push(this.allUsers[index])
      }
    }
    })

  }
  logout(){
    sessionStorage.clear();
    this.router.navigate(['']);
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
  allReportings:Reporting[];
  numofslides:number;
  fl2:number;
  adminis:string;


  gotolabactivity(){
    this.router.navigate(['/labactivity']);
  }
  gotopathactivity(){
    this.router.navigate(['/pathactivity']);
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


  getval(){

  }
}
