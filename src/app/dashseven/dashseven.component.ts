import { Component, OnInit,HostListener } from '@angular/core';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { Process } from '../models/process';
import { Processor } from '../models/processors';

import { UserService } from '../user.service';
import { Sample } from '../models/sample';
import { Case } from '../models/case';
import { Cs } from '../models/infocs';
import { Embedding } from '../models/embedding';
import { Sectioning } from '../models/sectioning';
import ZebraBrowserPrintWrapper from "zebra-browser-print-wrapper";
import { HttpResponse } from '@angular/common/http';
const printBarcode = async (cid,ln,ns,st,a) => {
  try {
    // Create a new instance of the object
    const browserPrint = new ZebraBrowserPrintWrapper();
    // Select default printer
    const defaultPrinter = await browserPrint.getAvailablePrinters();
    // Set the printer
    browserPrint.setPrinter(defaultPrinter[0]);

    // Check printer status
    const printerStatus = await browserPrint.checkPrinterStatus();
    // Check if the printer is ready
    if (printerStatus.isReadyToPrint) {
      // ZPL script to print a simple barcode

      const zpl = `
      ^XA~TA000~JSN^LT0^MNW^MTT^PON^PMN^LH0,0^JMA^PR4,4~SD15^JUS^LRN^CI0^XZ
      ^XA
      ^MMT
      ^PW456
      ^LL0650
      ^LS0
      ^FT45,331^A0B,42,40^FH\^FD`+cid+`^FS
      ^FT44,185^A0B,41,40^FH\^FD`+ ln+`.`+ns+`^FS
      ^FT83,171^BQN,2,3
      ^FH\^FDLA,`+a+`^FS
      ^FT71,327^A0B,21,28^FH\^FD`+st+`^FS
      ^PQ1,0,1,Y^XZ
      
      
        `;

      browserPrint.print(zpl);
    } else {
      // console.log("Error/s", printerStatus.errors);
      console.log(printerStatus.errors, "error");
      if (printerStatus.errors !== "Unknown Error") {
        // errorFunction(printerStatus.errors);
      } else {
        // errorFunction("Please connect the printer or check the cable.");
      }
    }
  } catch (error) {
    // errorFunction("Please connect the printer or check the cable.");
  }
};

@Component({
  selector: 'app-dashseven',
  templateUrl: './dashseven.component.html',
  styleUrls: ['./dashseven.component.css']
})
export class DashsevenComponent implements OnInit {

  constructor(private router: Router, private UserService: UserService) { }

  ngOnInit(): void {
    let user1 = JSON.parse(sessionStorage.getItem("laborant")) as HttpResponse<any>; 
   
    if(!user1 || user1.body.type!=1){
      localStorage.clear();
      sessionStorage.clear();
      this.router.navigate(['/login-sectioning']);
    }else{
  this.me=user1.body;
    this.g=0;
    this.flag1=0;
    this.UserService.getAllSamples().subscribe((data: Sample[])=>{
      this.allSamples=data;
      this.UserService.getAllCases().subscribe((data: Case[])=>{
        this.allCases=data;
        this.UserService.getAllCs().subscribe((data: Cs[])=>{
          this.allCS=data;
          this.UserService.getAllEmb().subscribe((data: Embedding[])=>{
            this.allEmb=data;
            this.UserService.getAllSectioning().subscribe((data: Sectioning[])=>{
              this.allSectionings=data;
            
            this.word=""
            });
          })
        })
    })})}
  }

