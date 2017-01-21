import { Component }          from '@angular/core';

@Component({
  moduleId: module.id,
  template: `<div class="simulator">
    <sso-sim-main-menu></sso-sim-main-menu>
    <router-outlet></router-outlet>
  </div>`,
  styleUrls: ['simulator.component.css']
})
export class SimulatorComponent { }
