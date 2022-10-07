import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-startpage',
  templateUrl: './startpage.component.html',
  styleUrls: ['./startpage.component.css']
})
export class StartpageComponent implements OnInit {

  constructor(private router: Router, private UserService: UserService
  ) { }

  ngOnInit(): void {
  }

username:string;
message:string;
password:string;
message2:string;
  addUser(){
   
  }

}
