import { NgModule }             from '@angular/core';
import { Routes,
  RouterModule }         from '@angular/router';

import { SimulatorComponent }  from './simulator.component';

const routes: Routes = [

{
  path: '',
  component: SimulatorComponent,
  children: [
  {
    path: '',
    loadChildren: 'app/simulator/default/simulator-default.module#SimulatorDefaultModule'
  },
  {
    path: 'ground',
    loadChildren: 'app/simulator/ground/simulator-ground.module#SimulatorGroundModule'
  },
  {
    path: 'crafts',
    loadChildren: 'app/simulator/crafts/simulator-crafts.module#SimulatorCraftsModule'
  },
  {
    path: 'orbit',
    loadChildren: 'app/simulator/orbit/simulator-orbit.module#SimulatorOrbitModule'
  }
]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimulatorRoutingModule { }
