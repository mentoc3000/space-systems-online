import { NgModule }             from '@angular/core';
import { Routes,
  RouterModule }         from '@angular/router';

import { SimulatorCraftsComponent }   from './simulator-crafts.component';

const routes: Routes = [
  {
    path: '',
    component: SimulatorCraftsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimulatorCraftsRoutingModule { }
