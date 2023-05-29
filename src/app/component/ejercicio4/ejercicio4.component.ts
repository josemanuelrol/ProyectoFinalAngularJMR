import { Component, OnInit } from '@angular/core';
import { ApiEJ5serviceService } from 'src/app/servicios/api-ej5service.service';


@Component({
  selector: 'app-ejercicio4',
  templateUrl: './ejercicio4.component.html',
  styleUrls: ['./ejercicio4.component.css']
})
export class Ejercicio4Component implements OnInit {
  frutas: any[] = [];
  fruta: any = { id: 0, descripcion: '', precio: 0 };

  constructor(private apiEJ5service: ApiEJ5serviceService) { }

  ngOnInit(): void {
    this.recuperarFrutas();
  }

  recuperarFrutas(): void {
    this.apiEJ5service.recuperarFrutas().subscribe((response: any) => {
      this.frutas = response;
    });
  }

  insertar(): void {
    this.apiEJ5service.insertar(this.fruta).subscribe(() => {
      this.recuperarFrutas();
      alert("Registro Añadido")
    });
  }

  borrar(id: number): void {
    this.apiEJ5service.borrar(id).subscribe(() => {
      this.recuperarFrutas();
      alert("Registro eliminado")
    });
  }

  modificar(id: number): void {
    this.apiEJ5service.modificar(id, this.fruta).subscribe(() => {
      this.recuperarFrutas();
      alert("Registro Modificado")
    });
    this.fruta.descripcion = "";
    this.fruta.id = 0;
    this.fruta.precio = 0;
  }

  seleccionar(f: { id: number; descripcion: string; precio: number; }): void {
    this.fruta = { ...f };
  }
}
