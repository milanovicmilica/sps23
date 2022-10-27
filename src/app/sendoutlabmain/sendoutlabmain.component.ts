import { Component, OnInit,HostListener } from '@angular/core';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { Process } from '../models/process';
import { Processor } from '../models/processors';

import { UserService } from '../user.service';
import { Sectioning } from '../models/sectioning';
import { Cs } from '../models/infocs';
import { Case } from '../models/case';

@Component({
  selector: 'app-sendoutlabmain',
  templateUrl: './sendoutlabmain.component.html',
  styleUrls: ['./sendoutlabmain.component.css']
})
export class SendoutlabmainComponent implements OnInit {

  constructor(private router: Router, private UserService: UserService) { }

  ngOnInit(): void {
    let user1 = JSON.parse(sessionStorage.getItem("laborant")) as User; 
    this.me=user1;
    let s=JSON.parse(sessionStorage.getItem("slide")) as String; 
    this.slide=s;
    let f1=0;
    this.UserService.getAllSectioning().subscribe((data: Sectioning[])=>{
      this.allSectioning=data;
      this.UserService.getAllCs().subscribe((data: Cs[])=>{
        this.allCS=data;
        this.UserService.getAllCases().subscribe((data: Case[])=>{
          this.allCase=data;
      let cassette;
        for (let index = 0; index < this.allSectioning.length; index++) {
          
          for (let index2 = 0; index2 < this.allSectioning[index].nizQr.length; index2++) {
           
            if(this.slide==this.allSectioning[index].nizQr[index2])
            {
              f1=1;
               cassette=this.allSectioning[index].cassette;
              for (let index3 = 0; index3 < this.allCS.length; index3++) {
                
                if(this.allCS[index3].code==cassette)
                {
                  this.myinfo=this.allCS[index3]
                  for (let index4 = 0; index4 < this.allCase.length; index4++) {
                   if(this.myinfo.caseid==this.allCase[index4].formatcn)
                   {
                    this.myCase=this.allCase[index4]
                   }
                    
                  }
                }
              }

            }
            
          }
          
        }
        if(f1==0)
        {
          for (let index3 = 0; index3 < this.allCS.length; index3++) {
                
            if(this.allCS[index3].code==this.slide)
            {
              this.myinfo=this.allCS[index3]
              for (let index4 = 0; index4 < this.allCase.length; index4++) {
               if(this.myinfo.caseid==this.allCase[index4].formatcn)
               {
                this.myCase=this.allCase[index4]
               }
                
              }
            }
          }
        }

      })})

    })
  }
  me:User;
  slide:String;
  allSectioning:Sectioning[]=[];
  allCS:Cs[]=[];
  myinfo:Cs;
  myCase:Case;
  allCase:Case[];
  logout(){
    sessionStorage.clear();
    this.router.navigate(['/login-sendout']);
  }
}
