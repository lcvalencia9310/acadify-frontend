import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ProgramaService } from '../programa';
import {Programa} from '../programa.model';

@Component({
  selector: 'app-programa-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './programa-list.html',
  styleUrl: './programa-list.scss',
})
export class ProgramaList implements OnInit {
  private service = inject(ProgramaService);
  private router = inject(Router);

  programas: Programa[] = [];
  cargando = true;

  ngOnInit() {
    // Angular destruye y vuelve a crear este componente cada vez que se
    // reentra a la ruta '/programa' (al volver de crear/editar/eliminar),
    // así que basta con cargar aquí: no hace falta escuchar router.events
    // (esa suscripción llegaba tarde y se perdía el NavigationEnd inicial,
    // dejando la lista colgada en "Cargando...").
    this.cargarLista();
  }

  cargarLista() { 
    this.cargando = true;
    this.service.getAll().subscribe({
      next: (data) => {
        this.programas = data;
        this.cargando = false;
      },
      error: (err) => {
        console.error('Error al cargar la lista de programas:', err);
        this.cargando = false;
      },
    });
  }

  editar(id?: number) {
    if (id) this.router.navigate(['/programa', id, 'editar']);
  }

  eliminar(id?: number) {
    if (!id) return;
    const confirmado = confirm('¿Seguro que deseas eliminar este programa?');
    if (!confirmado) return;

    this.service.delete(id).subscribe({
      next: () => this.cargarLista(),
      error: (err) => console.error('Error al eliminar', err),
    });
  }
}
