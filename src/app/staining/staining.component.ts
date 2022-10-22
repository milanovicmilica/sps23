import { Component, OnInit } from '@angular/core';
import { timestamp } from 'rxjs';
import { Processor } from '../models/processors';
import { Protocol } from '../models/protocol';
import { User } from '../models/user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';
import { Result } from '@zxing/library';
import { BarcodeFormat } from '@zxing/library';
import { Protocol2 } from '../models/protocol2';
import { Stainer } from '../models/stainer';
import { Rack } from '../models/rack';
@Component({
  selector: 'app-staining',
  templateUrl: './staining.component.html',
  styleUrls: ['./staining.component.css']
})
export class StainingComponent implements OnInit {

  constructor(private router: Router, private UserService: UserService) { }

  ngOnInit(): void {
    let user1 = JSON.parse(sessionStorage.getItem("laborant")) as User; 
    this.me=user1;
    this.UserService.getAllStainers().subscribe((data: Stainer[])=>{
      this.allStainers=data;
      this.UserService.getAllFreeRack().subscribe((data: Rack[])=>{
        this.allrack=data;
   this.g1=0;
   this.g2=0;
      this.UserService.getAllProtocols2().subscribe((data: Protocol2[])=>{
        this.allProtocols=data;
        for (let index = 0; index < this.allStainers.length; index++) {
          if(this.allStainers[index].free>0)
          {
            let s=this.allStainers[index].name
            this.freeStainers.push(s);
          }
          
        }
        //this.casette.push("");
       // this.scanner.permissionResponse.subscribe((perm: boolean) => this.hasPermission = perm);
  
      })
      })
    })
  }


  me:User;

  logout(){
    sessionStorage.clear();
    this.router.navigate(['/login-staininghe']);
  }
  bascet:string;
  casette:string;
  protocol:string;
  stainer:string;
  g1:number;
  g2:number;
  allrack:Rack[];
  startprocess(){

    if(this.bascet==null)
    this.g1=1;
    else this.g1=0;
    if(this.casette==null)
    this.g2=1; else this.g2=0;
    if(this.protocol!=null  && this.bascet!=null && this.casette!=null && this.stainer!=null)
    {
      let vreme=new Date().getHours();
      let minuti=new Date().getMinutes();
      let posh;
      let posm;
      let posh2;
      let d=0;
      for (let index = 0; index < this.allProtocols.length; index++) {
       if(this.allProtocols[index].name==this.protocol && this.allProtocols[index].stainer==this.stainer)
       {
        let sati1=this.allProtocols[index].hours
        let minuti1=this.allProtocols[index].minutes;
        posh=sati1+vreme;
        
        if(posh>24){
        while(posh>24){
        if(posh>24)
        {
          let prom=posh;
          posh=(posh%24);
          if(d==0)
          posh2=posh;
          d=d+1;
          posh=prom-24;
        }}
        posm=minuti1+minuti;
        if(posm>60)
        {
          posm=posm%60;
        }

       }        else{posh2=posh
        posm=minuti1+minuti;
        if(posm>60)
        {
          posm=posm%60;
          posh2=posh2+1;
        }
      }}
      }
      let year=new Date().getFullYear();
      let february = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 29 : 28;
      const daysInMonth = [31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      let dan=new Date().getDate();
      
      dan=dan+d;
      
      
      let mesec=new Date().getMonth()+1;
     console.log(mesec)
      if(daysInMonth[mesec]<dan)
      {mesec=mesec+1;
      if (mesec>12)
      {year=year+1;
      mesec=1;}
      }

      let status=0;
      let possec=new Date().getSeconds();;
      this.UserService.addProcessStaining(this.stainer,this.protocol,this.bascet,this.casette,vreme,minuti,status, posh2,posm, dan,mesec,year,possec).subscribe((resp)=>{
    
        if(resp['message']=='user')
        {
          this.router.navigate(['/dashsix']);
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

  stain(){
this.router.navigate(['/dashsix']);
  }
  processor:string;
trenProtocols:Protocol2[];
allStainers:Stainer[];
allProtocols:Protocol2[];

freeStainers:string[]=[];
  getStainer(stainer){

      this.trenProtocols=[];
      for (let index = 0; index < this.allProtocols.length; index++) {
        
        if(this.allProtocols[index].stainer==stainer)
        {
          this.trenProtocols.push(this.allProtocols[index]);
        }
        
      }
  }

}
