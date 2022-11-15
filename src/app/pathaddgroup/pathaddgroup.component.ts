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
  selector: 'app-pathaddgroup',
  templateUrl: './pathaddgroup.component.html',
  styleUrls: ['./pathaddgroup.component.css']
})
export class PathaddgroupComponent implements OnInit {

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
          this.exp.push(false)
          this.blocks.push(0);
          for (let index2 = 0; index2 < this.histo.length; index2++) {
           
            if(this.histo[index].i==this.allPathGroups[index].type)
            {
              this.histo.splice(index,1)
              //this.spec.splice(index,1);
            }
          }
        }
      }
      this.expanded2=true
      this.expanded=true
    })

  }
me:User;
allPathGroups:pathGroup[];
myPathGroups:pathGroup[]=[];
type:string;
ihc:string[]=['PROGESTERON','ESTROGEN', 'Ki 67', 'CK 7', 'CK 20', 'VIMENTIN'];
ss:string[]=['MASSON','ALCIAN BLUE', 'GIEMSA','PAS', 'SREBRO', 'GOMORI'];
histo=[ {i:'Skin'}, {i:'Lungs'}, {i:'Heart'},  {i:'Neuropathology'}, {i:'Peripheral nervous system and muscles (PNS)'},
{i:'Bones, bone marrow and soft tissues (BBMST)'},  {i:'Hematopathology'},  {i:'Liver'},  {i:'GiT'},  {i:'Endocrine'},  {i:'Breast'},
{i: 'Nephropathology'}, {i:'Urology'}, {i: 'Gynecology'}, {i: 'Head and cervix'}];


myss:string[]=[];
myihc:string[]=[];
groupname:string;
addordelete(b)
{
  let find=0;
  for (let index = 0; index < this.myss.length; index++) {
    
    if(this.myss[index]==b)
    {
      find=1;
      this.myss.splice(index,1);
    }
    
  }
  if(find==0)
  {
    this.myss.push(b);
  }
}

addordelete2(b)
{
  let find=0;
  for (let index = 0; index < this.myihc.length; index++) {
    
    if(this.myihc[index]==b)
    {
      find=1;
      this.myihc.splice(index,1);
    }
    
  }
  if(find==0)
  {
    this.myihc.push(b);
  }
}
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
  this.expanded=true;
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
  this.expanded2=true
}
showCheckboxesright(i)
{
  
  if (!this.exp[i]) {
  
    this.exp[i] = true;
  } else {
 
    this.exp[i]  = false;
  }
}
message:string;
exp:boolean[]=[];
blocks:number[]=[]
logout(){
  sessionStorage.clear();
  this.router.navigate(['/login-pathologist']);
}
addgroup()
{
  if(this.groupname==null || this.groupname=="")
  {this.message="Group name is Required*"}
  if(this.type==null)
  {
    this.message="Type is Required*"
  }
  if(this.myss.length==0 && this.ihc.length==0)
  {
    this.message="You did't check anything*"
  }
  console.log(this.groupname)
  console.log(this.type)
  console.log(this.myihc.length)
  console.log(this.myss.length)
  if(this.groupname!=null && this.groupname!="" && this.type!=null && (this.myss.length!=0 || this.myihc.length!=0 )){
  this.UserService.addPathGroup(this.me.username,this.groupname, this.type, this.myss,this.myihc).subscribe((resp)=>{
        console.log(resp['message'])
    if(resp['message']=='user')
    { 
      this.UserService.getAllPathGroups().subscribe((data: pathGroup[])=>{
        this.allPathGroups=data;
        this.myPathGroups=[]
        this.exp=[]
        this.blocks=[]
        for (let index = 0; index < this.allPathGroups.length; index++) {
       
          if(this.me.username==this.allPathGroups[index].pathologist)
          {
            this.myPathGroups.push(this.allPathGroups[index])
            this.exp.push(false)
            this.blocks.push(0);
            for (let index2 = 0; index2 < this.histo.length; index2++) {
             
              if(this.histo[index].i==this.allPathGroups[index].type)
              {
                this.histo.splice(index,1)
                //this.spec.splice(index,1);
              }
            }
          }
        }
        this.groupname=""
        this.myihc=[]
        this.myss=[]
        this.message="Group added"
      });
    

    }
    else{ 
      if (resp['message']=='zauzeto')
      { }
      else{
      }
    }

  })
  }
}
}
