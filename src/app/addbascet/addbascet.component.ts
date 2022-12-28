import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../user.service';
@Component({
  selector: 'app-addbascet',
  templateUrl: './addbascet.component.html',
  styleUrls: ['./addbascet.component.css']
})
export class AddbascetComponent implements OnInit {

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
  me:User;
  logout(){
    sessionStorage.clear();
    localStorage.clear()
    this.UserService.removeSession();
    this.router.navigate(['']);
  }
  name:string;
  num:number;

  addprotocol(){
    this.router.navigate(['/addprotocol']);
  }
  addadmin(){
    this.router.navigate(['/dashfirst']);
  }
  addprocessor(){
    this.router.navigate(['/addprocessor']);
  }
 
  message:string;
  message3:string;
  message4:string;

  addProcessor(){

    if (this.name==null || this.name=="")
    {this.message3="Required*"}
    else
    {
      this.message3="";
    }

   

    if(this.name!=null  && this.name!="")
    {
      this.message="";

       let free=1;

       this.UserService.addBasket(this.name,free).subscribe((resp)=>{

        if(resp['message']=='user')
        {this.message='Basket added'; 
      this.name="";
      this.num=null;
      }
        else{ 
          if (resp['message']=='zauzeto')
          {this.message='Basket is already added'; 
          this.name="";
          this.num=null;
        }
          else{
         this.message='Basket is not added'; 
         this.name="";
         this.num=null;}
        }
  
      })
    }

  }
}

