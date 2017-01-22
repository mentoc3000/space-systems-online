import { NgModule }               from '@angular/core';

import { SimulatorRoutingModule } from './simulator-routing.module';
import { SimulatorSharedModule }  from './shared/simulator-shared.module';

import { SimulatorComponent }   from './simulator.component';
import { SimulatorMainMenuComponent }    from './main-menu/simulator-main-menu.component';

@NgModule({
  imports: [
    SimulatorRoutingModule,
    SimulatorSharedModule
  ],
  declarations: [
    SimulatorComponent,
    SimulatorMainMenuComponent
  ],
  providers: [
  ]
})
export class SimulatorModule { }
