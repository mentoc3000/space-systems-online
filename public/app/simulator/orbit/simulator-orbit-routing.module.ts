import { NgModule }             from '@angular/core';
import { Routes,
  RouterModule }         from '@angular/router';

import { SimulatorOrbitComponent }   from './simulator-orbit.component';

const routes: Routes = [
  {
    path: '',
    component: SimulatorOrbitComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimulatorOrbitRoutingModule { }
