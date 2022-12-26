import { Component, OnInit ,destroyPlatform,ViewChild } from '@angular/core';

import { Router } from '@angular/router';
import { ChartConfiguration, LineController, LineElement, PointElement, LinearScale, Title} from 'chart.js' 
import Chart from 'chart.js/auto'
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


  constructor(private router: Router, private UserService: UserService) { }
  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart:any;
  ngOnInit(): void {
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
     if(this.allUsers[index].type==2)
      {
        this.ads.push(this.allUsers[index])
      }
    }
    })

  }
  obj:any;
  destroyChart() {
    this.obj.destroy();
  }
  logout(){
    sessionStorage.clear();
    localStorage.clear()
    this.UserService.removeSession();
    this.router.navigate(['']);
  }  
  allUsers: User[];
  ads: User[]=[];
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
  fl4:number;
  curryear:number;
  marray:number[]=[0,0,0,0,0,0,0,0,0,0,0,0];
  chad(){
    if(this.fl4==1)
    {
      this.destroyChart()
    }
    this.fl4=1;
    
    let a=this.curryear%100;
    let sub='/'+a;

    this.UserService.getAllCases().subscribe((data: Case[])=>{
     this.allCase=data;

     let dcase:Case[]=[];
     for (let index = 0; index < this.marray.length; index++) {
      this.marray[index]=0;
    
       }
     for (let index = 0; index < this.allCase.length; index++) {
     if(this.allCase[index].formatcn.includes(sub) && this.allCase[index].worker==this.adminis)
     {
      this.marray[this.allCase[index].month-1]++;
     }
     }
     this.canvas = this.mychart.nativeElement; 
     this.ctx = this.canvas.getContext('2d');
     Chart.register(LineController, LineElement, PointElement, LinearScale, Title);
     this.obj=new Chart(this.ctx, {
       type: 'bar',
       data: {
           datasets: [{
               label: 'Number of cases',
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
  gotolp(){
    this.router.navigate(['/listprocessor']);
  }
  gotolaact(){
    this.router.navigate(['/adlabactivity']);
  }
  gotolabactivity(){
    this.router.navigate(['/labactivity']);
  }
  gotopathactivity(){
    this.router.navigate(['/pathactivity']);
  }
  gotolistusers()
  {
    this.router.navigate(['/listusers']);
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
    if(this.period=='Year')
    {
      this.fl2=1;
      let a=this.year%100;
      let sub='/'+a;

      this.UserService.getAllCases().subscribe((data: Case[])=>{
       this.allCase=data;

       let dcase:Case[]=[];

       for (let index = 0; index < this.allCase.length; index++) {
       if(this.allCase[index].formatcn.includes(sub) && this.allCase[index].worker==this.adminis)
       {
         dcase.push(this.allCase[index])
       }
         
       }
       this.numofslides=dcase.length;
       })

    }
    else{
      if(this.period=='Month')
      {
        this.fl2=1;
        this.UserService.getAllCases().subscribe((data: Case[])=>{
          this.allCase=data;
          
          let dcase:Case[]=[];
          let sub=this.year.toString()
        
          
          let n=sub.slice(2,4)
       
         let br;
         for (let index = 0; index < this.months.length; index++) {
          if(this.months[index]==this.month)
          {
            br=index;
        
          }
         }
          for (let index = 0; index < this.allCase.length; index++) {
            if(this.allCase[index].month==(br+1) && this.allCase[index].formatcn.includes('/'+(this.year%100)) 
            && this.allCase[index].worker==this.adminis)
            {
              dcase.push(this.allCase[index])
            }
              
            }
            this.numofslides=dcase.length;
        })
      }
      else{
        if(this.startday!=null && this.endday!=null)
        {
          this.fl2=1;
          let novi=new Date(this.startday);
          let stdan=novi.getDate();
          let stmesec=novi.getMonth()+1;
          let stgod=novi.getFullYear();
          let sd=new Date(this.endday);
           let endan=sd.getDate();
          let enmesec=sd.getMonth()+1;
          let engod=sd.getFullYear();

           this.UserService.getAllCases().subscribe((data: Case[])=>{
          this.allCase=data;
          let myc:Case[]=[];
        let subst=stgod%100;
        let subend=engod%100;
       
        for (let index = 0; index < this.allCase.length; index++) {
          
          if(this.allCase[index].formatcn.includes("/"+subst) || this.allCase[index].formatcn.includes("/"+subend)  && subend==subst)
        {
    
        if(stmesec==enmesec)
        {
          if(this.allCase[index].month==stmesec && this.allCase[index].day>=stdan && this.allCase[index].day<=endan 
            && this.allCase[index].worker==this.adminis)
          {
            myc.push(this.allCase[index])
          }
        }
        else{
          if(stmesec<enmesec)
          {
            if((this.allCase[index].month<enmesec && this.allCase[index].day>=stdan && this.allCase[index].month>=stmesec 
              && this.allCase[index].worker==this.adminis) ||
              (this.allCase[index].month<enmesec && this.allCase[index].month>stmesec && this.allCase[index].worker==this.adminis) ||
              (this.allCase[index].month==enmesec && this.allCase[index].day<=endan && this.allCase[index].worker==this.adminis)
              )
            {
              myc.push(this.allCase[index])
            }
          }
          else{
            this.message='Start date must be before end date'
          }
        }

        }
        }
        this.numofslides=myc.length;
        })
        }
      }
    }
  }
}
