import { NgModule }             from '@angular/core';
import { Routes,
  RouterModule }         from '@angular/router';

import { SimulatorComponent }  from './simulator.component';
import { SimulatorDefaultComponent } from './default/simulator-default.component';
import { SimulatorGroundComponent }  from './ground/simulator-ground.component';
import { SimulatorCraftsComponent }  from './crafts/simulator-crafts.component';
import { SimulatorScriptComponent }  from './script/simulator-script.component';
import { SimulatorOrbitComponent }   from './orbit/simulator-orbit.component';
import { SimulatorTrackComponent }   from './track/simulator-track.component';
import { SimulatorOptionsComponent } from './options/simulator-options.component';

const routes: Routes = [

{
  path: '',
  component: SimulatorComponent,
  children: [
  {
    path: '',
    component: SimulatorDefaultComponent
  },
  {
    path: 'ground',
    component: SimulatorGroundComponent
  },
  {
    path: 'crafts',
    component: SimulatorCraftsComponent
  },
  {
    path: 'script',
    component: SimulatorScriptComponent
  },
  {
    path: 'orbit',
    component: SimulatorOrbitComponent
  },
  {
    path: 'track',
    component: SimulatorTrackComponent
  },
  {
    path: 'options',
    component: SimulatorOptionsComponent
  }
]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimulatorRoutingModule { }
