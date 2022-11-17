

import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { Case } from '../models/case';
import { Sectioning } from '../models/sectioning';
import { UserService } from '../user.service';
@Component({
  selector: 'app-adminlabactivity',
  templateUrl: './adminlabactivity.component.html',
  styleUrls: ['./adminlabactivity.component.css']
})
export class AdminlabactivityComponent implements OnInit {

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
  logout(){
    sessionStorage.clear();
    this.router.navigate(['']);
  }
  activity:string;
  period:string;
  periods:string[]=['Year', 'Month', 'Date']
  activties:string[]=['Case tracking', 'Printed slides']
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
  allSectionings:Sectioning[];
  getval(){
    if(this.activity=='Case tracking'){
    this.message=""
      this.fl1=1;
      if(this.period=='Year')
      {
       let a=this.year%100;
       let sub='/'+a;

       this.UserService.getAllCases().subscribe((data: Case[])=>{
        this.allCase=data;

        let dcase:Case[]=[];

        for (let index = 0; index < this.allCase.length; index++) {
        if(this.allCase[index].formatcn.includes(sub))
        {
          dcase.push(this.allCase[index])
        }
          
        }
        this.numofcaseid=dcase.length;
        })
      }
      else{
       
        
        if(this.period=='Month')
        {
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
              if(this.allCase[index].month==(br+1) && this.allCase[index].formatcn.includes('/'+(this.year%100)))
              {
                dcase.push(this.allCase[index])
              }
                
              }
              this.numofcaseid=dcase.length;
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
            if(this.allCase[index].month==stmesec && this.allCase[index].day>=stdan && this.allCase[index].day<=endan)
            {
              myc.push(this.allCase[index])
            }
          }
          else{
            if(stmesec<enmesec)
            {
              if((this.allCase[index].month<enmesec && this.allCase[index].day>=stdan && this.allCase[index].month>=stmesec) ||
                (this.allCase[index].month<enmesec && this.allCase[index].month>stmesec) ||
                (this.allCase[index].month==enmesec && this.allCase[index].day<=endan)
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
          this.numofcaseid=myc.length;
          })
          }
        }
        
        
      }}
      else{
        if(this.activity=='Printed slides')
        {
          this.message=""
          this.fl1=1;
          if(this.period=='Year')
          {
            this.UserService.getAllSectioning().subscribe((data: Sectioning[])=>{
              this.allSectionings=data;
              let ukupno=0;
              for (let index = 0; index < this.allSectionings.length; index++) {
               if(this.allSectionings[index].year==this.year)
               {
                ukupno+=this.allSectionings[index].nizQr.length
               }
              
                }
                this.numofcaseid=ukupno;
                
                })
          }else{
            if(this.period=='Month')
            {
              this.UserService.getAllSectioning().subscribe((data: Sectioning[])=>{
                this.allSectionings=data;
                let ukupno=0;
                let br;
                for (let index = 0; index < this.months.length; index++) {
                 if(this.months[index]==this.month)
                 {
                   br=index;
                 }
                }
                for (let index = 0; index < this.allSectionings.length; index++) {
                 if(this.allSectionings[index].year==this.year && this.month==br)
                 {
                  ukupno+=this.allSectionings[index].nizQr.length
                 }
                
                  }
                  this.numofcaseid=ukupno;
                  
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

             this.UserService.getAllSectioning().subscribe((data: Sectioning[])=>{
            this.allSectionings=data;
            let mys:Sectioning[]=[];
        
         
          for (let index = 0; index < this.allSectionings.length; index++) {
            
            if(this.allSectionings[index].year==stgod || this.allSectionings[index].year==engod  && stgod==engod)
          {
      
          if(stmesec==enmesec)
          {
            if(this.allSectionings[index].month==stmesec && this.allSectionings[index].day>=stdan && this.allSectionings[index].day<=endan)
            {
              mys.push(this.allSectionings[index])
            }
          }
          else{
            if(stmesec<enmesec)
            {
              if((this.allSectionings[index].month<enmesec && this.allSectionings[index].day>=stdan && this.allSectionings[index].month>=stmesec) ||
                (this.allSectionings[index].month<enmesec && this.allSectionings[index].month>stmesec) ||
                (this.allSectionings[index].month==enmesec && this.allSectionings[index].day<=endan)
                )
              {
                mys.push(this.allSectionings[index])
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
         
            uk+=mys[index].nizQr.length;
          }
          this.numofcaseid=uk;
          })}
            }
          }
        }
      }
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
}
