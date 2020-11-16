import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnteringGradesComponent } from './compnents/entering-grades/entering-grades.component';
import { LoginComponent } from './compnents/login/login.component';
import { StatisticsComponent } from './compnents/statistics/statistics.component';
import { DiplomaComponent } from './compnents/diploma/diploma.component';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { UserComponent } from './compnents/user/user.component';
import { ExcleimportComponent } from './compnents/excleimport/excleimport.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { PdfComponent } from './compnents/pdf/pdf.component';
import { StudentComponent } from './compnents/student/student.component';
import { Route } from '@angular/compiler/src/core';
import { Routes } from '@angular/router';

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
StudentComponent
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ChartsModule,
    CommonModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
