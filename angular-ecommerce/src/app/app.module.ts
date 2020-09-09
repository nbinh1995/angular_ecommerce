import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { BannerComponent } from './layouts/banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
