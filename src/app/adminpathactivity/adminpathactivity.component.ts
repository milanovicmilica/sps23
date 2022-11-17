import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { Case } from '../models/case';
import { Reporting } from '../models/reporting';
import { Sectioning } from '../models/sectioning';
import { UserService } from '../user.service';
@Component({
  selector: 'app-adminpathactivity',
  templateUrl: './adminpathactivity.component.html',
  styleUrls: ['./adminpathactivity.component.css']
})
export class AdminpathactivityComponent implements OnInit {

  constructor(private router: Router, private UserService: UserService) { }

  ngOnInit(): void {
    let date=new Date();
    let dan=new Date().getDate();
    let mesec=new Date().getMonth()+1;
    let godina=new Date().getFullYear();
    for (let index = 2000; index <= godina; index++) {
        this.years.push(index);
    }
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

  logout(){
    sessionStorage.clear();
    this.router.navigate(['']);
  }
  getval(){
    if(this.activity=='Reporting')
    {
      if(this.period=='Year')
      {
        this.UserService.getAllReportings().subscribe((data: Reporting[])=>{
          this.allReportings=data;
          let ukupno=0;
          for (let index = 0; index < this.allReportings.length; index++) {
           if(this.allReportings[index].year==this.year)
           {
            ukupno+=1;
           }
          
            }
            this.numofslides=ukupno;
            
            })
      }
    }
  }

  //reseting values when changing periods
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
