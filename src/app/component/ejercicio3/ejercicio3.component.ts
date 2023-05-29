import { Component, OnInit } from '@angular/core';
import { ApiEj4Service } from 'src/app/servicios/api-ej4.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ejercicio3',
  templateUrl: './ejercicio3.component.html',
  styleUrls: ['./ejercicio3.component.css']
})
export class Ejercicio3Component implements OnInit{
  empleados: any[] = [];

  constructor(private ApiEj4service: ApiEj4Service, private router: Router) { }

  ngOnInit(): void {
    this.recuperarTodos();
  }

  recuperarTodos(): void {
    this.ApiEj4service.recuperarTodos()
      .subscribe((response: any) => {
        this.empleados = response;
      });
  }

  mostrarDetalle(id: number): void {
    this.router.navigate(['detalle', id]);
  }
}
