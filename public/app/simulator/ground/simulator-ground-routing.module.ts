import { NgModule }             from '@angular/core';
import { Routes,
  RouterModule }         from '@angular/router';

import { SimulatorGroundComponent }   from './simulator-ground.component';

const routes: Routes = [
  {
    path: '',
    component: SimulatorGroundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimulatorGroundRoutingModule { }
