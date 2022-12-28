import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../user.service';
@Component({
  selector: 'app-dashboardsecond',
  templateUrl: './dashboardsecond.component.html',
  styleUrls: ['./dashboardsecond.component.css']
})
export class DashboardsecondComponent implements OnInit {

  constructor(private router: Router, private UserService: UserService) { }

  ngOnInit(): void {
    let user1 = JSON.parse(sessionStorage.getItem("administrator")) as  HttpResponse<any>; 
   
    if(!user1 || user1.body.type!=2){
      localStorage.clear();
      sessionStorage.clear();
      this.router.navigate(['/login-accessioning']);
    }else{
  this.me=user1.body;}
  }
  me:User;
  logout(){
    sessionStorage.clear();
    localStorage.clear()
    this.UserService.removeSession();
    this.router.navigate(['/login-accessioning']);
  }
  acspage(){
    this.router.navigate(['/acsfirst']);
  }
  cl(){
    this.router.navigate(['/clacs']);
  
  }
}
