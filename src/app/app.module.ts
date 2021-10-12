import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { Page404Component } from './page404/page404/page404.component'; 
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    Page404Component,  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
