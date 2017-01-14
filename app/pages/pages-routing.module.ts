import { NgModule }       from '@angular/core';
import { Routes,
         RouterModule }   from '@angular/router';

import { PagesComponent } from './pages.component';
import { HomeComponent }  from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [

  { path: '',
    component: PagesComponent,
    children: [
      { path: 'home',     component: HomeComponent },
      { path: 'about',    component: AboutComponent }
    ]
  }
  /*
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
  */
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
