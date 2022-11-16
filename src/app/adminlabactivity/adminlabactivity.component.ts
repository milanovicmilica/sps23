import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
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
  month:number;
  startdate:number;
  day:number;
  startday:Date;
  endday:Date;
}
