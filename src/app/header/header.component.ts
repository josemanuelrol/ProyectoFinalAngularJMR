import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  dato: string = "";
  datoImage: string = "";

  constructor(public router: Router) {
    let currentUrl = this.router.url;
    this.router.navigate([currentUrl]);
  }

  ngOnInit(): void {
    this.dato = localStorage.getItem('usuario') ?? 'Entrar';
    this.datoImage = localStorage.getItem('usuarioImage') ?? '/assets/sinfoto.jpg';
  }

  iniciar() {
    localStorage.removeItem('usuario');
    localStorage.removeItem('usuarioImage');

  }
}