  allSectionings:Sectioning[];
  allEmb:Embedding[];
  allCases:Case[];
  me:User;
  cassette:string;
  g:number;
  flag1:number;
  allSamples:Sample[];
  caseid:string;
  firstname:string;
  lastname:string;
  comment:string;
  allCS:Cs[];
  message1:string;
  message:string;
  podslovo:string;
  brPlocica:number;
  niz1:number[];
  niz2:number[];
  he:string[]=[];
  ihc:string[]=['PROGESTERON','ESTROGEN', 'Ki 67', 'CK 7', 'CK 20', 'VIMENTIN'];
  ss:string[]=['MASSON','ALCIAN BLUE', 'GIEMSA','PAS', 'SREBRO', 'GOMORI'];
  ssihc:string[]=[];
  special:string;
  search(){
    this.message=""
    this.message1=""
    this.flag1=0;
    this.he=[];
    this.ssihc=[];
    this.nizOznaka=[]
    this.nizQr=[]
    this.nizprint=[]
    let flagDone=0
    let cnt=0;
    for (let index = 0; index < this.cassette.length; index++) {
          
           
      if(this.cassette.charAt(index)==']')
      cnt++
    
    }
    if(cnt>=2)
    {
      this.cassette=this.cassette.slice(0,this.cassette.length-1)
    }

    for (let index = 0; index < this.allSectionings.length; index++) {
      if(this.allSectionings[index].cassette==this.cassette)
      {
        if(this.allSectionings[index].done==1)
        {this.message1="Cassette done."
      flagDone=1;
      }
      }
      
    }
    if(flagDone==0)
    {
    if (this.cassette==null)
    {
      this.g=1;this.flag1=0;
    }
    else{
      this.g=0;
      let done=0;
   
      this.flag1=1;
      let f0=0;
      this.message1=""
      this.special=this.cassette;
      for (let index = 0; index < this.allSamples.length; index++) {
        if(this.cassette==this.allSamples[index].code)
        {
          
          f0=1;
          this.caseid=this.allSamples[index].caseid;
          this.niz1=this.allSamples[index].niz1;
          this.podslovo=this.allSamples[index].slovo +'1';
              this.niz2=this.allSamples[index].niz2;
              for (let index = 0; index < this.niz1.length; index++) {
                
                if(this.niz1[index]>0)
                {
                  let s=this.niz1[index];
                  while(s>0)
                  {
                    this.ssihc.push(this.ss[index]);
                    this.nizprint.push(0);
                    this.nizQr.push("")
                    this.nizOznaka.push("")
                    s--;
                  }
                }
              }
              for (let index = 0; index < this.niz2.length; index++) {
                
                if(this.niz2[index]>0)
                {
                  let s=this.niz2[index];
                  while(s>0)
                  {
                    this.ssihc.push(this.ihc[index]);
                    this.nizprint.push(0);
                    this.nizQr.push("")
                    this.nizOznaka.push("")
                    s--;
                  }
                }
              }
              this.brPlocica=this.allSamples[index].exbl;
              for (let index = 0; index < this.brPlocica; index++) {
                this.he.push('H&E')
                this.nizprint.push(0);
                this.nizQr.push("")
                this.nizOznaka.push("")
              }
          for (let index2 = 0; index2 < this.allCases.length; index2++) {
            if(this.caseid== this.allCases[index2].formatcn)
            {
              this.firstname=this.allCases[index2].firstname;
              this.lastname=this.allCases[index2].lastname;
            }
            
          }
        }
        
      }
      if(f0==0)
      {
        for (let index = 0; index < this.allCS.length; index++) {
          
        

            if( this.allCS[index].code== this.cassette)
            { this.niz1=this.allCS[index].niz1;
              this.niz2=this.allCS[index].niz2;
              this.brPlocica=this.allCS[index].plocice;
              this.caseid=this.allCS[index].caseid;
              this.podslovo=this.allCS[index].podslovo;
              this.comment=this.allCS[index].comm;
              
              for (let index = 0; index < this.niz1.length; index++) {
                
                if(this.niz1[index]>0)
                {
                  let s=this.niz1[index];
                  while(s>0)
                  {
                    this.ssihc.push(this.ss[index]);
                    this.nizprint.push(0);
                    this.nizQr.push("")
                    this.nizOznaka.push("")
                    s--;
                  }
                }
              }
              for (let index = 0; index < this.niz2.length; index++) {
                
                if(this.niz2[index]>0)
                {
                  let s=this.niz2[index];
                  while(s>0)
                  {
                    this.ssihc.push(this.ihc[index]);
                    this.nizprint.push(0);
                    this.nizQr.push("")
                    this.nizOznaka.push("")
                    s--;
                  }
                }
              }
              for (let index = 0; index < this.brPlocica; index++) {
                this.he.push('H&E')
                this.nizprint.push(0);
                this.nizQr.push("")
                this.nizOznaka.push("")
              }
              for (let index3 = 0; index3 < this.allCases.length; index3++) {
               if(this.allCases[index3].formatcn==this.caseid)
               {
                this.firstname=this.allCases[index3].firstname;
                this.lastname=this.allCases[index3].lastname;
               }
              }
            }
          
        }
      }
    }
      }
  }


