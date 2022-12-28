import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Case } from '../models/case';
import { Sample } from '../models/sample';
import { UserService } from '../user.service';
import ZebraBrowserPrintWrapper from "zebra-browser-print-wrapper";
import { User } from '../models/user';
import { HttpResponse } from '@angular/common/http';
const printBarcode = async (cid,o,a) => {
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
      ^FT44,185^A0B,41,40^FH\^FD`+ o+`^FS
      ^FT83,171^BQN,2,3
      ^FH\^FDLA,`+a+`^FS
      ^FT71,327^A0B,21,28^FH\^FD`+`^FS
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
  selector: 'app-acssecond',
  templateUrl: './acssecond.component.html',
  styleUrls: ['./acssecond.component.css']
})
export class AcssecondComponent implements OnInit {

  constructor(private router: Router, private UserService: UserService) { }

  ngOnInit(): void {
    let user1 = JSON.parse(sessionStorage.getItem("administrator")) as  HttpResponse<any>; 
   
    if(!user1 || user1.body.type!=2){
      localStorage.clear();
      sessionStorage.clear();
      this.router.navigate(['/login-accessioning']);
    }else{
  this.me=user1.body;
    this.UserService.getAllCases().subscribe((data: Case[])=>{
      this.allCases=data;
       this.last=this.allCases.length-1;
       this.HEflag=0;
       this.flag3=0;
       this.f1=0;
       this.num=1;      this.expanded=false;   this.expanded2=false; 
       this.caseid=this.allCases[this.last].formatcn;
       this.allct=[
        {
          ime:'Histology',
          sel:false,
          type:0
        },
        {
          ime:'Cytology',
          sel:false,
          type:1
        },
        {
          ime:'Autopsy',
          sel:false,
          type:2
        },
        {
          ime:'Consultation',
          sel:false,
          type:3
        },
        {
          ime:'Ex Tempore',
          sel:false,
          type:4
        },
        {
          ime:'External analysis',
          sel:false,
          type:5
        },
      
      ]
      this.flags1=0;
      this.flags2=0;
      this.popup=0;
      this.popup2=0;
      this.UserService.getAllSamples().subscribe((data: Sample[])=>{
        this.allSamples=data;
      for (let index = 0; index < this.allSamples.length; index++) {
       
        if(this.caseid==this.allSamples[index].caseid)
        {
          
          this.c1=this.allSamples[index].caseid;
          this.c2=this.allSamples[index].casetype;
          this.c3=this.allSamples[index].sampletype;
          this.c4=this.allSamples[index].acs;
          this.c5=this.allSamples[index].num;
          this.c6=this.allSamples[index].id;
          this.c7=this.allSamples[index].slovo;
          this.c10=this.allSamples[index].spec;
          this.c11=this.allSamples[index].ihc;
          this.c12=this.allSamples[index].choice;
          this.c13=this.allSamples[index].firstch;
          this.c14=this.allSamples[index].exbl;
          this.c15=this.allSamples[index].code;
          let c16=this.allSamples[index].niz1;
          let c17=this.allSamples[index].niz2;
          let c18=this.allSamples[index].nizOznaka; 
          let c19=this.allSamples[index].nizQr;
          let c20=this.allSamples[index].print;
          this.emptycase.pop();
          this.mySamples.push({caseid: this.c1, casetype:this.c2,sampletype:this.c3, acs:this.c4, num:this.c5,
             id:this.c6 ,slovo:this.c7, spec:this.c10,ihc:this.c11, choice:this.c12, firstch:this.c13, exbl:this.c14, code:this.c15 , niz1:c16, 
            niz2:c17,nizOznaka:c18,nizQr:c19, print:c20});
        }
        
      }
      for (let index = 0; index < this.ss.length; index++) {
        
        this.niz1.push(0);
      }
      for (let index = 0; index < this.ihc.length; index++) {
        
        this.niz2.push(0);
      } this.expanded = false; this.expanded2=false;
      })
    })
  }
  }
  logout(){
    sessionStorage.clear();
    localStorage.clear()
    this.UserService.removeSession();
    this.router.navigate(['/login-accessioning']);
  }
c12:string;c13:string; c15:string;
me:User;
acschoice(d)
{
  this.brTipa=d;
}
  exb(){

this.brTipa='External block'
this.exflag=1;
this.Exbl=1;
for (let index = 0; index < this.niz1.length; index++) {
  this.niz1[index]=0;
  
}
for (let index = 0; index < this.niz2.length; index++) {
  this.niz2[index]=0;
  
}
  }
  exblpovecaj(i)
  {
    if(this.niz1[i]<9)
    this.niz1[i]++;
  }
  exblpovecaj2(i)
  {
    if(this.niz2[i]<9)
    this.niz2[i]++;
  }
  exblumanji(i)
  {
    if((this.niz1[i]-1)>=0)
    this.niz1[i]--;
  }
  exblumanji2(i)
  {
    if((this.niz2[i]-1)>=0)
    this.niz2[i]--;
  }
  exs(){
    this.brTipa='External slide'
    this.exflag=0;this.Exbl=0;
    for (let index = 0; index < this.niz1.length; index++) {
      this.niz1[index]=0;
      this.nizOznaka=[]
    }
    for (let index = 0; index < this.niz2.length; index++) {
      this.niz2[index]=0;
      this.nizQr=[];
    }
  }
  flags1:number;
  flags2:number;
  c14:number;
  c1:string;  c2:string;  c3:string;  c4:string; c5:number; c6:number;
c7:string;c10:string[];c11:string[];
exflag:number;
  mySamples:Sample[]=[];
  allSamples;
sample:string;
nizOznaka:string[]=[];
nizQr:string[]=[];
  exSamples:string[]=[];
  emptycase:string[]=['sda','sad','dasda','sad', 's','s','s','s', 's', 's'];
  histo=[ {i:'Skin'}, {i:'Lungs'}, {i:'Heart'},  {i:'Neuropathology'}, {i:'Peripheral nervous system and muscles (PNS)'},
  {i:'Bones, bone marrow and soft tissues (BBMST)'},  {i:'Hematopathology'},  {i:'Liver'},  {i:'GiT'},  {i:'Endocrine'},  {i:'Breast'},
  {i: 'Nephropathology'}, {i:'Urology'}, {i: 'Gynecology'}, {i: 'Head and cervix'}];
caseid:string;
  allCases:Case[];
  last:number;
allct;
hskin:string[]=['Surgical sample', 'For IF'];
hlungs=[{i:'Surgical sample'},{i:'Endoscopic biopsy'}];
hheart=[{i:'Surgical sample'}, {i:'For IF'},{i:'Endoscopic biopsy'}];
hneuropathology=[{i:'Surgical sample'}];
hperi=[];
hbbs=[{i:'Surgical sample'},{i:'Needle biopsy'}];
hhematology=[{i:'Surgical sample'},{i:'Needle bone marrow biopsy'}];
hliver=[{i:'Surgical sample'},{i:'Needle biopsy'}];
hgit=[{i:'Surgical sample'},{i:'Endoscopic biopsy'}];
hendocrine=[{i:'Surgical sample'}];
hbreast=[{i:'Surgical sample'},{i:'Needle biopsy'}];
hnephro=[{i:'Needle biopsy'}, {i:'Needle for IF'}];
hurology=[{i:'Surgical sample'},{i:'Needle biopsy'},{i:'Endoscopic biopsy'}];
hgynecology=[{i:'Surgical sample'}];
hhac=[{i:'Surgical sample'},{i:'Endoscopic biopsy'}];

cskin=[{i:'smear'}, {i:'cytoblock'}];
clungs=[{i:'smear'},{i:'cytoblock'}];
cheart=[{i:'smear'}, {i:'cytoblock'}];
cneuropathology=[{i:'smear'}, {i:'cytoblock'}];
cperi=[];
cbbs=[{i:'smear'},{i:'cytoblock'}];
chematology=[{i:'smear'},{i:'cytoblock'}];
cliver=[{i:'smear'},{i:'cytoblock'}];
cgit=[{i:'smear'},{i:'cytoblock'}];
cendocrine=[{i:'smear'}, {i:'cytoblock'}];
cbreast=[{i:'smear'},{i:'cytoblock'}];
cnephro=[{i:'Iglena biopsija'}];
curology=[{i:'smear'},{i:'cytoblock'}];
cgynecology=[{i:'smear'}, {i:'cytoblock'}];
chac=[{i:'smear'},{i:'cytoblock'}];
f1:number;
s2:string;
brTipa:string;
num:number;
slovo=['A','B','C','D','E','F','G','H','I',
'J','K','L','M','N','O','P','Q','R','S','T',
'U','V','W','X','Y','Z'];

ihc:string[]=['Progesteron','Estrogen', 'Ki 67', 'CK 7', 'CK 20', 'Vimentin'];
ss:string[]=['Masson','Alcian blue', 'Giemsa','Pas', 'Srebro', 'Gomori'];
spec:string[]=[];
ihcsend:string[]=[];
firstch:string;
niz1:number[]=[];
niz2:number[]=[];
popup:number;
sss(){
this.f1=1;
}
plus(){
  this.num=this.num+1;
}
minus(){
  if((this.num-1)>=1)
  this.num=this.num-1;
}
message:string;
message2:string;
closepopup(){
  this.popup=0;
}
dodajs(b)
{
let s=0;
  for (let index = 0; index < this.spec.length; index++) {
    if(this.spec[index]==b)
    {
      this.spec.splice(index,1);
      s=1
    }
  
  }
  if(s==0)
  {
    this.spec.push(b);
  } 
  }
  dodaji(b)
  {
  let s=0;
    for (let index = 0; index < this.ihcsend.length; index++) {
      if(this.ihcsend[index]==b)
      {
        this.ihcsend.splice(index,1);
        s=1
      }
    
    }
    if(s==0)
    {
      this.ihcsend.push(b);
    } 
    }
    choice:string;

print(b){
  if(b.acs!='External block' && b.acs!='External slide'){
  let s="[spspIPMF"+b.caseid+", "+b.slovo+"-"+this.allCases[this.last].firstname+" "+this.allCases[this.last].lastname+"]";
  printBarcode(this.caseid,b.slovo ,s);
  b.print++;
  this.UserService.updateSampleCode(this.caseid,b.slovo,s,b.print).subscribe((resp)=>{

    if(resp['message']=='user')
    {
      this.UserService.getAllSamples().subscribe((data: Sample[])=>{
        this.allSamples=data;})
    }
  });
  }
  else{
    if( b.acs=='External slide'){
    let brhe=b.exbl;
    let n=1
    while(brhe>0)
    {
      let s="[spspIPMF"+b.caseid+", "+b.slovo+"ES"+(this.nizQr.length+1)+" HE"+"-"+this.allCases[this.last].firstname+" "+this.allCases[this.last].lastname+"]";
      this.nizQr.push(s);
      let o=b.slovo+"ES"+(this.nizQr.length+1)+" HE";
      printBarcode(this.caseid,o ,s);
      this.nizOznaka.push(o)
      n+=1;
      brhe--;
    }
    for (let index = 0; index < this.niz1.length; index++) {
      let br1=this.niz1[index]
      let k=1;
      while(br1>0)
      {
        console.log(b.ihc[index])
        
        let s="[spspIPMF"+b.caseid+", "+b.slovo+"ES"+(this.nizQr.length+1)+" "+this.ss[index]+"-"+this.allCases[this.last].firstname+" "+this.allCases[this.last].lastname+"]";
      this.nizQr.push(s);
      let o=b.slovo+"ES"+(this.nizQr.length+1)+" "+this.ss[index];
      printBarcode(this.caseid,o ,s);
      this.nizOznaka.push(o)
      k+=1;
      br1--;
      }
      
    }
    for (let index = 0; index < this.niz2.length; index++) {
      let br1=this.niz2[index]
      let k=1;
      while(br1>0)
      {console.log(b.ihc[index])
        let s="[spspIPMF"+b.caseid+", "+b.slovo+"ES"+(this.nizQr.length+1)+" "+this.ihc[index]+"-"+this.allCases[this.last].firstname+" "+this.allCases[this.last].lastname+"]";
      this.nizQr.push(s);
      let o=b.slovo+"ES"+(this.nizQr.length+1)+" "+this.ihc[index];
      printBarcode(this.caseid,o ,s);
      this.nizOznaka.push(o)
      k+=1;
      br1--;
      }
      
    }
    this.UserService.updateEXSSampleCode(this.caseid,b.slovo,this.nizQr,this.nizOznaka).subscribe((resp)=>{

      if(resp['message']=='user')
      {
        this.UserService.getAllSamples().subscribe((data: Sample[])=>{
          this.allSamples=data;
        this.nizQr=[]
        this.nizOznaka=[];
        })
      }
    });
    }
    else{
      if(b.acs=='External block')
      {
        let brhe=b.exbl;
        let n=1
        while(brhe>0)
        {
          let s="[spspIPMF"+b.caseid+", "+b.slovo+"EB"+(this.nizQr.length+1)+" HE"+"-"+this.allCases[this.last].firstname+" "+this.allCases[this.last].lastname+"]";
          this.nizQr.push(s);
          let o=b.slovo+"EB"+(this.nizQr.length+1)+" HE";
          this.nizOznaka.push(o)
          b.print++;
          printBarcode(this.caseid,o ,s);
          n+=1;
          brhe--;
        }
        for (let index = 0; index < this.niz1.length; index++) {
          let br1=this.niz1[index]
          let k=1;
          while(br1>0)
          {
            let s="[spspIPMF"+b.caseid+", "+b.slovo+"EB"+(this.nizQr.length+1)+" "+this.ss[index]+"-"+this.allCases[this.last].firstname+" "+this.allCases[this.last].lastname+"]";
          this.nizQr.push(s);
          let o=b.slovo+"EB"+(this.nizQr.length+1)+" "+this.ss[index];
          this.nizOznaka.push(o)
          b.print++;
          printBarcode(this.caseid,o ,s);
          k+=1;
          br1--;
          }
          
        }
        for (let index = 0; index < this.niz2.length; index++) {
          let br1=this.niz2[index]
          let k=1;
          while(br1>0)
          {
            let s="[spspIPMF"+b.caseid+", "+b.slovo+"EB"+(this.nizQr.length+1)+" "+this.ihc[index]+"-"+this.allCases[this.last].firstname+" "+this.allCases[this.last].lastname+"]";
          this.nizQr.push(s);
          let o=b.slovo+"EB"+(this.nizQr.length+1)+" "+this.ihc[index];
          this.nizOznaka.push(o)
          b.print++;
          printBarcode(this.caseid,o ,s);
          k+=1;
          br1--;
          }
          
        }
        this.UserService.updateEXSSampleCode(this.caseid,b.slovo,this.nizQr,this.nizOznaka).subscribe((resp)=>{
    
          if(resp['message']=='user')
          {
            this.UserService.getAllSamples().subscribe((data: Sample[])=>{
              this.allSamples=data;
            this.nizQr=[]
            this.nizOznaka=[];
            let s="[spspIPMF"+b.caseid+", "+b.slovo+"EB"+(b.id+1)+"-"+this.allCases[this.last].firstname+" "+this.allCases[this.last].lastname+"]";

            this.UserService.updateSampleCode(this.caseid,b.slovo,s,b.print).subscribe((resp)=>{
          
              if(resp['message']=='user')
              {
                this.UserService.getAllSamples().subscribe((data: Sample[])=>{
                  this.allSamples=data;})
              }
            });
            })
          }
        });
      }
    }
  }
}
prints:number;
flag3:number;
popup2:number;
closepopup2()
{
  this.popup2=0;
}
addsample(){

  if(this.sample==null || this.sample=="" )
  {
    this.flags1=1
  }
  else{this.flags1=0;}
  if(this.s2==null || this.s2=="")
    {this.flags2=1}
  else  
    {this.flags2=0}
  
  if((this.sample=='Histology' || this.sample=='Cytology') && this.s2!=null )
  {
    if(this.s2!='Peripheral nervous system and muscles (PNS)' )
    {
      if(this.brTipa==null ||this.brTipa=="")
      {
        this.popup2=1;
        this.flag3=1;
      }
      else{
        this.flag3=0;
      }
    }
  }
  if(this.flags1==0 && this.flags2==0 && this.flag3==0){
  let id=this.mySamples.length;
  let slovo=this.slovo[id];
  if (this.firstch=="HE")
  this.choice="HE";
  if(this.brTipa!='External slide' && this.brTipa!='External block'){
    if(this.s2=='Peripheral nervous system and muscles (PNS)')
    this.s2='PNS'
    if(this.s2=='Bones, bone marrow and soft tissues (BBMST)')
    this.s2='BBMST'
    if(this.brTipa=='Iglena biopsija kostene srzi (IBKS)')
    this.brTipa='IBKS'
    this.prints=0;
  this.UserService.addSample(this.caseid,this.sample,this.s2,this.brTipa,this.num,id,slovo, this.spec, this.ihcsend,this.prints).subscribe((resp)=>{

    if(resp['message']=='user')
    {this.message='User added'; 
    this.mySamples=[];
    this.sample="";
    this.s2="";
    this.brTipa="";
    this.exflag=2; this.expanded = false; this.expanded2=false;
    this.UserService.getAllSamples().subscribe((data: Sample[])=>{
      this.allSamples=data;
    for (let index = 0; index < this.allSamples.length; index++) {
     
      if(this.caseid==this.allSamples[index].caseid)
      {
            
        this.emptycase.pop();
        this.mySamples.push(this.allSamples[index]);
      }
      
    }})
  }
    else{ 
      if (resp['message']=='zauzeto')
      {this.message2='Username is aleready used'; }
      else{
     this.message='User is not added'; }
    }

  })
  }
  else{
    if(this.brTipa=='External slide'){
      if(this.s2=='Peripheral nervous system and muscles (PNS)')
    this.s2='PNS'
    if(this.s2=='Bones, bone marrow and soft tissues (BBMST)')
    this.s2='BBMST'
   // if(this.HEflag==1)
    //this.spec.push('HE');
    for (let index = 0; index < this.niz1.length; index++) {
      if(this.niz1[index]>0)
      this.spec.push(this.ss[index]);
    }
    for (let index = 0; index < this.niz2.length; index++) {
      if(this.niz2[index]>0)
      this.ihcsend.push(this.ihc[index]);
    }
  this.UserService.addSampleSlide(this.caseid,this.sample,this.s2,this.brTipa,this.num,id,slovo, this.choice, this.firstch, this.spec,
    this.ihcsend,this.niz1,this.niz2, this.Exbl).subscribe((resp)=>{

    if(resp['message']=='user')
    {this.message='User added'; this.mySamples=[]; this.sample="";
    this.s2=""; this.brTipa="";this.spec=[];
    this.ihcsend=[];
    this.exflag=2; this.expanded = false; this.expanded2=false;
    this.UserService.getAllSamples().subscribe((data: Sample[])=>{
      this.allSamples=data;
    for (let index = 0; index < this.allSamples.length; index++) {
     
      if(this.caseid==this.allSamples[index].caseid)
      {
            
        this.emptycase.pop();
        this.mySamples.push(this.allSamples[index]);
      }
      
    }})
  
  }
    else{ 
      if (resp['message']=='zauzeto')
      {this.message2='Username is aleready used'; }
      else{
     this.message='User is not added'; }
    }

  })
}
else{
  if(this.brTipa=='External block')
  {
    if(this.s2=='Peripheral nervous system and muscles (PNS)')
    this.s2='PNS'
    if(this.s2=='Bones, bone marrow and soft tissues (BBMST)')
    this.s2='BBMST'
   
   // this.spec.push('HE');
    //if(this.HEflag==1)
    //this.spec.push('HE');
    for (let index = 0; index < this.niz1.length; index++) {
      if(this.niz1[index]>0)
      this.spec.push(this.ss[index]);
    }
    for (let index = 0; index < this.niz2.length; index++) {
      if(this.niz2[index]>0)
      this.ihcsend.push(this.ihc[index]);
    }
    this.UserService.addSampleBlock(this.caseid,this.sample,this.s2,this.brTipa,this.num,id,slovo, this.Exbl, this.spec, this.ihcsend,this.niz1,this.niz2).subscribe((resp)=>{

      if(resp['message']=='user')
      {this.message='User added';
      this.mySamples=[];  this.sample="";
      this.s2=""; this.brTipa="";  this.expanded = false; this.expanded2=false;
      this.spec=[];
      this.ihcsend=[];
      
      this.exflag=2;
      this.UserService.getAllSamples().subscribe((data: Sample[])=>{
        this.allSamples=data;
      for (let index = 0; index < this.allSamples.length; index++) {
       
        if(this.caseid==this.allSamples[index].caseid)
        {
              
          this.emptycase.pop();
          this.mySamples.push(this.allSamples[index]);
        }
        
      }})
    
    
    }
      else{ 
        if (resp['message']=='zauzeto')
        {this.message2='Username is aleready used'; }
        else{
       this.message='User is not added'; }
      }
  
    })


  }
}

}}
}
delete(b)
{ let c=b.caseid;
  this.UserService.deleteSample(b.id, b.caseid).subscribe((resp)=>{

    if(resp['message']=='deleted')
    {this.message='User added'; 

    this.UserService.changeID(c).subscribe((resp)=>
      {
      if(resp['message']=='user'){
      this.UserService.changeslovo(c).subscribe((resp)=>{
        
        if(resp['message']=='user'){
  
          this.mySamples=[]; 
      this.UserService.getAllSamples().subscribe((data: Sample[])=>{
        this.allSamples=data;
      for (let index = 0; index < this.allSamples.length; index++) {
       
        if(this.caseid==this.allSamples[index].caseid)
        {
              
          this.emptycase.pop();
          this.mySamples.push(this.allSamples[index]);
        }
        
      }})}
      })
                                }
     }
    )
    }
  
   
    else{ 
      if (resp['message']=='zauzeto')
      {this.message2='Username is aleready used'; }
      else{
     this.message='User is not added'; }
    }

  })
}
poc(){

  for (let index = 0; index < this.mySamples.length; index++) {
    
    this.print(this.mySamples[index]);
  }
 
}
poc2(){
  this.UserService.getAllSamples().subscribe((data: Sample[])=>{
    this.allSamples=data;
let mys:Sample[]=[];

for (let index = 0; index < this.allSamples.length; index++) {
  if(this.caseid==this.allSamples[index].caseid)
  {
    mys.push(this.allSamples[index])

  }
  
}

let nf=0;
for (let index = 0; index < mys.length; index++) {
  if(mys[index].print==0)
  {
    nf=1
  }
  
}

if(nf==0)
 { this.router.navigate(['/dashsecond']);}
else{
this.popup=1;
}
})
}
cl(){
  this.router.navigate(['/clacs']);

}


expanded:boolean; 

showCheckboxes() {
  var checkboxes = document.getElementById("checkboxes");
  if (!this.expanded) {
    checkboxes.style.display = "block";
    this.expanded = true;
  } else {
    checkboxes.style.display = "none";
    this.expanded = false;
  }
}
expanded2:boolean; 
showCheckboxes2() {
  var checkboxes = document.getElementById("checkboxes1");
  if (!this.expanded2) {
    checkboxes.style.display = "block";
    this.expanded2 = true;
  } else {
    checkboxes.style.display = "none";
    this.expanded2 = false;
  }
}

Exbl:number;
HEflag:number;
addHe(){
if(this.HEflag==0)
this.HEflag=1;
else
this.HEflag=0;
}
Addpl(){
  if(this.Exbl<9)
  this.Exbl=this.Exbl+1;
}
Subpl(){
  if(this.brTipa=='External block'){
  if(this.Exbl-1>=1)
  {
    this.Exbl=this.Exbl-1;
  }
}
if(this.brTipa=='External slide')
{
  if(this.Exbl-1>=0)
  {
    this.Exbl=this.Exbl-1;
  }
}
}
}