import { NgModule }       from '@angular/core';

import { PagesRoutingModule }   from './pages-routing.module';

import { HomeComponent }        from './home/home.component';
import { AboutComponent }       from './about/about.component';

@NgModule({
  imports: [
    PagesRoutingModule
  ],
  declarations: [
    HomeComponent,
    AboutComponent
  ]
})
export class PagesModule { }
