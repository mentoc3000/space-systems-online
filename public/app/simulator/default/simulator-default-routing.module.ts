import { NgModule }             from '@angular/core';
import { Routes,
  RouterModule }         from '@angular/router';

import { SimulatorDefaultComponent }   from './simulator-default.component';

const routes: Routes = [
  {
    path: '',
    component: SimulatorDefaultComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimulatorDefaultRoutingModule { }
