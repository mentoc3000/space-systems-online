import { Component }        from '@angular/core';

@Component({
  template: `
    <h2>Pages Component</h2>
    <router-outlet></router-outlet>
    <sso-footer></sso-footer>
  `
})
export class PagesComponent { }
