import { Injectable }       from '@angular/core';

@Injectable()
export class ScriptService {
  submitScript(script: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      resolve('script service works: ' + script);
    });
  }
}
