import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-addbascet',
  templateUrl: './addbascet.component.html',
  styleUrls: ['./addbascet.component.css']
})
export class AddbascetComponent implements OnInit {

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

