import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-dashboardfirst',
  templateUrl: './dashboardfirst.component.html',
  styleUrls: ['./dashboardfirst.component.css']
})
export class DashboardfirstComponent implements OnInit {

  constructor(private router: Router, private UserService: UserService) { }

  ngOnInit(): void {
    this.k=[
      {
        ime:'Admin',
        sel:false,
        type:0
      },
      {
        ime:'Laborant',
        sel:false,
        type:1
      },
      {
        ime:'Administrativac',
        sel:false,
        type:2
      },
      {
        ime:'Pathologist',
        sel:false,
        type:3
      },
     
    
    ]
  }

  username:string;
  message:string;
  password:string;
  message2:string;
  message0:string;
  message1:string;
  message3:string;
  message4:string;
  k;
  brTipa:number;
  firstname:string;
  lastname:string;
  logout(){
    sessionStorage.clear();
    this.router.navigate(['']);
  }
  addprotocol(){
    this.router.navigate(['/addprotocol']);
  }
  addUser(){
    this.message="";
   if(this.username==null) this.message0="Required*";
   else this.message0="";
   if(this.password==null) this.message1="Required*";
   else this.message1="";
   if(this.firstname==null) this.message3="Required*";
   else this.message3="";
   if(this.lastname==null) this.message4="Required*";
   else this.message4="";
    for (let index = 0; index < this.k.length; index++) {
      if(this.k[index].sel==true)
      {
        this.brTipa=(this.k[index].type);
      }
      if(this.brTipa==null)
      {
        this.message2="Required*";
      }else this.message2="";
    }
    if(this.username!=null && this.password!=null && this.brTipa!=null && this.firstname!=null && this.lastname!=null){

    this.UserService.addUser(this.username,this.password,this.brTipa, this.firstname,this.lastname).subscribe((resp)=>{

      if(resp['message']=='user added')
      {this.message='User added'; }
      else{ 
        if (resp['message']=='zauzeto')
        {this.message='Username is aleready used'; }
        else{
       this.message='User is not added'; }
      }

    })
  }}
  addprocessor(){
    this.router.navigate(['/addprocessor']);
  }
  stainer()
  {
    this.router.navigate(['/addstainer']);
  }
  prst(){
    
    this.router.navigate(['/addstprotocol']);
  }
}
