import { NgModule }               from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { HttpModule }          from '@angular/http';

import { SimulatorRoutingModule } from './simulator-routing.module';
import { SimulatorCoreModule }    from './core/simulator-core.module';
import { SimulatorSharedModule }  from './shared/simulator-shared.module';
import { SimulatorCraftsModule }  from './crafts/simulator-crafts.module';
import { SimulatorDefaultModule } from './default/simulator-default.module';
import { SimulatorGroundModule }  from './ground/simulator-ground.module';
import { SimulatorOptionsModule } from './options/simulator-options.module';
import { SimulatorOrbitModule }   from './orbit/simulator-orbit.module';
import { SimulatorScriptModule }  from './script/simulator-script.module';
import { SimulatorTrackModule }   from './track/simulator-track.module';

import { SimulatorComponent }   from './simulator.component';
import { SimulatorMainMenuComponent }    from './main-menu/simulator-main-menu.component';


@NgModule({
  imports: [
    FormsModule,
    HttpModule,
    SimulatorRoutingModule,
    SimulatorCoreModule,
    SimulatorSharedModule,
    SimulatorCraftsModule,
    SimulatorDefaultModule,
    SimulatorGroundModule,
    SimulatorOptionsModule,
    SimulatorOrbitModule,
    SimulatorScriptModule,
    SimulatorTrackModule
  ],
  declarations: [
    SimulatorComponent,
    SimulatorMainMenuComponent
  ],
  exports: [
  ],
  providers: [
  ]
})
export class SimulatorModule { }
