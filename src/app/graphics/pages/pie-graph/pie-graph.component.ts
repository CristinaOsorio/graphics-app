import { ChartType, ChartData, ChartEvent } from 'chart.js';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-graph',
  templateUrl: './pie-graph.component.html'
})
export class PieGraphComponent implements OnInit {
 // Doughnut
 public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
 public doughnutChartData: ChartData<'doughnut'> = {
   labels: this.doughnutChartLabels,
   datasets: [
     { data: [ 350, 450, 100 ] },
   ]
 };
 public doughnutChartType: ChartType = 'doughnut';
  constructor() { }

  ngOnInit(): void {
  }

}
