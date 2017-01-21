import { NgModule }               from '@angular/core';

import { SimulatorRoutingModule } from './simulator-routing.module';

import { SimulatorComponent }   from './simulator.component';
import { SimulatorMainMenuComponent }    from './main-menu/simulator-main-menu.component';

@NgModule({
  imports: [
    SimulatorRoutingModule
  ],
  declarations: [
    SimulatorComponent,
    SimulatorMainMenuComponent
  ],
  providers: [
  ]
})
export class SimulatorModule { }
