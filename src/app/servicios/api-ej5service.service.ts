import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiEJ5serviceService {
  private apiUrl = 'http://localhost:3000/frutas';

  constructor(private http: HttpClient) { }

  recuperarFrutas(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  insertar(fruta: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, fruta);
  }

  borrar(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url);
  }

  modificar(id: number, fruta: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.patch<any>(url, fruta);
  }
}
