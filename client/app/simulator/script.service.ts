import { Injectable }       from '@angular/core';

@Injectable()
export class ScriptService {
  submitScript(script: string): string {
    return 'script service works';
  }
}
