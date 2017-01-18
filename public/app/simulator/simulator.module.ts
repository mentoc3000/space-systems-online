import { NgModule }               from '@angular/core';

import { SimulatorRoutingModule } from './simulator-routing.module';

import { SimulatorComponent }   from './simulator.component';
import { SimulatorMainMenu }    from './main-menu/simulator-main-menu.component';

@NgModule({
  imports: [
    SimulatorRoutingModule
  ],
  declarations: [
    SimulatorComponent,
    SimulatorMainMenu
  ],
  providers: [

  ]
})
export class SimulatorModule { }
