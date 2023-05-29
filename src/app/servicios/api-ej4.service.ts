import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiEj4Service {
  private apiUrl = 'http://localhost:3000/empleados';

  constructor(private http: HttpClient) { }

  recuperarTodos(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  recuperarUno(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }
}
