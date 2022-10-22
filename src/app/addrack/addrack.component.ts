import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-addrack',
  templateUrl: './addrack.component.html',
  styleUrls: ['./addrack.component.css']
})
export class AddrackComponent implements OnInit {

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

    if (this.name==null)
    {this.message3="Required*"}
    else
    {
      this.message3="";
    }

   

    if(this.name!=null )
    {
      this.message="";

       let free=1;

       this.UserService.addRack(this.name,free).subscribe((resp)=>{

        if(resp['message']=='user')
        {this.message='Rack added'; 
      this.name="";
      this.num=null;
      }
        else{ 
          if (resp['message']=='zauzeto')
          {this.message='Rack is already added'; 
          this.name="";
          this.num=null;
        }
          else{
         this.message='Rack is not added'; 
         this.name="";
         this.num=null;}
        }
  
      })
    }

  }
}
