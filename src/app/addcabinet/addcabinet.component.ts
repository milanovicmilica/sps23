import { HttpResponse, HttpUploadProgressEvent } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Processor } from '../models/processors';
import { Protocol } from '../models/protocol';
import { UserService } from '../user.service';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { User } from '../models/user';
@Component({
  selector: 'app-addcabinet',
  templateUrl: './addcabinet.component.html',
  styleUrls: ['./addcabinet.component.css']
})
export class AddcabinetComponent implements OnInit {

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
  logout(){
    sessionStorage.clear();
    localStorage.clear()
    this.UserService.removeSession();
    this.router.navigate(['']);
  } 
  me:User;
   name:string;
  hours:number;
  minutes:number;
  message3:string;
  message4:string;
  message:string;
  rows:number;
  niz1:number[]=[]
  typesofrow:number[]=[]
  addCabinet(){
    if(this.name==null || this.name=="")
    {this.message3="Required*"}
    else{
      this.message3=""
    }
    if(this.rows==null || this.rows<=0)
    {
      this.message4="Required positive number*"
    }
    else{this.message4=""}
    this.message=""
    if((this.rows!=null && this.rows>0) && (this.name!=null && this.name!=""))
    {
      let qr="[spspIPMF "+this.name+"]";
      this.UserService.addCabinet(this.rows,this.name,this.typesofrow,qr).subscribe((resp)=>{

        if(resp['message']=='user')
        {this.message='Cabinet added'; 
      this.name="";
    this.rows=null; this.typesofrow=[]
      }
        else{ 
          if (resp['message']=='zauzeto')
          {this.message='Cabinet is already added'; 
          this.name="";
          this.rows=null;this.typesofrow=[]
        }
          else{
         this.message='Cabinet is not added'; 
         this.name="";
         this.rows=null;
        this.typesofrow=[]}
        }
  
      })
    }
  }
  addadmin(){
    this.router.navigate(['/dashfirst']);
  }
  cs:number[]=[];
  ss:number[]=[];
  brch(){
    this.typesofrow=[]
    for(let i=0; i<this.rows;i++)
    {
      this.typesofrow.push(0);
      this.cs.push(0);
      this.ss.push(0);
    }

  }
  
  cas(i){
    this.cs[i]=1;
    this.ss[i]=0;
    this.typesofrow[i]=0
  }
  sl(i){
    this.cs[i]=0;
    this.ss[i]=1;
    this.typesofrow[i]=1;
  }
}
