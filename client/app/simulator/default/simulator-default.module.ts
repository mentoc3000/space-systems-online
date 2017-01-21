import { NgModule }         from '@angular/core';

import { SimulatorDefaultRoutingModule }  from './simulator-default-routing.module';

import { SimulatorDefaultComponent }  from './simulator-default.component';

@NgModule({
  imports: [
    SimulatorDefaultRoutingModule
  ],
  declarations: [
    SimulatorDefaultComponent
  ],
  providers: [

  ]
})
export class SimulatorDefaultModule { }
