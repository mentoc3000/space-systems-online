import { NgModule }           from '@angular/core';

import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule }       from './shared/shared.module';

import { HomeComponent }      from './home/home.component';
import { AboutComponent }      from './about/about.component';

@NgModule({
  imports:      [
    SharedModule,
    PagesRoutingModule
  ],
  declarations: [
    HomeComponent,
    AboutComponent
  ],
  providers:    [

  ]
})
export class PagesModule {

}
