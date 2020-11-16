import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DiplomaComponent } from './compnents/diploma/diploma.component';
import { EnteringGradesComponent } from './compnents/entering-grades/entering-grades.component';
import { LoginComponent } from './compnents/login/login.component';
import { PdfComponent } from './compnents/pdf/pdf.component';
import { StatisticsComponent } from './compnents/statistics/statistics.component';
import { UserComponent } from './compnents/user/user.component';


const routes: Routes = [ 
 { path:"", redirectTo: 'login', pathMatch: 'full' },
 { path: 'login', component: LoginComponent},
  {path: 'user', component:UserComponent,

 children: [
   {path: 'diploma', component:DiplomaComponent},
  { path: 'enter', component: EnteringGradesComponent},
   { path: 'statistics', component: StatisticsComponent},
   { path: 'pdf', component:PdfComponent }

  ]
}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