  close()
  {
    this.popup=0;
  }
popup:number;
nizprint:number[]=[];
nizQr:string[]=[];
nizOznaka:string[]=[];
popup2:number;
popuph:number;
popup2h:number;
ind1:number;
ind2:number;
ind3:number;
ind4:number;
close2(){
  this.popup2=0;
  this.popup2h=0;
  this.popuph=0;
}
closed(){
  this.popupdone=0;
  
}
YesDH(i, i2)
{
  let flagg=0;
  for (let index = 0; index < this.allSectionings.length; index++) {
  if(this.allSectionings[index].cassette==this.special)
  {
    flagg=1;
    if (this.allSectionings[index].nizprint[this.ind3]>0)
    {
      this.popup2h=1;
      this.popuph=0;
      flagg=1;
    }
    else{
      this.nizprint.splice(this.ind3,1);
      this.nizQr.splice(this.ind3,1);
      this.nizOznaka.splice(this.ind3,1)
      this.he.splice(this.ind4,1);
      let dan=new Date().getDate();
      let mesec=new Date().getMonth()+1;
      let godina=new Date().getFullYear();
      this.UserService.addSectioning(this.cassette,dan,mesec,godina,this.nizQr,this.nizprint, this.nizOznaka).subscribe((resp)=>{
        
        if(resp['message']=='user')
        { 
          this.UserService.getAllSectioning().subscribe((data: Sectioning[])=>{
            this.allSectionings=data;
          this.popuph=0;
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
  if (flagg==0){
    this.popuph=0;
  this.nizprint.splice(this.ind3,1);
  this.nizQr.splice(this.ind3,1);
  this.nizOznaka.splice(this.ind3,1);
  this.he.splice(this.ind4,1);
  }
}
YesD()
{
  let flagg=0;
  for (let index = 0; index < this.allSectionings.length; index++) {
  if(this.allSectionings[index].cassette==this.special)
  {
    flagg=1;
    if (this.allSectionings[index].nizprint[this.ind1]>0)
    {
      this.popup2=1;
      this.popup=0;
      flagg=1;
    }else
    {
  this.nizprint.splice(this.ind1,1);
  this.nizQr.splice(this.ind1,1);
  this.nizOznaka.splice(this.ind1,1);
  this.ssihc.splice(this.ind2,1);
  let dan=new Date().getDate();
  let mesec=new Date().getMonth()+1;
  let godina=new Date().getFullYear();
  this.UserService.addSectioning(this.cassette,dan,mesec,godina,this.nizQr,this.nizprint,this.nizOznaka).subscribe((resp)=>{
    
    if(resp['message']=='user')
    { 
      this.UserService.getAllSectioning().subscribe((data: Sectioning[])=>{
        this.allSectionings=data;
      this.popup=0;
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
if(flagg==0)
{this.popup=0;
  this.nizprint.splice(this.ind1,1);
  this.nizQr.splice(this.ind1,1);
  this.nizOznaka.splice(this.ind1,1);
  this.ssihc.splice(this.ind2,1);
}
}
delete(i,i1)
{
this.popup=1
this.ind1=i;
this.ind2=i1;
}
deleteh(i,i2)
{
this.popuph=1
this.ind3=i;
this.ind4=i2;
}
popupdone:number;
print(i,podslovo,bb1,bb2)
{
  let dan=new Date().getDate();
  let mesec=new Date().getMonth()+1;
  let godina=new Date().getFullYear();
   
  let flag=0;let a;
  for (let index = 0; index < this.allSectionings.length; index++) {
    if(this.allSectionings[index].cassette==this.cassette)
    {
      this.allSectionings[index].nizprint[i]++;
       a="[spspIPMF"+this.caseid+", "+podslovo+"."+bb1+"."+" "+bb2+"-"+this.firstname+" "+this.lastname+"]"
      let oznaka=podslovo+"."+bb1+"."+ " "+bb2;
      this.allSectionings[index].nizOznaka[i]=oznaka;
      this.allSectionings[index].nizQr[i]=a;
      this.nizprint= this.allSectionings[index].nizprint;
      this.nizQr= this.allSectionings[index].nizQr;
      this.nizOznaka= this.allSectionings[index].nizOznaka;
      flag=1;
    }
    
  }
  if (flag==0)
  {
    for (let index2 = 0; index2 < this.nizprint.length; index2++) {
      this.nizprint[index2]=0;
      
    }
    this.nizprint[i]++;
     a="[spspIPMF"+this.caseid+", "+podslovo+"."+bb1+"."+" "+bb2+"-"+this.firstname+" "+this.lastname+"]"
    this.nizQr[i]=a;
    let oznaka=podslovo+"."+bb1+"."+ " "+bb2;
    this.nizOznaka[i]=oznaka;
  }
  printBarcode(this.caseid,podslovo,bb1,bb2 ,a);
console.log(this.cassette)
  this.UserService.addSectioning(this.cassette,dan,mesec,godina,this.nizQr,this.nizprint, this.nizOznaka).subscribe((resp)=>{
    
    if(resp['message']=='user')
    { 
      this.UserService.getAllSectioning().subscribe((data: Sectioning[])=>{

        this.allSectionings=data;
      
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

  logout(){
    sessionStorage.clear();
    localStorage.clear()
    this.UserService.removeSession();
    this.router.navigate(['/login-sectioning']);
  }

  donecase(){
    
    this.UserService.getAllSectioning().subscribe((data: Sectioning[])=>{
      this.allSectionings=data;
    let f2=0;
    for (let index = 0; index < this.allSectionings.length; index++) {
     
      if(this.special==this.allSectionings[index].cassette)
      {
        f2=1;
        let znak=0;
        for (let index2 = 0; index2 < this.allSectionings[index].nizprint.length; index2++) {
         
          if(this.allSectionings[index].nizprint[index2]==0)
          {
            znak=1;
          }
        }
        if(znak==0)
        {   let date=new Date(); 
          let time=date.getHours();
          let minute=date.getMinutes();
          this.UserService.updateSectioning(this.cassette, this.me.username,time,minute ).subscribe((resp)=>{
    
            if(resp['message']=='user')
            { 
              this.UserService.getAllSectioning().subscribe((data: Sectioning[])=>{
                this.allSectionings=data;
              this.flag1=0;
              this.cassette="";
              });
            
        
            }
            else{ 
             
            }
        
          })
        }
        else{
          this.popupdone=1;
        }
      }
    }
    if(f2==0)
    {
      this.popupdone=1;
    }
    });


  }
  printall(){
    let dan=new Date().getDate();
  let mesec=new Date().getMonth()+1;
  let godina=new Date().getFullYear();

  let flag=0;let a; 
  let fs;
  for (let index = 0; index < this.allSectionings.length; index++) {
    if(this.allSectionings[index].cassette==this.cassette)
    {
    
     fs=this.allSectionings[index];
      this.nizprint= this.allSectionings[index].nizprint;
      this.nizQr= this.allSectionings[index].nizQr;
      this.nizOznaka= this.allSectionings[index].nizOznaka;
      flag=1;
    }
    
  }

  if(flag==0){
    for (let index2 = 0; index2 < this.nizprint.length; index2++) {
      this.nizprint[index2]=0;
      
    }}
    for (let index = 0; index < this.he.length; index++) {
    
      this.nizprint[index]++;
      let oznaka=this.podslovo+"."+(index+1)+"."+ " "+this.he[index];
      this.nizOznaka[index]=oznaka;
      a="[spspIPMF"+this.caseid+", "+this.podslovo+"."+(index+1)+"."+" "+this.he[index]+"-"+this.firstname+" "+this.lastname+"]"
      this.nizQr[index]=a;
    }
    for (let index = 0; index < this.ssihc.length; index++) {
 
      this.nizprint[index+this.he.length]++;
      let oznaka=this.podslovo+"."+(index+this.he.length+1)+"."+ " "+this.ssihc[index];
      this.nizOznaka[index+this.he.length]=oznaka;
      a="[spspIPMF"+this.caseid+", "+this.podslovo+"."+(index+this.he.length+1)+"."+" "+this.ssihc[index]+"-"+this.firstname+" "+this.lastname+"]"
      this.nizQr[index+this.he.length]=a;
    }
  
    this.UserService.addSectioning(this.cassette,dan,mesec,godina,this.nizQr,this.nizprint, this.nizOznaka).subscribe((resp)=>{
    
      if(resp['message']=='user')
      { 
        this.UserService.getAllSectioning().subscribe((data: Sectioning[])=>{
  
          this.allSectionings=data;
        for (let index = 0; index < this.he.length; index++) {
          printBarcode(this.caseid,this.podslovo,(index+1),this.he[index] ,this.nizQr[index]);
          
        }
        for (let index = 0; index < this.ssihc.length; index++) {
          printBarcode(this.caseid,this.podslovo,(index+this.he.length+1),this.ssihc[index] ,this.nizQr[index+this.he.length]);
          
        }
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
  word:string;
  @HostListener('window:keypress', ['$event'])
  keyEvent(event: KeyboardEvent): void {

    this.word+=event.key;
    let cnt=0;
    for (let index = 0; index < this.word.length; index++) {
    
     
        if(this.word.charAt(index)==']')
        cnt++
      
      }
      if(cnt>=2)
      {
        this.word=this.word.slice(0,this.word.length-1)
      }
    if (event.key == ']') {
      let flag=0;
       
          this.cassette=this.word
          this.word="";
          let cnt=0;
          for (let index = 0; index < this.cassette.length; index++) {
          
           
              if(this.cassette.charAt(index)==']')
              cnt++
            
            }
            if(cnt>=2)
            {
              this.cassette=this.cassette.slice(0,this.cassette.length-1)
            }

        }

        
         
        

  

      }
   
   
  }


