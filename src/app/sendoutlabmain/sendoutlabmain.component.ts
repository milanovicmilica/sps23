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
    console.log(this.slide)
    let f1=0;
    this.UserService.getAllSectioning().subscribe((data: Sectioning[])=>{
      this.allSectioning=data;
      this.UserService.getAllCs().subscribe((data: Cs[])=>{
        this.allCS=data;
        this.UserService.getAllSamples().subscribe((data: Sample[])=>{
          this.allSample=data;
        this.UserService.getAllCases().subscribe((data: Case[])=>{
          this.allCase=data;
      let cassette;
        for (let index = 0; index < this.allSectioning.length; index++) {
          
          for (let index2 = 0; index2 < this.allSectioning[index].nizQr.length; index2++) {
           
            if(this.slide==this.allSectioning[index].nizQr[index2])//nadje slide
            {
              f1=1;console.log('pred5')
               cassette=this.allSectioning[index].cassette;//izvuce kasetu
               console.log(cassette)
               let f2=0;
              for (let index3 = 0; index3 < this.allCS.length; index3++) {
                
                if(this.allCS[index3].code==cassette)//nadje kasetuu u csu
                {
                  this.myinfo=this.allCS[index3]
                  f2=1;
                  for (let index4 = 0; index4 < this.allCase.length; index4++) {
                   if(this.myinfo.caseid==this.allCase[index4].formatcn)
                   {
                    this.myCase=this.allCase[index4]
                    console.log(this.myCase.formatcn)
                   }
                    
                  }
                }
              }
              console.log('proso f1')
              if(f2==0)
              {
                for (let index3 = 0; index3 < this.allSample.length; index3++) {
                  if(this.allSample[index3].code==cassette)//nadje kasetu u samplu
                  {
                    f2=1;console.log('pred4')
                    let caseid=this.allSample[index3].caseid;
                    for (let index4 = 0; index4 < this.allCase.length; index4++) {
                      if(caseid==this.allCase[index4].formatcn)
                      {
                       this.myCase=this.allCase[index4]
                       console.log(this.myCase.formatcn)
                      }
                       
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
             console.log(this.myinfo.caseid)
             f1=1;console.log('pred3')
              for (let index4 = 0; index4 < this.allCase.length; index4++) {
               if(this.myinfo.caseid==this.allCase[index4].formatcn)
               {
                console.log('evvvv')
                this.myCase=this.allCase[index4]
               }
                
              }
            }
          }
        }
        if(f1==0)
        {
          for (let index = 0; index < this.allSample.length; index++) {
           if(this.allSample[index].code==this.slide)
           {
            cassette=this.slide;
            let caseid=this.allSample[index].caseid
            console.log(caseid)
            console.log('pred2')
            f1=1;
            for (let index2 = 0; index2 < this.allCase.length; index2++) {
              
              if(this.allCase[index2].formatcn==caseid)
              {this.myCase=this.allCase[index2];
              }
            }
           }
            
          }
          console.log('pred')
          if(f1==0)
          {
            for (let index = 0; index < this.allSample.length; index++) {
              for (let index3 = 0; index3 < this.allSample[index].nizQr.length; index3++) {
              if(this.allSample[index].nizQr[index3]==this.slide)
              {
               //cassette=this.slide;
               let caseid=this.allSample[index].caseid
               console.log("evo gaa naso")
               console.log(caseid)
               f1=1;
               for (let index2 = 0; index2 < this.allCase.length; index2++) {
                 
                 if(this.allCase[index2].formatcn==caseid)
                 {this.myCase=this.allCase[index2];
                 }
               }
              }
               
             }}
          }
        }
        for (let index = 0; index < this.allCS.length; index++) {
          
          if(this.allCS[index].caseid==this.myCase.formatcn)
          {
            this.allcass.push(this.allCS[index])
          }
          
        }
        for (let index = 0; index < this.allSample.length; index++) {
          if(this.allSample[index].acs=='External block' && this.myCase.formatcn==this.allSample[index].caseid)
          {
            this.allexbl.push(this.allSample[index]);
            this.allexslide.push(this.allSample[index])
            
          }
          
        }
        for (let index = 0; index < this.allSample.length; index++) {
          if(this.allSample[index].acs=='External slide' && this.myCase.formatcn==this.allSample[index].caseid)
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

      })})})

    })
  }
  me:User;
  slide:String;
  allSectioning:Sectioning[]=[];
  allCS:Cs[]=[];
  myinfo:Cs;
  myCase:Case;
  allCase:Case[];
  allcass:Cs[]=[];
  allexbl:Sample[]=[];
  allSample:Sample[];
  allexslide:Sample[]=[];
  allslides:Sectioning[]=[];
  logout(){
    sessionStorage.clear();
    this.router.navigate(['/login-sendout']);
  }
}
