import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { SyllabusService } from '../syllabus';
import { Syllabus } from '../syllabus.model';

@Component({
  selector: 'app-syllabus-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './syllabus-list.html',
  styleUrl: './syllabus-list.scss',
})
export class SyllabusList implements OnInit {
  private service = inject(SyllabusService);
  private router = inject(Router);

  syllabuses: Syllabus[] = [];
  cargando = true;

 ngOnInit() {
  // Angular destruye y vuelve a crear este componente cada vez que se
  // reentra a la ruta '/syllabus', así que basta con cargar aquí.
  this.cargarLista();
}

  cargarLista() {
    this.cargando = true;
    this.service.getAll().subscribe({
      next: (data) => {
        this.syllabuses = data;
        this.cargando = false;
      },
      error: (err) => {
        console.error('Error al cargar syllabus', err);
        this.cargando = false;
      },
    });
  }

  editar(id?: number) {
    if (id) this.router.navigate(['/syllabus', id, 'editar']);
  }

  eliminar(id?: number) {
    if (!id) return;
    const confirmado = confirm('¿Seguro que deseas eliminar este syllabus?');
    if (!confirmado) return;

    this.service.delete(id).subscribe({
      next: () => this.cargarLista(),
      error: (err) => console.error('Error al eliminar', err),
    });
  }
}
