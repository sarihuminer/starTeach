import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent {
statiStatisticsOptions:ChartOptions={
responsive: true,
};
public pieChartLabels: Label[] = [['SciFi'], ['Drama'], 'Comedy'];
public pieChartData: SingleDataSet = [30, 50, 20];
public pieChartType: ChartType = 'pie';
public pieChartLegend = true;
public pieChartPlugins = []; 

  constructor() { 
      monkeyPatchChartJsTooltip();
      monkeyPatchChartJsLegend();
    
  }

  ngOnInit(): void {
  }

}
