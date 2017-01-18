import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule }   from './app-routing.module';
// import { SimulatorRoutingModule } from './simulator/simulator-routing.module';
import { SharedModule }       from './shared/shared.module';

import { AppComponent }  from './app.component';
import { HomeComponent }      from './home/home.component';
import { AboutComponent }    from './about/about.component';

@NgModule({
  imports:      [
    BrowserModule,
    AppRoutingModule,
    // SimulatorRoutingModule,
    SharedModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  providers:    [

  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {

}
