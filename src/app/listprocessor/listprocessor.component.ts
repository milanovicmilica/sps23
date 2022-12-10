import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cs } from '../models/infocs';
import { Processor } from '../models/processors';
import { Protocol } from '../models/protocol';
import { Sectioning } from '../models/sectioning';
import { User } from '../models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-listprocessor',
  templateUrl: './listprocessor.component.html',
  styleUrls: ['./listprocessor.component.css']
})
export class ListprocessorComponent implements OnInit {

  constructor(private router: Router, private UserService: UserService) { }

  ngOnInit(): void {
    this.UserService.getAllProcessors().subscribe((data: Processor[])=>{
      this.allProcessors=data;
      this.UserService.getAllProtocols().subscribe((data: Protocol[])=>{
        this.allProtocols=data;})
    
    })

    
  }
  allProtocols:Protocol[];
  allProcessors:Processor[];
  gotolp(){
    this.router.navigate(['/listprocessor']);
  }
  logout(){
    sessionStorage.clear();
    this.router.navigate(['']);
  }
  gotolaact(){
    this.router.navigate(['/labactivity']);
  }
  gotoadsactivity(){
    this.router.navigate(['/adsactivity']);
  }
  gotopathactivity(){
    this.router.navigate(['/pathactivity']);
  }
  gotolabact(){
    this.router.navigate(['/adlabactivity']);
  }
  gotolistusers()
  {
    this.router.navigate(['/listusers']);
  }
}
