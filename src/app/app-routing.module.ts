import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'graph',
    loadChildren: () => import('./graphics/graphics.module').then(m => m.GraphicsModule)
  },
  { path: '**', redirectTo: 'graph' }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
