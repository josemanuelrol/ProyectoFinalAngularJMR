import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { Ejercicio1Component } from './component/ejercicio1/ejercicio1.component';
import { Ejercicio2Component } from './component/ejercicio2/ejercicio2.component';
import { Ejercicio3Component } from './component/ejercicio3/ejercicio3.component';
import { Ejercicio4Component } from './component/ejercicio4/ejercicio4.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "ejercicio1", component: Ejercicio1Component},
  {path: "ejercicio2", component: Ejercicio2Component},
  {path: "ejercicio3", component: Ejercicio3Component},
  {path: "ejercicio4", component: Ejercicio4Component},
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "**", redirectTo: "/home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
