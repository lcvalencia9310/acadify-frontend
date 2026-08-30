import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Syllabus } from './syllabus.model';

// URL base de la API del backend (Spring Boot)
const API_URL = 'https://acadify-backend-yc9p.onrender.com/api/syllabus';

// Encabezados para evitar que el navegador cachee las respuestas GET
const SIN_CACHE = new HttpHeaders({
  'Cache-Control': 'no-cache, no-store, must-revalidate',
  'Pragma': 'no-cache',
});

@Injectable({ providedIn: 'root' })
export class SyllabusService {
  private http = inject(HttpClient);

  // GET /api/syllabus -> lista todos los syllabus
  getAll(): Observable<Syllabus[]> {
    return this.http.get<Syllabus[]>(API_URL);
  }

  // GET /api/syllabus/{id} -> consulta uno por id
  getById(id: number): Observable<Syllabus> {
    return this.http.get<Syllabus>(`${API_URL}/${id}`);
  }

  // POST /api/syllabus -> crea uno nuevo
  create(syllabus: Syllabus): Observable<Syllabus> {
    return this.http.post<Syllabus>(API_URL, syllabus);
  }

  // PUT /api/syllabus/{id} -> actualiza uno existente
  update(id: number, syllabus: Syllabus): Observable<Syllabus> {
    return this.http.put<Syllabus>(`${API_URL}/${id}`, syllabus);
  }

  // DELETE /api/syllabus/{id} -> elimina uno
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${API_URL}/${id}`);
  }
}
