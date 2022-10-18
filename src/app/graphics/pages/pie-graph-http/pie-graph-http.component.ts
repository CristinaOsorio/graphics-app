import { ChartData, ChartType } from 'chart.js';
import { Data } from './../../../interfaces/data.interface';
import { Component, OnInit } from '@angular/core';
import { GraphService } from '../../services/graph.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-pie-graph-http',
  templateUrl: './pie-graph-http.component.html',
  styles: [
  ]
})
export class PieGraphHttpComponent implements OnInit {
  // Doughnut
  public doughnutChartLabels: string[] = [ ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: []
  };
  public doughnutChartType: ChartType = 'doughnut';
  public data!:Data;

  constructor(private graphService: GraphService) { }

  ngOnInit(): void {
    this.getData();
  }


  getData() {
    this.graphService.getDataForGraph()
    .subscribe(({labels, values}) => {
      this.doughnutChartData.labels = labels;
      this.doughnutChartData.datasets = [
        { data: values }
      ];
    });
  }

}
