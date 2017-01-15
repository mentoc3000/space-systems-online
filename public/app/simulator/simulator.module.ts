import { NgModule }               from '@angular/core';

import { SimulatorRoutingModule } from './simulator-routing.module';

import { SimulatorComponent }   from './simulator.component';

@NgModule({
  imports: [
    SimulatorRoutingModule
  ],
  declarations: [
    SimulatorComponent
  ],
  providers: [

  ]
})
export class SimulatorModule { }
