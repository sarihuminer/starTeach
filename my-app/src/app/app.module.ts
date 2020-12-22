import { NgModule } from '@angular/core';
import { HttpBackend, HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnteringGradesComponent } from './compnents/entering-grades/entering-grades.component';
import { LoginComponent } from './compnents/login/login.component';
import { StatisticsComponent } from './compnents/statistics/statistics.component';
import { DiplomaComponent } from './compnents/diploma/diploma.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { UserComponent } from './compnents/user/user.component';
import { ExcleimportComponent } from './compnents/excleimport/excleimport.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { PdfComponent } from './compnents/pdf/pdf.component';
import { StudentComponent } from './compnents/student/student.component';
//<<<<<<< HEAD
import { Route } from '@angular/compiler/src/core';
import { Routes } from '@angular/router';
//=======
import { UpdateDetailsComponent } from './update-details/update-details.component';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader/src/http-loader';
import { Http } from '@angular/http';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EnteringGradesComponent,
    StatisticsComponent,
    DiplomaComponent,
    UserComponent,
    AppComponent,
    ExcleimportComponent,
PdfComponent,
ExcleimportComponent,
StudentComponent,
UpdateDetailsComponent
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ChartsModule,
    CommonModule,
    BrowserModule,
    ReactiveFormsModule ,
 
  ],
  providers: [TranslateService],
  exports:[TranslateModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
