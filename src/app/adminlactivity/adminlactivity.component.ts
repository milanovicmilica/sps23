
import { Component, OnInit ,destroyPlatform,ViewChild} from '@angular/core';


import { Router } from '@angular/router';
import { ChartConfiguration, LineController, LineElement, PointElement, LinearScale, Title} from 'chart.js' 
import Chart from 'chart.js/auto'
import { Case } from '../models/case';
import { Coverslipping } from '../models/coverslipping';
import { Embedding } from '../models/embedding';
import { Cs } from '../models/infocs';
import { Process } from '../models/process';
import { ProcessStaining } from '../models/processstaining';
import { Sectioning } from '../models/sectioning';
import { Sendout } from '../models/sendout';
import { User } from '../models/user';
import { UserService } from '../user.service';
@Component({
  selector: 'app-adminlactivity',
  templateUrl: './adminlactivity.component.html',
  styleUrls: ['./adminlactivity.component.css']
})
export class AdminlactivityComponent implements OnInit {

  constructor(private router: Router, private UserService: UserService) { }
  canvas: any;
  ctx: any;
  canvas1: any;
  ctx1: any;
  canvas2: any;
  ctx2: any;
  @ViewChild('mychart') mychart:any;
  @ViewChild('mychart1') mychart1:any;
  @ViewChild('mychart2') mychart2:any;
  ngOnInit(): void {
    let date=new Date();
    let dan=new Date().getDate();
    let mesec=new Date().getMonth()+1;
    let godina=new Date().getFullYear();
    this.curryear=date.getFullYear();
    for (let index = 2000; index <= godina; index++) {
        this.years.push(index);
    }
    this.UserService.getAllUsers().subscribe((data: User[])=>{
      this.allUsers=data;
     
    for (let index = 0; index < this.allUsers.length; index++) {
     if(this.allUsers[index].type==1)
      {
        this.laborants.push(this.allUsers[index])
      }
    }
    
for (let index = 0; index < this.laborants.length; index++) {
  let i=this.laborants[index].firstname+' '+this.laborants[index].lastname;
  this.nazivil.push(i);
this.nizCoverslipping.push(0)
this.nizEmbedding.push(0)
this.nizProcessing.push(0)
this.nizSectioning.push(0)
this.nizSendOut.push(0)
this.nizStaining.push(0)
  
}
    this.UserService.getAllSectioning().subscribe((data: Sectioning[])=>{
      this.allSectionings=data;
      this.UserService.getAllEmb().subscribe((data: Embedding[])=>{
        this.allEmb=data;
        this.UserService.getAllSendout().subscribe((data: Sendout[])=>{
          this.allSendOut=data;
          this.UserService.getAllCover().subscribe((data: Coverslipping[])=>{
            this.allCover=data;
            this.UserService.getAllStainingProcess().subscribe((data: ProcessStaining[])=>{
              this.allShe=data;
              this.UserService.getAllProcess().subscribe((data: Process[])=>{
                this.allProcessing=data;


                   
                    for (let index = 0; index < this.allSectionings.length; index++) {
                     if(this.allSectionings[index].year==this.curryear)
                     {
                      for (let index2 = 0; index2 < this.laborants.length; index2++) {
                        if(this.allSectionings[index].lab==this.laborants[index2].username)
                        {
                          this.nizSectioning[index2]++;
                      }
                     }
                     }}
                    
                     for (let index = 0; index < this.nizSectioning.length; index++) {
                      
                      this.nizSectioning[index]=Number(((this.nizSectioning[index]/this.allSectionings.length)*100).toFixed(2));
                     }
                    for (let index = 0; index < this.allEmb.length; index++) {
                      if(this.allEmb[index].year==this.curryear )
                      {
                        for (let index2 = 0; index2 < this.laborants.length; index2++) {
                          if(this.allEmb[index].lab==this.laborants[index2].username)
                          {
                            this.nizEmbedding[index2]++;
                        }
                       }
                      }
                      }
                     
                      for (let index = 0; index < this.nizEmbedding.length; index++) {
                      
                        this.nizEmbedding[index]=Number(((this.nizEmbedding[index]/this.allEmb.length)*100).toFixed(2));
                       }

                    for (let index = 0; index < this.allSendOut.length; index++) {
                    if(this.allSendOut[index].godina==this.curryear)
                    {
                      for (let index2 = 0; index2 < this.laborants.length; index2++) {
                        if(this.allSendOut[index].laborant==this.laborants[index2].username)
                        {
                          this.nizSendOut[index2]++;
                      }
                     }
                    }
                    }
                    for (let index = 0; index < this.nizSendOut.length; index++) {
                      
                      this.nizSendOut[index]=Number(((this.nizSendOut[index]/this.allSendOut.length)*100).toFixed(2));
                     }

                  for (let index = 0; index < this.allCover.length; index++) {
                      if(this.allCover[index].year==this.curryear )
                      {
                        for (let index2 = 0; index2 < this.laborants.length; index2++) {
                          if(this.allCover[index].laborant==this.laborants[index2].username)
                          {
                            this.nizCoverslipping[index2]++;
                        }
                       }
                      }
                  }   
                  
                  for (let index = 0; index < this.nizCoverslipping.length; index++) {
                      
                    this.nizCoverslipping[index]=Number(((this.nizCoverslipping[index]/this.allCover.length)*100).toFixed(2));
                   }
                   
                  for (let index = 0; index < this.allShe.length; index++) {
                      if(this.allShe[index].endyear==this.curryear )
                      {
                        for (let index2 = 0; index2 < this.laborants.length; index2++) {
                          if(this.allShe[index].lab==this.laborants[index2].username)
                          {
                            this.nizStaining[index2]++;
                        }
                       }
                      }
                  }
                
                  for (let index = 0; index < this.nizStaining.length; index++) {
                      
                    this.nizStaining[index]=Number(((this.nizStaining[index]/this.allShe.length)*100).toFixed(2));
                   }
                  
                  for (let index = 0; index < this.allProcessing.length; index++) {
                      if(this.allProcessing[index].endyear==this.curryear )
                      {
                        for (let index2 = 0; index2 < this.laborants.length; index2++) {
                          if(this.allProcessing[index].lab==this.laborants[index2].username)
                          {
                            this.nizProcessing[index2]++;
                        }
                       }
                      }
                    }
                    
                    for (let index = 0; index < this.nizProcessing.length; index++) {
                      
                      this.nizProcessing[index]=Number(((this.nizProcessing[index]/this.allProcessing.length)*100).toFixed(2));
                     }
                  
                  for (let index = 0; index < this.nizSectioning.length; index++) {
                      
                   console.log(this.nizSectioning[index])
                   }
                   this.canvas = this.mychart.nativeElement; 
                   this.ctx = this.canvas.getContext('2d');
                   Chart.register(LineController, LineElement, PointElement, LinearScale, Title);
                   this.obj=new Chart(this.ctx, {
                     type: 'doughnut',
                     data: {
                         datasets: [{
                             label: 'Sectionings in %',
                             data: this.nizSectioning,
                             backgroundColor: "rgba(18, 22, 55, 0.85)",
                             hoverBackgroundColor:"rgba(18, 22, 156, 0.4)",
                             borderColor: "#ffffff",
                             //fill: true,
                         },
                         ],
                         labels: this.nazivil
                     }, });
                     this.canvas1 = this.mychart1.nativeElement; 
                     this.ctx1 = this.canvas1.getContext('2d');
                     Chart.register(LineController, LineElement, PointElement, LinearScale, Title);
                     this.obj1=new Chart(this.ctx1, {
                       type: 'doughnut',
                       data: {
                           datasets: [{
                               label: 'Embeddings in %',
                               data: this.nizEmbedding,
                               backgroundColor: "rgba(18, 22, 55, 0.85)",
                               hoverBackgroundColor:"rgba(18, 22, 156, 0.4)",
                               borderColor: "#ffffff",
                               //fill: true,
                           },
                           ],
                           labels: this.nazivil
                       }, });
                       this.canvas2 = this.mychart2.nativeElement; 
                       this.ctx2 = this.canvas2.getContext('2d');
                       Chart.register(LineController, LineElement, PointElement, LinearScale, Title);
                       this.obj2=new Chart(this.ctx2, {
                         type: 'doughnut',
                         data: {
                             datasets: [{
                                 label: 'Sendout in %',
                                 data: this.nizSendOut,
                                 backgroundColor: "rgba(18, 22, 55, 0.85)",
                                 hoverBackgroundColor:"rgba(18, 22, 156, 0.4)",
                                 borderColor: "#ffffff",
                                 //fill: true,
                             },
                             ],
                             labels: this.nazivil
                         }, });
              })
            })
          })
        })
      })
    })})
  }
  obj:any;
  obj1:any;
  obj2:any;
  destroyChart() {
    this.obj.destroy();
  }
  nazivil:string[]=[];
  nizSectioning:number[]=[];
  nizSendOut:number[]=[];
  nizCoverslipping:number[]=[];
  nizProcessing:number[]=[];
  nizStaining:number[]=[];
  nizEmbedding:number[]=[];
curryear:number;
  activity:string;
  period:string;
  periods:string[]=['Year', 'Month', 'Date']
  activties:string[]=['Reporting', ]
  years:number[]=[];
  months:string[]=['January', 'February', 'March','April', 'May', 'June' , 'July', 'August', 'September','October','November','December'];
  daysinm:number[]=[31, 28, 31,30,31, 30 , 31, 31, 30,31,30,31];
  year:number;
  month:string;
  startdate:number;
  day:number;
  startday:Date;
  endday:Date;
  numofcaseid:number;
  allCase:Case[];
  fl1:number;
  message:string;
  numofslides:number;
  fl2:number;
  labs:string;
  allUsers:User[];
  laborants:User[]=[];
  allSectionings:Sectioning[];
  allEmb:Embedding[];
  allSendOut:Sendout[];
  allCover:Coverslipping[];
  allShe:ProcessStaining[];
  allProcessing:Process[]
  cntSectioning:number;
  cntEmb:number;
  cntSendOut:number;
  cntCover:number;
  cntShe:number;
  cntProcessing:number;
  getval(){

    this.UserService.getAllSectioning().subscribe((data: Sectioning[])=>{
      this.allSectionings=data;
      this.UserService.getAllEmb().subscribe((data: Embedding[])=>{
        this.allEmb=data;
        this.UserService.getAllSendout().subscribe((data: Sendout[])=>{
          this.allSendOut=data;
          this.UserService.getAllCover().subscribe((data: Coverslipping[])=>{
            this.allCover=data;
            this.UserService.getAllStainingProcess().subscribe((data: ProcessStaining[])=>{
              this.allShe=data;
              this.UserService.getAllProcess().subscribe((data: Process[])=>{
                this.allProcessing=data;
              
                if(this.period=='Year')
                {
                  this.fl2=1;
                  this.cntSectioning=0;
                    for (let index = 0; index < this.allSectionings.length; index++) {
                     if(this.allSectionings[index].year==this.year && this.allSectionings[index].lab==this.labs)
                     {
                    this.cntSectioning++;
                     }
                     }
                  this.cntEmb=0;
                    for (let index = 0; index < this.allEmb.length; index++) {
                      if(this.allEmb[index].year==this.year && this.allEmb[index].lab==this.labs)
                      {
                     this.cntEmb++;
                      }
                      }
                  this.cntSendOut=0;
                    for (let index = 0; index < this.allSendOut.length; index++) {
                    if(this.allSendOut[index].godina==this.year && this.allSendOut[index].laborant==this.labs)
                    {
                    this.cntSendOut++;
                    }
                    }
                  this.cntCover=0;
                  for (let index = 0; index < this.allCover.length; index++) {
                      if(this.allCover[index].year==this.year && this.allCover[index].laborant==this.labs)
                      {
                     this.cntCover++;
                      }
                  }   
                  this.cntShe=0;
                  for (let index = 0; index < this.allShe.length; index++) {
                      if(this.allShe[index].endyear==this.year && this.allShe[index].lab==this.labs)
                      {
                     this.cntShe++;
                      }
                  }
                  this.cntProcessing=0;
                  for (let index = 0; index < this.allProcessing.length; index++) {
                      if(this.allProcessing[index].endyear==this.year && this.allProcessing[index].lab==this.labs)
                      {
                     this.cntProcessing++;
                      }
                  }
                }
                else{
                  if(this.period=='Month')
                  {
                    this.fl2=1;
                      let ukupno=0;
                      let br;
                      for (let index = 0; index < this.months.length; index++) {
                       if(this.months[index]==this.month)
                       {
                         br=index;
                       }
                      }
                      this.cntSectioning=0;
                      for (let index = 0; index < this.allSectionings.length; index++) {
                       if(this.allSectionings[index].year==this.year && this.allSectionings[index].month==(br+1)
                        && this.allSectionings[index].lab==this.labs)
                       {
                        this.cntSectioning++;
                       }
                       }
                       this.cntEmb=0;
                      for (let index = 0; index < this.allEmb.length; index++) {
                       if(this.allEmb[index].year==this.year && this.allEmb[index].month==(br+1)
                        && this.allEmb[index].lab==this.labs)
                       {
                        this.cntEmb++;
                       }
                       }
                       this.cntSendOut=0;
                      for (let index = 0; index < this.allSendOut.length; index++) {
                       if(this.allSendOut[index].godina==this.year && this.allSendOut[index].mesec==(br+1)
                        && this.allSendOut[index].laborant==this.labs)
                       {
                        this.cntSendOut++;
                       }
                       }
                       this.cntCover=0;
                       for (let index = 0; index < this.allCover.length; index++) {
                        if(this.allCover[index].year==this.year && this.allCover[index].month==(br+1)
                         && this.allCover[index].laborant==this.labs)
                        {
                         this.cntCover++;
                        }
                        }
                        this.cntShe=0;
                      for (let index = 0; index < this.allShe.length; index++) {
                       if(this.allShe[index].endyear==this.year && this.allShe[index].endmonth==(br+1)
                        && this.allShe[index].lab==this.labs)
                       {
                        this.cntSectioning++;
                       }
                       }
                       this.cntProcessing=0;
                      for (let index = 0; index < this.allProcessing.length; index++) {
                       if(this.allProcessing[index].endyear==this.year && this.allProcessing[index].endmonth==(br+1)
                        && this.allProcessing[index].lab==this.labs)
                       {
                        this.cntProcessing++;
                       }
                       }
                    

                  }
                  else{
                    if(this.startday!=null && this.endday!=null)
                    {
                      let novi=new Date(this.startday);
                      let stdan=novi.getDate();
                      let stmesec=novi.getMonth()+1;
                      let stgod=novi.getFullYear();
                      let sd=new Date(this.endday);
                       let endan=sd.getDate();
                      let enmesec=sd.getMonth()+1;
                      let engod=sd.getFullYear();
          
                      this.fl2=1;
                  
                   this.cntSectioning=0;
                    for (let index = 0; index < this.allSectionings.length; index++) {
                      
                      if(this.allSectionings[index].year==stgod || this.allSectionings[index].year==engod  && stgod==engod)
                    {
                
                    if(stmesec==enmesec)
                    {
                      if(this.allSectionings[index].month==stmesec && this.allSectionings[index].day>=stdan && this.allSectionings[index].day<=endan
                        && this.allSectionings[index].lab==this.labs)
                      {
                        this.cntSectioning++;
                      }
                    }
                    else{
                      if(stmesec<enmesec)
                      {if((this.allSectionings[index].month<enmesec && this.allSectionings[index].day>=stdan 
                          && this.allSectionings[index].month>=stmesec&& this.allSectionings[index].lab==this.labs) ||
                          (this.allSectionings[index].month<enmesec && this.allSectionings[index].month>stmesec && 
                            this.allSectionings[index].lab==this.labs) 
                          ||(this.allSectionings[index].month==enmesec && this.allSectionings[index].day<=endan && 
                            this.allSectionings[index].lab==this.labs)
                          )
                        {
                          this.cntSectioning++;
                        }}
                      else{
                        this.message='Start date must be before end date'
                        this.fl2=0
                      }
                    }
          
                    }
                    }
          ////

          this.cntEmb=0;
          for (let index = 0; index < this.allEmb.length; index++) {
            
            if(this.allEmb[index].year==stgod || this.allEmb[index].year==engod  && stgod==engod)
          {
      
          if(stmesec==enmesec)
          {
            if(this.allEmb[index].month==stmesec && this.allEmb[index].day>=stdan && this.allEmb[index].day<=endan
              && this.allEmb[index].lab==this.labs)
            {
              this.cntEmb++;
            }
          }
          else{
            if(stmesec<enmesec)
            {if((this.allEmb[index].month<enmesec && this.allEmb[index].day>=stdan 
                && this.allEmb[index].month>=stmesec&& this.allEmb[index].lab==this.labs) ||
                (this.allEmb[index].month<enmesec && this.allEmb[index].month>stmesec && 
                  this.allEmb[index].lab==this.labs) 
                ||(this.allEmb[index].month==enmesec && this.allEmb[index].day<=endan && 
                  this.allEmb[index].lab==this.labs)
                )
              {
                this.cntEmb++;
              }}
            else{
              this.message='Start date must be before end date'
              this.fl2=0
            }
          }

          }
          }
          //////

          this.cntCover=0;
          for (let index = 0; index < this.allCover.length; index++) {
            
            if(this.allCover[index].year==stgod || this.allCover[index].year==engod  && stgod==engod)
          {
      
          if(stmesec==enmesec)
          {
            if(this.allCover[index].month==stmesec && this.allCover[index].day>=stdan && this.allCover[index].day<=endan
              && this.allCover[index].laborant==this.labs)
            {
              this.cntCover++;
            }
          }
          else{
            if(stmesec<enmesec)
            {if((this.allCover[index].month<enmesec && this.allCover[index].day>=stdan 
                && this.allCover[index].month>=stmesec&& this.allCover[index].laborant==this.labs) ||
                (this.allCover[index].month<enmesec && this.allCover[index].month>stmesec && 
                  this.allCover[index].laborant==this.labs) 
                ||(this.allCover[index].month==enmesec && this.allCover[index].day<=endan && 
                  this.allCover[index].laborant==this.labs)
                )
              {
                this.cntCover++;
              }}
            else{
              this.message='Start date must be before end date'
              this.fl2=0
            }
          }

          }
          }
          //////////////

          this.cntSendOut=0;
          for (let index = 0; index < this.allSendOut.length; index++) {
            
            if(this.allSendOut[index].godina==stgod || this.allSendOut[index].godina==engod  && stgod==engod)
          {
      
          if(stmesec==enmesec)
          {
            if(this.allSendOut[index].mesec==stmesec && this.allSendOut[index].dan>=stdan && this.allSendOut[index].dan<=endan
              && this.allSendOut[index].laborant==this.labs)
            {
              this.cntSendOut++;
            }
          }
          else{
            if(stmesec<enmesec)
            {if((this.allSendOut[index].mesec<enmesec && this.allSendOut[index].dan>=stdan 
                && this.allSendOut[index].mesec>=stmesec&& this.allSendOut[index].laborant==this.labs) ||
                (this.allSendOut[index].mesec<enmesec && this.allSendOut[index].mesec>stmesec && 
                  this.allSendOut[index].laborant==this.labs) 
                ||(this.allSendOut[index].mesec==enmesec && this.allSendOut[index].dan<=endan && 
                  this.allSendOut[index].laborant==this.labs)
                )
              {
                this.cntSendOut++;
              }}
            else{
              this.message='Start date must be before end date'
              this.fl2=0
            }
          }

          }
          }

          //////////

          this.cntShe=0;
          for (let index = 0; index < this.allShe.length; index++) {
            
            if(this.allShe[index].endyear==stgod || this.allShe[index].endyear==engod  && stgod==engod)
          {
      
          if(stmesec==enmesec)
          {
            if(this.allShe[index].endmonth==stmesec && this.allShe[index].endday>=stdan && this.allShe[index].endday<=endan
              && this.allShe[index].lab==this.labs)
            {
              this.cntShe++;
            }
          }
          else{
            if(stmesec<enmesec)
            {if((this.allShe[index].endmonth<enmesec && this.allShe[index].endday>=stdan 
                && this.allShe[index].endmonth>=stmesec&& this.allShe[index].lab==this.labs) ||
                (this.allShe[index].endmonth<enmesec && this.allShe[index].endmonth>stmesec && 
                  this.allShe[index].lab==this.labs) 
                ||(this.allShe[index].endmonth==enmesec && this.allShe[index].endday<=endan && 
                  this.allShe[index].lab==this.labs)
                )
              {
                this.cntShe++;
              }}
            else{
              this.message='Start date must be before end date'
              this.fl2=0
            }
          }

          }
          }

          /////
          this.cntProcessing=0;
          for (let index = 0; index < this.allProcessing.length; index++) {
            
            if(this.allProcessing[index].endyear==stgod || this.allProcessing[index].endyear==engod  && stgod==engod)
          {
      
          if(stmesec==enmesec)
          {
            if(this.allProcessing[index].endmonth==stmesec && this.allProcessing[index].endday>=stdan && this.allProcessing[index].endday<=endan
              && this.allProcessing[index].lab==this.labs)
            {
              this.cntProcessing++;
            }
          }
          else{
            if(stmesec<enmesec)
            {if((this.allProcessing[index].endmonth<enmesec && this.allProcessing[index].endday>=stdan 
                && this.allProcessing[index].endmonth>=stmesec&& this.allProcessing[index].lab==this.labs) ||
                (this.allProcessing[index].endmonth<enmesec && this.allProcessing[index].endmonth>stmesec && 
                  this.allProcessing[index].lab==this.labs) 
                ||(this.allProcessing[index].endmonth==enmesec && this.allProcessing[index].endday<=endan && 
                  this.allProcessing[index].lab==this.labs)
                )
              {
                this.cntProcessing++;
              }}
            else{
              this.message='Start date must be before end date'
              this.fl2=0
            }
          }

          }
          }         
                    }
                  }
                }
               
              })
            })
          })
        })
      })
    })
  }
  logout(){
    sessionStorage.clear();
    this.router.navigate(['']);
  }
  gotopathactivity(){
    this.router.navigate(['/pathactivity']);
  }
  gotoadsactivity(){
    this.router.navigate(['/adsactivity']);
  }
  gotolabactivity(){
    this.router.navigate(['/labactivity']);
  }
  ch(){
    if(this.period=='Year')
    {
      this.startday=null;
      this.endday=null;
      this.month=null
    }
    else{
      if(this.period=='Month')
      {
        this.startday=null;
        this.endday=null;
        this.year=null;
      }
      else{
        if(this.period=='Date')
        {
          this.month=null;
          this.year=null;
        }
      }
    }
  }
}
