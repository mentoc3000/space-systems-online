import { NgModule }             from '@angular/core';

import { PagesRoutingModule }   from './pages-routing.module';

// import { HeaderComponent }      from './shared/header/header.component';
import { FooterComponent }      from './shared/footer/footer.component';
import { PagesComponent }       from './pages.component';
import { HomeComponent }        from './home/home.component';
import { AboutComponent }       from './about/about.component';

@NgModule({
  imports: [
    PagesRoutingModule
  ],
  declarations: [
    // HeaderComponent,
    FooterComponent,
    PagesComponent,
    HomeComponent,
    AboutComponent
  ]
})
export class PagesModule { }
