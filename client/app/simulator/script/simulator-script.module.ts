import { NgModule }         from '@angular/core';

import { SimulatorScriptRoutingModule }  from './simulator-script-routing.module';

import { SimulatorScriptComponent }  from './simulator-script.component';
import { ScriptService }              from '../script.service';

@NgModule({
  imports: [
    SimulatorScriptRoutingModule
  ],
  declarations: [
    SimulatorScriptComponent
  ],
  providers: [
    ScriptService
  ]
})
export class SimulatorScriptModule { }
