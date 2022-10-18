import { ChartConfiguration, ChartType, ChartData } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-bat-graph',
  templateUrl: './bat-graph.component.html',
  styleUrls: ['./bat-graph.component.css']
})
export class BatGraphComponent implements OnInit {
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    indexAxis: 'x'
  };
  @Input() barChartType: ChartType = 'bar';
  @Input() horizontal: boolean = false;
  @Input() barChartData: ChartData<'bar'> = {
    labels: [],
    datasets: []
  };

  constructor() { }

  ngOnInit(): void { 
    this.barChartOptions!.indexAxis = this.horizontal ? 'y' : 'x';
  }

}
