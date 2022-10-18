import { ChartData } from 'chart.js';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-double-bargraph',
  templateUrl: './double-bargraph.component.html'
})
export class DoubleBargraphComponent implements OnInit {
  label = ['2021', '2022','2023','2024','2025'];
  proveedoresData: ChartData<'bar'> = {
    
    labels: this.label,
    datasets: [
      { data: [ 100,200,300,400,500 ], label: 'Vendedor A' },
      { data: [ 50,250,30, 450,200 ], label: 'Vendedor B' },
    ]
  };

  productData: ChartData<'bar'> = {
    labels:this.label,
    datasets: [
      {
        data: [ 200, 300,400,300, 100 ],
        label: 'Carros',
        backgroundColor: 'blue'
      },
    ],
  }

  constructor() { }

  ngOnInit(): void {
  }

}
