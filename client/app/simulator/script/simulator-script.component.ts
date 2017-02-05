import { Component }        from '@angular/core';

import { GmatService }    from '../core/gmat.service';

@Component({
  moduleId: module.id,
  templateUrl: 'simulator-script.component.html',
  styleUrls: ['simulator-script.component.css']
})
export class SimulatorScriptComponent {
  public script: string;
  public output: string;

  constructor(
    private gmatService: GmatService
  ) {
    this.script = '';
    this.output = '';
  }

  submit() {
    this.gmatService.submitScript(this.script)
    .then(output => {
      this.output = output;
    });
  }

}
