import { NgModule } from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { Ejercicio1Component } from './component/ejercicio1/ejercicio1.component';
import { Ejercicio2Component } from './component/ejercicio2/ejercicio2.component';
import { Ejercicio3Component } from './component/ejercicio3/ejercicio3.component';
import { Ejercicio4Component } from './component/ejercicio4/ejercicio4.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Ejercicio1Component,
    Ejercicio2Component,
    Ejercicio3Component,
    Ejercicio4Component,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
