import { NgModule }               from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { HttpModule }          from '@angular/http';

import { SimulatorRoutingModule } from './simulator-routing.module';
import { SimulatorSharedModule }  from './shared/simulator-shared.module';

import { SimulatorComponent }   from './simulator.component';
import { SimulatorMainMenuComponent }    from './main-menu/simulator-main-menu.component';
import { ScriptService }              from './script.service';


@NgModule({
  imports: [
    FormsModule,
    HttpModule,
    SimulatorRoutingModule,
    SimulatorSharedModule
  ],
  declarations: [
    SimulatorComponent,
    SimulatorMainMenuComponent
  ],
  exports: [
    ScriptService
  ],
  providers: [
  ]
})
export class SimulatorModule { }
