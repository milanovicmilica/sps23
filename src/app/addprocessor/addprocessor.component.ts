import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-addprocessor',
  templateUrl: './addprocessor.component.html',
  styleUrls: ['./addprocessor.component.css']
})
export class AddprocessorComponent implements OnInit {

  constructor(private router: Router, private UserService: UserService) { }

  ngOnInit(): void {
  }
  logout(){
    sessionStorage.clear();
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
 
    
    if(this.num==null || this.num<1)
    {
      this.message4="Required*";
    }
    else
    {
      this.message4="";
    }

    if(this.name!=null && this.num!=null && this.name!="" && this.num>0)
    {
      this.message="";

       let free=this.num;

       this.UserService.addProcessor(this.name,this.num,free).subscribe((resp)=>{

        if(resp['message']=='user added')
        {this.message='Processor added'; 
      this.name="";
      this.num=null;
      }
        else{ 
          if (resp['message']=='zauzeto')
          {this.message='Processor is already added'; 
          this.name="";
          this.num=null;
        }
          else{
         this.message='Processor is not added'; 
         this.name="";
         this.num=null;}
        }
  
      })
    }

  }
}
