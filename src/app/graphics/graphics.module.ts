import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraphicsRoutingModule } from './graphics-routing.module';
import { BargraphComponent } from './pages/bargraph/bargraph.component';
import { DoubleBargraphComponent } from './pages/double-bargraph/double-bargraph.component';
import { PieGraphComponent } from './pages/pie-graph/pie-graph.component';
import { PieGraphHttpComponent } from './pages/pie-graph-http/pie-graph-http.component';


@NgModule({
  declarations: [
    BargraphComponent,
    DoubleBargraphComponent,
    PieGraphComponent,
    PieGraphHttpComponent
  ],
  imports: [
    CommonModule,
    GraphicsRoutingModule
  ]
})
export class GraphicsModule { }
