import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Case } from '../models/case';
import { Cs } from '../models/infocs';
import { Sample } from '../models/sample';
import { Sectioning } from '../models/sectioning';
import { Sendout } from '../models/sendout';
import { User } from '../models/user';
import { UserService } from '../user.service';
@Component({
  selector: 'app-pathinfo',
  templateUrl: './pathinfo.component.html',
  styleUrls: ['./pathinfo.component.css']
})
export class PathinfoComponent implements OnInit {
  allSectioning: Sectioning[];
  allCS: Cs[];

  constructor(private router: Router, private UserService: UserService) { }

  ngOnInit(): void {
    let user1 = JSON.parse(sessionStorage.getItem("patolog")) as User; 
    this.me=user1;
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
    this.UserService.getAllSectioning().subscribe((data: Sectioning[])=>{
      this.allSectioning=data;
      this.UserService.getAllCs().subscribe((data: Cs[])=>{
        this.allCS=data;
        this.UserService.getAllSamples().subscribe((data: Sample[])=>{
          this.allSample=data;
        this.UserService.getAllCases().subscribe((data: Case[])=>{
          this.allCase=data;
       
        for (let index = 0; index < this.allCase.length; index++) {
          if(this.case==this.allCase[index].formatcn)
          {this.my=this.allCase[index]}
        }
        for (let index = 0; index < this.allSample.length; index++) {
         if(this.allSample[index].caseid==this.case && this.allSample[index].acs=='External block')
         {
          this.allexbl.push(this.allSample[index]);
         }
        }
     
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
    })

  }
  allCase:Case[];
  allcass:Cs[]=[];
  allexbl:Sample[]=[];
  allSample:Sample[];
  allexslide:Sample[]=[];
  allslides:Sectioning[]=[];
  me:User;
  logout(){
    sessionStorage.clear();
    this.router.navigate(['/login-pathologist']);
  }
  predjinaRep()
  {
    sessionStorage.setItem("case", JSON.stringify(this.case));
    this.router.navigate(['/pathreport']);
  }
  my:Case;
  day:string[]=[];
  month:number[]=[];
  year:number[]=[];
  allS:Sample[]=[];
  numofSpec:number[]=[];
allcs:Cs[]=[];

  case:string;
  message:string;
  n1:number[]=[];
  mycs:Cs[]=[];
  casenums:string[]=[];
  myCases:Case[]=[]
  checkarray:number[]=[];
  allSendout:Sendout[]=[];
  predji(b,a,i){
    let qr=a.nizQr[i]
    sessionStorage.setItem("sectioning", JSON.stringify(a));
    sessionStorage.setItem("case", JSON.stringify(this.case));
    sessionStorage.setItem("slide", JSON.stringify(b));
    sessionStorage.setItem("qr", JSON.stringify(qr));
    this.router.navigate(['/pathslide']);
  }
  predji2(b,c,i){
    let qr=c.nizQr[i]
    sessionStorage.setItem("sample", JSON.stringify(c));
    sessionStorage.setItem("case", JSON.stringify(this.case));
    sessionStorage.setItem("slide", JSON.stringify(b));
    sessionStorage.setItem("qr", JSON.stringify(qr));
    this.router.navigate(['/pathslide']);
  }
}
