import { HttpResponse } from '@angular/common/http';
import { Component, OnInit,destroyPlatform,ViewChild  } from '@angular/core';

import { Router } from '@angular/router';
import { ChartConfiguration, LineController, LineElement, PointElement, LinearScale, Title} from 'chart.js' 
import Chart from 'chart.js/auto'
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
  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart:any;
  ngOnInit(): void {
    let user1 = JSON.parse(sessionStorage.getItem("first")) as HttpResponse<any>; 
    if(!user1 || user1.body.type!=0){
      localStorage.clear();
      sessionStorage.clear();
      this.router.navigate(['']);
    }else{
  this.me=user1.body;
    let date=new Date();
    let dan=new Date().getDate();
    let mesec=new Date().getMonth()+1;
    let godina=new Date().getFullYear();
    let novi=new Date();
    this.curryear=novi.getFullYear();
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
  }
  me:User;
  obj:any;
  destroyChart() {
    this.obj.destroy();
  }
  marray:number[]=[0,0,0,0,0,0,0,0,0,0,0,0];
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
  fl4:number;
  curryear:number;
  logout(){
    sessionStorage.clear();
     localStorage.clear()
    this.UserService.removeSession();
    this.router.navigate(['']);
  }
  chpath(){
    if(this.fl4==1)
    {this.destroyChart();}
    this.fl4=1;
    this.UserService.getAllReportings().subscribe((data: Reporting[])=>{
      this.allReportings=data;
      let ukupno=0;
      for (let index = 0; index < this.marray.length; index++) {
          this.marray[index]=0;
        
      }
      for (let index = 0; index < this.allReportings.length; index++) {
       if(this.allReportings[index].year==this.curryear && this.allReportings[index].pathologist==this.pathologist)
       {
       this.marray[this.allReportings[index].month-1]++;
       }
      
        }
        this.canvas = this.mychart.nativeElement; 
        this.ctx = this.canvas.getContext('2d');
        Chart.register(LineController, LineElement, PointElement, LinearScale, Title);
        this.obj=new Chart(this.ctx, {
          type: 'bar',
          data: {
              datasets: [{
                  label: 'Number of reportings',
                  data: this.marray,
                  backgroundColor: "rgba(18, 22, 55, 0.85)",
                  hoverBackgroundColor:"rgba(18, 22, 156, 0.4)",
                  borderColor: "#ffffff",
                  //fill: true,
              },
              ],
              labels: this.months
          }, });
        
        })
  }
  getval(){
    this.fl2=1;
    console.log(this.pathologist)
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
              this.fl2=0
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
  gotolp(){
    this.router.navigate(['/listprocessor']);
  }
  gotolaact(){
    this.router.navigate(['/adlabactivity']);
  }
  gotoadsactivity(){
    this.router.navigate(['/adsactivity']);
  }
  gotolabactivity(){
    this.router.navigate(['/labactivity']);
  }
  gotolistusers()
  {
    this.router.navigate(['/listusers']);
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
