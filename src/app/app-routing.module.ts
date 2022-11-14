import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcsfirstComponent } from './acsfirst/acsfirst.component';
import { AcssecondComponent } from './acssecond/acssecond.component';
import { AddbascetComponent } from './addbascet/addbascet.component';
import { AddprocessorComponent } from './addprocessor/addprocessor.component';
import { AddprotocolComponent } from './addprotocol/addprotocol.component';
import { AddprstainerComponent } from './addprstainer/addprstainer.component';
import { AddrackComponent } from './addrack/addrack.component';
import { AddstainerComponent } from './addstainer/addstainer.component';
import { CaselistadComponent } from './caselistad/caselistad.component';
import { DashboardfirstComponent } from './dashboardfirst/dashboardfirst.component';
import { DashboardfourthComponent } from './dashboardfourth/dashboardfourth.component';
import { DashboardsecondComponent } from './dashboardsecond/dashboardsecond.component';
import { DashboardthirdComponent } from './dashboardthird/dashboardthird.component';
import { DasheightComponent } from './dasheight/dasheight.component';
import { DashfiveComponent } from './dashfive/dashfive.component';
import { DashsevenComponent } from './dashseven/dashseven.component';
import { DashsixComponent } from './dashsix/dashsix.component';
import { GrossnextComponent } from './grossnext/grossnext.component';
import { LoginaccessioningComponent } from './loginaccessioning/loginaccessioning.component';
import { LogincoverComponent } from './logincover/logincover.component';
import { LoginembComponent } from './loginemb/loginemb.component';
import { LogingrossingComponent } from './logingrossing/logingrossing.component';
import { LoginpathologComponent } from './loginpatholog/loginpatholog.component';
import { LoginprocessingComponent } from './loginprocessing/loginprocessing.component';
import { LoginsectioningComponent } from './loginsectioning/loginsectioning.component';
import { LoginsendoutComponent } from './loginsendout/loginsendout.component';
import { LoginsheComponent } from './loginshe/loginshe.component';
import { LoginstartComponent } from './loginstart/loginstart.component';
import { PathaddgroupComponent } from './pathaddgroup/pathaddgroup.component';
import { PathdashComponent } from './pathdash/pathdash.component';
import { PathinfoComponent } from './pathinfo/pathinfo.component';
import { PathslideComponent } from './pathslide/pathslide.component';
import { ProcessingComponent } from './processing/processing.component';
import { SendoutlabdashComponent } from './sendoutlabdash/sendoutlabdash.component';
import { SendoutlabmainComponent } from './sendoutlabmain/sendoutlabmain.component';
import { SendoutpatdashComponent } from './sendoutpatdash/sendoutpatdash.component';
import { SendoutpatmainComponent } from './sendoutpatmain/sendoutpatmain.component';
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
{ path:'login-embedding', component:LoginembComponent},
{ path: 'dashfive', component:DashfiveComponent},
{ path: 'login-staininghe', component:LoginsheComponent},
{ path: 'dashsix', component:DashsixComponent},
{ path: 'staining', component:StainingComponent},
{ path: 'addstainer', component:AddstainerComponent},
{ path: 'addstprotocol', component:AddprstainerComponent},
{ path: 'login-sectioning', component:LoginsectioningComponent},
{ path: 'dashseven', component:DashsevenComponent},
{ path: 'login-grossing', component:LogingrossingComponent},
{ path: 'login-accessioning', component:LoginaccessioningComponent},
{ path: 'login-processing', component:LoginprocessingComponent},
{ path: 'login-coverslipping', component:LogincoverComponent},
{ path: 'dasheight', component:DasheightComponent},
{ path: 'addbasket', component:AddbascetComponent},
{ path: 'addrack', component:AddrackComponent},
{ path: 'login-sendout', component:LoginsendoutComponent},
{ path: 'sendoutlabdash', component:SendoutlabdashComponent},
{ path: 'sendoutlabmain', component:SendoutlabmainComponent},
{ path: 'sendoutpathdash', component:SendoutpatdashComponent},
{ path: 'sendoutpathmain', component:SendoutpatmainComponent},
{ path: 'login-pathologist', component:LoginpathologComponent},
{ path: 'pathdash', component:PathdashComponent},
{ path: 'pathinfo', component:PathinfoComponent},
{ path: 'pathslide', component:PathslideComponent},
{ path: 'pathaddgroup', component:PathaddgroupComponent},
]  ;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
