//import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timestamp } from 'rxjs';
import { Processor } from '../models/processors';
import { Protocol } from '../models/protocol';
import { User } from '../models/user';
import { UserService } from '../user.service';
import { Component, VERSION, OnInit, ViewChild, HostListener } from '@angular/core';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';
import { Result } from '@zxing/library';
import { BarcodeFormat } from '@zxing/library';
@Component({
  selector: 'app-processing',
  templateUrl: './processing.component.html',
  styleUrls: ['./processing.component.css']
})
export class ProcessingComponent implements OnInit {

  constructor(private router: Router, private UserService: UserService) {


   }

  ngOnInit(): void {
   // this.casette.push("");
    let user1 = JSON.parse(sessionStorage.getItem("laborant")) as User; 
    this.me=user1;
    this.UserService.getAllProcessors().subscribe((data: Processor[])=>{
      this.allProcessors=data;

   this.g1=0;
   this.g2=0;
      this.UserService.getAllProtocols().subscribe((data: Protocol[])=>{
        this.allProtocols=data;
        for (let index = 0; index < this.allProcessors.length; index++) {
          if(this.allProcessors[index].free>0)
          {
            let s=this.allProcessors[index].name
            this.freeProcessors.push(s);
          }
          
        }
       // this.cassettearray.push("");
        //this.casette.push("");
       // this.scanner.permissionResponse.subscribe((perm: boolean) => this.hasPermission = perm);
  
      })
    
    })
  }
  me:User;
  allProcessors:Processor[];
  allProtocols:Protocol[];
  protocol:string;
  scanproc:string;
  bascet:string;
  casette:string;
  freeProcessors:string[]=[];
  allowedFormats = [ BarcodeFormat.QR_CODE, BarcodeFormat.EAN_13, BarcodeFormat.CODE_128, BarcodeFormat.DATA_MATRIX /*, ...*/ ];
  trenProtocols:Protocol[];
  cassettearray:string[]=[];
  @ViewChild('scanner')
  scanner: ZXingScannerComponent;
  qrResultString: string;
  qrResult: Result;
  logout(){
    sessionStorage.clear();
    this.router.navigate(['/login-processing']);
  }
  procpoc(){
    this.router.navigate(['/dashfour']);
  }


  g1:number;
  g2:number;
  startprocess(){

    if(this.bascet==null)
    this.g1=1;
    else this.g1=0;
    if(this.casette==null)
    this.g2=1; else this.g2=0;
    if(this.protocol!=null  && this.bascet!=null && this.casette!=null && this.processor!=null)
    {
     
      let status=0;
      let vreme=new Date().getHours();
      let minuti=new Date().getMinutes();
      let posh;
      let posm;
      let posh2;
      let d=0;
      for (let index = 0; index < this.allProtocols.length; index++) {
       if(this.allProtocols[index].name==this.protocol && this.allProtocols[index].processor==this.processor)
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
      
      
      let mesec=new Date().getUTCMonth()+1;
     
      if(daysInMonth[mesec]<dan)
      {mesec=mesec+1;
      if (mesec>12)
      {year=year+1;
      mesec=1;}
      }

   
      this.UserService.addProcess(this.processor,this.protocol,this.bascet,this.casette,vreme,minuti,status,posh2,posm, dan,mesec,year).subscribe((resp)=>{
    
        if(resp['message']=='user')
        {
        this.router.navigate(['/dashfour']);}
        else{ 
          if (resp['message']=='zauzeto')
          { }
          else{
          }
        }
    
      })
    }
  }
  processor:string;
word:string;
  getProtocols(processor){

      this.trenProtocols=[];
      for (let index = 0; index < this.allProtocols.length; index++) {
        
        if(this.allProtocols[index].processor==processor)
        {
          this.trenProtocols.push(this.allProtocols[index]);
        }
        
      }
  }
  @HostListener('window:keypress', ['$event'])
  keyEvent(event: KeyboardEvent): void {
    if (event.key === '') {
     
      this.cassettearray.push(this.word)
      // The QR/Bar code is ready here
      // Do something here with the scanned code
    } else {
      this.word+=event.key;
      //this.code += event.key;
    }
  }
}
