import { Component, OnInit,HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../models/user';
import { HttpResponse } from '@angular/common/http';
@Component({
  selector: 'app-loginshe',
  templateUrl: './loginshe.component.html',
  styleUrls: ['./loginshe.component.css']
})
export class LoginsheComponent implements OnInit {

  constructor(private router: Router, private UserService: UserService) { }

  ngOnInit(): void {
  }


  username:string;
  message:string;
  password:string;
  message2:string;
  message0:string;
  message1:string;

  login(){
    if(this.username==null){this.message0="Required*"}else{this.message0="";}
    if(this.password==null){this.message1="Required*"}
    else{ this.message1="";}
    if(this.username!=null && this.password!=null){
      this.message0='';
      this.message1='';
    let flag=0;

      if(flag==0)
      {
        this.UserService.login(this.username,this.password).subscribe((user:  HttpResponse<any>)=>{
          if(user){
            
            if (user.body.type==0 )//za admina
            {  /*sessionStorage.setItem("first", JSON.stringify(user));
                this.router.navigate(['/dashfirst']);*/
            }
            else{
              if(user.body.type==1)
              {
                sessionStorage.setItem("laborant", JSON.stringify(user));
                this.router.navigate(['/dashsix']);
              }
              else{
                
                this.message='Wrong password';
              }
            }
          }
          else 
        
           this.message='This user do not exist';
        })
      }


    }
    
   
  }
  visible:boolean=true;
  changetype:boolean=true;

  viewpass(){
this.visible=!this.visible;
this.changetype=!this.changetype;
  }
  @HostListener('window:keypress', ['$event'])
  keyEvent(event: KeyboardEvent): void {
    if(event.key=="Enter")
    {
      this.login();
    }
  }
}
