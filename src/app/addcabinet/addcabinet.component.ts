import { HttpUploadProgressEvent } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Processor } from '../models/processors';
import { Protocol } from '../models/protocol';
import { UserService } from '../user.service';
@Component({
  selector: 'app-addcabinet',
  templateUrl: './addcabinet.component.html',
  styleUrls: ['./addcabinet.component.css']
})
export class AddcabinetComponent implements OnInit {

  constructor(private router: Router, private UserService: UserService) { }

  ngOnInit(): void {
  }
  logout(){
    sessionStorage.clear();
    this.router.navigate(['']);
  } 
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
  brch(){
    this.typesofrow=[]
    for(let i=0; i<this.rows;i++)
    {
      this.typesofrow.push(0);
    }

  }
  cas(i){
    this.typesofrow[i]=0
  }
  sl(i){
    this.typesofrow[i]=1;
  }
}
