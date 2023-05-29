import { Component, OnInit } from '@angular/core';
import { ApiEj4Service } from '../../servicios/api-ej4.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit{
  detalle: any;
  nro: number = 0;

  constructor(private ApiEj4service: ApiEj4Service, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros: ParamMap) => {
      this.nro = parseInt(parametros.get("id")!);
    });
    this.recuperarUno(this.nro);
  }

  recuperarUno(id: number): void {
    this.ApiEj4service.recuperarUno(id)
      .subscribe((response: any) => {
        this.detalle = response;
      });
  }
}
