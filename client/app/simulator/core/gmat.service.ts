import { Injectable } from '@angular/core';
import {
  Headers,
  Http,
  RequestOptions,
  Response
} from '@angular/http';

import 'rxjs/add/operator/toPromise';
// import { Observable } from 'rxjs/Observable';

@Injectable()
export class GmatService {

  private scriptUrl = 'api/sim/submit';

  constructor(private http: Http) { }

  /* dummy implmementation
  submitScript(script: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
    resolve('script service works: ' + script);
    });
  }
  */

  submitScript(script: string): Promise<string> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    let body = {
      'script': script
    };

    return this.http.post(this.scriptUrl, body, options)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    let stdout = body.stdout;
    return stdout || '';
  }

  private handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Promise.reject(errMsg);
  }
}
