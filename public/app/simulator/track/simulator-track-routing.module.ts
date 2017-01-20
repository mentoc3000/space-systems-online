import { NgModule }             from '@angular/core';
import { Routes,
  RouterModule }         from '@angular/router';

import { SimulatorTrackComponent }   from './simulator-track.component';

const routes: Routes = [
  {
    path: '',
    component: SimulatorTrackComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimulatorTrackRoutingModule { }
