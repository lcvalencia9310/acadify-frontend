import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResultadoAprendizaje } from './resultado-aprendizaje.model';

const API_URL = 'https://acadify-backend-yc9p.onrender.com/api/resultados-aprendizaje';

@Injectable({ providedIn: 'root' })
export class ResultadoAprendizajeService {
  private http = inject(HttpClient);

  getAll(): Observable<ResultadoAprendizaje[]> {
    return this.http.get<ResultadoAprendizaje[]>(API_URL);
  }

  getById(id: number): Observable<ResultadoAprendizaje> {
    return this.http.get<ResultadoAprendizaje>(`${API_URL}/${id}`);
  }

  create(resultado: ResultadoAprendizaje): Observable<ResultadoAprendizaje> {
    return this.http.post<ResultadoAprendizaje>(API_URL, resultado);
  }

  update(id: number, resultado: ResultadoAprendizaje): Observable<ResultadoAprendizaje> {
    return this.http.put<ResultadoAprendizaje>(`${API_URL}/${id}`, resultado);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${API_URL}/${id}`);
  }
}