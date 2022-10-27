import { Component, OnInit,HostListener } from '@angular/core';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { Process } from '../models/process';
import { Processor } from '../models/processors';

import { UserService } from '../user.service';
import { Sectioning } from '../models/sectioning';
import { Cs } from '../models/infocs';
import { Case } from '../models/case';
import { Sample } from '../models/sample';

@Component({
  selector: 'app-sendoutpatmain',
  templateUrl: './sendoutpatmain.component.html',
  styleUrls: ['./sendoutpatmain.component.css']
})
export class SendoutpatmainComponent implements OnInit {

  constructor(private router: Router, private UserService: UserService) { }

  ngOnInit(): void {
    let user1 = JSON.parse(sessionStorage.getItem("patolog")) as User; 
    this.me=user1;
    let s=JSON.parse(sessionStorage.getItem("case")) as String; 
    this.case=s;
    console.log(this.case)
    this.UserService.getAllSectioning().subscribe((data: Sectioning[])=>{
      this.allSectioning=data;
      this.UserService.getAllCs().subscribe((data: Cs[])=>{
        this.allCS=data;
        this.UserService.getAllSamples().subscribe((data: Sample[])=>{
          this.allSample=data;
        this.UserService.getAllCases().subscribe((data: Case[])=>{
          this.allCase=data;
          console.log(this.allCase.length)
        for (let index = 0; index < this.allCase.length; index++) {
          if(this.case==this.allCase[index].formatcn)
          {this.myCase=this.allCase[index]}
        }
        for (let index = 0; index < this.allSample.length; index++) {
         if(this.allSample[index].caseid==this.case && this.allSample[index].acs=='External block')
         {
          this.allexbl.push(this.allSample[index]);
         }
        }
        console.log(this.allexbl.length);
        for (let index = 0; index < this.allCS.length; index++) {
          if(this.allCS[index].caseid==this.case)
          {
            this.allcass.push(this.allCS[index])
          }
        }
        for (let index = 0; index < this.allSample.length; index++) {
          if(this.allSample[index].caseid==this.case && this.allSample[index].acs=='External slide')
         {
          this.allexslide.push(this.allSample[index]);
         }
        }
        for (let index = 0; index < this.allcass.length; index++) {
          for (let index2 = 0; index2 < this.allSectioning.length; index2++) {
           if(this.allcass[index].code==this.allSectioning[index2].cassette)
            {
              this.allslides.push(this.allSectioning[index2])//da pushuje ceo sectioning da moze da macuje oznaku i qr
          
          }}
          
        }
        })
        })
      })
    })
  }
  myCase:Case;
  case:String='';
  me:User;
  allSectioning:Sectioning[]=[];
  allCS:Cs[]=[]
  allCase:Case[];
  allcass:Cs[]=[];
  allexbl:Sample[]=[];
  allSample:Sample[];
  allexslide:Sample[]=[];
  allslides:Sectioning[]=[];
  mess:string=""
  logout(){
    sessionStorage.clear();
    this.router.navigate(['/login-sendout']);
  }

  done(){
    let sati=new Date().getHours();
    let minuti=new Date().getMinutes();
    let dan=new Date().getDate();
    let mesec=new Date().getMonth()+1;
    let godina=new Date().getFullYear();
    this.UserService.SendoutUpdate(this.me.username,this.myCase.formatcn,sati,minuti,dan,mesec,godina).subscribe((resp)=>{
    
      if(resp['message']=='user')
      {
        this.router.navigate(['/sendoutpathdash']);this.mess=""
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
