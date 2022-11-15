
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
      this.niz=this.ss;
    })
  }
  me:User;
  allPathGroups:pathGroup[];
  myPathGroups:pathGroup[]=[];
  choosenGroup:pathGroup;
  groupname:string;
  searchss:string;
  searchihc:string;
  niz:string[]=[];
  ihc:string[]=['PROGESTERON','ESTROGEN', 'Ki 67', 'CK 7', 'CK 20', 'VIMENTIN'];
ss:string[]=['MASSON','ALCIAN BLUE', 'GIEMSA','PAS', 'SREBRO', 'GOMORI'];

searchssin(){
if(this.searchss!=null)
{
  
  this.niz=[];
  for (let index = 0; index < this.ss.length; index++) {
    if(this.ss[index].search(this.searchss))
    {
      this.niz.push(this.ss[index])
    }
    
  }
}
}
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
  expanded:boolean; 

showCheckboxes() {
  var checkboxes = document.getElementById("checkboxes");
  if (!this.expanded) {
    checkboxes.style.display = "block";
    this.expanded = true;
  } else {
    checkboxes.style.display = "none";
    this.expanded = false;
  }
}
expanded2:boolean; 
showCheckboxes2() {
  var checkboxes = document.getElementById("checkboxes1");
  if (!this.expanded2) {
    checkboxes.style.display = "block";
    this.expanded2 = true;
  } else {
    checkboxes.style.display = "none";
    this.expanded2 = false;
  }
}
  addmemberss(b)
  {
    if(this.groupname!=null)
    {
      let flag=0;
      for (let index = 0; index < this.choosenGroup.ss.length; index++) {
        if(this.choosenGroup.ss[index]==b)
        flag=1;
        
      }
      if(flag==0){
      this.choosenGroup.ss.push(b);
      this.UserService.updatePathGroupss(this.choosenGroup.pathologist,this.choosenGroup.groupname, this.choosenGroup.ss).subscribe((resp)=>{
        
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
      
      })}
    }
  }
  addmemberihc(b){
    if(this.groupname!=null)
    {
    let flag=0;
    for (let index = 0; index < this.choosenGroup.ihc.length; index++) {
      if(this.choosenGroup.ihc[index]==b)
      flag=1;
      
    }
    if(flag==0){
      this.choosenGroup.ihc.push(b);
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
      
      })}
    }
  }
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
