import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { min, timestamp } from 'rxjs';
import { Processor } from '../models/processors';
import { Protocol } from '../models/protocol';
import { User } from '../models/user';
import { UserService } from '../user.service';
import { Stopwatch } from "ts-stopwatch";
import { ZXingScannerComponent } from '@zxing/ngx-scanner';
import { Result } from '@zxing/library';
import { BarcodeFormat } from '@zxing/library';
import { Protocol2 } from '../models/protocol2';
import { Stainer } from '../models/stainer';
import { Process } from '../models/process';
import { ProcessStaining } from '../models/processstaining';
@Component({
  selector: 'app-dashsix',
  templateUrl: './dashsix.component.html',
  styleUrls: ['./dashsix.component.css']
})
export class DashsixComponent implements OnInit {

  constructor(private router: Router, private UserService: UserService) { }

  ngOnInit(): void {
    let user1 = JSON.parse(sessionStorage.getItem("laborant")) as User; 
    this.me=user1;
    this.UserService.getAllStainingProcess().subscribe((data: ProcessStaining[])=>{
      this.allProcess=data;
      
      for (let index = 0; index < this.allProcess.length; index++) {
        if(this.allProcess[index].status==0)
        {
          this.unfProcess.push(this.allProcess[index]);
          this.nizflags.push(0);
          let minuti=new Date().getMinutes();
          let sati=new Date().getHours();
          let zbirmin=minuti+sati*60;
          let dan=new Date().getDate();
          let mesec=new Date().getMonth()+1;
          let godina=new Date().getFullYear();
          if(this.allProcess[index].posmonth==mesec)
          {
            if(this.allProcess[index].posday==dan)
            {
              let zbir2=this.allProcess[index].poshours*60+this.allProcess[index].posminutes
              if(zbir2>zbirmin)
              {
                let x=zbir2-zbirmin
                this.nizmin.push(x);
                this.nizsek.push(0)
              }
              else{
                this.nizsek.push(0)
                this.nizmin.push(0)
              }
            }
            else{
              if(dan>this.allProcess[index].posday)
              {
                this.nizsek.push(0)
                this.nizmin.push(0)
              }
              else{
                if(dan<this.allProcess[index].posday)
                {
                  let x=60-minuti;
                  let y=this.allProcess[index].posminutes+x;
                  this.nizmin.push(y);
                  this.nizsek.push(0);
                }
              }
            }
          }
         
          this.message1.push("");
       
        }
        
      }
      this.pr=80;
      for (let index = 0; index < this.unfProcess.length; index++) {
        
       // this.nizt.push( new Timer(index, this.nizsek[index], this.nizmin[index]));
       this.st2(index);
      }
      let intervalId = setInterval(() => {
        this.pr--;
            if(this.pr==0)
            {
              clearInterval(intervalId)
            }
          
        
       
    
        
    }, 1000)
    })
  }
nizt:Timer[]=[];
pr:number;
st2(index){
  let intervalId = setInterval(() => {
    if( this.nizmin[index]>0 && this.nizsek[index]==0)
    {
      this.nizmin[index]--;
      this.nizsek[index]=59;
    }else
    {
      if( this.nizmin[index]>=0 && this.nizsek[index]>0)
      {
        this.nizsek[index]--;
      }
      else{
        if( this.nizmin[index]==0 && this.nizsek[index]==0)
        {
          clearInterval(intervalId)
        }
      }
    }
   

    
}, 100)
}
stopwatch()
{
  let dan=new Date().getDate();
  let mesec=new Date().getMonth()+1;
  let godina=new Date().getFullYear();
  for (let index = 0; index < this.unfProcess.length; index++) {

    let sati=new Date().getHours();
    let minuti=new Date().getMinutes();
    if(this.nizmin[index]==0 && this.nizsek[index]==0 )
      {
       
      }
      else{
        
        if(this.nizsek[index]>0)
        {
          this.nizsek[index]--;
        }
        else{
          this.nizmin[index]--;
          this.nizsek[index]=59;
        }
        
      }
    
  }
}
  logout(){
    sessionStorage.clear();
    this.router.navigate(['/login-staininghe']);
  }
  me:User;
  allStainers:Stainer[];
  nizflags:number[]=[];
  message:string;
  allProcess:ProcessStaining[];
  unfProcess:ProcessStaining[]=[];
  message1:string[]=[];
  nizmin:number[]=[];
  nizsek:number[]=[];


