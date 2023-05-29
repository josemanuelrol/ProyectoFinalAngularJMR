import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { Ejercicio1Component } from './component/ejercicio1/ejercicio1.component';
import { Ejercicio2Component } from './component/ejercicio2/ejercicio2.component';
import { Ejercicio3Component } from './component/ejercicio3/ejercicio3.component';
import { Ejercicio4Component } from './component/ejercicio4/ejercicio4.component';
import { HeaderComponent } from './header/header.component';
import { DetalleComponent } from './component/detalle/detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Ejercicio1Component,
    Ejercicio2Component,
    Ejercicio3Component,
    Ejercicio4Component,
    HeaderComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
