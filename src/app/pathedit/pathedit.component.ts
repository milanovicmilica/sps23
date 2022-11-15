
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Case } from '../models/case';
import { Cs } from '../models/infocs';
import { pathGroup } from '../models/pathgroups';
import { Sample } from '../models/sample';
import { Sectioning } from '../models/sectioning';
import { Sendout } from '../models/sendout';
import { User } from '../models/user';
import { UserService } from '../user.service';
@Component({
  selector: 'app-pathedit',
  templateUrl: './pathedit.component.html',
  styleUrls: ['./pathedit.component.css']
})
export class PatheditComponent implements OnInit {

  constructor(private router: Router, private UserService: UserService) { }

  ngOnInit(): void {
    let user1 = JSON.parse(sessionStorage.getItem("patolog")) as User; 
    this.me=user1;
    this.UserService.getAllPathGroups().subscribe((data: pathGroup[])=>{
      this.allPathGroups=data;
      for (let index = 0; index < this.allPathGroups.length; index++) {
       
        if(this.me.username==this.allPathGroups[index].pathologist)
        {
          this.myPathGroups.push(this.allPathGroups[index])
        }
      }
    })
  }
  me:User;
  allPathGroups:pathGroup[];
  myPathGroups:pathGroup[]=[];
  choosenGroup:pathGroup;
  groupname:string;
  logout(){
    sessionStorage.clear();
    this.router.navigate(['/login-pathologist']);
  }
  promeni()
  {
    if(this.groupname!=null){
    for (let index = 0; index < this.myPathGroups.length; index++) {
     if(this.groupname==this.myPathGroups[index].groupname)
     {
      this.choosenGroup=this.myPathGroups[index]
     }
      
    }
  }}
  deletemember(b)
  {

    for (let index = 0; index < this.choosenGroup.ss.length; index++) {
     
      if(b==this.choosenGroup.ss[index])
      {
        this.choosenGroup.ss.splice(index,1);
        this.UserService.updatePathGroupss(this.choosenGroup.pathologist,this.choosenGroup.groupname, this.choosenGroup.ss).subscribe((resp)=>{
        
          if(resp['message']=='user')
          {
            this.UserService.getAllPathGroups().subscribe((data: pathGroup[])=>{
              this.allPathGroups=data;
              for (let index = 0; index < this.allPathGroups.length; index++) {
               
                if(this.me.username==this.allPathGroups[index].pathologist)
                {
                  this.myPathGroups.push(this.allPathGroups[index])
                }
              }
              for (let index = 0; index < this.myPathGroups.length; index++) {
                if(this.groupname==this.myPathGroups[index].groupname)
                {
                  this.choosenGroup=this.myPathGroups[index]
                }
                
              }
            })
          }
        
        })
      }
      
    }
    
    for (let index = 0; index < this.choosenGroup.ihc.length; index++) {
     
      if(b==this.choosenGroup.ihc[index])
      {
        this.choosenGroup.ihc.splice(index,1);
        this.UserService.updatePathGroupihc(this.choosenGroup.pathologist,this.choosenGroup.groupname, this.choosenGroup.ihc).subscribe((resp)=>{
        
          if(resp['message']=='user')
          {
            this.UserService.getAllPathGroups().subscribe((data: pathGroup[])=>{
              this.allPathGroups=data;
              this.myPathGroups=[];
              for (let index = 0; index < this.allPathGroups.length; index++) {
               
                if(this.me.username==this.allPathGroups[index].pathologist)
                {
                  this.myPathGroups.push(this.allPathGroups[index])
                }
              }
              for (let index = 0; index < this.myPathGroups.length; index++) {
                if(this.groupname==this.myPathGroups[index].groupname)
                {
                  this.choosenGroup=this.myPathGroups[index]
                }
                
              }
            })
          }
        
        })
      }
      
    }
  }
}
