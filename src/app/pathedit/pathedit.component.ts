import { MetadataDtsModuleScopeResolver } from '@angular/compiler-cli/src/ngtsc/scope';
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
  promeni(groupname)
  {
    for (let index = 0; index < this.myPathGroups.length; index++) {
     if(groupname==this.myPathGroups[index].groupname)
     {
      this.choosenGroup=this.myPathGroups[index]
     }
      
    }
  }
}
