import { NgModule }             from '@angular/core';
import { Routes,
  RouterModule }         from '@angular/router';

import { SimulatorOptionsComponent }   from './simulator-options.component';

const routes: Routes = [
  {
    path: '',
    component: SimulatorOptionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimulatorOptionsRoutingModule { }
