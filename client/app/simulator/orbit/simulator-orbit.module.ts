import { NgModule }         from '@angular/core';

import { SimulatorOrbitRoutingModule }  from './simulator-orbit-routing.module';

import { SimulatorOrbitComponent }  from './simulator-orbit.component';

@NgModule({
  imports: [
    SimulatorOrbitRoutingModule
  ],
  declarations: [
    SimulatorOrbitComponent
  ],
  providers: [

  ]
})
export class SimulatorOrbitModule { }
