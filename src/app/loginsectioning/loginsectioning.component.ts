import { Component, OnInit,HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../models/user';
@Component({
  selector: 'app-loginsectioning',
  templateUrl: './loginsectioning.component.html',
  styleUrls: ['./loginsectioning.component.css']
})
export class LoginsectioningComponent implements OnInit {

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
    this.UserService.loginProvera(this.username,this.password).subscribe((poruka: String)=>{

      if(poruka=='ne')
      {
        this.message='Wrong password';
        flag=1;
      }
      if(poruka=='nema')
      {
        this.message='This user do not exist';
        flag=1;
      }
      if(flag==0)
      {
        this.UserService.login(this.username,this.password).subscribe((user: User)=>{
          if(user){
            
            if (user.type==0 )//za admina
            {  /*sessionStorage.setItem("first", JSON.stringify(user));
                this.router.navigate(['/dashfirst']);*/
            }
            else{
              if(user.type==1)
              {
                sessionStorage.setItem("laborant", JSON.stringify(user));
                this.router.navigate(['/dashseven']);
              }
              else{
                if(user.type==2 )
                {
                  
                 // sessionStorage.setItem("administrator", JSON.stringify(user));
                  
                  //this.router.navigate(['/dashsecond']);
                }
                else{
                  if(user.type==3 )
                {
                  
                //  sessionStorage.setItem("patolog", JSON.stringify(user));
                  
                  //this.router.navigate(['/grossfirst']);
                }
                }
                
              }
            }
          }
          else 
        
           this.message='This user do not exist';
        })
      }


    })}
    
   
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
