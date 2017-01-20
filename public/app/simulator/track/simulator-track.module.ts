import { NgModule }         from '@angular/core';

import { SimulatorTrackRoutingModule }  from './simulator-track-routing.module';

import { SimulatorTrackComponent }  from './simulator-track.component';

@NgModule({
  imports: [
    SimulatorTrackRoutingModule
  ],
  declarations: [
    SimulatorTrackComponent
  ],
  providers: [

  ]
})
export class SimulatorTrackModule { }
