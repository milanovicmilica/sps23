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
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-sendoutlabmain',
  templateUrl: './sendoutlabmain.component.html',
  styleUrls: ['./sendoutlabmain.component.css']
})
export class SendoutlabmainComponent implements OnInit {

  constructor(private router: Router, private UserService: UserService) { }

  ngOnInit(): void {
    let user1 = JSON.parse(sessionStorage.getItem("laborant")) as User; 
   // console.log(user1.body.type)
    if(!user1 || user1.type!=1){
      localStorage.clear();
      sessionStorage.clear();
      this.router.navigate(['/login-sendout']);
    }else{
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
        for (let index = 0; index < this.allcass.length; index++) {
          this.semallcass.push(0);
          
        }
        for (let index = 0; index < this.allexbl.length; index++) {
          this.semallexbl.push(0);
          
        }
        for (let index = 0; index < this.allexslide.length; index++) {
          this.semallexslide[index]=[];
         for (let index2 = 0; index2 < this.allexslide[index].nizQr.length; index2++) {
          
          this.semallexslide[index].push(0);
         }
          
        }
        for (let index = 0; index < this.allslides.length; index++) {
          this.semallslides[index]=[];
          for (let index2 = 0; index2 < this.allslides[index].nizQr.length; index2++) {
          
            this.semallslides[index].push(0);
           }
        }
      })})})

    })
  }}
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
  semallcass:number[]=[];
  semallexbl:number[]=[];
  semallexslide:number[][]=[];
  semallslides:number[][]=[];
  logout(){
    sessionStorage.clear();
    localStorage.clear()
    this.UserService.removeSession();
    this.router.navigate(['/login-sendout']);
  }
word:string="";
findw:string=""
  @HostListener('window:keypress', ['$event'])
  keyEvent(event: KeyboardEvent): void {
  
    let x;
    if(this.word=='undefined')
      {this.word='';}
     else{
    if (event.key == ']') {
      
        this.word+="]"
       
        this.findw=(this.word)
      this.findqr(this.findw);
        this.word="";
      }
      else{
        this.word+=event.key;
      }
    }
    }

 findqr(qrkod){
 let flag=0;
 for (let index = 0; index < this.allcass.length; index++) {
if(this.allcass[index].code==qrkod)
{
  flag=1;
  this.semallcass[index]=1;
}
 }
 if(flag==0)
 {
  for (let index = 0; index < this.allexbl.length; index++) {
    if(this.allexbl[index].code==qrkod)
    {
      flag=1;
      this.semallexbl[index]=1;
    }
     }
 }
 if(flag==0)
 {
  for (let index = 0; index < this.allslides.length; index++) {
   for (let index2 = 0; index2< this.allslides[index].nizQr.length; index2++) {
    
    if(this.allslides[index].nizQr[index2]==qrkod)
    {
      this.semallslides[index][index2]=1;
      flag=1;
    }
   }
    
 }
 }
 if(flag==0)
 {
  for (let index = 0; index < this.allexslide.length; index++) {
   for (let index2 = 0; index2< this.allexslide[index].nizQr.length; index2++) {
    
    if(this.allexslide[index].nizQr[index2]==qrkod)
    {
      this.semallexslide[index][index2]=1;
      flag=1;
    }
   }
    
 }
 }
}   
done()
{
  let flag=0;
  for (let index = 0; index < this.semallcass.length; index++) {
  
    if(this.semallcass[index]==0)
    {flag=1}
  }
  for (let index = 0; index < this.semallexbl.length; index++) {
  
    if(this.semallexbl[index]==0)
    {flag=1}
  }
  for (let index = 0; index < this.semallexslide.length; index++) {
   for (let index2 = 0; index2 < this.semallexslide[index].length; index2++) {
    
    if(this.semallexslide[index][index2]==0)
    {flag=1}
   }
    
  }
  for (let index = 0; index < this.semallslides.length; index++) {
    for (let index2 = 0; index2 < this.semallslides[index].length; index2++) {
     
     if(this.semallslides[index][index2]==0)
     {flag=1}
    }
     
   }
   if(flag==0)
   {
    let sati=new Date().getHours();
    let minuti=new Date().getMinutes();
    let dan=new Date().getDate();
    let mesec=new Date().getMonth()+1;
    let godina=new Date().getFullYear();
    this.UserService.addSendout(this.me.username,this.myCase.formatcn,sati,minuti,dan,mesec,godina).subscribe((resp)=>{
    
      if(resp['message']=='user')
      {
        this.router.navigate(['/sendoutlabdash']);this.mess=""
      }
      else{ 
        if (resp['message']=='zauzeto')
        { }
        else{
        }
      }
  
    })
   }
   else{
    this.mess="You have to check all of them!"
   }
}
mess:string;
}
