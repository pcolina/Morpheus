import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page404Component } from './page404/page404/page404.component';
import { SharedModule } from './shared/shared.module';
import { PagesComponent } from './pages/pages.component';
import { AuthRoutingModule } from './auth/auth.routing';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    Page404Component,
    PagesComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AuthRoutingModule,
    SharedModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
