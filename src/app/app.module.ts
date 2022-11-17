import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartpageComponent } from './startpage/startpage.component';
import { LoginstartComponent } from './loginstart/loginstart.component';
import { DashboardfirstComponent } from './dashboardfirst/dashboardfirst.component';
import { DashboardsecondComponent } from './dashboardsecond/dashboardsecond.component';
import { AcsfirstComponent } from './acsfirst/acsfirst.component';
import { AcssecondComponent } from './acssecond/acssecond.component';
import { DashboardthirdComponent } from './dashboardthird/dashboardthird.component';
import { GrossnextComponent } from './grossnext/grossnext.component';
import { CaselistadComponent } from './caselistad/caselistad.component';
import { DashboardfourthComponent } from './dashboardfourth/dashboardfourth.component';
import { ProcessingComponent } from './processing/processing.component';
import { AddprotocolComponent } from './addprotocol/addprotocol.component';
import { AddprocessorComponent } from './addprocessor/addprocessor.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { LoginembComponent } from './loginemb/loginemb.component';
import { DashfiveComponent } from './dashfive/dashfive.component';
import { LoginsheComponent } from './loginshe/loginshe.component';
import { DashsixComponent } from './dashsix/dashsix.component';
import { StainingComponent } from './staining/staining.component';
import { DashsevenComponent } from './dashseven/dashseven.component';
import { AddstainerComponent } from './addstainer/addstainer.component';
import { AddprstainerComponent } from './addprstainer/addprstainer.component';
import { LoginsectioningComponent } from './loginsectioning/loginsectioning.component';
import { LogingrossingComponent } from './logingrossing/logingrossing.component';
import { LoginaccessioningComponent } from './loginaccessioning/loginaccessioning.component';
import { LoginprocessingComponent } from './loginprocessing/loginprocessing.component';
import { LogincoverComponent } from './logincover/logincover.component';
import { DasheightComponent } from './dasheight/dasheight.component';
import { QRCodeModule } from 'angular2-qrcode';
import { AddbascetComponent } from './addbascet/addbascet.component';
import { AddrackComponent } from './addrack/addrack.component';
import { LoginsendoutComponent } from './loginsendout/loginsendout.component';
import { SendoutlabdashComponent } from './sendoutlabdash/sendoutlabdash.component';
import { SendoutlabmainComponent } from './sendoutlabmain/sendoutlabmain.component';
import { SendoutpatdashComponent } from './sendoutpatdash/sendoutpatdash.component';
import { SendoutpatmainComponent } from './sendoutpatmain/sendoutpatmain.component';
import { LoginpathologComponent } from './loginpatholog/loginpatholog.component';
import { PathdashComponent } from './pathdash/pathdash.component';
import { PathinfoComponent } from './pathinfo/pathinfo.component';
import { PathslideComponent } from './pathslide/pathslide.component';
import { PathaddgroupComponent } from './pathaddgroup/pathaddgroup.component';
import { PatheditComponent } from './pathedit/pathedit.component';
import { PathreportComponent } from './pathreport/pathreport.component';
import { AdminlabactivityComponent } from './adminlabactivity/adminlabactivity.component';
import { AdminpathactivityComponent } from './adminpathactivity/adminpathactivity.component';
import { AdminadsactivityComponent } from './adminadsactivity/adminadsactivity.component';
@NgModule({
  declarations: [
    AppComponent,
    StartpageComponent,
    LoginstartComponent,
    DashboardfirstComponent,
    DashboardsecondComponent,
    AcsfirstComponent,
    AcssecondComponent,
    DashboardthirdComponent,
    GrossnextComponent,
    CaselistadComponent,
    DashboardfourthComponent,
    ProcessingComponent,
    AddprotocolComponent,
    AddprocessorComponent,
    LoginembComponent,
    DashfiveComponent,
    LoginsheComponent,
    DashsixComponent,
    StainingComponent,
    DashsevenComponent,
    AddstainerComponent,
    AddprstainerComponent,
    LoginsectioningComponent,
    LogingrossingComponent,
    LoginaccessioningComponent,
    LoginprocessingComponent,
    LogincoverComponent,
    DasheightComponent,
    AddbascetComponent,
    AddrackComponent,
    LoginsendoutComponent,
    SendoutlabdashComponent,
    SendoutlabmainComponent,
    SendoutpatdashComponent,
    SendoutpatmainComponent,
    LoginpathologComponent,
    PathdashComponent,
    PathinfoComponent,
    PathslideComponent,
    PathaddgroupComponent,
    PatheditComponent,
    PathreportComponent,
    AdminlabactivityComponent,
    AdminpathactivityComponent,
    AdminadsactivityComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ZXingScannerModule,
    QRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
