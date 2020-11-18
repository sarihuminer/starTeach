import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';

import { DiplomaComponent } from './compnents/diploma/diploma.component';
import { EnteringGradesComponent } from './compnents/entering-grades/entering-grades.component';
import { LoginComponent } from './compnents/login/login.component';
import { StatisticsComponent } from './compnents/statistics/statistics.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Ng7ChartJs By DotNet Techy';

  constructor(private router: Router) {}
 
  ngOnInit() {
    
        //  this.router.navigate(['user']);
  }

}