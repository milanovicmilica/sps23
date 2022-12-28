import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Case } from '../models/case';
import { Cs } from '../models/infocs';
import { Reporting } from '../models/reporting';
import { Sample } from '../models/sample';
import { Sectioning } from '../models/sectioning';
import { Sendout } from '../models/sendout';
import { User } from '../models/user';
import { UserService } from '../user.service';
@Component({
  selector: 'app-pathreport',
  templateUrl: './pathreport.component.html',
  styleUrls: ['./pathreport.component.css']
})
export class PathreportComponent implements OnInit {

  constructor(private router: Router, private UserService: UserService) { }

  ngOnInit(): void {
    let user1 = JSON.parse(sessionStorage.getItem("patolog")) as HttpResponse<any>; 
   
    if(!user1 || user1.body.type!=3){
      localStorage.clear();
      sessionStorage.clear();
      this.router.navigate(['/login-pathologist']);
    }else{
  this.me=user1.body;
    let s=JSON.parse(sessionStorage.getItem("case")) as string; 
    this.case=s;
    this.UserService.getAllCases().subscribe((data: Case[])=>{
      this.allCase=data;
    
    for (let index = 0; index < this.allCase.length; index++) {
    if(this.allCase[index].formatcn==this.case)
    {
      this.my=this.allCase[index];
    }
      
    }
    this.flag=0
    this.UserService.getAllReportings().subscribe((data: Reporting[])=>{
      this.allReportings=data;

      for (let index = 0; index < this.allReportings.length; index++) {
        if(this.my.formatcn==this.allReportings[index].caseid)
        {
          this.flag=1;
          this.myReporting=this.allReportings[index]
          this.micror=this.myReporting.microreporting
          this.pathd=this.myReporting.pathdiagnosis
          
        }
        
      }
    })
  })
    }
  }
  flag:number;
  me:User;
  case:string;
  allCase:Case[];
  my:Case;
  micror:string;
  pathd:string;
  allReportings:Reporting[];
  myReporting:Reporting;
  message:string;
  logout(){
    sessionStorage.clear();
    localStorage.clear()
    this.UserService.removeSession();
    this.router.navigate(['/login-pathologist']);
  }
  addRepo()
  {
    if (this.flag==1)
    {
      this.router.navigate(['/pathinfo'])
    }else{
      if(this.micror==null || this.micror=="")
      {
        this.message="Microscope Reporting is requred*"
      }
      else{
        if(this.pathd==null || this.pathd=="")
        {
          this.message="Pathological Diagnosis is requred*"
        }else{
    if(this.micror!=null && this.micror!="" && this.pathd!=null && this.pathd!="")
    {

      let date=new Date();
      let dan=new Date().getDate();
      let mesec=new Date().getMonth()+1;
      let godina=new Date().getFullYear();
      let time=date.getHours();
      let minute=date.getMinutes();
      this.UserService.addReporting(this.my.formatcn,this.me.username, this.micror,this.pathd, dan,mesec,godina,time,minute).subscribe((resp)=>{
        
        if(resp['message']=='user')
        {
          this.router.navigate(['/pathinfo'])
        }
    })
  }}}}
}
}
