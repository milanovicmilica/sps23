import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../user.service';
@Component({
  selector: 'app-addstainer',
  templateUrl: './addstainer.component.html',
  styleUrls: ['./addstainer.component.css']
})
export class AddstainerComponent implements OnInit {

  constructor(private router: Router, private UserService: UserService) { }

  ngOnInit(): void {
    let user1 = JSON.parse(sessionStorage.getItem("first")) as HttpResponse<any>; 
    if(!user1 || user1.body.type!=0){
      localStorage.clear();
      sessionStorage.clear();
      this.router.navigate(['']);
    }else{
  this.me=user1.body;}
  }
  addprotocol(){
    this.router.navigate(['/addprotocol']);
  }
  addadmin(){
    this.router.navigate(['/dashfirst']);
  }
  addprocessor(){
    this.router.navigate(['/addprocessor']);
  }
 me:User;
  message:string;
  message3:string;
  message4:string;
  logout(){
    sessionStorage.clear();
    localStorage.clear()
    this.UserService.removeSession();
    this.router.navigate(['']);
  }
  name:string;
  num:number;

  
  addStainer(){

    if (this.name==null || this.name=="")
    {this.message3="Required*"}
    else
    {
      this.message3="";
    }

    if(this.num==null)
    {
      this.message4="Required*";
    }
    else
    {
      this.message4="";
    }

    if(this.name!=null && this.num!=null && this.name!="")
    {
      this.message="";

       let free=this.num;

       this.UserService.addStainer(this.name,this.num,free).subscribe((resp)=>{

        if(resp['message']=='user added')
        {this.message='Stainer added'; 
        this.name="";
        this.num=null;}
        else{ 
          if (resp['message']=='zauzeto')
          {this.message='Stainer is already added'; 
          this.name="";
          this.num=null;}
          else{
         this.message='Stainer is not added'; 
         this.name="";
         this.num=null;}
        }
  
      })
    }

  }
}
