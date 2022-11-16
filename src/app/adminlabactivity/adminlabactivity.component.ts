import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Case } from '../models/case';
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
  activties:string[]=['Case tracking']
  years:number[]=[];
  months:string[]=['January', 'February', 'March','April', 'May', 'June' , 'July', 'August', 'September','October','November','December'];
  daysinm:number[]=[31, 28, 31,30,31, 30 , 31, 31, 30,31,30,31];
  year:number;
  month:Date;
  startdate:number;
  day:number;
  startday:Date;
  endday:Date;
  numofcaseid:number;
  allCase:Case[];
  fl1:number;
  getval(){
      this.fl1=1;
      if(this.year!=null)
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
        if(this.month!=null) console.log(this.month)
        
        if(this.month!=null)
        {
          this.UserService.getAllCases().subscribe((data: Case[])=>{
            this.allCase=data;
            console.log(this.month.getMonth()+1)
            let dcase:Case[]=[];
            let sub=this.month.toString()
            let n=sub.slice(2,4)
            console.log(n);
            for (let index = 0; index < this.allCase.length; index++) {
              if(this.allCase[index].month==(this.month.getMonth()+1) && this.allCase[index].formatcn.includes('/'+n))
              {
                dcase.push(this.allCase[index])
              }
                
              }
              this.numofcaseid=dcase.length;
          })
        }
        /*
        else{
          if(this.startday!=null && this.endday!=null)
          {
            let stdan=this.startday.getDate();
            let stmesec=this.startday.getMonth()+1;
            let stgod=this.startday.getFullYear();

             let endan=this.endday.getDate();
            let enmesec=this.endday.getMonth()+1;
            let engod=this.endday.getFullYear();

             this.UserService.getAllCases().subscribe((data: Case[])=>{
            this.allCase=data;
          let subst=stgod%100;
          let subend=engod%100;
          for (let index = 0; index < this.allCase.length; index++) {
            

          }
          })
          }
        }
        
        */
      }
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
