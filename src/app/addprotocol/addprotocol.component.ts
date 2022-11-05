import { HttpUploadProgressEvent } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Processor } from '../models/processors';
import { Protocol } from '../models/protocol';
import { UserService } from '../user.service';
@Component({
  selector: 'app-addprotocol',
  templateUrl: './addprotocol.component.html',
  styleUrls: ['./addprotocol.component.css']
})
export class AddprotocolComponent implements OnInit {

  constructor(private router: Router, private UserService: UserService) { }

  ngOnInit(): void {

    this.UserService.getAllProcessors().subscribe((data: Processor[])=>{
      this.allProcessors=data;});

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
  allProcessors:Processor[];
  processor:string;
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
    if (this.hours==null || this.minutes==null )
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

      this.UserService.addProtocol(this.name,this.hours,this.minutes, this.processor).subscribe((resp)=>{

        if(resp['message']=='user added')
        {this.message='Protocol added'; 
      this.name="";
      this.hours=null;
      this.minutes=null;
      this.processor="";
      }
        else{ 
          if (resp['message']=='zauzeto')
          {this.message='Protocol is already added'; 
          this.name="";
          this.hours=null;
          this.minutes=null;
          this.processor="";}
          else{
         this.message='Protocol is not added';     this.name="";
         this.hours=null;
         this.minutes=null;
         this.processor="";}
        }
  
      })
    }

  }
}
