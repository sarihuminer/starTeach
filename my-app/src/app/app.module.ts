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
//  export function HttpLoaderFactory(http: Http) {
//    return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
// }
//>>>>>>> b502fa67aedc549e2c0e7a35e524c4ff2bb61754
//  export function translateHttpLoaderFactory(httpBackend: HttpBackend): TranslateHttpLoader {
//   // return new TranslateHttpLoader(new HttpClient(httpBackend));
// }
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
  //    TranslateModule.forRoot({
  //      loader: {
  //          provide: TranslateLoader,
  //          deps: [HttpClient],
  //          useFactory: translateHttpLoaderFactory
  //      }
  // }),
    ReactiveFormsModule ,
 
  ],
  providers: [TranslateService],
  exports:[TranslateModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
