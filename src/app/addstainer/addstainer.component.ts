import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-addstainer',
  templateUrl: './addstainer.component.html',
  styleUrls: ['./addstainer.component.css']
})
export class AddstainerComponent implements OnInit {

  constructor(private router: Router, private UserService: UserService) { }

  ngOnInit(): void {
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
 
  message:string;
  message3:string;
  message4:string;
  logout(){
    sessionStorage.clear();
    this.router.navigate(['']);
  }
  name:string;
  num:number;

  
  addStainer(){

    if (this.name==null)
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

    if(this.name!=null && this.num!=null)
    {
      this.message="";

       let free=this.num;

       this.UserService.addStainer(this.name,this.num,free).subscribe((resp)=>{

        if(resp['message']=='user added')
        {this.message='Stainer added'; }
        else{ 
          if (resp['message']=='zauzeto')
          {this.message='Stainer is already added'; }
          else{
         this.message='Stainer is not added'; }
        }
  
      })
    }

  }
}
