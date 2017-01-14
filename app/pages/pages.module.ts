import { NgModule }       from '@angular/core';

import { PagesRoutingModule }   from './pages-routing.module';

import { HomeComponent }        from './home/home.component';


@NgModule({
  imports: [
    PagesRoutingModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class PagesModule { }
