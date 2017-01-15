import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { HomeComponent }        from './home/home.component';
import { AboutComponent }       from './about/about.component';
import { SimulatorComponent }   from './simulator/simulator.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'simulator',
    component: SimulatorComponent
  },
]


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
