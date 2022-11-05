import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Processor } from '../models/processors';
import { Protocol } from '../models/protocol';
import { Stainer } from '../models/stainer';
import { UserService } from '../user.service';
@Component({
  selector: 'app-addprstainer',
  templateUrl: './addprstainer.component.html',
  styleUrls: ['./addprstainer.component.css']
})
export class AddprstainerComponent implements OnInit {

  constructor(private router: Router, private UserService: UserService) { }

  ngOnInit(): void {
    
    this.UserService.getAllStainersAdmin().subscribe((data: Stainer[])=>{
      this.allStainers=data;});
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
  allStainers:Stainer[];
  stainer:string;
    addadmin(){
    this.router.navigate(['/dashfirst']);
  }
  addprocessor(){
    this.router.navigate(['/addprocessor']);
  }
  addprotocol(){
    this.router.navigate(['/addprotocol']);
  }
  addProtocol(){
    if (this.name==null || this.name=="")
    {
      this.message3="Required*";
    }
    else
    {
      this.message3="";
    }
    if (this.hours==null || this.minutes==null)
    {
      this.message4="Required hours and minutes*";
    }
    else
    {
      this.message4="";
    }

    if(this.name!=null && this.hours!=null && this.minutes!=null && this.name!="")
    {
      this.message="";

      this.UserService.addSTProtocol(this.name,this.hours,this.minutes, this.stainer).subscribe((resp)=>{

        if(resp['message']=='user added')
        {this.message='Protocol added'; 
      this.stainer="";
    this.name="";
    this.minutes=null;
    this.hours=null;
  }
        else{ 
          if (resp['message']=='zauzeto')
          {this.message='Protocol is already added';
          this.stainer="";
          this.name="";
          this.minutes=null;
          this.hours=null; }
          else{
         this.message='Protocol is not added'; 
         this.stainer="";
         this.name="";
         this.minutes=null;
         this.hours=null;}
        }
  
      })
    }

  }
}
