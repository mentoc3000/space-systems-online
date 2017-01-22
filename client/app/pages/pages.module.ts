import { NgModule }           from '@angular/core';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesSharedModule }       from './shared/pages-shared.module';

import { HomeComponent }      from './home/home.component';
import { AboutComponent }      from './about/about.component';

@NgModule({
  imports:      [
    PagesSharedModule,
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
