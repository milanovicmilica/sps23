import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-dashboardsecond',
  templateUrl: './dashboardsecond.component.html',
  styleUrls: ['./dashboardsecond.component.css']
})
export class DashboardsecondComponent implements OnInit {

  constructor(private router: Router, private UserService: UserService) { }

  ngOnInit(): void {
  }
  logout(){
    sessionStorage.clear();
    this.router.navigate(['']);
  }
  acspage(){
    this.router.navigate(['/acsfirst']);
  }
  cl(){
    this.router.navigate(['/clacs']);
  
  }
}
