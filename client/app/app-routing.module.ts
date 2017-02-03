import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: 'app/pages/pages.module#PagesModule'
  },
  {
    path: 'simulator',
    loadChildren: 'app/simulator/simulator.module#SimulatorModule'
  },
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
