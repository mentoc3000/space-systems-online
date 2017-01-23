import { Component }        from '@angular/core';

import { ScriptService }    from '../script.service';

@Component({
  moduleId: module.id,
  templateUrl: 'simulator-script.component.html',
  styleUrls: ['simulator-script.component.css']
})
export class SimulatorScriptComponent {
  public script: string;
  public output: string;

  constructor(
    private scriptService: ScriptService
  ) {
    this.script = '';
    this.output = '';
  }

  submit() {
    this.scriptService.submitScript(this.script)
    .then(output => {
      this.output = output;
    })
  }

}
