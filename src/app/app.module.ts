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

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ZXingScannerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }