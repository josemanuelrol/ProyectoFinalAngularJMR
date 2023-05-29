import { Component, OnInit } from '@angular/core';
import { ApiEj3Service } from './../../servicios/api-ej3.service';


@Component({
  selector: 'app-ejercicio2',
  templateUrl: './ejercicio2.component.html',
  styleUrls: ['./ejercicio2.component.css']
})
export class Ejercicio2Component {
  entradas: any[] = [];

  constructor(private apiEj3service: ApiEj3Service) { }

  ngOnInit() {
    this.recuperarTodos();
  }

  recuperarTodos() {
    this.apiEj3service.getPosts()
      .subscribe((response: any[]) => {
        this.entradas = response;
      });
  }
}
