import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { Router } from '@angular/router';
import { Case } from '../models/case';
import { Sample } from '../models/sample';
import { User } from '../models/user';
import { UserService } from '../user.service';
@Component({
  selector: 'app-grossnext',
  templateUrl: './grossnext.component.html',
  styleUrls: ['./grossnext.component.css']
})
export class GrossnextComponent implements OnInit {

  constructor(private router: Router, private UserService: UserService) { }

  ngOnInit(): void {

    this.UserService.getAllCases().subscribe((data: Case[])=>{
      this.allCase=data;
      this.znakD=0;
      this.expanded=false;   this.expanded2=false; 
      let user1 = JSON.parse(sessionStorage.getItem("patolog")) as User; 
      this.pojavise1=0;
      this.pojavise2=0;
      this.me=user1;
      this.sem1=0;
      let c = JSON.parse(sessionStorage.getItem("case")) as string; 
      this.case=c;
      this.asistent=JSON.parse(sessionStorage.getItem("asistent")) as string; 
      for (let index = 0; index < this.allCase.length; index++) {
       if(this.case==this.allCase[index].formatcn)
       {
        this.myCase=this.allCase[index];
       }
        }
        this.UserService.getAllSamples().subscribe((data: Sample[])=>{
          this.allSample=data;

          for (let index = 0; index < this.allSample.length; index++) {
       
            if(this.myCase.formatcn==this.allSample[index].caseid)
            {
              
              this.c1=this.allSample[index].caseid;
              this.c2=this.allSample[index].casetype;
              this.c3=this.allSample[index].sampletype;
              this.c4=this.allSample[index].acs;
              this.c5=this.allSample[index].num;
              this.c6=this.allSample[index].id;
              this.c7=this.allSample[index].slovo;
              this.c10=this.allSample[index].spec;
              this.c11=this.allSample[index].ihc;
              this.c12=this.allSample[index].choice;
              this.c13=this.allSample[index].firstch;
              this.c14=this.allSample[index].exbl;
              this.c15=this.allSample[index].code;
              let c16=this.allSample[index].niz1;
              let c17=this.allSample[index].niz2;
              if(this.c4 =='External block' || this.c4=='External slide'){}else{   this.finish.push(0);
              this.mySamples.push({caseid: this.c1, casetype:this.c2,sampletype:this.c3, acs:this.c4, num:this.c5, id:this.c6 ,slovo:this.c7
              ,spec:this.c10 ,ihc:this.c11 ,choice:this.c12, firstch:this.c13, exbl:this.c14, code:this.c15, niz1:c16,niz2:c17});
              this.lamp.push(0);}
            }
            
          }
          for (let index = 0; index < this.ss.length; index++) {
        
            this.niz1.push(0);
          }
          for (let index = 0; index < this.ihc.length; index++) {
        
            this.niz2.push(0);
          }
          this.start=0;
          console.log(this.mySamples)
        })

    })
  }
  c1:string;
  c2:string;
  c3:string;
  c4:string;
  c5:number;
  c6:number;
  c7:string;
  c10:string[];
  c11:string[];
  c12:string;
  c13:string;
  c14:number;
  finish:number[]=[];
  c15:string;
  asistent:string;
  niz1:number[]=[];
  logout(){
    sessionStorage.clear();
    this.router.navigate(['/login-grossing']);
  }
  allCase:Case[];
  allSample:Sample[];
  case:string;
  me:User;
  myCase:Case;
  mySamples:Sample[]=[];
  lamp:number[]=[];
  sem1:number;
  spec:string[]=[];
  ihcsend:string[]=[];
  start:number;
  uz:string;
  ihc:string[]=['PROGESTERON','ESTROGEN', 'Ki 67', 'CK 7', 'CK 20', 'VIMENTIN'];
  ss:string[]=['MASSON','ALCIAN BLUE', 'GIEMSA','PAS', 'SREBRO', 'GOMORI'];
  brK:number=1;
  brP:number=1;
  kasetice:string[]=[];
  plocice:number[]=[];
  niz:string[][]=[];
  niz2:number[]=[];
  niz3:[]=[];
  znakD:number;
  comm:string[]=[];
  printano:number[]=[];
  code:string;
  brk2:number=1;
  qri;
  print(i,r){

    {this.printano[i]++;
     // Math.floor(Math.random() * 1000000);
     // this.code=(Math.floor(Math.random() * 1000000)).toString();
      /*let item = [{
        'Case ID': this.c1,
        'Sample': this.c1+' '+this.mySamples[i].slovo,
        'Cassette':r
       
      }]*/
      let item ="[ CaseID: "+this.c1+", Cassette: "+r+"]"
      let qrInfo =item;
      this.code=qrInfo;
      this.qri=qrInfo;
      
    this.UserService.printCassette(this.myCase.formatcn,
      this.uz,this.kasetice[i],this.printano[i],this.code,  this.me.username, this.asistent).subscribe((resp)=>{

      if(resp['message']=='user added')
      {

      }
      else{

      }
  
    })
    }
   
  }
  pkas(){
    this.brK=this.brK+1;
    this.brk2=this.brk2+1;
    let n=this.uz+this.brk2;
    this.kasetice.push(n);
    this.plocice.push(1);
    let n2=n+'.'+'1';
    let ds=[[n][n2]];
    this.niz.push(ds);
    this.comm.push("");
    this.printano.push(0);
  }
  dkas(r,i)
  {
    if(this.brK>1){
      if(this.printano[i]==0){
        
    for (let index = 0; index < this.kasetice.length; index++) {
     if(this.kasetice[index]==r)
     {
      this.kasetice.splice(index,1);
      this.brK--;
      this.plocice.splice(index, 1);
      this.comm.splice(index,1);
      this.printano.splice(index,1);
     }
      
    }
  
  }
    else{
      for (let index = 0; index < this.kasetice.length; index++) {
        if(this.kasetice[index]==r)
        {
         this.kasetice.splice(index,1);
         this.brK--;
         this.plocice.splice(index, 1);
         this.comm.splice(index,1);
         this.printano.splice(index,1);
        }
         
       }
    }
    
  }
  }
   clan:number;
  plavi(s, i)
  {
    if (this.sem1==0){
      if(this.finish[i]==1)
      {this.message="Already added";}
      else{this.message='';
     this.lamp[i]=1;
     this.clan=i;
     this.znakD=1;
    this.sem1=1;
      this.uz=s.slovo;
      this.brK=1
      let n=this.uz+this.brK;
      this.kasetice.push(n);
      let n2=n+'.'+this.brP;
      this.plocice.push(1);
    //  this.niz.push(this.kasetice);
    //  this.niz[0].push(n2);
    //this.niz[0].push(n2);
    let ds=[[n][n2]];
    this.niz.push(ds);
    this.comm.push("");
    this.start=0;
    this.brk2=1;
    this.printano.push(0);
    for (let index = 0; index < this.niz1.length; index++) {
      this.niz1[index]=0;
      
    }
    for (let index = 0; index < this.niz2.length; index++) {
      this.niz2[index]=0;
      
    }


    }}
  }
oduzmip(r)
{
  let s;
    for (let index = 0; index < this.kasetice.length; index++) {
      if(this.kasetice[index]==r)
      {
        s=index;
      }
      
    }
    if ((this.plocice[s]-1)>=1)
    this.plocice[s]--;
}
  dodp(r){
let s;
    for (let index = 0; index < this.kasetice.length; index++) {
      if(this.kasetice[index]==r)
      {
        s=index;
      }
      
    }
    this.plocice[s]++;
    let n=r+'.'+this.plocice[s];
    this.niz[s].push(n);

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
    message:string;
    message2:string;
    exblpovecaj(i)
    {
      this.niz1[i]++;
    }
    exblumanji(i)
  {
    if((this.niz1[i]-1)>=0)
    this.niz1[i]--;
  }
  exblpovecaj2(i)
  {
    this.niz2[i]++;
  }
  exblumanji2(i)
  {
    if((this.niz2[i]-1)>=0)
    this.niz2[i]--;
  }
    addW(){

      //this.brk,this.spec,this.ihcsend,caseid,slovo
      if(this.printano[0]>0){
      for (let index = 0; index < this.niz1.length; index++) {
        if(this.niz1[index]>0)
        this.spec.push(this.ss[index]);
      }
      for (let index = 0; index < this.niz2.length; index++) {
        if(this.niz2[index]>0)
        this.ihcsend.push(this.ihc[index]);
      }

      this.UserService.addCS(this.myCase.formatcn,this.brK,this.spec,this.ihcsend,
        this.uz,this.plocice[0], this.comm[this.start], this.me.username, this.asistent,this.kasetice[0],this.niz1,this.niz2).subscribe((resp)=>{

        if(resp['message']=='user added')
        {this.message=''; 
        //this.sem1=0;
          
        // this.brK=1;this.brP=1; //this.kasetice=[];
        this.plocice.splice(0,1); 
        this.kasetice.splice(0,1); 
        this.niz.splice(0,1);
        this.printano.splice(0,1);
        this.comm.splice(0,1);
         this.ihcsend=[]; this.spec=[];
         if(this.kasetice.length==0)
         {this.finish[this.clan]=1; 
         this.sem1=0;
         this.lamp[this.clan]=0;
         this.znakD=0;}
         this.start=this.start+1;
        for (let index = 0; index < this.niz1.length; index++) {
          this.niz1[index]=0;
          
        }
        for (let index = 0; index < this.niz2.length; index++) {
          this.niz2[index]=0;
          
        }
        var checkboxes = document.getElementById("checkboxes1");
        checkboxes.style.display = "none";
    this.expanded2 = false;
    var checkboxes = document.getElementById("checkboxes");
    checkboxes.style.display = "none";
    this.expanded = false;
    }
        else{ 
          if (resp['message']=='zauzeto')
          {this.message='Already added'; 
          this.sem1=0; this.lamp[this.clan]=0; this.znakD=0; this.brK=1;this.brP=1; this.kasetice=[];
          this.plocice=[]; this.niz=[]; this.ihcsend=[]; this.spec=[];this.comm=[];
        }
          else{
         this.message=' is not added'; }
        }
    
      })}
      else{
        this.message="You have to print" + this.kasetice[0];
      }
    }

poc(){
  this.router.navigate(['grossfirst']);
}
pojavise1:number;
pojavise2:number;
show(){
if (this.pojavise1==0)
this.pojavise1=1;
else
this.pojavise1=0;
}

show2()
{
  if (this.pojavise2==0)
this.pojavise2=1;
else
this.pojavise2=0;
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

}
