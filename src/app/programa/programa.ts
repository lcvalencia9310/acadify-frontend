import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Programa } from './programa.model';

// Usamos 127.0.0.1 en vez de localhost para evitar el retraso de resolución
// de DNS/IPv6 que detectamos en el módulo Syllabus
const API_URL = 'https://acadify-backend-yc9p.onrender.com/api/programas';

const SIN_CACHE = new HttpHeaders({
  'Cache-Control': 'no-cache, no-store, must-revalidate',
  'Pragma': 'no-cache',
});

@Injectable({ providedIn: 'root' })
export class ProgramaService {
  private http = inject(HttpClient);

  getAll(): Observable<Programa[]> {
    return this.http.get<Programa[]>(API_URL);
  }

  getById(id: number): Observable<Programa> {
    return this.http.get<Programa>(`${API_URL}/${id}`);
  }

  create(programa: Programa): Observable<Programa> {
    return this.http.post<Programa>(API_URL, programa);
  }

  update(id: number, programa: Programa): Observable<Programa> {
    return this.http.put<Programa>(`${API_URL}/${id}`, programa);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${API_URL}/${id}`);
  }
}