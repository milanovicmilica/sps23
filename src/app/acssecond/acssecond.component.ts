import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Case } from '../models/case';
import { Sample } from '../models/sample';
import { UserService } from '../user.service';
@Component({
  selector: 'app-acssecond',
  templateUrl: './acssecond.component.html',
  styleUrls: ['./acssecond.component.css']
})
export class AcssecondComponent implements OnInit {

  constructor(private router: Router, private UserService: UserService) { }

  ngOnInit(): void {
    this.UserService.getAllCases().subscribe((data: Case[])=>{
      this.allCases=data;
       this.last=this.allCases.length-1;
       this.HEflag=0;
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
          this.emptycase.pop();
          this.mySamples.push({caseid: this.c1, casetype:this.c2,sampletype:this.c3, acs:this.c4, num:this.c5,
             id:this.c6 ,slovo:this.c7, spec:this.c10,ihc:this.c11, choice:this.c12, firstch:this.c13, exbl:this.c14, code:this.c15 , niz1:c16, 
            niz2:c17});
        }
        
      }
      for (let index = 0; index < this.ss.length; index++) {
        
        this.niz1.push(0);
      }
      for (let index = 0; index < this.ihc.length; index++) {
        
        this.niz2.push(0);
      }
      })
    })
      
  }
  logout(){
    sessionStorage.clear();
    this.router.navigate(['']);
  }
c12:string;c13:string; c15:string;
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
    this.niz1[i]++;
  }
  exblpovecaj2(i)
  {
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
    this.exflag=0;this.Exbl=1;
    for (let index = 0; index < this.niz1.length; index++) {
      this.niz1[index]=0;
      
    }
    for (let index = 0; index < this.niz2.length; index++) {
      this.niz2[index]=0;
      
    }
  }
  c14:number;
  c1:string;  c2:string;  c3:string;  c4:string; c5:number; c6:number;
c7:string;c10:string[];c11:string[];
exflag:number;
  mySamples:Sample[]=[];
  allSamples;
sample:string;
  exSamples:string[]=[];
  emptycase:string[]=['sda','sad','dasda','sad', 's','s','s','s', 's', 's'];
  histo=[ {i:'Skin'}, {i:'Lungs'}, {i:'Heart'},  {i:'Neuropathology'}, {i:'Peripheral nervous system and muscles (PNS)'},
  {i:'Bones, bone marrow and soft tissues (BBMST)'},  {i:'Hematopathology'},  {i:'Liver'},  {i:'GiT'},  {i:'Endocrine'},  {i:'Breast'},
  {i: 'Nephropathology'}, {i:'Urology'}, {i: 'Gynecology'}, {i: 'Head and cervix'}];
caseid:string;
  allCases:Case[];
  last:number;
allct;
hskin:string[]=['Operativni uzorak', 'svez za IF'];
hlungs=[{i:'Operativni uzorak'},{i:'Endoskopska biopsija'}];
hheart=[{i:'Operativni uzorak'}, {i:'svez za IF'},{i:'Endoskopska biopsija'}];
hneuropathology=[{i:'Operativni uzorak'}];
hperi=[];
hbbs=[{i:'Operativni uzorak'},{i:'Iglena biopsija'}];
hhematology=[{i:'Operativni uzorak'},{i:'Iglena biopsija kostene srzi (IBKS)'}];
hliver=[{i:'Operativni uzorak'},{i:'Iglena biopsija'}];
hgit=[{i:'Operativni uzorak'},{i:'Endoskopska biopsija'}];
hendocrine=[{i:'Operativni uzorak'}];
hbreast=[{i:'Operativni uzorak'},{i:'Iglena biopsija'}];
hnephro=[{i:'Iglena biopsija'}, {i:'svez iglena za IF'}];
hurology=[{i:'Operativni uzorak'},{i:'Iglena biopsija'},{i:'Endoskopska biopsija'}];
hgynecology=[{i:'Operativni uzorak'}];
hhac=[{i:'Operativni uzorak'},{i:'Endoskopska biopsija'}];

cskin=[{i:'razmaz'}, {i:'citoblok'}];
clungs=[{i:'razmaz'},{i:'citoblok'}];
cheart=[{i:'razmaz'}, {i:'citoblok'}];
cneuropathology=[{i:'razmaz'}, {i:'citoblok'}];
cperi=[];
cbbs=[{i:'razmaz'},{i:'citoblok'}];
chematology=[{i:'razmaz'},{i:'citoblok'}];
cliver=[{i:'razmaz'},{i:'citoblok'}];
cgit=[{i:'razmaz'},{i:'citoblok'}];
cendocrine=[{i:'razmaz'}, {i:'citoblok'}];
cbreast=[{i:'razmaz'},{i:'citoblok'}];
cnephro=[{i:'Iglena biopsija'}];
curology=[{i:'razmaz'},{i:'citoblok'}];
cgynecology=[{i:'razmaz'}, {i:'citoblok'}];
chac=[{i:'razmaz'},{i:'citoblok'}];
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
addsample(){

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
  this.UserService.addSample(this.caseid,this.sample,this.s2,this.brTipa,this.num,id,slovo, this.spec, this.ihcsend).subscribe((resp)=>{

    if(resp['message']=='user')
    {this.message='User added'; 
    window.location.reload();}
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
    {this.message='User added'; 
    window.location.reload();}
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
      window.location.reload();}
      else{ 
        if (resp['message']=='zauzeto')
        {this.message2='Username is aleready used'; }
        else{
       this.message='User is not added'; }
      }
  
    })


  }
}

}
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
  
        window.location.reload();}
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
  this.router.navigate(['/dashsecond']);
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
  this.Exbl=this.Exbl+1;
}
Subpl(){
  if(this.Exbl-1>=1)
  {
    this.Exbl=this.Exbl-1;
  }
}
}