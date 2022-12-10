
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cs } from '../models/infocs';
import { Sectioning } from '../models/sectioning';
import { User } from '../models/user';
import { UserService } from '../user.service';
@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.css']
})
export class ListusersComponent implements OnInit {

  constructor(private router: Router, private UserService: UserService) { }

  ngOnInit(): void {
    this.UserService.getAllUsers().subscribe((data: User[])=>{
      this.allUsers=data;
    
 for (let index = 0; index < this.allUsers.length; index++) {
  if(this.allUsers[index].type==0)
  {
    this.allAdmins.push(this.allUsers[index])
  }
}
for (let index = 0; index < this.allUsers.length; index++) {
  if(this.allUsers[index].type==3)
 this.allPaths.push(this.allUsers[index])  
}
for (let index = 0; index < this.allUsers.length; index++) {
  if(this.allUsers[index].type==1)
 this.allLabs.push(this.allUsers[index])  
}
for (let index = 0; index < this.allUsers.length; index++) {
  if(this.allUsers[index].type==2)
 this.allAdministrative.push(this.allUsers[index])  
}
for (let index = 0; index < this.allUsers.length; index++) {
  if(this.allUsers[index].type==4)
 this.allSpec.push(this.allUsers[index])  
}
    })
  }
  allPaths:User[]=[];
allAdmins:User[]=[];
  allUsers:User[];
  allLabs:User[];
  allAdministrative:User[]=[];
  allSpec:User[]=[];
  logout(){
    sessionStorage.clear();
    this.router.navigate(['']);
  }
  gotolaact(){
    this.router.navigate(['/labactivity']);
  }
  gotoadsactivity(){
    this.router.navigate(['/adsactivity']);
  }
  gotopathactivity(){
    this.router.navigate(['/pathactivity']);
  }
  gotolabact(){
    this.router.navigate(['/adlabactivity']);
  }
  gotolistusers()
  {
    this.router.navigate(['/listusers']);
  }
}
