import { NgModule }         from '@angular/core';
import { FormsModule }      from '@angular/forms';

import { SimulatorScriptRoutingModule }  from './simulator-script-routing.module';

import { SimulatorScriptComponent }  from './simulator-script.component';
@NgModule({
  imports: [
    FormsModule,
    SimulatorScriptRoutingModule
  ],
  declarations: [
    SimulatorScriptComponent
  ],
  providers: [
  ]
})
export class SimulatorScriptModule { }
