import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Process } from '../models/process';
import { Processor } from '../models/processors';
import { User } from '../models/user';
import { UserService } from '../user.service';
@Component({
  selector: 'app-dashboardfourth',
  templateUrl: './dashboardfourth.component.html',
  styleUrls: ['./dashboardfourth.component.css']
})
export class DashboardfourthComponent implements OnInit {

  constructor(private router: Router, private UserService: UserService) { }

  ngOnInit(): void {

    let user1 = JSON.parse(sessionStorage.getItem("laborant")) as User; 
    this.me=user1;
    this.UserService.getAllProcess().subscribe((data: Process[])=>{
      this.allProcess=data;
      
      
      for (let index = 0; index < this.allProcess.length; index++) {
        if(this.allProcess[index].status==0)
        {
          this.unfProcess.push(this.allProcess[index]);
        }
        
      }
    })
  }
  logout(){
    sessionStorage.clear();
    this.router.navigate(['/login-processing']);
  }

  allProcessors:Processor[];
  me:User;
  message:string;
  allProcess:Process[];
  unfProcess:Process[]=[];
  addnewp(){

    this.UserService.getAllProcessors().subscribe((data: Processor[])=>{
      this.allProcessors=data;
    let ukupno=0;
      for (let index = 0; index < this.allProcessors.length; index++) {
       
        ukupno=ukupno+this.allProcessors[index].num;
        
      }
      let slobodno=0;
      for (let index = 0; index < this.allProcessors.length; index++) {
       
        slobodno=slobodno+this.allProcessors[index].free;
        
      }
    
    if(slobodno==0)
    {
      this.message="All processors are reserved "
    }
    else{
      this.router.navigate(['/dashfourproc']);

    }
    })



  }
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
        this.done(a.bascet,sati,minuti,a.processor)
      }
      else{
        if(mesec>=a.posmonth)
        {
          if(mesec> a.posmonth)
          {
            this.done(a.bascet,sati,minuti,a.processor)
          }
          else{
          if( dan>=a.posday)
          {
            if(dan>a.posday)
            {
              this.done(a.bascet,sati,minuti,a.processor)
            }
            else{
              if (sati>=a.poshours)
              {
                if(sati>a.poshours)
                {
                  this.done(a.bascet,sati,minuti,a.processor)
                }
                else{
                  if(minuti>=a.posminutes)
                  {
                    if(minuti>a.posminutes)
                    {
                      this.done(a.bascet,sati,minuti,a.processor)
                    }
                    else{
                      this.popup=1;}
                    } else{     this.popup=1;}
                  }
                 
                }
                else{     this.popup=1;}
              }
              
            }
            else{     this.popup=1;}
          }
          
          
          }   else{     this.popup=1;}
        }
       
    
      
    
      
    }
    else{     this.popup=1;}

  }
  popup:number;
  done(bascet, sati,minuti,processor)
  {
    let dan=new Date().getDate();
    let mesec=new Date().getMonth()+1;
    let godina=new Date().getFullYear();
    this.UserService.endProcess(bascet,sati,minuti, dan, mesec, godina,this.me.username).subscribe((resp)=>{
    
      if(resp['message']=='user')
      { this.UserService.updateProcessor(processor).subscribe((resp)=>{
        if(resp['message']=='user'){
          this.unfProcess=[];
          this.UserService.getAllProcess().subscribe((data: Process[])=>{
            this.allProcess=data;
            
            for (let index = 0; index < this.allProcess.length; index++) {
              if(this.allProcess[index].status==0)
              {
                this.unfProcess.push(this.allProcess[index]);
              }
              
            }
          })
      }});
      }
      else{ 
        if (resp['message']=='zauzeto')
        { }
        else{
        }
      }
  
    })
  }
  close()
  {
    this.popup=0;
  }
}
