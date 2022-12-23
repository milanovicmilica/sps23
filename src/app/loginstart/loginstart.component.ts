import { Component, OnInit,HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../models/user';
import { HttpResponse } from '@angular/common/http';
@Component({
  selector: 'app-loginstart',
  templateUrl: './loginstart.component.html',
  styleUrls: ['./loginstart.component.css']
})
export class LoginstartComponent implements OnInit {

  constructor(private router: Router, private UserService: UserService) { }

  ngOnInit(): void {
    this.UserService.getAllUsers().subscribe((data: User[])=>{
      this.allUse=data;});

  }

  username:string;
  message:string;
  password:string;
  message2:string;
  message0:string;
  message1:string;
allUse:User[]=[];
  login(){
    if(this.username==null){this.message0="Required*"}else{this.message0="";}
    if(this.password==null){this.message1="Required*"}
    else{ this.message1="";}
    if(this.username!=null && this.password!=null){
      this.message0='';
      this.message1='';
    let flag=0;
    /*this.UserService.loginProvera(this.username,this.password).subscribe((resp: String)=>{
     
      if(resp['message']=="ne")
      {
        this.message='Wrong password';
        flag=1;
        console.log('sds')
      }else{
      if(resp['message']=="nema")
      {
        this.message='This user do not exist';
        flag=1;
      }else{
      if(flag==0 && resp['message']=="ok")
      {*/
        this.UserService.login(this.username,this.password).subscribe((user: HttpResponse<any>)=>{
          if(user){
          //  console.log(user._id)
            console.log(user)
            
            if (user.body.type==0 )//za admina
            {  sessionStorage.setItem("first", JSON.stringify(user));
            
                this.router.navigate(['/dashfirst']);
            }
            else{
              this.message='Wrong password';
              flag=1;
             
                
              
            }
          }
          
        })
      }}
    

    //})}
    
   
 // }
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
