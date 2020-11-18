import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DiplomaComponent } from './compnents/diploma/diploma.component';
import { EnteringGradesComponent } from './compnents/entering-grades/entering-grades.component';
import { LoginComponent } from './compnents/login/login.component';
import { PdfComponent } from './compnents/pdf/pdf.component';
import { StatisticsComponent } from './compnents/statistics/statistics.component';
import { StudentComponent } from './compnents/student/student.component';
import { UpdateDetailsComponent } from './update-details/update-details.component';
import { UserComponent } from './compnents/user/user.component';
//import { UpdateDetailsComponent } from './update-details/update-details.component';


// <<<<<<< HEAD
const routes: Routes = [ 
 { path:"", redirectTo: 'login', pathMatch: 'full' },
 { path: 'login', component: LoginComponent},
  {path: 'user', component:UserComponent,

// const routes: Routes = [
//   { path: "", redirectTo: 'login', pathMatch: 'full' },
//   { path: 'login', component: LoginComponent },
//   {
//     path: 'user', component: UserComponent,
// >>>>>>> b502fa67aedc549e2c0e7a35e524c4ff2bb61754
    children: [
      { path: 'diploma', component: DiplomaComponent },
      { path: 'students', component: StudentComponent },
      { path: 'updateDetails', component: UpdateDetailsComponent },
      { path: 'updateDetails/:user/:index', component: UpdateDetailsComponent },
      { path: 'enter', component: EnteringGradesComponent },
      { path: 'statistics', component: StatisticsComponent },
      { path: 'pdf', component: PdfComponent }

    ]
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
