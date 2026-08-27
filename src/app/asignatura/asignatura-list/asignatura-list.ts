import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AsignaturaService } from '../asignatura';
import { Asignatura } from '../asignatura.model';

@Component({
  selector: 'app-asignatura-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './asignatura-list.html',
  styleUrl: './asignatura-list.scss',
})
export class AsignaturaList implements OnInit {
  private service = inject(AsignaturaService);
  private router = inject(Router);

  asignaturas: Asignatura[] = [];
  cargando = true;

  ngOnInit() {
    // Angular destruye y vuelve a crear este componente cada vez que se
    // reentra a la ruta '/asignatura', así que basta con cargar aquí.
    this.cargarLista();
  }

  cargarLista() {
    this.cargando = true;
    this.service.getAll().subscribe({
      next: (data) => {
        this.asignaturas = data;
        this.cargando = false;
      },
      error: (err) => {
        console.error('Error al cargar asignaturas', err);
        this.cargando = false;
      },
    });
  }

  editar(id?: number) {
    if (id) this.router.navigate(['/asignatura', id, 'editar']);
  }

  eliminar(id?: number) {
    if (!id) return;
    const confirmado = confirm('¿Seguro que deseas eliminar esta asignatura?');
    if (!confirmado) return;

    this.service.delete(id).subscribe({
      next: () => this.cargarLista(),
      error: (err) => console.error('Error al eliminar', err),
    });
  }
}
