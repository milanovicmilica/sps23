import { Component, OnInit,HostListener } from '@angular/core';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { Process } from '../models/process';
import { Processor } from '../models/processors';

import { UserService } from '../user.service';
import { Sample } from '../models/sample';
import { Case } from '../models/case';
import { Cs } from '../models/infocs';
import { Embedding } from '../models/embedding';
@Component({
  selector: 'app-archivedash',
  templateUrl: './archivedash.component.html',
  styleUrls: ['./archivedash.component.css']
})
export class ArchivedashComponent implements OnInit {

  constructor(private router: Router, private UserService: UserService) { }

  ngOnInit(): void {  let user1 = JSON.parse(sessionStorage.getItem("laborant")) as User; 
  this.me=user1;
  }
  me:User;
  logout(){
    sessionStorage.clear();
    this.router.navigate(['/login-archive']);
  }
  inputval:string;
  
}
