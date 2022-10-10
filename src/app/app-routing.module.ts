import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcsfirstComponent } from './acsfirst/acsfirst.component';
import { AcssecondComponent } from './acssecond/acssecond.component';
import { AddprocessorComponent } from './addprocessor/addprocessor.component';
import { AddprotocolComponent } from './addprotocol/addprotocol.component';
import { AddprstainerComponent } from './addprstainer/addprstainer.component';
import { AddstainerComponent } from './addstainer/addstainer.component';
import { CaselistadComponent } from './caselistad/caselistad.component';
import { DashboardfirstComponent } from './dashboardfirst/dashboardfirst.component';
import { DashboardfourthComponent } from './dashboardfourth/dashboardfourth.component';
import { DashboardsecondComponent } from './dashboardsecond/dashboardsecond.component';
import { DashboardthirdComponent } from './dashboardthird/dashboardthird.component';
import { DashfiveComponent } from './dashfive/dashfive.component';
import { DashsevenComponent } from './dashseven/dashseven.component';
import { DashsixComponent } from './dashsix/dashsix.component';
import { GrossnextComponent } from './grossnext/grossnext.component';
import { LoginembComponent } from './loginemb/loginemb.component';
import { LogingrossingComponent } from './logingrossing/logingrossing.component';
import { LoginsectioningComponent } from './loginsectioning/loginsectioning.component';
import { LoginsheComponent } from './loginshe/loginshe.component';
import { LoginstartComponent } from './loginstart/loginstart.component';
import { ProcessingComponent } from './processing/processing.component';
import { StainingComponent } from './staining/staining.component';
import { StartpageComponent } from './startpage/startpage.component'
const routes: Routes = [
 
  { path:'', component:LoginstartComponent},
  {path:'dashfirst', component:DashboardfirstComponent},
  {path:'dashsecond', component:DashboardsecondComponent},
  {path:'acsfirst', component:AcsfirstComponent},
  {path:'acssecond', component:AcssecondComponent},
  {path: 'grossfirst', component:DashboardthirdComponent},
  {path: 'grossnext', component:GrossnextComponent},
  {path: 'clacs', component:CaselistadComponent},
{path: 'dashfour', component:DashboardfourthComponent},
{path: 'dashfourproc', component:ProcessingComponent},
{path: 'addprocessor', component:AddprocessorComponent},
{path: 'addprotocol', component:AddprotocolComponent},
{ path:'logine', component:LoginembComponent},
{ path: 'dashfive', component:DashfiveComponent},
{ path: 'loginshe', component:LoginsheComponent},
{ path: 'dashsix', component:DashsixComponent},
{ path: 'staining', component:StainingComponent},
{ path: 'addstainer', component:AddstainerComponent},
{ path: 'addstprotocol', component:AddprstainerComponent},
{ path: 'loginse', component:LoginsectioningComponent},
{ path: 'dashseven', component:DashsevenComponent},
{ path: 'login-grossing', component:LogingrossingComponent},
]  ;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
