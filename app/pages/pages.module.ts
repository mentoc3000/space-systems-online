import { NgModule }       from '@angular/core';

import { PagesRoutingModule }   from './pages-routing.module';

import { PagesComponent }       from './pages.component';
import { HomeComponent }        from './home/home.component';
import { AboutComponent }       from './about/about.component';

@NgModule({
  imports: [
    PagesRoutingModule
  ],
  declarations: [
    PagesComponent,
    HomeComponent,
    AboutComponent
  ]
})
export class PagesModule { }
