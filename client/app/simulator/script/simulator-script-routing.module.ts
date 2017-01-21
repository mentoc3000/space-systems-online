import { NgModule }             from '@angular/core';
import { Routes,
  RouterModule }         from '@angular/router';

import { SimulatorScriptComponent }   from './simulator-script.component';

const routes: Routes = [
  {
    path: '',
    component: SimulatorScriptComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimulatorScriptRoutingModule { }
