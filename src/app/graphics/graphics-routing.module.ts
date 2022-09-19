import { PieGraphComponent } from './pages/pie-graph/pie-graph.component';
import { DoubleBargraphComponent } from './pages/double-bargraph/double-bargraph.component';
import { BargraphComponent } from './components/bargraph/bargraph.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PieGraphHttpComponent } from './pages/pie-graph-http/pie-graph-http.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'bar', component: BargraphComponent },
      { path: 'double', component: DoubleBargraphComponent },
      { path: 'pie', component: PieGraphComponent, pathMatch: "full" },
      { path: 'pie-http', component: PieGraphHttpComponent, pathMatch: "full" },
      { path: '**', redirectTo: 'bar' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraphicsRoutingModule { }
