import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../models/user';
import { HttpResponse } from '@angular/common/http';
@Component({
  selector: 'app-loginaccessioning',
  templateUrl: './loginaccessioning.component.html',
  styleUrls: ['./loginaccessioning.component.css']
})
export class LoginaccessioningComponent implements OnInit {

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
        this.UserService.login(this.username,this.password).subscribe((user: HttpResponse<any>)=>{
          if(user){
            
            if (user.body.type==0 )//za admina
            {   this.message='Wrong user';
            }
            else{
              if(user.body.type==1)
              {
                this.message='Wrong user';
              }
              else{
                if(user.body.type==2 )
                {
                  
                  sessionStorage.setItem("administrator", JSON.stringify(user));
                  
                  this.router.navigate(['/dashsecond']);
                }
                else{
                  if(user.body.type==3 )
                {
                  
                  this.message='Wrong user';
                }
                }
                
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