  addnewp(){

    this.UserService.getAllStainers().subscribe((data: Stainer[])=>{
      this.allStainers=data;
    let ukupno=0;
      for (let index = 0; index < this.allStainers.length; index++) {
       
        ukupno=ukupno+this.allStainers[index].num;
        
      }
      let slobodno=0;
      for (let index = 0; index < this.allStainers.length; index++) {
       
        slobodno=slobodno+this.allStainers[index].free;
        
      }
    
    if(slobodno==0)
    {
      this.message="All stainers are reserved "
    }
    else{
      this.router.navigate(['/staining']);

    }
    })



  }
  popup:number;
  doneprocessing(a,i){
      
    let sati=new Date().getHours();
    let minuti=new Date().getMinutes();

let dan=new Date().getDate();
let mesec=new Date().getMonth()+1;
let godina=new Date().getFullYear();

if(a.posyear<= godina)
{
  if (godina>a.posyear)
  {
    this.done(a.bascet,sati,minuti,a.stainer)
  }
  else{
    if(mesec>=a.posmonth)
    {
      if(mesec> a.posmonth)
      {
        this.done(a.bascet,sati,minuti,a.stainer)
      }
      else{
      if( dan>=a.posday)
      {
        if(dan>a.posday)
        {
          this.done(a.bascet,sati,minuti,a.stainer)
        }
        else{
          if (sati>=a.poshours)
          {
            if(sati>a.poshours)
            {
              this.done(a.bascet,sati,minuti,a.stainer)
            }
            else{
              if(minuti>=a.posminutes)
              {
                if(minuti>a.posminutes)
                {
                  this.done(a.bascet,sati,minuti,a.stainer)
                }
                else{
                  this.popup=1;
                //  alert("Process is not over yet")
                }
                } else{this.popup=1;
                   //alert("Process is not over yet")
                  }
              }
             
            }
            else{ this.popup=1;
             // alert("Process is not over yet")
            }
          }
          
        }
        else{ this.popup=1;
          //alert("Process is not over yet")
      }
      }
      
      
      }   else{ 
        this.popup=1;
        //alert("Process is not over yet")
      }
    }
   

  

  
}
else{ this.popup=1;
  //alert("Process is not over yet")
}



  }
  close()
  {
    this.popup=0;
  }
  done(bascet,sati,minuti, stainer){
    this.UserService.endSProcess(bascet,sati,minuti).subscribe((resp)=>{
    
      if(resp['message']=='user')
      { 
        
        this.UserService.updateStainer(stainer).subscribe((resp)=>{
        if(resp['message']=='user'){
          this.unfProcess=[];
          this.message1=[];
          this.nizflags=[];
          this.UserService.getAllStainingProcess().subscribe((data: ProcessStaining[])=>{
            this.allProcess=data;
            
            for (let index = 0; index < this.allProcess.length; index++) {
              if(this.allProcess[index].status==0)
              {
                this.unfProcess.push(this.allProcess[index]);
                this.nizflags.push(0);
                this.message1.push("");
              }
              
            }
          })
       
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
}
class Timer {
  constructor(public id,public sec,public min) {

      let intervalId = setInterval(() => {
          if(this.min>0 && this.sec==0)
          {
            this.min--;
            this.sec=59;
          }else
          {
            if(this.min>=0 && this.sec>0)
            {
              this.sec--;
            }
            else{
              if(this.min==0 && this.sec==0)
              {
                clearInterval(intervalId)
              }
            }
          }
         
      
          
      }, 100)
  }
}