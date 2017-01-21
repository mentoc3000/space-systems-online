import { NgModule }         from '@angular/core';

import { SimulatorCraftsRoutingModule }  from './simulator-crafts-routing.module';

import { SimulatorCraftsComponent }  from './simulator-crafts.component';
import { SimulatorCraftsMenuComponent }  from './menu/crafts-menu.component';

@NgModule({
  imports: [
    SimulatorCraftsRoutingModule
  ],
  declarations: [
    SimulatorCraftsComponent,
    SimulatorCraftsMenuComponent
  ],
  providers: [

  ]
})
export class SimulatorCraftsModule { }
