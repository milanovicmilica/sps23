import { HttpUploadProgressEvent } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Processor } from '../models/processors';
import { Protocol } from '../models/protocol';
import { UserService } from '../user.service';
@Component({
  selector: 'app-addcabinet',
  templateUrl: './addcabinet.component.html',
  styleUrls: ['./addcabinet.component.css']
})
export class AddcabinetComponent implements OnInit {

  constructor(private router: Router, private UserService: UserService) { }

  ngOnInit(): void {
  }
  logout(){
    sessionStorage.clear();
    this.router.navigate(['']);
  } 
   name:string;
  hours:number;
  minutes:number;
  message3:string;
  message4:string;
  message:string;
  rows:number;
  addCabinet(){
    
  }
}
