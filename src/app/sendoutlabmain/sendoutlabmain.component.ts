import { Component, OnInit,HostListener } from '@angular/core';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { Process } from '../models/process';
import { Processor } from '../models/processors';

import { UserService } from '../user.service';

@Component({
  selector: 'app-sendoutlabmain',
  templateUrl: './sendoutlabmain.component.html',
  styleUrls: ['./sendoutlabmain.component.css']
})
export class SendoutlabmainComponent implements OnInit {

  constructor(private router: Router, private UserService: UserService) { }

  ngOnInit(): void {
    let user1 = JSON.parse(sessionStorage.getItem("laborant")) as User; 
    this.me=user1;
    let s=JSON.parse(sessionStorage.getItem("slide")) as String; 
    this.slide=s;
  }
  me:User;
  slide:String;
}
