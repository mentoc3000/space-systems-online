import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HomeComponent }      from './home/home.component';
import { AboutComponent }    from './about/about.component';
import { SimulatorComponent}  from './simulator/simulator.component';

import { AppRoutingModule }   from './app-routing.module';
import { SharedModule }       from './shared/shared.module';

@NgModule({
  imports:      [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SimulatorComponent
  ],
  providers:    [

  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {

}
