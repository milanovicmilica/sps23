import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { Case } from '../models/case';
import { Reporting } from '../models/reporting';
import { Sectioning } from '../models/sectioning';
import { User } from '../models/user';
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
    this.UserService.getAllUsers().subscribe((data: User[])=>{
      this.allUsers=data;
     
    for (let index = 0; index < this.allUsers.length; index++) {
     if(this.allUsers[index].type==3)
      {
        this.paths.push(this.allUsers[index])
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
  allReportings:Reporting[];
  numofslides:number;
  fl2:number;
  pathologist:string;
  allUsers:User[];
  paths:User[]=[];
  logout(){
    sessionStorage.clear();
    this.router.navigate(['']);
  }
  getval(){
    
      if(this.period=='Year')
      {
        this.UserService.getAllReportings().subscribe((data: Reporting[])=>{
          this.allReportings=data;
          let ukupno=0;
          for (let index = 0; index < this.allReportings.length; index++) {
           if(this.allReportings[index].year==this.year && this.allReportings[index].pathologist==this.pathologist)
           {
            ukupno+=1;
           }
          
            }
            this.numofslides=ukupno;
            
            })
      }
      else{
        if(this.period=='Month')
        {
          this.UserService.getAllReportings().subscribe((data: Reporting[])=>{
            this.allReportings=data;
            let ukupno=0;
            let br;
            for (let index = 0; index < this.months.length; index++) {
             if(this.months[index]==this.month)
             {
               br=index;
             }
            }
            for (let index = 0; index < this.allReportings.length; index++) {
             if(this.allReportings[index].year==this.year && this.allReportings[index].month==(br+1) && this.allReportings[index].pathologist==this.pathologist)
             {
              ukupno+=1;
             }
            
              }
              this.numofslides=ukupno;
              
              })
        }
        else{
          if(this.startday!=null && this.endday!=null)
          {
            let novi=new Date(this.startday);
            let stdan=novi.getDate();
            let stmesec=novi.getMonth()+1;
            let stgod=novi.getFullYear();
            let sd=new Date(this.endday);
             let endan=sd.getDate();
            let enmesec=sd.getMonth()+1;
            let engod=sd.getFullYear();

             this.UserService.getAllReportings().subscribe((data: Reporting[])=>{
            this.allReportings=data;
            let mys:Reporting[]=[];
        
         
          for (let index = 0; index < this.allReportings.length; index++) {
            
            if(this.allReportings[index].year==stgod || this.allReportings[index].year==engod  && stgod==engod)
          {
      
          if(stmesec==enmesec)
          {
            if(this.allReportings[index].month==stmesec && this.allReportings[index].day>=stdan && this.allReportings[index].day<=endan
              && this.allReportings[index].pathologist==this.pathologist)
            {
              mys.push(this.allReportings[index])
            }
          }
          else{
            if(stmesec<enmesec)
            {
              if((this.allReportings[index].month<enmesec && this.allReportings[index].day>=stdan 
                && this.allReportings[index].month>=stmesec&& this.allReportings[index].pathologist==this.pathologist) ||
                (this.allReportings[index].month<enmesec && this.allReportings[index].month>stmesec && 
                  this.allReportings[index].pathologist==this.pathologist) 
                ||(this.allReportings[index].month==enmesec && this.allReportings[index].day<=endan && 
                  this.allReportings[index].pathologist==this.pathologist)
                )
              {
                mys.push(this.allReportings[index])
              }
            }
            else{
              this.message='Start date must be before end date'
            }
          }

          }
          }

          let uk=0;
          for (let index = 0; index < mys.length; index++) {
         
            uk+=1;
          }
          this.numofslides=uk;
          })}
            
        }
      
    }
  }
  gotolabactivity(){
    this.router.navigate(['/labactivity']);
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
