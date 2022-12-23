import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Case } from '../models/case';
import { Coverslipping } from '../models/coverslipping';
import { Embedding } from '../models/embedding';
import { Cs } from '../models/infocs';
import { Process } from '../models/process';
import { ProcessStaining } from '../models/processstaining';
import { Sample } from '../models/sample';
import { Sectioning } from '../models/sectioning';
import { Sendout } from '../models/sendout';
import { User } from '../models/user';
import { UserService } from '../user.service';
@Component({
  selector: 'app-pathslide',
  templateUrl: './pathslide.component.html',
  styleUrls: ['./pathslide.component.css']
})
export class PathslideComponent implements OnInit {

  constructor(private router: Router, private UserService: UserService) { }

  ngOnInit(): void {
    let user1 = JSON.parse(sessionStorage.getItem("patolog")) as HttpResponse<any>; 
    this.me=user1.body;
    let s=JSON.parse(sessionStorage.getItem("case")) as string; 
    this.case=s;
    let sl=JSON.parse(sessionStorage.getItem("slide")) as string; 
    this.slide=sl;
    let q=JSON.parse(sessionStorage.getItem("qr")) as string; 
    this.qrslide=q;
   if(JSON.parse(sessionStorage.getItem("sectioning")))
    {
      this.sectioning=JSON.parse(sessionStorage.getItem("sectioning")) as Sectioning; 
      this.UserService.getAllCases().subscribe((data: Case[])=>{
        this.allCase=data;
      
      for (let index = 0; index < this.allCase.length; index++) {
      if(this.allCase[index].formatcn==this.case)
      {
        this.my=this.allCase[index];
      }
      
      }
    this.cassette=this.sectioning.cassette

    this.UserService.getAllCs().subscribe((data: Cs[])=>{
      this.allcs=data;

      for (let index = 0; index < this.allcs.length; index++) {
       
        if(this.allcs[index].code==this.cassette)
        this.mycs=this.allcs[index]
      }

      this.UserService.getAllUsers().subscribe((data: User[])=>{
        this.allusers=data;
      
      for (let index = 0; index < this.allusers.length; index++) {
        if(this.allusers[index].username==this.mycs.asistent)
        this.grossasistent=this.allusers[index]
        
      }
      this.UserService.getAllProcess().subscribe((data: Process[])=>{
        this.allProcessings=data;
      
      for (let index = 0; index < this.allProcessings.length; index++) {
        
        for (let index2 = 0; index2 < this.allProcessings[index].casette.length; index2++) {
         
          if(this.cassette==this.allProcessings[index].casette[index2])
          {
            this.myProcess=this.allProcessings[index];
          }
        }
        
      }
      if(this.myProcess){
      for (let index = 0; index < this.allusers.length; index++) {
      if(this.allusers[index].username==this.myProcess.lab)
      this.proclab=this.allusers[index]
        
      }}
      this.UserService.getAllEmb().subscribe((data: Embedding[])=>{
        this.allEmbs=data;
      
        for (let index = 0; index < this.allEmbs.length; index++) {
          if(this.cassette==this.allEmbs[index].cassette)
          {
            this.myEmb=this.allEmbs[index]
          }
          
        }
        if(this.myEmb){
        for (let index = 0; index < this.allusers.length; index++) {
          
          if(this.myEmb.lab==this.allusers[index].username)
        {
          this.emblab=this.allusers[index]
        }
        }}
        for (let index = 0; index < this.allusers.length; index++) {
          if(this.sectioning.lab==this.allusers[index].username)
          {
            this.sectlab=this.allusers[index];
          }
          
        }
        this.UserService.getAllStainingProcess().subscribe((data: ProcessStaining[])=>{
          this.stainhe=data;
        
          for (let index = 0; index < this.stainhe.length; index++) {
           
            for (let index2 = 0; index2 < this.stainhe[index].casette.length; index2++) {
             
              if(this.stainhe[index].casette[index2]==this.qrslide)
              {
                this.myshe=this.stainhe[index]
              }
            }
          }
          if(this.myshe){
        for (let index = 0; index < this.allusers.length; index++) {
          if(this.allusers[index].username==this.myshe.lab)
          this.shelab=this.allusers[index]
          
        }}
        this.UserService.getAllCover().subscribe((data: Coverslipping[])=>{
          this.allcovs=data;
        
          for (let index = 0; index < this.allcovs.length; index++) {
            for (let index2 = 0; index2 < this.allcovs[index].slides.length; index2++) {
              
              if(this.qrslide==this.allcovs[index].slides[index2])
              {
                this.myCovs=this.allcovs[index]
              }
            }
            
          }
          if(this.myCovs)
          {
            for (let index = 0; index < this.allusers.length; index++) {
             
              if(this.allusers[index].username==this.myCovs.laborant)
              {
                this.covslab=this.allusers[index]
              }
              
            }
          }
          this.UserService.getAllSendout().subscribe((data: Sendout[])=>{
            this.allsendout=data;
          
          for (let index = 0; index < this.allsendout.length; index++) {
            if(this.allsendout[index].caseid==this.my.formatcn)
            {
              this.mysend=this.allsendout[index]
            }
            
          }
          if(this.mysend)
          {
            for (let index = 0; index < this.allusers.length; index++) {
             if(this.allusers[index].username==this.mysend.laborant)
             {this.labsend=this.allusers[index]}
              
            }
            for (let index = 0; index < this.allusers.length; index++) {
              if(this.allusers[index].username==this.mysend.path)
              {this.pathSend=this.allusers[index]}
               
             }
          }
          
          })
        })


        })

      })
      
      })
      })

    })
    })

    }
    if(JSON.parse(sessionStorage.getItem("sample")))
    {
      this.mysample=JSON.parse(sessionStorage.getItem("sample")) as Sample; 
      this.UserService.getAllStainingProcess().subscribe((data: ProcessStaining[])=>{
        this.stainhe=data;
      
        for (let index = 0; index < this.stainhe.length; index++) {
         
          for (let index2 = 0; index2 < this.stainhe[index].casette.length; index2++) {
           
            if(this.stainhe[index].casette[index2]==this.qrslide)
            {
              this.myshe=this.stainhe[index]
            }
          }
        }
        if(this.myshe){
      for (let index = 0; index < this.allusers.length; index++) {
        if(this.allusers[index].username==this.myshe.lab)
        this.shelab=this.allusers[index]
        
      }}
      this.UserService.getAllCover().subscribe((data: Coverslipping[])=>{
        this.allcovs=data;
      
        for (let index = 0; index < this.allcovs.length; index++) {
          for (let index2 = 0; index2 < this.allcovs[index].slides.length; index2++) {
            
            if(this.qrslide==this.allcovs[index].slides[index2])
            {
              this.myCovs=this.allcovs[index]
            }
          }
          
        }
        if(this.myCovs)
        {
          for (let index = 0; index < this.allusers.length; index++) {
           
            if(this.allusers[index].username==this.myCovs.laborant)
            {
              this.covslab=this.allusers[index]
            }
            
          }
        }
        this.UserService.getAllSendout().subscribe((data: Sendout[])=>{
          this.allsendout=data;
        
        for (let index = 0; index < this.allsendout.length; index++) {
          if(this.allsendout[index].caseid==this.my.formatcn)
          {
            this.mysend=this.allsendout[index]
          }
          
        }
        if(this.mysend)
        {
          for (let index = 0; index < this.allusers.length; index++) {
           if(this.allusers[index].username==this.mysend.laborant)
           {this.labsend=this.allusers[index]}
            
          }
          for (let index = 0; index < this.allusers.length; index++) {
            if(this.allusers[index].username==this.mysend.path)
            {this.pathSend=this.allusers[index]}
             
           }
        }
        
        })
      })


      })
    }

  }
  mysample:Sample;
  labsend:User;
  pathSend:User;
  mysend:Sendout;
  allsendout:Sendout[]
  covslab:User;
  myCovs:Coverslipping;
  allcovs:Coverslipping[]
  qrslide:string;
  shelab:User
  myshe:ProcessStaining;
  stainhe:ProcessStaining[]
  sectlab:User;
  emblab:User;
  proclab:User;
  myEmb:Embedding;
  allEmbs:Embedding[];
  myProcess:Process;
  allProcessings:Process[];
  grossasistent:User;
  allusers:User[];
  slide:string;
  allCase:Case[];
  allcass:Cs[]=[];
  allexbl:Sample[]=[];
  allSample:Sample[];
  allexslide:Sample[]=[];
  allslides:Sectioning[]=[];
  sectioning:Sectioning;
  mycs:Cs;
  me:User;
  my:Case;
  day:string[]=[];
  month:number[]=[];
  year:number[]=[];
  allS:Sample[]=[];
  numofSpec:number[]=[];
  cassette:string;
allcs:Cs[]=[];

  case:string;
  logout(){
    sessionStorage.clear();
    localStorage.clear()
    this.UserService.removeSession();
    this.router.navigate(['/login-pathologist']);
  }
}
