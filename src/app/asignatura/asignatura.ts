import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Asignatura } from './asignatura.model';

const API_URL = 'http://127.0.0.1:8080/api/asignaturas';

@Injectable({ providedIn: 'root' })
export class AsignaturaService {
  private http = inject(HttpClient);

  getAll(): Observable<Asignatura[]> {
    return this.http.get<Asignatura[]>(API_URL);
  }

  getById(id: number): Observable<Asignatura> {
    return this.http.get<Asignatura>(`${API_URL}/${id}`);
  }

  create(asignatura: Asignatura): Observable<Asignatura> {
    return this.http.post<Asignatura>(API_URL, asignatura);
  }

  update(id: number, asignatura: Asignatura): Observable<Asignatura> {
    return this.http.put<Asignatura>(`${API_URL}/${id}`, asignatura);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${API_URL}/${id}`);
  }
}